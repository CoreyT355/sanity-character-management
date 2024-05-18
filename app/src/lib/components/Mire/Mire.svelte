<script lang="ts">
  import { Input, Tooltip } from "flowbite-svelte";
  import Track from "../Track/Track.svelte";

  export let description: string;
  export let currentTrack: number[];
  export let disabled = false;

  let trackLength: number = 2;
</script>

<div class="flex flex-row justify-between gap-4">
  <Input {disabled} bind:value={description} placeholder="Enter a Mire..." />
  {#if disabled}
    <Tooltip>{description}</Tooltip>
  {/if}
  <Track {disabled} {trackLength} {currentTrack} />
</div>