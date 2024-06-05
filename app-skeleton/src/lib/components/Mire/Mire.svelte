<script lang="ts">
  import ToolTip from '../ToolTip/ToolTip.svelte';
  import Track from '../Track/Track.svelte';
  import { popup, type PopupSettings } from '@skeletonlabs/skeleton';

  export let currentTrack: number[];
  export let description: string;
  export let disabled = false;
  export let name: string;

  let trackLength: number = 2;

  const trackTooltip: PopupSettings = {
    event: 'hover',
    target: `tooltip-${name}`
  };
</script>

<div class="flex flex-row justify-between gap-4">
  <input
    class="input"
    use:popup={trackTooltip}
    {disabled}
    bind:value={description}
    placeholder="Enter a Mire..."
  />
  {#if disabled}
    <ToolTip popupName={`tooltip-${name}`}>{description}</ToolTip>
  {/if}
  <Track {disabled} {trackLength} bind:currentTrack={currentTrack} />
</div>
