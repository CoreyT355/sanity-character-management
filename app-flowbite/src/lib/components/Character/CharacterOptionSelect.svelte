<script lang="ts">
  import { Button, Card } from 'flowbite-svelte';
  import { createEventDispatcher } from 'svelte';
  import { writable, type Writable } from 'svelte/store';

  export let options: string[];
  export let optionType: 'bloodline' | 'origin' | 'post';

  const dispatch = createEventDispatcher();

  let selectedOption: Writable<string> = writable('');
  const selectOption = async (option: string) => {
    selectedOption.set(option);
    dispatch('select', option);
  };
</script>

<div class="h-full bg-gray-50 text-gray-900 dark:bg-slate-800 dark:text-white">
  <!-- <span>Select a {optionType}</span> -->
  <div class="flex h-full flex-row gap-2 py-4">
    <nav class="flex flex-col px-3 overflow-y-auto h-[600px] w-60 gap-3">
      {#each options as option}
        <Button color="green" class="text-base focus-within:ring-0" on:click={() => selectOption(option)}>
          <!-- <Icon icon="ph:arrow-left-light" class="h-5 w-5" /> -->
          {option}
        </Button>
      {/each}
    </nav>

    <Card
      size="xl"
      class="h-[600px] divide-gray-200 rounded-lg border border-gray-200 bg-white p-4 text-gray-900 shadow-md sm:p-6 dark:divide-gray-700 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
    >
      {#if $selectedOption}
        <div class="flex flex-row items-center justify-between">
          <div class="text-2xl font-medium capitalize">{$selectedOption}</div>
          <!-- <div class="font-light italic">{$selectedOption.summary}</div> -->
        </div>
        <!-- <div class="flex flex-col gap-2">
          <PortableText value={$selectedOption.description} />
        </div> -->
      {:else}
        <div class="text-3xl capitalize">Please Select a {optionType}</div>
      {/if}
    </Card>
  </div>
</div>
