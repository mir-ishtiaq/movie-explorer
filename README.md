# Movie Explorer

A simple React app to browse TV shows and movies using the TVMaze API. Built for the Programming Hero assignment -2.

## Features

- Home page with a hero section and a CTA to the movie listing
- Browse shows fetched from TVMaze (first 60 results)
- Live search with a 400ms debounce so it doesn't spam the API
- Modal popup with full details when you click "See Details"
- Fully responsive — single column on mobile, grid on desktop

## Tech Stack

- React (with hooks)
- Vite
- React Router for navigation
- Plain CSS (no Tailwind or libraries)

## API

TVMaze — https://www.tvmaze.com/api
- `GET /shows` — all shows
- `GET /search/shows?q=query` — search

## How to Run

1. Clone the repo
2. `npm install`
3. `npm run dev`
4. Open http://localhost:5173

## What I Learned

- **Debouncing search with useEffect**: I used setTimeout inside useEffect and cleared it in the cleanup so typing quickly doesn't fire a request on every keystroke. I also added an `ignore` flag so an old slow response can't overwrite a newer one.
- **Modals with createPortal**: Rendering the modal into document.body instead of inside the page tree avoids z-index and overflow issues.
- **Escape key + body scroll lock**: Had to remember to remove the event listener and reset `body.style.overflow` in the effect cleanup, otherwise the page stays frozen after closing.
- **Stripping HTML from API text**: The TVMaze summary comes with `<p>` tags. I used DOMParser to get plain text instead of `dangerouslySetInnerHTML`.
- **Slicing large API responses**: `/shows` returns hundreds of items — slicing to 60 made the page load noticeably faster.