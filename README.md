# AthenaMind

A modern Next.js application built with Bun, featuring AI integration via OpenRouter API.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **Runtime:** [Bun 1.3+](https://bun.sh)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **Linting:** [Biome](https://biomejs.dev)
- **AI Integration:** [OpenRouter](https://openrouter.ai) via OpenAI SDK
- **Containerization:** Docker & Docker Compose

## Prerequisites

- [Bun](https://bun.sh) 1.3 or higher
- [Docker](https://www.docker.com) (optional, for containerized development)
- OpenRouter API key (get one at [openrouter.ai](https://openrouter.ai))

## Getting Started

### 1. Install Dependencies

```bash
bun install
```

### 2. Environment Setup

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` and add your OpenRouter API key:

```env
OPENROUTER_API_KEY=your_actual_api_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3001
```

### 3. Run Development Server

```bash
bun dev
```

Open [http://localhost:3001](http://localhost:3001) to view the application.

## Docker Development

### Run Development Container

```bash
docker compose up dev
```

This will:
- Install dependencies automatically
- Mount your local code for hot-reload
- Run the development server on port 3001

### Build and Run Production Container

```bash
docker compose up app
```

Or build manually:

```bash
docker compose build app
docker compose up app
```

## Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run Biome linter
- `bun lint:fix` - Fix linting issues automatically
- `bun format` - Format code with Biome

## OpenRouter API Integration

The project includes a pre-configured OpenRouter client in `lib/openrouter.ts`. Example usage:

```typescript
import { chat } from "@/lib/openrouter";

const response = await chat("Hello, how are you?");
console.log(response);
```

You can use any model available on OpenRouter. See the [OpenRouter documentation](https://openrouter.ai/docs) for available models.

## Project Structure

```
.
├── app/              # Next.js app directory (pages, layouts, etc.)
├── lib/              # Utility functions and API clients
├── public/           # Static assets
├── biome.json        # Biome linter configuration
├── next.config.ts    # Next.js configuration
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json     # TypeScript configuration
├── Dockerfile        # Docker production build
└── docker-compose.yml # Docker Compose configuration
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Bun Documentation](https://bun.sh/docs)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Biome Documentation](https://biomejs.dev)
- [OpenRouter API Documentation](https://openrouter.ai/docs)

## License

MIT

