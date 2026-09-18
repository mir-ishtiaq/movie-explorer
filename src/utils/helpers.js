const FALLBACK_POSTER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='450' viewBox='0 0 300 450'%3E%3Crect width='300' height='450' fill='%231a1d24'/%3E%3Ctext x='50%25' y='48%25' dominant-baseline='middle' text-anchor='middle' fill='%239aa0a6' font-family='sans-serif' font-size='16'%3ENo Poster%3C/text%3E%3Ctext x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' fill='%239aa0a6' font-family='sans-serif' font-size='14'%3EAvailable%3C/text%3E%3C/svg%3E";

export function stripHtml(htmlString) {
  if (!htmlString || typeof htmlString !== 'string') {
    return '';
  }
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  return doc.body.textContent || '';
}

export function getYear(premiered) {
  if (!premiered || typeof premiered !== 'string') {
    return 'Unknown';
  }
  const year = premiered.slice(0, 4);
  return year && !isNaN(Number(year)) ? year : 'Unknown';
}

export function getRating(rating) {
  if (!rating) {
    return 'N/A';
  }
  const average = typeof rating === 'object' ? rating.average : rating;
  if (average === null || average === undefined || isNaN(Number(average))) {
    return 'N/A';
  }
  return Number(average).toFixed(1);
}

export function getPoster(show) {
  return show?.image?.medium || show?.image?.original || FALLBACK_POSTER;
}

export function getGenres(show) {
  if (!show?.genres || !Array.isArray(show.genres) || show.genres.length === 0) {
    return 'N/A';
  }
  return show.genres.join(', ');
}