<script lang="ts">
	import '$lib/style/global.scss';
	import type { LayoutData } from './$types';
	import Navbar from '$lib/components/Navbar.svelte';

	export let data: LayoutData;
</script>

<div class="website-wrapper">
	<Navbar lang={data.lang} location={data.location} />

	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	.website-wrapper {
		display: flex;
		flex-direction: column;
	}

	main {
		min-height: calc(100cqh - 6rem);
		container-name: main-content;
		container-type: size;
	}
</style>
