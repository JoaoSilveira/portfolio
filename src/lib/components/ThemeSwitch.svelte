<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import FaMoon from 'svelte-icons/fa/FaMoon.svelte';
	import FaSun from 'svelte-icons/fa/FaSun.svelte';

	type Theme = 'light' | 'dark';

	let currentTheme: Theme = 'light';

	onMount(() => {
		if (!browser) return;

		const storedTheme = localStorage.getItem('color-theme');

		if (storedTheme === 'dark') {
			currentTheme = 'dark';
		} else {
			currentTheme = 'light';
		}
	});

    function toggleTheme() {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('color-theme', currentTheme);
    }

	$: {
		if (browser) {
			const element = document.getElementsByTagName('html')[0];
			if (currentTheme == 'light') {
				element.classList.remove('dark-theme');
				element.classList.add('light-theme');
			} else if (currentTheme == 'dark') {
				element.classList.add('dark-theme');
				element.classList.remove('light-theme');
			}
		}
	}
</script>

<button type="button" on:click={toggleTheme}>
	{#if currentTheme === 'light'}
		<FaSun />
	{:else}
		<FaMoon />
	{/if}
</button>

<style lang="scss">
	button {
		display: block;
		height: auto;
		max-height: 100%;
		width: 100%;
		cursor: pointer;
		padding: 3px;

		color: var(--foreground);
		background: none;
		border: none;
	}
</style>