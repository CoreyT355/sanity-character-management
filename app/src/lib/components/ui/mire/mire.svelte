<script lang="ts">
  import Label from "../label/label.svelte";
  import Track from "../track/track.svelte";

  export let text: string;
</script>

<div class="flex flex-row justify-between gap-1">
  <Label class="text-base font-light">{text}</Label>
  <Track trackCount={2} currentCount={0} />
</div>