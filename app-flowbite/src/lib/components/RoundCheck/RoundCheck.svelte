<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<script lang="ts">
  import Icon from '@iconify/svelte';

  export let checked = false;

  const handleClick = () => {
    checked = !checked;
  };
</script>

<div class="h-10 w-10" on:click={() => handleClick}>
  {#if !checked}
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="h-0.5 w-full bg-indigo-600" />
    </div>
    <span
      class="relative flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-900"
    >
      <span class="h-4 w-4 rounded-full bg-gray-400" aria-hidden="true" />
    </span>
  {:else}
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="h-0.5 w-full bg-gray-200" />
    </div>
    <span
      class="relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-indigo-600 bg-white"
      aria-current="step"
    >
      <span class="h-4 w-4 rounded-full bg-gray-400" aria-hidden="true" />
    </span>
  {/if}
</div>
