# NestJS Fluentity Demo

This is a monorepo workspace managed by pnpm. 

The goal is to demo how you can use [Fluentity](https://github.com/cedricpierre/fluentity-core) with NestJS and reuse entities from NestJS

## Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

## Project Structure

```
.
├── apps/          # Application packages
└── pnpm-workspace.yaml
```

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Build all packages:
   ```bash
   pnpm build
   ```

3. Run development mode:
   ```bash
   pnpm dev
   ```

## Available Scripts

- `pnpm build` - Build all packages
- `pnpm dev` - Run development mode
- `pnpm lint` - Run linting
- `pnpm test` - Run tests
- `pnpm clean` - Clean build artifacts
