<script lang="ts">
  import Track from '../Track/Track.svelte';
  import { createEventDispatcher } from 'svelte';

  export let name: string;
  export let description: string;
  export let type: string;
  export let trackLength: number;
  export let currentTrack: number[];
  export let isComplex: boolean = false;
  export let disabled = false;

  const dispatch = createEventDispatcher();
</script>

<div class="bottom-left-cut flex flex-row">
  <div class="flex flex-col divide-y-2 divide-white bg-indigo-900 text-white">
    <span class="p-3 pb-5 capitalize">name</span>
    <span class="p-3 capitalize">details</span>
  </div>
  <div
    class="w-full rounded-r-xl border-b border-r border-t border-slate-800 bg-slate-300 p-3 px-4 text-black dark:bg-slate-900 dark:text-white"
  >
    <div class="flex flex-row justify-between pb-[6px]">
      <div>{name}</div>
      <div class="capitalize">{type}</div>
    </div>
    <div class="-ml-7">
      <Track {disabled} {trackLength} {currentTrack} />
    </div>
    <div class="pt-2 flex flex-row justify-between">
      {description}
      <div>
        <button class="btn-icon btn-icon-sm bg-red-600" on:click={() => dispatch('delete')}>
          <span class="icon-[ph--trash-light] h-6 w-6"></span>
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  .bottom-left-cut {
    clip-path: polygon(0 0, 0 0, 0 0, 100% 0%, 100% 0%, 100% 100%, 16px 100%, 0% calc(100% - 16px));
  }
</style>
