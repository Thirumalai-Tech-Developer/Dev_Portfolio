# Overview

This is a modern full-stack web application built with React on the frontend and Express on the backend. The project appears to be a personal portfolio website for Thirumalai G, a Java Tech Developer, showcasing their experience, education, projects, and skills in an elegant, responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite for fast development and optimized builds
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Module System**: ES Modules (type: "module")
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for fast bundling

### Data Storage Solutions
- **Database**: PostgreSQL (configured via Drizzle)
- **ORM**: Drizzle ORM for type-safe database operations
- **Development Storage**: In-memory storage implementation for development/testing
- **Connection**: Neon Database serverless connection (@neondatabase/serverless)

## Key Components

### Frontend Components
1. **Portfolio Sections**: Hero, About, Experience, Education, Projects, Skills, Contact
2. **Navigation**: Responsive navigation with smooth scrolling
3. **UI Library**: Complete shadcn/ui component set (buttons, cards, forms, dialogs, etc.)
4. **Responsive Design**: Mobile-first approach with breakpoint utilities

### Backend Components
1. **Route Registration**: Modular route system in `server/routes.ts`
2. **Storage Interface**: Abstracted storage layer with in-memory implementation
3. **Middleware**: Request logging, JSON parsing, error handling
4. **Development Integration**: Vite middleware for HMR in development

### Database Schema
- **Users Table**: Basic user model with id, username, and password fields
- **Type Safety**: Drizzle-zod integration for runtime validation
- **Migrations**: Drizzle Kit for database migrations

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle requests and interact with storage layer
3. **Data Persistence**: Drizzle ORM manages database operations
4. **Response Handling**: Type-safe data flows back to React components
5. **State Management**: TanStack Query handles caching and synchronization

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React ecosystem with TypeScript support
- **Styling**: Tailwind CSS with PostCSS processing
- **Icons**: Lucide React and React Icons libraries
- **Date Handling**: date-fns for date formatting
- **Forms**: React Hook Form with resolvers

### Backend Dependencies
- **Database**: PostgreSQL via Neon serverless connection
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution, nodemon-like functionality

### Build Tools
- **Bundling**: Vite for frontend, esbuild for backend
- **TypeScript**: Configured for modern ES modules
- **Development**: Replit-specific plugins for enhanced development experience

## Deployment Strategy

### Development
- **Concurrent Setup**: Frontend (Vite dev server) and backend (Express) run together
- **HMR Integration**: Vite middleware integrated into Express for seamless development
- **Replit Integration**: Custom plugins for Replit environment optimization

### Production Build
1. **Frontend Build**: Vite bundles React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Static Serving**: Express serves built frontend assets
4. **Environment**: NODE_ENV-based configuration switching

### Database Management
- **Migrations**: `drizzle-kit push` for schema updates
- **Environment**: DATABASE_URL environment variable for connection
- **Connection Pooling**: Neon serverless handles connection management automatically

The application follows modern full-stack best practices with type safety throughout the stack, responsive design principles, and efficient development workflows optimized for the Replit environment.