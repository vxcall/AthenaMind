# AthenaMind - System Architecture

## Overview

AthenaMind is a modern web application built with Next.js 16 and designed for AI-powered functionality. The application uses a containerized architecture with separate services for the web application, database, and development environment.

## High-Level Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│                 │    │                  │    │                 │
│   Frontend      │    │   Backend API    │    │   External APIs │
│   (Next.js)     │◄──►│   (Next.js)      │◄──►│   (OpenRouter)  │
│                 │    │                  │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                │
                                ▼
                       ┌─────────────────┐
                       │                 │
                       │   PostgreSQL    │
                       │   Database      │
                       │                 │
                       └─────────────────┘
```

## Technology Stack

### Frontend
- **Framework**: Next.js 16 with App Router
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Runtime**: Bun (JavaScript runtime and package manager)

### Backend
- **Framework**: Next.js API Routes (serverless functions)
- **Database ORM**: Prisma Client
- **Language**: TypeScript
- **Runtime**: Bun

### Database
- **Primary Database**: PostgreSQL 16
- **Extensions**: UUID generation (`uuid-ossp`)

### AI Integration
- **Provider**: OpenRouter API
- **SDK**: OpenAI SDK (compatible with OpenRouter)
- **Models**: Configurable (default: `openai/gpt-3.5-turbo`)

### Development & Operations
- **Linting/Formatting**: Biome
- **Containerization**: Docker & Docker Compose
- **Package Manager**: Bun

## Application Structure

### Directory Layout
```
/
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page component
│   ├── globals.css        # Global styles
│   └── favicon.ico        # App favicon
├── lib/                   # Utility functions and API clients
│   └── openrouter.ts      # OpenRouter API client configuration
├── public/                # Static assets
├── docs/                  # Architecture and documentation
├── docker-compose.yml     # Container orchestration
├── Dockerfile            # Production container build
├── init.sql              # Database initialization script
└── [config files]        # Various configuration files
```

### Frontend Architecture

**Pages & Routing**
- Uses Next.js App Router (file-system based routing)
- Currently has a single home page (`app/page.tsx`)
- Root layout provides global HTML structure and metadata

**Styling**
- Tailwind CSS v4 for utility-first styling
- Dark/light theme support implemented
- Responsive design with mobile-first approach

**Components**
- Currently minimal component structure
- Uses Next.js built-in `Image` component for optimized images

### Backend Architecture

**API Layer**
- Next.js API Routes for serverless backend functionality
- RESTful API design (to be implemented)
- Built-in request/response handling

**Data Layer**
- Prisma ORM for type-safe database operations
- PostgreSQL as primary data store
- Database migrations managed through Prisma

**AI Integration Layer**
- OpenRouter client configured in `lib/openrouter.ts`
- Supports multiple AI models via OpenRouter platform
- Authentication via API key
- Request headers configured for proper attribution

## Database Design

### Current State
- PostgreSQL 16 with UUID extension enabled
- No tables currently defined (placeholder structure in `init.sql`)

### Planned Schema
*To be defined based on application requirements*

Example structure from init.sql:
```sql
-- Users table (example)
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Deployment Architecture

### Container Services

**Production Service (`app`)**
- Built from multi-stage Dockerfile
- Bun runtime with Next.js standalone output
- Runs on port 3001
- Optimized for production with minimal image size

**Development Service (`dev`)**
- Hot-reload development environment
- Volume mounts for live code updates
- Automatic dependency installation
- Runs on port 3001

**Database Service (`postgres`)**
- PostgreSQL 16 Alpine image
- Persistent data volume
- Initialization script support
- Runs on port 5432

### Environment Configuration
- Environment variables for API keys and database connections
- Separate configurations for development and production
- Docker secrets support for sensitive data

### Networking
- Custom Docker network (`athenamind-network`)
- Service-to-service communication via Docker DNS
- Port exposure for external access

## Development Workflow

### Local Development
1. Clone repository
2. Copy `.env.example` to `.env` and configure
3. Run `bun install` to install dependencies
4. Start development server with `bun dev` or `docker compose up dev`

### Container Development
```bash
# Start development environment
docker compose up dev

# Start production build
docker compose up app

# Database only
docker compose up postgres
```

### Code Quality
- Biome for linting and formatting
- TypeScript for type safety
- Automated code formatting on save

## Security Considerations

### API Security
- Environment variable-based API key management
- Request headers for API attribution
- HTTPS enforcement in production

### Database Security
- Password-protected PostgreSQL instance
- Network isolation through Docker containers
- Connection string security via environment variables

### Application Security
- Next.js built-in security features
- CSRF protection (built-in)
- Content Security Policy (to be configured)

## Performance Considerations

### Frontend Performance
- Next.js App Router for optimal loading
- Static asset optimization
- Image optimization via Next.js Image component
- Tailwind CSS purging for smaller bundle sizes

### Backend Performance
- Bun runtime for faster JavaScript execution
- Next.js standalone output for minimal container size
- PostgreSQL with proper indexing

### Caching Strategy
- Next.js built-in caching mechanisms
- Static generation where applicable
- API response caching (to be implemented)

## Monitoring & Observability

### Current State
- Basic application logging
- Docker container health checks (to be added)

### Planned Implementation
- Application performance monitoring
- Database query monitoring
- Error tracking and reporting
- Health check endpoints

## Future Architecture Considerations

### Scalability
- Horizontal scaling via container orchestration
- Database read replicas for high-traffic scenarios
- CDN integration for static assets

### Microservices Migration
- Potential separation of AI processing into dedicated service
- User management service extraction
- API gateway implementation

### AI/ML Pipeline
- Model management and versioning
- Request/response logging for AI interactions
- Usage analytics and cost optimization

## Configuration Files

### Key Configuration Files
- `next.config.ts`: Next.js framework configuration
- `package.json`: Dependencies and scripts
- `tsconfig.json`: TypeScript compiler options
- `biome.json`: Code quality and formatting rules
- `docker-compose.yml`: Container orchestration
- `Dockerfile`: Production container build instructions

## Environment Variables

### Required Variables
```env
OPENROUTER_API_KEY=your_openrouter_api_key
NEXT_PUBLIC_APP_URL=http://localhost:3001
POSTGRES_DB=athenamind
POSTGRES_USER=postgres
POSTGRES_PASSWORD=your_secure_password
DATABASE_URL=postgresql://postgres:password@postgres:5432/athenamind
```

## Getting Started

### Prerequisites
- Bun 1.3+
- Docker & Docker Compose
- OpenRouter API key

### Quick Start
```bash
# Clone and setup
git clone <repository>
cd athenamind
cp .env.example .env
# Edit .env with your API keys

# Development with Docker
docker compose up dev

# Or local development
bun install
bun dev
```

Access the application at [http://localhost:3001](http://localhost:3001)

---

*This architecture document should be updated as the application evolves and new features are implemented.*