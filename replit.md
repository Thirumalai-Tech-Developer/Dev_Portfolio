# AI/ML Portfolio - Thirumalai G

## Overview

This is a modern, animated portfolio website for an AI/ML developer built with React, TypeScript, and Express. The application showcases projects, skills, experience, and provides a contact form. It features a clean, minimalist design inspired by Linear, Vercel, and Apple's aesthetics, with smooth animations powered by Framer Motion.

The tech stack includes:
- **Frontend**: React 18 with TypeScript, Vite for build tooling
- **UI Framework**: shadcn/ui components with Radix UI primitives and Tailwind CSS
- **Backend**: Express.js server
- **Database**: PostgreSQL via Drizzle ORM with Neon serverless driver
- **State Management**: TanStack Query (React Query)
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Component System**: The application uses shadcn/ui's "new-york" style variant, a comprehensive component library built on Radix UI primitives. Components are located in `client/src/components/ui/` and follow a composition pattern for maximum flexibility.

**Styling Strategy**: Tailwind CSS with CSS variables for theming. The design system supports both light and dark modes through CSS custom properties defined in `client/src/index.css`. Custom color tokens (primary, secondary, muted, accent, destructive) are defined using HSL values for consistent theming.

**Routing**: Client-side routing implemented with Wouter, a minimal router alternative to React Router. Routes are defined in `client/src/App.tsx`.

**State Management**: TanStack Query handles server state, caching, and data fetching. Configuration in `client/src/lib/queryClient.ts` disables automatic refetching and sets infinite stale time for optimal performance.

**Form Handling**: React Hook Form integrated with Zod schema validation ensures type-safe forms. Form components leverage shadcn/ui's form primitives for consistent UX.

**Build System**: Vite provides fast development server with HMR and optimized production builds. Custom path aliases (`@/`, `@shared/`, `@assets/`) simplify imports.

### Backend Architecture

**Server Framework**: Express.js server with TypeScript, structured for API routes and static file serving.

**API Design**: RESTful endpoints defined in `server/routes.ts`:
- `POST /api/contact` - Submit contact form messages
- `GET /api/contact` - Retrieve all contact messages (admin endpoint)

**Middleware Chain**:
1. JSON body parsing with raw body preservation for webhook verification
2. URL-encoded form data parsing
3. Request/response logging middleware for API routes
4. Vite dev server integration (development) or static file serving (production)

**Development/Production Split**: 
- Development: Vite middleware serves the React app with HMR
- Production: Pre-built static files served from `dist/public`

### Data Storage

**ORM**: Drizzle ORM provides type-safe database operations with schema-first design.

**Schema Definition** (`shared/schema.ts`):
- `users` table: Basic user authentication structure (id, username, password)
- `contact_messages` table: Stores contact form submissions (id, name, email, message, createdAt)

**Database Configuration**: PostgreSQL connection via `@neondatabase/serverless` driver, configured in `drizzle.config.ts` using `DATABASE_URL` environment variable.

**Storage Layer Abstraction** (`server/storage.ts`): 
- `IStorage` interface defines CRUD operations
- `MemStorage` class provides in-memory implementation for development/testing
- Design allows easy swap to database implementation by creating a new class implementing `IStorage`

**Schema Validation**: Zod schemas generated from Drizzle tables using `drizzle-zod`, ensuring runtime validation matches database schema.

### External Dependencies

**UI Component Library**: 
- Radix UI primitives (20+ components): Accessible, unstyled components for dialogs, dropdowns, tooltips, etc.
- shadcn/ui configuration for styled component variants

**Database Services**:
- Neon Serverless PostgreSQL driver for edge-compatible database connections
- Drizzle Kit for schema migrations

**Animation & Interaction**:
- Framer Motion for declarative animations and gesture handling
- Embla Carousel for touch-friendly carousels
- cmdk for command palette patterns

**Form & Validation**:
- React Hook Form for performant form state management
- Zod for schema validation and TypeScript type inference

**Utility Libraries**:
- date-fns for date manipulation
- clsx + tailwind-merge (via `cn` utility) for conditional className composition
- class-variance-authority for component variant management

**Development Tools**:
- Replit-specific plugins for runtime error overlay, cartographer navigation, and dev banner
- tsx for TypeScript execution in Node.js
- esbuild for fast production builds

**Icons**:
- Lucide React for general-purpose icons
- React Icons (specifically `@icons/si` for brand icons like Hugging Face)

**Session Management**: 
- connect-pg-simple for PostgreSQL-backed Express sessions (dependency present but not actively configured)