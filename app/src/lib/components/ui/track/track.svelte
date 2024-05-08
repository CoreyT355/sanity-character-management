<script lang="ts">
  import Icon from '@iconify/svelte';
  import TrackMarker from '../track-marker/track-marker.svelte';
  import { onMount } from 'svelte';

  export let trackLength: number;
  export let currentTrack: number[];

  onMount(() => {
    if (currentTrack.length <= 0) {
      currentTrack = Array(trackLength).fill(0);
    }
  });

  const handleTrackClick = (e: CustomEvent, index: number) => {
    currentTrack[index] = e.detail.state;
  };

  const handleResetClick = () => {
    currentTrack = Array(trackLength).fill(0);
  };
</script>

<div class="flex flex-row items-center">
  {#each Array(trackLength) as _, index (index)}
    <TrackMarker state={currentTrack[index]} on:click={(e) => handleTrackClick(e, index)} />
    {#if index < trackLength - 1}
      <div class="flex flex-col">
        <div class="bg-white w-3 h-[2px]"></div>
      </div>
    {/if}
  {/each}
  <button
    type="button"
    title="reset track"
    data-testid="reset-button"
    class="ml-4 h-7 w-7 rounded-full p-[3px] bg-red-500 text-white shadow-sm hover:bg-red-700 focus:outline-none"
    on:click={() => handleResetClick()}
  >
    <Icon icon="ph:arrow-counter-clockwise" class="w-6 h-6 pr-[2px]" />
  </button>
</div>
