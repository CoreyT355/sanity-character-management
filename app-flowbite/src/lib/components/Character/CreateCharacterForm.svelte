<script lang="ts">
  import { page } from '$app/stores';
  import { cn } from '$lib/utils';
  import type { Bloodline, Origin, Post } from '$lib/types/sanity.types';
  import Icon from '@iconify/svelte';
  import { Label, Input, Button, Timeline, TimelineItem } from 'flowbite-svelte';
  import { type Writable, writable } from 'svelte/store';
  import CharacterOptionSelect from './CharacterOptionSelect.svelte';
  import Stepper from '../Stepper/Stepper.svelte';
  import StepperItem from '../Stepper/StepperItem.svelte';

  export let bloodlines: string[];
  export let origins: string[];
  export let posts: string[];

  export let data;

  const steps = [
    {
      stepName: 'Name'
    },
    {
      stepName: 'Bloodline'
    },
    {
      stepName: 'Origin'
    },
    {
      stepName: 'Post'
    }
  ];

  let step = 2;

  let character = writable({
    name: '',
    bloodline: null as Bloodline | null,
    origin: null as Origin | null,
    post: null as Post | null
  });

  let characterName: Writable<string> = writable('');
  let selectedBloodline: Writable<Bloodline> = writable({} as Bloodline);
  let selectedOrigin: Writable<Bloodline> = writable({} as Bloodline);
  let selectedPost: Writable<Bloodline> = writable({} as Bloodline);
</script>

<pre>{JSON.stringify($character)}</pre>

<div class="max-w-8xl flex h-full flex-row gap-2">
  <Stepper>
    {#each steps as _, i}
      <StepperItem label={_.stepName} active={i === step} completed={i < step}>
        <div class="text-sm text-gray-400">
          {$character[_.stepName.toLocaleLowerCase()] || `Select ${_.stepName}`}
        </div>
      </StepperItem>
    {/each}
  </Stepper>

  <form class="flex h-full w-full flex-col" method="post">
    <!-- {#if step === 1} -->
    <div class="h-full">
      <div>
        <Label for="characterName">Character Name</Label>
        <Input
          id="characterName"
          type="text"
          placeholder="Enter your character's name"
          bind:value={$character.name}
        />
      </div>
      <!-- <Form.Field {form} name="characterType">
          <Form.Control let:attrs>
            <RadioGroup.Root bind:value={$formData.characterType}>
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="freeform" id="freeform" />
                <Label for="freeform">Freeform Character</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="quickStart" id="quickStart" />
                <Label for="quickStart">Quickstart Character</Label>
              </div>
            </RadioGroup.Root>
          </Form.Control>
          <Form.Description>Choose the type of character you want to create</Form.Description>
          <Form.FieldErrors />
        </Form.Field> -->
    </div>
    <!-- {:else if step === 2} -->
    <div class="h-full">
      <CharacterOptionSelect
        options={bloodlines}
        optionType="bloodline"
        on:select={(e) => {
          $character.bloodline = e.detail;
        }}
      />
    </div>
    <!-- {:else if step === 3} -->
    <div class="h-full">
      <CharacterOptionSelect
        options={origins}
        optionType="origin"
        on:select={(e) => {
          $character.origin = e.detail;
        }}
      />
    </div>
    <!-- {:else if step === 4} -->
    <div class="h-full">
      <CharacterOptionSelect
        options={posts}
        optionType="post"
        on:select={(e) => {
          $character.post = e.detail;
        }}
      />
    </div>
    <!-- {/if} -->

    <div class="flex justify-between py-4">
      {#if step === steps.length}
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
        <Button class="space-x-1 text-base">
          Next
          <Icon icon="ph:arrow-right-light" class="h-5 w-5" />
        </Button>
      {/if}
    </div>
  </form>
</div>
