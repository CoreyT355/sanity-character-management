<script lang="ts">
  import Aspect from '$lib/components/Aspect/Aspect.svelte';
  import SectionHeader from '$lib/components/SectionHeader/SectionHeader.svelte';
  import { isEditing } from '$lib/store/characters.js';

  export let data;

  const { aspects } = data;
</script>

<div class="flex w-full flex-col gap-4">
  <SectionHeader class="" label="Aspects" />
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    {#each aspects as aspect}
      <Aspect
        disabled={!$isEditing}
        name={aspect.name}
        type={aspect.type}
        description={aspect.description}
        trackLength={aspect.track_length}
        currentTrack={aspect.current_track}
      />
    {/each}
  </div>
</div>
