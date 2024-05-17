<script lang="ts">
  import Icon from '@iconify/svelte';
  import { cn } from '$lib/utils';
  import { rankInputVariants, type Props } from ".";

  export let variant: Props['variant'] = 'default';
  export let maxRanks = 3;
  export let currentRank = 0;
</script>

<div class={cn('w-min', $$props.class)}>
  <div class="flex flex-row">
    {#each { length: maxRanks } as _, i}
      {#if i + 1 <= currentRank}
        <Icon icon="ph:circle-fill" class={cn(rankInputVariants({variant}), 'h-6 w-6')} />
      {:else}
        <Icon icon="ph:circle-light" class={cn(rankInputVariants({variant}), 'h-6 w-6')} />
      {/if}
      {#if i < (maxRanks - 1)}
        <Icon icon="bi:dash-lg" class={cn(rankInputVariants({variant}), '-mx-[5px] h-6 w-4')} />
      {/if}
    {/each}
  </div>
</div>
