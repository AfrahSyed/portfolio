/** Normalize curly quotes and special dashes from resume/PDF paste */
export function cleanText(str) {
  if (!str) return '';
  return str
    .replace(/\u2013|\u2014/g, '-')
    .replace(/\u00b7/g, '|')
    .replace(/\u2026/g, '...')
    .replace(/â€"|â€"/g, '-')
    .replace(/Â·/g, '|');
}
