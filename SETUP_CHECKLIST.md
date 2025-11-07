# 🚀 AI Vecinita - Setup Checklist

## ✅ Phase 1: Foundation (COMPLETE)

- [x] Next.js 14 app setup
- [x] TypeScript configuration
- [x] Tailwind CSS styling
- [x] Landing page
- [x] Login page
- [x] Dashboard with status tiles
- [x] Create bot modal
- [x] Bot list display
- [x] Beautiful UI components

**Status:** ✅ DONE! You're ready to add backend functionality.

---

## 🎯 Phase 2: Backend Setup (START HERE)

### Step 1: Create Folder Structure
```bash
# Create lib folders
mkdir -p lib/{db,ai,vector,storage,auth,utils}
mkdir -p types
mkdir -p prisma

# Create .env.example
touch .env.example .env.local
```

- [ ] Create `lib/` folder structure
- [ ] Create `types/` folder
- [ ] Create `prisma/` folder
- [ ] Create `.env.local` file

---

### Step 2: Database Setup (Supabase + Prisma)

#### 2.1 Create Supabase Account
- [ ] Go to https://supabase.com
- [ ] Sign up (free)
- [ ] Create new project: "ai-vecinita"
- [ ] Copy connection string from Settings → Database

#### 2.2 Install Prisma
```bash
npm install prisma @prisma/client
npx prisma init
```

- [ ] Install Prisma packages
- [ ] Run `npx prisma init`
- [ ] Update `DATABASE_URL` in `.env.local`

#### 2.3 Create Database Schema
Copy this to `prisma/schema.prisma`:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id            String   @id @default(cuid())
  email         String   @unique
  name          String?
  image         String?
  emailVerified DateTime?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  bots          Bot[]
  accounts      Account[]
  sessions      Session[]
}

model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.Text
  access_token      String? @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.Text
  session_state     String?
  user              User    @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model Bot {
  id          String   @id @default(cuid())
  name        String
  description String?
  status      String   @default("active")
  messages    Int      @default(0)
  isPublic    Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  lastActive  DateTime @default(now())
  userId      String
  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  chatLogs    ChatLog[]
  knowledge   BotKnowledge[]
}

model ChatLog {
  id        String   @id @default(cuid())
  botId     String
  bot       Bot      @relation(fields: [botId], references: [id], onDelete: Cascade)
  message   String   @db.Text
  response  String   @db.Text
  createdAt DateTime @default(now())
}

model BotKnowledge {
  id        String   @id @default(cuid())
  botId     String
  bot       Bot      @relation(fields: [botId], references: [id], onDelete: Cascade)
  content   String   @db.Text
  source    String?
  embedding Json?
  createdAt DateTime @default(now())
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
}
```

- [ ] Copy schema to `prisma/schema.prisma`
- [ ] Run `npx prisma generate`
- [ ] Run `npx prisma db push`

#### 2.4 Create Prisma Client
Create `lib/db/prisma.ts`:

```typescript
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
```

- [ ] Create `lib/db/prisma.ts`
- [ ] Test database connection

---

### Step 3: Authentication (NextAuth.js)

#### 3.1 Install NextAuth
```bash
npm install next-auth
```

- [ ] Install next-auth package

#### 3.2 Configure NextAuth
Create `app/api/auth/[...nextauth]/route.ts`:

```typescript
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/db/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
```

#### 3.3 Environment Variables
Add to `.env.local`:

```bash
# Database
DATABASE_URL="your-supabase-connection-string"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-secret"

# Email (Optional - use Resend or SendGrid)
EMAIL_SERVER_HOST="smtp.resend.com"
EMAIL_SERVER_PORT="587"
EMAIL_SERVER_USER="resend"
EMAIL_SERVER_PASSWORD="your-api-key"
EMAIL_FROM="noreply@vecinita.com"
```

- [ ] Add environment variables to `.env.local`
- [ ] Generate NEXTAUTH_SECRET: `openssl rand -base64 32`
- [ ] Set up Google OAuth (optional)
- [ ] Test authentication

---

### Step 4: Create API Routes

#### 4.1 Bot Management API
Create `app/api/bots/route.ts`:

```typescript
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { prisma } from '@/lib/db/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const bots = await prisma.bot.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(bots);
  } catch (error) {
    console.error('Error fetching bots:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const data = await request.json();

    const bot = await prisma.bot.create({
      data: {
        name: data.name,
        isPublic: data.isPublic || false,
        userId: user.id,
      },
    });

    return NextResponse.json(bot);
  } catch (error) {
    console.error('Error creating bot:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

- [ ] Create `app/api/bots/route.ts`
- [ ] Test GET endpoint
- [ ] Test POST endpoint

---

### Step 5: Connect Dashboard to Real Data

Update `app/dashboard/page.tsx` to fetch real bots:

```typescript
// Add at top
import { useSession } from "next-auth/react";
import { useEffect } from "react";

// Inside component
const { data: session } = useSession();

useEffect(() => {
  async function fetchBots() {
    const response = await fetch('/api/bots');
    const data = await response.json();
    setBots(data);
  }
  
  if (session) {
    fetchBots();
  }
}, [session]);

// Update handleCreateBot
const handleCreateBot = async (botName: string, isPublic: boolean) => {
  const response = await fetch('/api/bots', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: botName, isPublic }),
  });
  
  const newBot = await response.json();
  setBots([...bots, newBot]);
};
```

- [ ] Update dashboard to fetch real data
- [ ] Test creating bots
- [ ] Test viewing bots

---

## 🤖 Phase 3: AI Integration

### Step 1: OpenAI Setup

```bash
npm install openai
```

Add to `.env.local`:
```bash
OPENAI_API_KEY="sk-your-api-key"
```

- [ ] Get OpenAI API key from https://platform.openai.com
- [ ] Install OpenAI package
- [ ] Add API key to `.env.local`

### Step 2: Create Chat API
Create `app/api/chat/route.ts`:

```typescript
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { message, botId } = await request.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant for Rhode Island neighborhoods.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return NextResponse.json({
      response: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to get response' }, { status: 500 });
  }
}
```

- [ ] Create chat API endpoint
- [ ] Test with simple message
- [ ] Add chat interface to bot pages

---

## 🚀 Phase 4: Deployment

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Add backend functionality"
git push origin main
```

- [ ] Commit changes
- [ ] Push to GitHub

### Step 2: Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or use Vercel dashboard:
1. Go to https://vercel.com
2. Import your GitHub repo
3. Add environment variables
4. Deploy!

- [ ] Deploy to Vercel
- [ ] Add environment variables to Vercel
- [ ] Test production deployment

---

## 📊 Progress Tracker

**Current Phase:** Phase 1 ✅ COMPLETE

**Next Up:** Phase 2 - Backend Setup

**Estimated Time:**
- Phase 2: 2-3 hours
- Phase 3: 2-3 hours
- Phase 4: 30 minutes

**Total Time to Production:** ~6 hours

---

## 🆘 Need Help?

If you get stuck on any step:
1. Check the TECH_STACK_GUIDE.md for detailed explanations
2. Look at the error messages carefully
3. Ask me for help with the specific step!

**Let's build this! 🚀**

