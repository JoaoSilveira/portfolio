import type { LayoutLoad } from './$types';

export type SiteLocation = 'home' | 'project' | 'blog' | 'curriculum' | 'about';

type LoadData = {
    lang: string;
    location: SiteLocation | undefined;
};

function extractLanguageFromUrl(pathname: string): string {
    switch (pathname.substring(0, 4)) {
        case "/pt/":
        case "/en/":
            return pathname.substring(1, 3);
        default:
            return "pt";
    }
}

function indexOfOrLength(haystack: string, needle: string, position: number | undefined): number {
    const idx = haystack.indexOf(needle, position);

    return idx < 0 ? haystack.length : idx;
}

function tryExtractLocation(pathname: string): SiteLocation | undefined {
    if (pathname === '/') {
        return 'home';
    }

    const nextSlash = indexOfOrLength(pathname, '/', 4);
    switch (pathname.substring(3, nextSlash)) {
        case "/home":
        case "/project":
        case "/blog":
        case "/curriculum":
        case "/about":
            return pathname.substring(4, nextSlash) as SiteLocation;
        default:
            return undefined;
    }
}

export const load = (async ({ url }) => {
    return {
        lang: extractLanguageFromUrl(url.pathname),
        location: tryExtractLocation(url.pathname),
    };
}) satisfies LayoutLoad<LoadData>;