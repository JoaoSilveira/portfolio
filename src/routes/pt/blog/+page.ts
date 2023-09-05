import { mapBlogCards } from '$lib/blog';
import type { PageLoad } from './$types';

export const load = (async () => {
    const imports = import.meta.glob('/src/routes/pt/blog/**/Card.svx', { eager: true });
    const posts = mapBlogCards(imports)
        // newer first
        // TODO: this must be a route param in the future
        .sort((a, b) => b.date.getTime() - a.date.getTime());

    return {
        posts
    };
}) satisfies PageLoad;