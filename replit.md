# Pathways Consulting - Elite College Admissions Platform

## Overview

This is a full-stack web application for Pathways Consulting, a premium college admissions consulting service. The platform showcases the company's services, consultant profiles, and provides a contact system for prospective clients. The application features a modern space-themed design with glass morphism effects and smooth animations.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Component Library**: Radix UI components with shadcn/ui styling system
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with React plugin

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL session store with connect-pg-simple
- **Development**: Hot reload with Vite middleware integration

### Design System
- **Theme**: Space/cosmic theme with dark blue color palette
- **UI Style**: Glass morphism effects with backdrop blur
- **Typography**: Inter font family
- **Color Scheme**: Dark theme with custom CSS variables
- **Animations**: CSS animations for floating elements and scrolling banners

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scroll navigation
2. **Hero**: Full-screen landing section with animated elements
3. **LogoBanner**: Animated scrolling banner of university logos
4. **About**: Company statistics and overview
5. **Consultants**: Profiles of Harvard, UC Berkeley, and UPenn consultants
6. **Services**: Four main service offerings (Essay Writing, School Selection, Profile Building, Interview Prep)
7. **Contact**: Form for consultation requests with validation
8. **Footer**: Links and company information

### Backend Components
1. **Routes**: Express route handlers (currently minimal setup)
2. **Storage**: Abstract storage interface with in-memory implementation
3. **Vite Integration**: Development server with HMR support

### Shared Components
1. **Schema**: Database schema definitions using Drizzle ORM
2. **Types**: Shared TypeScript types between frontend and backend

## Data Flow

### Current Implementation
- Frontend renders static content with interactive elements
- Contact form collects user data and shows success/error toasts
- No backend API endpoints implemented yet
- In-memory storage system ready for database operations

### Planned Data Flow
1. User submits consultation request via contact form
2. Frontend validates data using Zod schemas
3. API request sent to backend Express server
4. Backend validates and stores data using Drizzle ORM
5. Email notification sent to consultants
6. Success response returned to frontend

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle Kit**: Database migrations and schema management

### UI Libraries
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **TailwindCSS**: Utility-first CSS framework
- **Class Variance Authority**: Type-safe variant creation

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety and developer experience
- **ESBuild**: Fast JavaScript bundler for production

### External Services
- **Unsplash**: Stock photography for backgrounds and consultant images
- **Google Fonts**: Inter font family loading

## Deployment Strategy

### Build Process
1. Frontend built using Vite to static assets in `dist/public`
2. Backend compiled using ESBuild to `dist/index.js`
3. Database schema pushed using Drizzle Kit migrations

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string for Neon Database
- `NODE_ENV`: Environment mode (development/production)

### Production Setup
- Express server serves static frontend assets
- Database migrations applied automatically
- Environment-specific configuration via environment variables

## Changelog
- July 01, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.