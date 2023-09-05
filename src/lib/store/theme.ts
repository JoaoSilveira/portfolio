import { browser } from "$app/environment";
import { writable } from "svelte/store";

type Theme = 'light' | 'dark';

const THEME_KEY = 'color-theme';

function themeStore() {
    const theme = writable<Theme | undefined>(undefined, (set) => {
        if (!browser) return;

        const storedTheme = localStorage.getItem(THEME_KEY);
        if (storedTheme === 'dark') {
            set('dark');
        } else {
            set('light');
        }
    });

    return {
        subscribe: theme.subscribe,
        toggle() {
            theme.update(current => {
                const newValue = current === 'light' ? 'dark' : 'light';

                localStorage.setItem(THEME_KEY, newValue);

                return newValue;
            });
        }
    }
}

export const theme = themeStore();