<script lang="ts">
  import Icon from '@iconify/svelte';
  import { createEventDispatcher } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  const rankInputBaseClass = 'w-min dark:text-white text-foreground';
  type RankInputColor = keyof typeof colorClasses;
  export let color: RankInputColor = 'default';
  const colorClasses = {
    default: 'dark:text-white text-slate-800',
    destructive: 'dark:text-destructive text-destructive',
    secondary: 'dark:text-secondary text-secondary',
    success: 'dark:text-success text-success',
    info: 'dark:text-info text-info',
    warning: 'dark:text-warning text-warning',
    violet: 'dark:text-violet text-violet'
  };

  export let name: string;
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

<div class={`${rankInputBaseClass} ${$$props.class}`}>
  <input type="hidden" {name} bind:value={currentRank} />
  <div class="flex flex-row -space-x-1">
    {#each { length: maxRanks } as _, i}
      <button {disabled} on:click|preventDefault={() => handleRankClick(i)}>
        {#if i + 1 <= currentRank}
          <Icon icon="ph:circle-fill" class="h-6 w-6" />
        {:else}
          <Icon icon="ph:circle-light" class="h-6 w-6" />
        {/if}
      </button>
      {#if i < maxRanks - 1}
        <Icon icon="bi:dash-lg" class="h-6 w-4" />
      {/if}
    {/each}
  </div>
</div>
