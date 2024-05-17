<script lang="ts">
  import * as Form from '$lib/components/ui/form';
  import { Stepper, StepperItem } from '$lib/components/ui/stepper';
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
  import { page } from '$app/stores';
  import { cn } from '$lib/utils';
  import Icon from '@iconify/svelte';
  import type { Bloodline } from '$lib/types/sanity.types';
  import { type Writable, writable } from 'svelte/store';
  import CharacterOptionSelect from './character-option-select.svelte';
  import { z } from 'zod';

  export let bloodlines: string[];
  export let origins: string[];
  export let posts: string[];

  export let data;

  let skillsAndLanguages = ['Grace', 'Teeth', 'Veils', 'Instincts'];



  const steps = [
    {
      stepName: 'Name',
      validator: zod(characterSchemaStep1)
    },
    {
      stepName: 'Bloodline',
      validator: zod(characterSchemaStep2),
      children: [
        { stepName: 'Edges', validator: null },
        { stepName: 'Skills / Languages', validator: null },
        { stepName: 'Resources', validator: null },
        { stepName: 'Drives', validator: null },
        { stepName: 'Edges', validator: null },
      ]
    },
    {
      stepName: 'Origin',
      validator: zod(characterSchemaStep3)
    },
    {
      stepName: 'Post',
      validator: zod(characterSchemaStep4)
    },
    {
      stepName: 'Skills / Languages',
      validator: zod(characterSchemaStep4.extend({
        skillsLanguages: z.enum(skillsAndLanguages).array().min(3).max(3)
      }))
    },
    {
      stepName: 'Edges',
      validator: null
    },
    {
      stepName: 'Resources',
      validator: null
    },
    {
      stepName: 'Drives',
      validator: null
    },
    {
      stepName: 'Mires',
      validator: null
    }
  ];

  let step = 0;

  $: options.validators = steps[step].validator ?? undefined;

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

<div class="max-w-8xl flex h-full flex-row gap-2">
  <Stepper>
    {#each steps as _, i}
      <StepperItem label={_.stepName} active={i === step} completed={i < step}>
        <div class="text-muted-foreground text-sm">
          {$formData[_.stepName.toLocaleLowerCase()] || `Select ${_.stepName}`}
        </div>
      </StepperItem>
    {/each}
  </Stepper>

  <form class="flex h-full w-full flex-col px-4" method="post" use:enhance>
    <div class="h-[500px]">
      {#if step === 0}
        <Form.Field {form} name="name">
          <Form.Control let:attrs>
            <Input
              {...attrs}
              bind:value={$formData.name}
              placeholder="Enter your character's name"
            />
          </Form.Control>
          <Form.FieldErrors />
        </Form.Field>
        <Form.Field {form} name="characterType">
          <Form.Control let:attrs>
            <RadioGroup.Root class="flex flex-col space-y-1" bind:value={$formData.characterType}>
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
      {:else if step === 1}
        <CharacterOptionSelect
          options={bloodlines}
          optionType="bloodline"
          on:select={(e) => {
            $formData['bloodline'] = e.detail;
          }}
        />
      {:else if step === 2}
        <CharacterOptionSelect
          options={origins}
          optionType="origin"
          on:select={(e) => {
            $formData['origin'] = e.detail;
          }}
        />
      {:else if step === 3}
        <CharacterOptionSelect
          options={posts}
          optionType="post"
          on:select={(e) => {
            $formData['post'] = e.detail;
          }}
        />
      {:else if step === 4}
        <CharacterOptionSelect
          options={skillsAndLanguages}
          optionType="skill"
          on:select={(e) => {
            $formData['skill'] = e.detail;
          }}
        />
      {/if}
    </div>

    <div class="mt-4 flex justify-between py-4">
      {#if step === steps.length - 1}
        <Form.Button class="space-x-1 text-base" on:click={() => step--}>
          <Icon icon="ph:arrow-left-light" class="mr-2 h-5 w-5" />
          Back
        </Form.Button>
        <Form.Button variant="success" class="space-x-1 text-base" {disabled}>
          <Icon icon="ph:check-light" class="mr-2 h-5 w-5" />
          Create
        </Form.Button>
      {:else}
        <Form.Button class="space-x-1 text-base" disabled={step === 0} on:click={() => step--}>
          <Icon icon="ph:arrow-left-light" class="mr-2 h-5 w-5" />
          Back
        </Form.Button>
        <Form.Button class="space-x-1 text-base" {disabled}>
          Next
          <Icon icon="ph:arrow-right-light" class="ml-2 h-5 w-5" />
        </Form.Button>
      {/if}
    </div>
    <SuperDebug data={$formData} />
  </form>
</div>
