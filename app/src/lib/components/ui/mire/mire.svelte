<script lang="ts">
  import Label from "../label/label.svelte";
  import Track from "../track/track.svelte";

  export let description: string;
  export let currentTrack: number[];
  let trackLength: number = 2;
</script>

<div class="flex flex-row justify-between gap-1">
  <Label class="text-base font-light">{description}</Label>
  <Track {trackLength} {currentTrack} />
</div>