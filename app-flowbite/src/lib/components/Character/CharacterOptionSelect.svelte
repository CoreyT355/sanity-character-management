<script lang="ts">
  import { PortableText } from '@portabletext/svelte';
  import { Button, Card } from 'flowbite-svelte';
  import { createEventDispatcher } from 'svelte';
  import { writable, type Writable } from 'svelte/store';
  import type { Bloodline, Origin, Post } from '$lib/types/sanity.types';
  import { getCharacterOption } from '$lib/utils/sanity';

  export let options: string[];
  export let optionType: 'bloodline' | 'origin' | 'post';

  const dispatch = createEventDispatcher();

  let selectedOption: Writable<Bloodline | Origin | Post> = writable(
    {} as Bloodline | Origin | Post
  );
  const selectOption = async (option: string) => {
    selectedOption.set((await getCharacterOption(optionType, option)) as Bloodline | Origin | Post);
    dispatch('select', $selectedOption.name);
  };
</script>

<div class="h-full">
  <span>Select a {optionType}</span>
  <div class="flex flex-row gap-2 h-full">
    <nav class="grid gap-3 w-60 ">
      {#each options as option}
        <Button
          color="green"
          class="text-base"
          on:click={() => selectOption(option)}
        >
          <!-- <Icon icon="ph:arrow-left-light" class="h-5 w-5" /> -->
          {option}
        </Button>
      {/each}
    </nav>
    {#if $selectedOption.name}
      <Card size="lg">
        <div class="flex flex-row justify-between items-center">
          <div class="text-2xl font-medium capitalize">{$selectedOption.name}</div>
          <div class="font-light italic">{$selectedOption.summary}</div>
        </div>
        <div class="flex flex-col gap-2">
          <PortableText value={$selectedOption.description} />
        </div>
      </Card>
    {:else}
      <Card size="lg">
        <div class="text-3xl capitalize">Please Select a {optionType}</div>
      </Card>
    {/if}
  </div>
</div>
