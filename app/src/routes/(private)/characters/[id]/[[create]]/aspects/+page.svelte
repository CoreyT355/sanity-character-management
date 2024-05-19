<script lang="ts">
  import Aspect from '$lib/components/Aspect/Aspect.svelte';
  import SectionHeader from '$lib/components/SectionHeader/SectionHeader.svelte';
  import { isEditing } from '$lib/store/characters.js';

  export let data;

  const { currentCharacter } = data;
</script>

<div class="flex flex-col gap-4 w-full">
  <SectionHeader class="" label="Aspects" />
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {#each $currentCharacter.aspects as aspect}
      <Aspect disabled={!$isEditing} {...aspect} />
    {/each}
  </div>
</div>
