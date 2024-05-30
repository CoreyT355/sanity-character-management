<script lang="ts">
  import Icon from '@iconify/svelte';
  import { TrackMarker } from '../TrackMarker';

  export let trackLength: number;
  export let currentTrack: number[] = Array(trackLength).fill(0);
  export let disabled = true;
  export let name: string;

  const handleTrackClick = (e: CustomEvent, index: number) => {
    currentTrack[index] = e.detail.state;
  };

  const handleResetClick = () => {
    currentTrack = Array(trackLength).fill(0);
  };
</script>

<div class="flex flex-row items-center">
  <input type="hidden" name={`${name}-track`} bind:value={currentTrack} />
  {#each Array(trackLength) as _, index (index)}
    <TrackMarker
      {disabled}
      state={currentTrack[index]}
      on:click={(e) => handleTrackClick(e, index)}
    />
    {#if index < trackLength - 1}
      <div class="flex flex-col">
        <div class="bg-white w-3 h-[2px]"></div>
      </div>
    {/if}
  {/each}
  <div class="flex flex-col">
    <div class="bg-white w-3 h-[2px]"></div>
  </div>
  <button
    type="button"
    {disabled}
    title="reset track"
    data-testid="reset-button"
    class="btn-icon btn-icon-sm variant-filled"
    on:click={() => handleResetClick()}
  >
    <Icon icon="ph:arrow-counter-clockwise" class="w-5 h-5" />
  </button>
</div>
