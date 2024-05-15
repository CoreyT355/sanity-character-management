<script lang="ts">
  import { PortableText } from '@portabletext/svelte';
  import type { SuperForm } from 'sveltekit-superforms';
  import { createEventDispatcher } from 'svelte';
  import * as Card from '$lib/components/ui/card';
  import Button from '$lib/components/ui/button/button.svelte';
  import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
  import { writable, type Writable } from 'svelte/store';
  import type { Bloodline, Origin, Post } from '$lib/types/sanity.types';
  import { getCharacterOption } from '$lib/utils/sanity';
  import Icon from '@iconify/svelte';
  import { slide } from 'svelte/transition';

  export let options: string[];
  export let optionType: 'bloodline' | 'origin' | 'post' | 'skill';

  const dispatch = createEventDispatcher();

  export let selectedOption: Writable<Bloodline | Origin | Post> = writable(
    {} as Bloodline | Origin | Post
  );

  const selectOption = async (option: string) => {
    selectedOption.set((await getCharacterOption(optionType, option)) as Bloodline | Origin | Post);
    dispatch('select', $selectedOption.name);
  };
</script>

<div class="flex h-full flex-row gap-2">
  <ScrollArea class="w-64 pr-4">
    <nav class="grid gap-2 ">
      {#each options as option}
        <Button variant="violet" class="text-base" on:click={() => selectOption(option)}>
          {#if $selectedOption.name === option}
            <div transition:slide={{ axis: 'x', duration: 200 }}>
              <Icon icon="ph:check-light" class="mr-2 h-5 w-5" />
            </div>
          {/if}
          {option}
        </Button>
      {/each}
    </nav>
  </ScrollArea>
  <Card.Root class="h-full w-full">
    {#if $selectedOption.name}
      <Card.Header>
        <Card.Title class="text-3xl capitalize">
          {$selectedOption.name}
        </Card.Title>
        <Card.Description>{$selectedOption.summary}</Card.Description>
      </Card.Header>
      <Card.Content>
        <div class="space-y-3">
          <PortableText value={$selectedOption.description} />
        </div>
      </Card.Content>
    {:else}
      <Card.Header>
        <Card.Title class="text-3xl capitalize">Please Select a {optionType}</Card.Title>
      </Card.Header>
    {/if}
  </Card.Root>
</div>
