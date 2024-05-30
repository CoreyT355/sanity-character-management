<script lang="ts">
  import { Input, Tooltip } from "flowbite-svelte";
  import Track from "../Track/Track.svelte";

  export let currentTrack: number[];
  export let description: string;
  export let disabled = false;
  export let name: string;

  let trackLength: number = 2;
</script>

<div class="flex flex-row justify-between gap-4">
  <Input {disabled} name={`${name}-text`} bind:value={description} placeholder="Enter a Mire..." />
  {#if disabled}
    <Tooltip>{description}</Tooltip>
  {/if}
  <Track {name} {disabled} {trackLength} {currentTrack} />
</div>