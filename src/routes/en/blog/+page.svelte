<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="container">
	{#each data.posts as post}
		<a href={post.path} class="card">
			<svelte:component this={post.Card} />
		</a>
	{/each}
</div>
