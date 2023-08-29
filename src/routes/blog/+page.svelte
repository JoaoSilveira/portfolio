<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData;
</script>

<ul>
    {#each data.allPosts as post}
    <li>{post.path}</li>
    {/each}
</ul>