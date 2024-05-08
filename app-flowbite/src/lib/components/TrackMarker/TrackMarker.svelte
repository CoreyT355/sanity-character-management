<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Icon from '@iconify/svelte';
  import { cn } from '$lib/utils';
  import { trackMarkerVariants, type Props } from '.';

  export let variant: Props['variant'] = 'default';
  export let state: Props['state'] = 0;
  export let disabled = true;

  const dispatch = createEventDispatcher();

  const handleClick = () => {
    if (state === undefined) return;

    if (state !== 2) {
      state++;
    } else {
      state = 0;
    }

    dispatch('click', { state });
  };
</script>

<button
  {disabled}
  on:click={() => handleClick()}
  class={cn(
    trackMarkerVariants({ variant }),
    'h-7 w-7 rounded-full p-[2px]',
    state !== 0 ? 'bg-white' : 'border-2 border-white bg-slate-300 dark:bg-slate-900'
  )}
>
  {#if state === 2}
    <Icon icon="ph:fire-simple-fill" inline class={cn('h-6 w-6 text-red-500')} />
  {:else if state === 1}
    <Icon icon="ph:x-light" class={cn('h-6 w-6 text-black')} />
  {/if}
</button>
