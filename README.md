# disdikal-app

SvelteKit application running on Bun.

## Stack

| Layer      | Choice                                                          |
| ---------- | --------------------------------------------------------------- |
| Runtime    | Bun                                                             |
| Framework  | SvelteKit 2 / Svelte 5 (runes mode enforced)                    |
| Styling    | Tailwind CSS v4 via `@tailwindcss/vite`                         |
| Components | Bits UI 2 (headless)                                            |
| Database   | Postgres (Docker) with Drizzle ORM and the `postgres.js` driver |
| Validation | Zod 4                                                           |
| Tooling    | Prettier, ESLint, `svelte-check`                                |

## Getting started

```sh
bun install
bun run db:start     # start the Postgres container
bun run db:push      # apply the Drizzle schema
bun run dev
```

The app expects `DATABASE_URL` in `.env`; `.env.example` holds the defaults that
match `compose.yaml`.

## Scripts

| Command               | Purpose                            |
| --------------------- | ---------------------------------- |
| `bun run dev`         | Dev server                         |
| `bun run build`       | Production build                   |
| `bun run preview`     | Preview the production build       |
| `bun run check`       | Type-check with `svelte-check`     |
| `bun run lint`        | Prettier check plus ESLint         |
| `bun run format`      | Format with Prettier               |
| `bun run db:start`    | Start Postgres in Docker           |
| `bun run db:stop`     | Stop the container                 |
| `bun run db:push`     | Push the schema straight to the DB |
| `bun run db:generate` | Generate a SQL migration           |
| `bun run db:migrate`  | Apply pending migrations           |
| `bun run db:studio`   | Open Drizzle Studio                |

`db:push` prompts for confirmation and needs a TTY. In a non-interactive shell
run `bunx drizzle-kit push --force` instead.

## Layout

```
src/
  lib/
    schemas/        Zod schemas shared by client and server
    server/db/      Drizzle client and table definitions
    utils.ts        cn() class-merging helper
  routes/
    +page.svelte    Landing page
    layout.css      Tailwind entry point
    tasks/          Worked example: load + form action, Zod validated
```

`src/routes/tasks` is a reference implementation wiring the whole stack
together — a Drizzle query in `load`, a Zod-validated form action, and Bits UI
`Select`/`Label`/`Separator` in the markup. Delete it once real routes exist.

## Deployment

`@sveltejs/adapter-auto` is installed, which detects supported hosts at build
time. For self-hosting or an unsupported platform, swap it for a specific
[adapter](https://svelte.dev/docs/kit/adapters).
