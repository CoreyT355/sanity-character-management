<script lang="ts">
  import Track from '../track/track.svelte';

  export let name: string;
  export let description: string;
  export let type: string;
  export let trackLength: number;
  export let currentCount: number;
</script>

<div>
  <div class="bottom-left-cut flex flex-row">
    <div class="flex flex-col divide-y-2 divide-white bg-slate-800 text-white">
      <span class="p-3 capitalize">name</span>
      <span class="p-3 capitalize">details</span>
    </div>
    <div
      class="w-full rounded-r-xl border-b border-r border-t dark:bg-slate-900 border-slate-800 bg-slate-300 px-4 p-3 dark:text-white text-black"
    >
      <div class="flex flex-row justify-between">
        <div>{name}</div>
        <div class="capitalize">{type}</div>
      </div>
      <div class="-ml-7">
        <Track trackCount={trackLength} {currentCount} />
      </div>
      <div>{description}</div>
    </div>
  </div>
</div>

<style>
  .bottom-left-cut {
    clip-path: polygon(0 0, 0 0, 0 0, 100% 0%, 100% 0%, 100% 100%, 16px 100%, 0% calc(100% - 16px));
  }
</style>
