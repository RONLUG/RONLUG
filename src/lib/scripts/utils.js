export async function getPhotos(limit, page) {
  const res = await fetch(`https://picsum.photos/v2/list?limit=${limit}&page=${page}`);
  return res.json();
}

export function randomQ(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function aspectQ(srcWidth, srcHeight, maxWidth, maxHeight) {
  let ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
  return { width: Math.round(srcWidth * ratio), height: Math.round(srcHeight * ratio) };
}
