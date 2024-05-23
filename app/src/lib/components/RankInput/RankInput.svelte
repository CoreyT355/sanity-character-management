<script lang="ts">
  import Icon from '@iconify/svelte';
  import { cn } from '$lib/utils';
  import { rankInputVariants, type Props } from '.';
  import { createEventDispatcher } from 'svelte';

  export let name: string;
  export let variant: Props['variant'] = 'default';
  export let maxRanks = 3;
  export let currentRank = 0;
  export let disabled = true;

  const dispatch = createEventDispatcher();

  const handleRankClick = (rank: number) => {
    if (rank === 0 && currentRank === 0) {
      currentRank = 1;
    } else if (rank === 0 && currentRank > 0) {
      currentRank = 0;
    } else {
      currentRank = rank + 1;
    }

    dispatch('click', currentRank);
  };
</script>

<div class={cn('w-min', $$props.class)}>
  <div class="flex flex-row">
    {#each { length: maxRanks } as _, i}
      <button {name} {disabled} on:click|preventDefault={() => handleRankClick(i)}>
        {#if i + 1 <= currentRank}
          <Icon icon="ph:circle-fill" class={cn(rankInputVariants({ variant }), 'h-6 w-6')} />
        {:else}
          <Icon icon="ph:circle-light" class={cn(rankInputVariants({ variant }), 'h-6 w-6')} />
        {/if}
      </button>
      {#if i < maxRanks - 1}
        <Icon icon="bi:dash-lg" class={cn(rankInputVariants({ variant }), '-mx-[5px] h-6 w-4')} />
      {/if}
    {/each}
  </div>
</div>
