import 'server-only'

import { list } from '@vercel/blob';

import PageClientSide from "./clientSide";

const getIndex = (pathname: string) => {
    const filename = pathname.split('/').pop() ?? '';
    return parseInt(filename, 10); // "12_img.png" -> 12
};

export default async function PhotographyPage() {
    const { blobs } = await list({ prefix: 'Iceland-2026/' });

    const urls = blobs
        .filter((b) => b.size > 0 && /\.(jpe?g|png|webp|avif)$/i.test(b.pathname))
        .sort((a, b) => getIndex(a.pathname) - getIndex(b.pathname))
        .map((b) => b.url);

    return (
        <div className="">
            <PageClientSide urls={urls}/>
        </div>
    );
}