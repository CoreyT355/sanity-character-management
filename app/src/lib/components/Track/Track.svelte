<script lang="ts">
  import Icon from '@iconify/svelte';
  import { TrackMarker } from '../TrackMarker';
  import { onMount } from 'svelte';
  import { Button } from 'flowbite-svelte';

  export let trackLength: number;
  export let currentTrack: number[] = Array(trackLength).fill(0);
  export let disabled = true;

  const handleTrackClick = (e: CustomEvent, index: number) => {
    currentTrack[index] = e.detail.state;
  };

  const handleResetClick = () => {
    currentTrack = Array(trackLength).fill(0);
  };
</script>

<div class="flex flex-row items-center">
  {#each Array(trackLength) as _, index (index)}
    <TrackMarker {disabled} state={currentTrack[index]} on:click={(e) => handleTrackClick(e, index)} />
    {#if index < trackLength - 1}
      <div class="flex flex-col">
        <div class="bg-white w-3 h-[2px]"></div>
      </div>
    {/if}
  {/each}
  <Button
    type="button"
    pill={true}
    size="xs"
    color="red"
    {disabled}
    title="reset track"
    data-testid="reset-button"
    class="ml-4 !p-2"
    on:click={() => handleResetClick()}
  >
    <Icon icon="ph:arrow-counter-clockwise" class="w-4 h-4" />
  </Button>
</div>
