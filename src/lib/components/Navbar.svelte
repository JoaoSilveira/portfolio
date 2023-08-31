<script lang="ts">
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import type { SiteLocation } from '../../routes/+layout';

	export let location: SiteLocation | undefined;
	export let lang: string;
</script>

<header>
	<nav>
		<a class:active={location === 'home'} href="/{lang}/home">Home</a>
		<a class:active={location === 'project'} href="/{lang}/project">Projects</a>
		<a class:active={location === 'blog'} href="/{lang}/blog">Blog</a>
		<a class:active={location === 'curriculum'} href="/{lang}/curriculum">Curriculum</a>
		<a class:active={location === 'about'} href="/{lang}/about">About</a>
	</nav>

	<div class="social">
		<a id="github" target="_blank" href="https://github.com/JoaoSilveira">
			<FaGithub />
		</a>

		<a target="_blank" href="https://www.linkedin.com/in/jo%C3%A3o-pedro-silveira-387768100/">
			<FaLinkedin />
		</a>

		<ThemeSwitch />
	</div>
</header>

<style lang="scss">
	header {
		height: 6rem;
		padding: 3rem 2.5rem 1rem 5rem;
		display: flex;
		justify-content: space-between;
	}

	nav {
		display: flex;
		gap: 2rem;

		& > a {
			font-size: 1.125rem;
			line-height: 1;

			&.active {
				color: var(--blue-light);
				border-bottom: 2px solid var(--blue-light);

				&:hover {
					color: var(--blue-dark);
					border-bottom: 2px solid var(--blue-dark);
				}
			}
		}
	}

	.social {
		display: flex;
		gap: 0.5rem;

		& > a,
		& > :global(button) {
			display: block;
			width: 2rem;
			height: 2rem;
		}
	}
</style>
