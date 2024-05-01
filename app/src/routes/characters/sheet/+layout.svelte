<script lang="ts">
  import { CharacterSheetNav } from '$lib/components/ui/character-sheet-nav/';

  export let data;

  $: console.log('url', data.url);
</script>

<CharacterSheetNav />
{#key data.url}
  <div class="flex h-full flex-col gap-3 md:flex-row">
    <slot />
  </div>
{/key}
