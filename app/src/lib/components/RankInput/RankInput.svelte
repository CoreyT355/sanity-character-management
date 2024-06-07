<script lang="ts">
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

  export let maxValue = 3;
  export let disabled = true;
  export let value: number;

  const dispatch = createEventDispatcher();

  const handleRankClick = (rank: number) => {
    if (rank === 0 && value === 0) {
      value = 1;
    } else if (rank === 0 && value > 0) {
      value = 0;
    } else {
      value = rank + 1;
    }

    dispatch('click', value);
  };

  $: rankInputClasses = twMerge(rankInputBaseClass, $$props.class);
</script>

<div class={rankInputClasses}>
  <input type="hidden" bind:value={value} />
  <div class="flex flex-row -space-x-1">
    {#each { length: maxValue } as _, i}
      <button {disabled} on:click|preventDefault={() => handleRankClick(i)}>
        {#if i + 1 <= value}
          <span class="icon-[ph--circle-fill] h-6 w-6"></span>
        {:else}
          <span class="icon-[ph--circle-light] h-6 w-6"></span>
        {/if}
      </button>
      {#if i < maxValue - 1}
        <span class="icon-[bi--dash-lg] h-6 w-4"></span>
      {/if}
    {/each}
  </div>
</div>
