// Generates a mono colored icon
export function generateIcon(size: number, color: string) {
  const canvas = document.createElement('canvas');
  canvas.height = size;
  canvas.width = size;
  const context = canvas.getContext('2d');
  if (!context) {
    throw new Error('failed to get context');
  }
  context.fillStyle = color;
  context.fillRect(0, 0, size, size);
  return canvas.toDataURL();
}

// Generates a favicon and updates the DOM
export default function setFavicon(
  color: string = '#ff0000',
  size: number = 64,
) {
  const link = document.createElement('link');
  // link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = generateIcon(size, color);
  document.getElementsByTagName('head')[0].appendChild(link);
}
