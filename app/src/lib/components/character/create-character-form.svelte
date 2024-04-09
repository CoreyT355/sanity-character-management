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
  import * as Select from '$lib/components/ui/select';
  import Label from '$lib/components/ui/label/label.svelte';
  import { page } from '$app/stores';
  import { cn } from '$lib/utils';
  import Icon from '@iconify/svelte';
  import { string } from 'zod';
  import { getCharacterOption } from '$lib/utils/sanity';

  export let bloodlines: string[];
  export let origins: string[];
  export let posts: string[];

  export let data;

  const steps = [
    zod(characterSchemaStep1),
    zod(characterSchemaStep2),
    zod(characterSchemaStep3),
    zod(characterSchemaStep4)
  ];

  let step = 1;

  $: options.validators = steps[step - 1];

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

  let selectedBloodline;
</script>

{#if $message}
  <div class="status" class:error={$page.status >= 400} class:success={$page.status == 200}>
    {$message}
  </div>
{/if}

<form method="post" use:enhance>
  <div class="mt-[15px] flex border-t py-4">
    <div class="-mt-[37px] flex w-full flex-row items-center justify-between gap-4">
      {#each steps as _, i}
        <div class={cn(i + 1 === step ? 'flex-1' : '', 'transition-all duration-500')}>
          <Badge class={cn(i + 1 === step ? 'bg-purple-800' : '')}>
            {i + 1}
          </Badge>
        </div>
      {/each}
    </div>
  </div>

  {#if step === 1}
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
  {:else if step === 2}
    <Form.Field {form} name="bloodline">
      <Form.Control let:attrs>
        <Form.Label>Bloodline:</Form.Label>
        <Select.Root
          selected={$formData.bloodline}
          onSelectedChange={(v) => {
            v && ($formData.bloodline = v.value);
          }}
        >
          <Select.Trigger {...attrs} class="w-44">
            <Select.Value placeholder="Select a Bloodline" />
          </Select.Trigger>
          <Select.Content>
            {#each bloodlines as bloodline}
              <Select.Item value={bloodline} />
            {/each}
          </Select.Content>
        </Select.Root>
      </Form.Control>
      <Form.Description>
        {selectedBloodline}
      </Form.Description>
      <Form.FieldErrors />
    </Form.Field>
  {:else if step === 3}
    <Form.Field {form} name="origin">
      <Form.Control let:attrs>
        <Form.Label>Origin:</Form.Label>
        <Select.Root
          selected={$formData.origin}
          onSelectedChange={(v) => {
            v && ($formData.origin = v.value);
          }}
        >
          <Select.Trigger {...attrs} class="w-44">
            <Select.Value placeholder="Select an Origin" />
          </Select.Trigger>
          <Select.Content>
            {#each origins as origin}
              <Select.Item value={origin} />
            {/each}
          </Select.Content>
        </Select.Root>
      </Form.Control>
      <Form.Description>The Origin of this character</Form.Description>
      <Form.FieldErrors />
    </Form.Field>
  {:else if step === 4}
    <Form.Field {form} name="post">
      <Form.Control let:attrs>
        <Form.Label>Post:</Form.Label>
        <Select.Root
          selected={$formData.post}
          onSelectedChange={(v) => {
            v && ($formData.post = v.value);
          }}
        >
          <Select.Trigger {...attrs} class="w-44">
            <Select.Value placeholder="Select a Post" />
          </Select.Trigger>
          <Select.Content>
            {#each posts as post}
              <Select.Item value={post} />
            {/each}
          </Select.Content>
        </Select.Root>
      </Form.Control>
      <Form.Description>The Post of this character</Form.Description>
      <Form.FieldErrors />
    </Form.Field>
  {/if}

  <div class="flex justify-between py-4">
    {#if step === steps.length}
      <Form.Button class="text-base space-x-1" on:click={ () => step-- }>
        <Icon icon="ph:arrow-left-light" class="h-5 w-5" />
        Back
      </Form.Button>
      <Form.Button class="text-base space-x-1 bg-green-500" disabled={disabled}>
        Create
      </Form.Button>
    {:else}
      <Form.Button class="text-base space-x-1" disabled={step === 1} on:click={ () => step-- }>
        <Icon icon="ph:arrow-left-light" class="h-5 w-5" />
        Back
      </Form.Button>
      <Form.Button class="text-base space-x-1" disabled={disabled}>
        Next
        <Icon icon="ph:arrow-right-light" class="h-5 w-5" />
      </Form.Button>
    {/if}
  </div>

  <SuperDebug data={$formData} />
</form>
