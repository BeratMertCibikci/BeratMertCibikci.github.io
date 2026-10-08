# beratmertcibikci.github.io

My personal portfolio: [beratmertcibikci.github.io](https://beratmertcibikci.github.io) (English) · [/fr/](https://beratmertcibikci.github.io/fr/) (français).

One page, built with [Astro](https://astro.build). The hero background is a live boids swarm: each agent follows three local rules (alignment, cohesion, separation) and the group behaves as one.

## Run locally

```bash
npm install
npm run dev     # http://localhost:4321
```

## Edit content

- `src/i18n.ts`: interface text (EN/FR), links, education, skills
- `src/data/projects.ts`: projects and their numbers
- `src/components/Swarm.astro`: the swarm animation

Every push to `main` is built and deployed by `.github/workflows/deploy.yml`.
