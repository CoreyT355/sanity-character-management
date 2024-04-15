<script lang="ts">
  import { PortableText } from '@portabletext/svelte';
  import type { SuperForm } from 'sveltekit-superforms';
  import { createEventDispatcher } from 'svelte';
  import * as Card from '$lib/components/ui/card';
  import * as Form from '$lib/components/ui/form';
  import Button from '$lib/components/ui/button/button.svelte';
  import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
  import { writable, type Writable } from 'svelte/store';
  import type { Bloodline, Origin, Post } from '$lib/types/sanity.types';
  import { getCharacterOption } from '$lib/utils/sanity';

  export let form: SuperForm<any>;
  export let options: string[];
  export let optionType: 'bloodline' | 'origin' | 'post';

  const dispatch = createEventDispatcher();

  let selectedOption: Writable<Bloodline | Origin | Post> = writable({} as Bloodline | Origin | Post);
  const selectOption = async (option: string) => {
    selectedOption.set((await getCharacterOption(optionType, option)) as Bloodline | Origin | Post);
    dispatch('select', $selectedOption.name);
  };
</script>

<Form.Field {form} name={optionType}>
  <Form.Control>
    <Form.Label>Select a {optionType}</Form.Label>
    <div class="flex flex-row gap-2">
      <ScrollArea class="max-h-96 w-1/6">
        <nav class="grid gap-1">
          {#each options as option}
            <Button
              class="hover:bg-accent text-base hover:text-white"
              on:click={() => selectOption(option)}
            >
              <!-- <Icon icon="ph:arrow-left-light" class="h-5 w-5" /> -->
              {option}
            </Button>
          {/each}
        </nav>
      </ScrollArea>
      {#if $selectedOption.name}
        <Card.Root class="w-full">
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
        </Card.Root>
      {:else}
        <Card.Root class="w-full">
          <Card.Header>
            <Card.Title class="text-3xl capitalize">Please Select a Bloodline</Card.Title>
          </Card.Header>
        </Card.Root>
      {/if}
    </div>
  </Form.Control>
  <Form.FieldErrors />
</Form.Field>
