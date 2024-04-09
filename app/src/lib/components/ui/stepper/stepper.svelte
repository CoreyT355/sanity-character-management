<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Badge } from '$lib/components/ui/badge';
  import { cn } from '$lib/utils';
  import Icon from '@iconify/svelte';

  export let data;

  export let steps: number;

  export let component;

  export let step = 1;
</script>

<div class="mt-[15px] flex border-t py-4">
  <div class="-mt-[37px] flex w-full flex-row items-center justify-between gap-4">
    {#each { length: steps } as step, i}
      <div class={cn(i + 1 === step ? 'flex-1' : '', 'transition-all duration-500')}>
        <Badge class={cn(i + 1 === step ? 'bg-purple-800' : '')}>
          {i + 1}
        </Badge>
      </div>
    {/each}
  </div>
</div>

<slot />

<div class="flex justify-between">
  {#if step === steps}
    <Button class="space-x-1 text-base" on:click={() => step--}>
      <Icon icon="ph:arrow-left-light" class="h-5 w-5" />
      Back
    </Button>
    <Button class="space-x-1 bg-green-500 text-base">Create</Button>
  {:else}
    <Button class="space-x-1 text-base" disabled={step === 1} on:click={() => step--}>
      <Icon icon="ph:arrow-left-light" class="h-5 w-5" />
      Back
    </Button>
    <Button class="space-x-1 text-base" on:click={() => step++}>
      Next
      <Icon icon="ph:arrow-right-light" class="h-5 w-5" />
    </Button>
  {/if}
</div>
