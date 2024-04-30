<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<script lang="ts">
  import Icon from '@iconify/svelte';

  export let trackCount: number;
  export let currentCount: number;

  const handleTrackClick = (index: number) => {
    currentCount = index;
  };

  const handleResetClick = () => {
    currentCount = -1;
  };
</script>

<ol data-testid="track-list" class="flex items-center">
  {#each Array(trackCount) as _, index (index)}
    <li
      class="relative"
      class:pr-5={index !== trackCount - 1}
      data-testid="track-step"
      on:click={() => handleTrackClick(index)}
    >
      {#if index < currentCount}
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="h-0.5 w-full bg-indigo-600" />
        </div>
        <span
          class="relative flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-900"
        >
          <Icon icon="ph:check-bold" class="h-3 w-3 fill-current text-current" />
        </span>
      {:else if index === currentCount && currentCount > -1}
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="h-0.5 w-full bg-gray-200" />
        </div>
        <span
          class="relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-indigo-600 bg-white"
          aria-current="step"
        >
          <span class="h-3 w-3 rounded-full bg-indigo-600" aria-hidden="true" />
        </span>
      {:else}
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="h-0.5 w-full bg-gray-400" />
        </div>
        <span
          class="group relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
        >
          <span
            class="h-3 w-3 rounded-full bg-transparent group-hover:bg-gray-300"
            aria-hidden="true"
          />
        </span>
      {/if}
    </li>
  {/each}
  <li class="ml-5 align-super text-xs">
    <button
      type="button"
      title="reset track"
      data-testid="reset-button"
      class="inline-flex items-center rounded-full border border-transparent bg-red-500 p-1 text-white shadow-sm hover:bg-red-700 focus:outline-none"
      on:click={() => handleResetClick()}
    >
      <Icon icon="ph:arrow-counter-clockwise-light" class="h-3 w-3 fill-current text-current" />
    </button>
  </li>
</ol>
