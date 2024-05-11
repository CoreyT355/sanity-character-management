<script lang="ts">
  import Aspect from '$lib/components/ui/aspect/aspect.svelte';
  import { SectionHeader } from '$lib/components/ui/section-header';

  export let data;

  const { aspects } = data.savedCharacter;
</script>

<div class="flex flex-col gap-4 w-full">
  <SectionHeader class="" label="Aspects" />
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {#each aspects as aspect}
      <Aspect {...aspect} />
    {/each}
  </div>
</div>
