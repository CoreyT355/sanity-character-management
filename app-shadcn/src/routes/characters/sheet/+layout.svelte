<script lang="ts">
  import { CharacterSheetNav } from '$lib/components/ui/character-sheet-nav/';
  import { fly } from 'svelte/transition';

  export let data;
</script>

<div class="flex justify-center">
  <CharacterSheetNav />
</div>
{#key data.url}
  <div
    class="flex h-full flex-col gap-3 md:flex-row"
    in:fly={{ x: -200, duration: 300, delay: 100 }}
    out:fly={{ x: 200, duration: 300 }}
  >
    <slot />
  </div>
{/key}
