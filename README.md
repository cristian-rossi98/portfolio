# Premium Portfolio (SPA)

React + TypeScript + Tailwind CSS single-page portfolio with **fully data-driven** bilingual content (EN / PT-BR).

## Run

```bash
npm install
npm run dev
```

## Where to edit content (no text hardcoded in components)

- **English**: `src/content/en.ts`
- **Português (Brasil)**: `src/content/pt-BR.ts`
- **Types**: `src/types/content.ts`

### Replace assets

- **Avatar**: replace `public/avatar.svg` (or update `hero.portrait.src` in content files)
- **Project cover(s)**: replace `public/project-1.svg` (or update `projects.items[].image.src`)
- **CV**: replace `public/cv.pdf`

## Add new cards/items (no component changes required)

- **Add an experience card**: add an object to `experience.items[]` in the locale file.
  - If you include `details`, the **View more** button appears and opens a modal.
  - If `details` is missing, the button is hidden.
- **Add a project card**: add an object to `projects.items[]`.
- **Add skills**: add strings to `skills.groups[].items`, or add a new group to `skills.groups[]`.
