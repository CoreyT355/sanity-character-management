<script lang="ts">
	import Card from '../components/Card.svelte';
	import Welcome from '../components/Welcome.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section>
	{#if data.bloodlines.length}
		{#each data.bloodlines as bloodline}
			<Card {bloodline} />
		{/each}
	{:else}
		<Welcome />
	{/if}
</section>
