import 'server-only';

import { list } from '@vercel/blob';
import PageClientSide from './clientSide';

const getIndex = (pathname: string) => {
  const filename = pathname.split('/').pop() ?? '';
  return parseInt(filename, 10); // "01_img_..." -> 1
};

// 01_img_2000XXX2695.JPG
const getImageSize = (pathname: string) => {
  const match = pathname.match(/(\d+)XXX(\d+)\.\w+$/i);
  return {
    width: match ? Number(match[1]) : 1600,
    height: match ? Number(match[2]) : 1067,
  };
};

export default async function PhotographyPage() {
  const { blobs } = await list({ prefix: 'Iceland-2026/' });

  const images = blobs
    .filter((b) => b.size > 0 && /\.(jpe?g|png|webp|avif)$/i.test(b.pathname))
    .sort((a, b) => getIndex(a.pathname) - getIndex(b.pathname))
    .map((b) => ({ url: b.url, ...getImageSize(b.pathname) }));

  return <PageClientSide images={images} />;
}