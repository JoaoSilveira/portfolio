<script lang="ts">
    import 'prism-themes/themes/prism-vsc-dark-plus.min.css';
	import type { LayoutData } from './$types';

    export let data: LayoutData;
</script>

<svelte:head>
    <title>{data.title}</title>
	<meta name="title" content={data.title} />
	<meta name="description" content={data.description} />
</svelte:head>

<slot />