# disdikal-app

SvelteKit application running on Bun.

## Stack

| Layer      | Choice                                                          |
| ---------- | --------------------------------------------------------------- |
| Runtime    | Bun                                                             |
| Framework  | SvelteKit 2 / Svelte 5 (runes mode enforced)                    |
| Styling    | Tailwind CSS v4 via `@tailwindcss/vite`                         |
| Components | shadcn-svelte (Vega style, zinc) on Bits UI 2, Lucide icons     |
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

## Configuration

There is deliberately no `svelte.config.js`. SvelteKit 2.70 reads its config
from the options passed to the `sveltekit()` plugin in `vite.config.ts` and only
falls back to `svelte.config.js` when the Vite config carries none. Adapter,
`compilerOptions`, and the `typescript` hook all live in `vite.config.ts`.

If you add a `svelte.config.js` anyway it will be ignored, because the Vite
config wins whenever it supplies configuration. Move the settings into
`vite.config.ts` instead.

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
    components/ui/  shadcn-svelte components (vendored, yours to edit)
    schemas/        Zod schemas shared by client and server
    server/db/      Drizzle client and table definitions
    utils.ts        cn() helper plus shadcn prop-type utilities
  routes/
    +page.svelte    Landing page
    layout.css      Tailwind entry point and shadcn theme variables
    tasks/          Worked example: load + form action, Zod validated
```

`src/routes/tasks` is a reference implementation wiring the whole stack
together — a Drizzle query in `load`, a Zod-validated form action, and shadcn
`Card`/`Input`/`Select`/`Button` in the markup. Delete it once real routes exist.

## Components

Config lives in `components.json`. Add more with:

```sh
bunx shadcn-svelte add <component>     # e.g. dropdown-menu, table, sonner
```

Installed already: accordion, badge, button, card, dialog, input, label, select,
separator.

Components land in `src/lib/components/ui` and are meant to be edited directly.
Because the CLI regenerates them, project-wide lint rules that do not fit
vendored code are disabled for that directory in `eslint.config.js` rather than
patched into the components.

Theme variables (including the `.dark` block) are at the top of
`src/routes/layout.css`. Note the stylesheet lives there, not at the more usual
`src/app.css`, because that is this project's Tailwind entry point.

## Deployment

`@sveltejs/adapter-auto` is installed, which detects supported hosts at build
time. For self-hosting or an unsupported platform, swap it for a specific
[adapter](https://svelte.dev/docs/kit/adapters).
