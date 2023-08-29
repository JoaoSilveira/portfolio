<script lang="ts">
    import 'prism-themes/themes/prism-vsc-dark-plus.min.css';
	import type { PageData } from './$types';

    export let data: PageData;
</script>

<svelte:head>
    <title>{data.title}</title>
	<meta name="title" content={data.title} />
	<meta name="description" content={data.description} />
</svelte:head>

<svelte:component this={data.component} />