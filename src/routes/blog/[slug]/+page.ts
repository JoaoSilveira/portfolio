import type { SvelteComponent } from 'svelte';
import type { PageLoad } from './$types';

type ServerLoadReturn = {
  title: string;
  description: string;
  component: SvelteComponent;
};

export const load: PageLoad<ServerLoadReturn> = async ({ params }) => {
  const post = await import(/* @vite-ignore */`../${params.slug}.svx`);

  const { title, description } = post.metadata;
  const component = post.default;

  return {
    component,
    title,
    description,
  };
};