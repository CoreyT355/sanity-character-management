<script lang="ts">
  import * as Form from '$lib/components/ui/form';
  import { Badge } from '$lib/components/ui/badge';
  import { Input } from '$lib/components/ui/input';
  import {
    characterSchemaStep1,
    characterSchemaStep2,
    characterSchemaStep3,
    characterSchemaStep4
  } from '$lib/schema/create-character';
  import SuperDebug, { superForm } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import * as RadioGroup from '$lib/components/ui/radio-group';
  import Label from '$lib/components/ui/label/label.svelte';
  import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
  import { page } from '$app/stores';
  import { cn } from '$lib/utils';
  import Icon from '@iconify/svelte';
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import type { Bloodline } from '$lib/types/sanity.types';
  import { type Writable, writable } from 'svelte/store';
  import CharacterOptionSelect from '../character-option-select.svelte';

  export let bloodlines: string[];
  export let origins: string[];
  export let posts: string[];

  export let data;

  const steps = [
    {
      stepName: 'Name',
      validator: zod(characterSchemaStep1)
    },
    {
      stepName: 'Bloodline',
      validator: zod(characterSchemaStep2)
    },
    {
      stepName: 'Origin',
      validator: zod(characterSchemaStep3)
    },
    {
      stepName: 'Post',
      validator: zod(characterSchemaStep4)
    }
  ];

  let step = 1;

  $: options.validators = steps[step - 1].validator;

  const form = superForm(data, {
    dataType: 'json',
    async onSubmit({ cancel }) {
      if (step === steps.length) return;
      else cancel();

      const result = await validateForm({ update: true });
      if (result.valid) {
        initialStepData = $formData;
        step++;
      }
    },
    async onUpdated({ form }) {
      if (form.valid) {
        initialStepData = $formData;
        step++;
      }
    }
  });

  const { form: formData, allErrors, message, enhance, validateForm, options } = form;

  let initialStepData: Record<string, unknown> = $formData;

  $: disabled = initialStepData == $formData || !!$allErrors.length;

  let selectedBloodline: Writable<Bloodline> = writable({} as Bloodline);
  let selectedOrigin: Writable<Bloodline> = writable({} as Bloodline);
  let selectedPost: Writable<Bloodline> = writable({} as Bloodline);
</script>

{#if $message}
  <div class="status" class:error={$page.status >= 400} class:success={$page.status == 200}>
    {$message}
  </div>
{/if}

<div class="flex h-full flex-row gap-2">
  <div class="flex justify-center py-4 align-middle">
    <!-- <Separator class="" orientation="vertical" /> -->
    <div class="flex w-full flex-col items-center justify-between gap-4">
      {#each steps as _, i}
        <div class={cn(i + 1 === step ? 'flex-1' : '', 'transition-all duration-500')}>
          <Badge class={cn(i + 1 === step ? 'bg-purple-500' : '', 'w-28 rounded-sm')}>
            <div class="flex flex-col gap-1">
              <div class="text-base">{_.stepName}</div>
              <div class="text-sm">{$formData[_.stepName.toLocaleLowerCase()]}</div>
            </div>
          </Badge>
        </div>
      {/each}
    </div>
  </div>

  <form class="w-full flex flex-col" method="post" use:enhance>
    {#if step === 1}
      <div
        class="h-full"
        transition:slide={{ delay: 100, duration: 500, easing: quintOut, axis: 'y' }}
      >
        <Form.Field {form} name="name">
          <Form.Control let:attrs>
            <Form.Label>Name:</Form.Label>
            <Input {...attrs} bind:value={$formData.name} />
          </Form.Control>
          <Form.Description>The name for this character</Form.Description>
          <Form.FieldErrors />
        </Form.Field>
        <Form.Field {form} name="characterType">
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
        </Form.Field>
      </div>
    {:else if step === 2}
      <div
        class="h-full"
        transition:slide={{ delay: 100, duration: 1500, easing: quintOut, axis: 'y' }}
      >
        <CharacterOptionSelect
          {form}
          options={bloodlines}
          optionType="bloodline"
          on:select={(e) => {
            $formData['bloodline'] = e.detail;
          }}
        />
      </div>
    {:else if step === 3}
      <div
        class="h-full"
        transition:slide={{ delay: 100, duration: 1500, easing: quintOut, axis: 'y' }}
      >
        <CharacterOptionSelect
          {form}
          options={origins}
          optionType="origin"
          on:select={(e) => {
            $formData['origin'] = e.detail;
          }}
        />
      </div>
    {:else if step === 4}
      <div
        class="h-full"
        transition:slide={{ delay: 100, duration: 1500, easing: quintOut, axis: 'y' }}
      >
        <CharacterOptionSelect
          {form}
          options={posts}
          optionType="post"
          on:select={(e) => {
            $formData['post'] = e.detail;
          }}
        />
      </div>
    {/if}

    <div class="flex justify-between py-4">
      {#if step === steps.length}
        <Form.Button class="space-x-1 text-base" on:click={() => step--}>
          <Icon icon="ph:arrow-left-light" class="h-5 w-5" />
          Back
        </Form.Button>
        <Form.Button class="space-x-1 bg-green-500 text-base" {disabled}>Create</Form.Button>
      {:else}
        <Form.Button class="space-x-1 text-base" disabled={step === 1} on:click={() => step--}>
          <Icon icon="ph:arrow-left-light" class="h-5 w-5" />
          Back
        </Form.Button>
        <Form.Button class="space-x-1 text-base" {disabled}>
          Next
          <Icon icon="ph:arrow-right-light" class="h-5 w-5" />
        </Form.Button>
      {/if}
    </div>
    <SuperDebug data={$formData} />
  </form>
</div>
