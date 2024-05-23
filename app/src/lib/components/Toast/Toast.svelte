<script lang="ts">
  import { fly } from 'svelte/transition';

  // Stores
  import { getToastStore } from './store';
  import { Toast } from 'flowbite-svelte';
  const toastStore = getToastStore();

  /** Maximum toasts that can show at once. */
  export let max = 3;

  function onAction(index: number): void {
    $toastStore[index]?.action?.response();
    toastStore.close($toastStore[index].id);
  }

  function onMouseEnter(index: number): void {
    if ($toastStore[index]?.hoverable) {
      toastStore.freeze(index);
    }
  }

  function onMouseLeave(index: number): void {
    if ($toastStore[index]?.hoverable) {
      toastStore.unfreeze(index);
    }
  }

  let wrapperVisible = false;

  // Filtered Toast Store
  $: filteredToasts = Array.from($toastStore).slice(0, max);

  $: if (filteredToasts.length) {
    wrapperVisible = true;
  }
</script>

{#if filteredToasts.length > 0 || wrapperVisible}
  {#each filteredToasts as t, i (t)}
    <Toast
      transition={fly}
      params={{ x: 200 }}
      name
      color={t.color}
      position={t.position}
      dismissable={!t.hideDismiss}
      divClass={`w-full max-w-xs p-4 text-gray-800 bg-gray-100 shadow dark:text-gray-200 dark:bg-gray-800 gap-3 border-2 border-${t.color}-500`}
    >
      {@html t.message}
    </Toast>
  {/each}
{/if}
