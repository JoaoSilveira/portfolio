<script lang="ts">
	import { browser } from '$app/environment';
	import { theme } from '$lib/store/theme';
	import FaMoon from 'svelte-icons/fa/FaMoon.svelte';
	import FaSun from 'svelte-icons/fa/FaSun.svelte';

	$: {
		if (browser) {
			const element = document.getElementsByTagName('html')[0];

			if ($theme == 'light') {
				element.classList.remove('dark-theme');
				element.classList.add('light-theme');
			} else if ($theme == 'dark') {
				element.classList.add('dark-theme');
				element.classList.remove('light-theme');
			}
		}
	}
</script>

<button
	type="button"
	on:click={theme.toggle}
	class:light={$theme === 'light'}
	class:dark={$theme === 'dark'}
>
	{#if $theme === 'light'}
		<FaSun />
	{:else}
		<FaMoon />
	{/if}
</button>

<style lang="scss">
	.dark {
		--button: var(--blue);
		--button-highlight: var(--blue-dark);
	}

	.light {
		--button: var(--yellow);
		--button-highlight: var(--yellow-dark);
	}

	button {
		display: block;
		height: auto;
		max-height: 100%;
		width: 100%;
		cursor: pointer;
		padding: 3px;

		color: var(--button);
		background: none;
		border: none;

		&:hover {
			color: var(--button-highlight);
		}
	}
</style>
