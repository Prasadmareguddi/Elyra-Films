const imageAssets = import.meta.glob('../assets/images/*.{avif,gif,jpeg,jpg,png,webp}', {
  eager: true,
  import: 'default',
  query: '?url',
});

const fallbackImage = Object.values(imageAssets)[0] || '';

export const getImage = (filename) =>
  imageAssets[`../assets/images/${filename}`] || fallbackImage;