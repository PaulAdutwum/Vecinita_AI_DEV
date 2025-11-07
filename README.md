# Vecinita - AI Chatbot Platform

A modern, responsive landing page and dashboard for Vecinita, an AI chatbot platform built with Next.js and Tailwind CSS.

## 🏗️ Project Structure

```
AI_VECINITA/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Landing page
│   ├── login/
│   │   └── page.tsx             # Login/Signup page
│   └── dashboard/
│       └── page.tsx             # User dashboard
├── components/                   # Reusable components
│   ├── ui/                      # Basic UI components
│   │   ├── Button.tsx           # Custom button component
│   │   ├── Card.tsx             # Card component
│   │   └── IconButton.tsx       # Icon button component
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx           # Navigation header
│   │   └── Footer.tsx           # Site footer
│   ├── sections/                # Page sections
│   │   ├── HeroSection.tsx      # Hero/landing section
│   │   └── FeaturesSection.tsx  # Features showcase
│   └── pages/                   # Page-specific components
├── public/                      # Static assets
└── ...config files
```

## 🚀 Features

### Landing Page

- **Responsive Design** - Mobile-first approach
- **Dark Mode Toggle** - Working theme switcher
- **Font Size Adjustment** - Accessibility feature
- **Smooth Scrolling** - Navigation between sections
- **Interactive Elements** - Hover effects and animations
- **Professional Design** - Modern gradients and shadows

### Components

- **Modular Architecture** - Reusable UI components
- **TypeScript Support** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Responsive Design** - Mobile and desktop optimized

### Pages

- **Landing Page** (`/`) - Main marketing page
- **Login Page** (`/login`) - Authentication
- **Dashboard** (`/dashboard`) - User management interface

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Heroicons (SVG)
- **Fonts**: Inter (Google Fonts)

## 🎨 Design System

### Colors

- **Primary**: Blue (#3B82F6) to Purple (#8B5CF6) gradients
- **Secondary**: Yellow (#FCD34D) to Orange (#F97316) gradients
- **Neutral**: Gray scale for text and backgrounds
- **Accent**: Pink, Purple, Orange for feature icons

### Components

- **Buttons**: Multiple variants (primary, secondary, outline, gradient)
- **Cards**: Consistent shadow and border styling
- **Typography**: Clear hierarchy with proper spacing

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Getting Started

```bash
npm install
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Component Development

1. Create components in appropriate directories
2. Use TypeScript interfaces for props
3. Follow Tailwind CSS utility classes
4. Ensure responsive design
5. Add proper accessibility attributes

## 🎯 Future Enhancements

### Planned Features

- [ ] User authentication system
- [ ] Chatbot creation interface
- [ ] Analytics dashboard
- [ ] Settings management
- [ ] API integration
- [ ] Database connectivity
- [ ] Real-time chat functionality

### Component Roadmap

- [ ] Modal/Dialog components
- [ ] Form validation components
- [ ] Data table components
- [ ] Chart/Graph components
- [ ] Loading states
- [ ] Error boundaries

## 📝 Notes

- All components are designed to be reusable and maintainable
- The structure supports easy addition of new pages and features
- Dark mode and accessibility features are built-in
- The design system ensures consistency across all components

## 🤝 Contributing

1. Follow the established component structure
2. Use TypeScript for all new components
3. Maintain responsive design principles
4. Test on multiple screen sizes
5. Follow the existing naming conventions





