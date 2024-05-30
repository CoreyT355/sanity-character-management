<script lang="ts">
  import { Button, Input, Select, Tooltip } from 'flowbite-svelte';
  import SheetCard from '$lib/components/SheetCard/SheetCard.svelte';
  import SectionHeader from '$lib/components/SectionHeader/SectionHeader.svelte';
  import RankInput from '$lib/components/RankInput/RankInput.svelte';
  import Mire from '$lib/components/Mire/Mire.svelte';
  import { isEditing } from '$lib/store/characters.js';
  import { beforeNavigate } from '$app/navigation';
  import { getToastStore } from '$lib/components/Toast/store.js';
  import type { ToastSettings } from '$lib/components/Toast/types.js';
  // import { currentCharacter } from '$lib/store/characters.js';
  import SuperDebug, { superForm } from 'sveltekit-superforms';
  import { enhance } from '$app/forms';

  export let data;

  beforeNavigate(() => {
    isEditing.set(false);
  });

  const { bloodlines, edges, languages, origins, posts, skills } = data;

  const { form } = superForm(data.form, {
    applyAction: true,
    dataType: 'json'
  });

  $: console.log('CHARACTER FROM STORE', $form);

  const toastStore = getToastStore();

  const toastError: ToastSettings = {
    message: 'Failed to save character.',
    position: 'top-right',
    color: 'destructive',
    hideDismiss: false
  };

  const toastSuccess: ToastSettings = {
    message: 'Character saved successfully.',
    position: 'top-right',
    color: 'green',
    hideDismiss: false
  };
</script>

<form
  id="characterForm"
  use:enhance={() => {
    return async ({result}) => {
      if (result.type === 'success') {
        isEditing.set(false);
        toastStore.trigger(toastSuccess);
      } else {
        toastStore.trigger(toastError);
      }
    };
  }}
  method="post"
  action="?/save"
  class="flex h-full w-full flex-col gap-3"
>
  <div class="flex flex-col gap-3 md:flex-row">
    <!-- Left Column -->
    <div class="h-full w-full space-y-4 lg:w-5/12">
      <!-- First Row -->
      <div class="grid grid-cols-1 gap-4 xl:grid-cols-[auto_1fr]">
        <!-- Edges -->
        <SheetCard color="success" label="Edges">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-2">
            {#each edges as edge}
              <div class="flex flex-row items-center justify-start gap-3">
                <span class="text-base w-20">
                  {edge.displayName}
                </span>
                <Tooltip defaultClass="py-2 px-3 max-w-64 z-10">{edge.summary}</Tooltip>
                <RankInput
                  class="place-self-end"
                  name={edge._id}
                  disabled={!$isEditing}
                  maxRanks={1}
                  currentRank={$form.edges[edge._id]}
                  on:click={(event) => ($form.edges[edge._id] = event.detail)}
                />
              </div>
            {/each}
          </div>
        </SheetCard>
        <!-- Languages -->
        <SheetCard color="info" label="Languages">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 lg:grid-cols-2">
            {#each languages as language}
              <div class="flex max-w-72 flex-row items-center justify-start">
                <span class="capitalize w-32">{language.displayName}</span>
                <Tooltip defaultClass="py-2 px-3 max-w-64 z-10">{language.description}</Tooltip>
                <RankInput
                  name={language._id}
                  disabled={!$isEditing}
                  maxRanks={3}
                  currentRank={$form.languages[language._id]}
                  on:click={(event) => ($form.languages[language._id] = event.detail)}
                />
              </div>
            {/each}
          </div>
        </SheetCard>
      </div>
      <!-- Skills -->
      <SheetCard class="w-full" color="violet" label="Skills">
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-2">
          {#each skills as skill}
            <div class="flex max-w-64 flex-row items-center justify-start">
              <span class="capitalize w-24">{skill.name}</span>
              <Tooltip defaultClass="py-2 px-3 w-80 z-10 flex flex-col gap-3">
                <div><span class="text-base font-bold">Description:</span> {skill.description}</div>
                <div><span class="text-base font-bold">Examples:</span> {skill.exampleUses}</div>
              </Tooltip>
              <RankInput
                name={skill._id}
                maxRanks={3}
                disabled={!$isEditing}
                currentRank={$form.skills[skill._id]}
                on:click={(event) => ($form.skills[skill._id] = event.detail)}
              />
            </div>
          {/each}
        </div>
      </SheetCard>
      <!-- Drives -->
      <SheetCard class="w-full" label="Drives">
        <div class="flex flex-col gap-2">
          {#each $form.drives as drive, i}
            <Input
              name="drive"
              disabled={!$isEditing}
              bind:value={drive}
              placeholder="Enter a Drive..."
            />
            {#if !$isEditing}
              <Tooltip>{drive}</Tooltip>
            {/if}
          {:else}
            <span>No Drives Yet</span>
          {/each}
          {#if $isEditing}
            <Button
              outline
              color="dark"
              on:click={() => ($form.drives = [...$form.drives, ''])}
              >Add Drive</Button
            >
          {/if}
        </div>
      </SheetCard>
      <!-- Mires -->
      <SheetCard class="w-full" label="Mires">
        <div class="flex flex-col gap-4">
          {#each $form.mires as mire, i}
            <Mire
              name={`mire-${i}`}
              disabled={!$isEditing}
              description={mire.text}
              currentTrack={mire.currentTrack || [0, 0]}
            />
          {:else}
            <span>No Mires Yet</span>
          {/each}
          {#if $isEditing}
            <Button
              outline
              color="dark"
              on:click={() =>
                ($form.mires = [
                  ...$form.mires,
                  { text: '', currentTrack: [0, 0] }
                ])}>Add Mire</Button
            >
          {/if}
        </div>
      </SheetCard>
    </div>
    <!-- Right Column -->
    <div class="flex h-full w-full flex-col lg:w-7/12">
      <!-- Background Info -->
      <SheetCard class="w-full" label="Background">
        <div class="grid grid-cols-2 gap-x-6 gap-y-2">
          <div class="flex h-10 flex-row items-center gap-4">
            <span class="w-24 text-base">Name</span>
            <Input
              name="name"
              disabled={!$isEditing}
              placeholder="Enter your character's name"
              bind:value={$form.name}
            />
          </div>
          <div class="flex h-10 flex-row items-center gap-4">
            <span class="w-24 text-base">Bloodline</span>
            <Select
              name="bloodline"
              disabled={!$isEditing}
              placeholder="Select a Bloodline..."
              items={bloodlines.map((b) => ({ name: b.name || '', value: b._id }))}
              bind:value={$form.bloodline}
            />
          </div>
          <div class="flex flex-row items-center justify-between gap-4">
            <span class="w-24 text-base">Player</span>
            <Input
              name="player"
              disabled={!$isEditing}
              placeholder="Enter your name"
              bind:value={$form.player}
            />
          </div>
          <div class="flex flex-row items-center justify-between gap-4">
            <span class="w-24 text-base">Origin</span>
            <Select
              name="origin"
              disabled={!$isEditing}
              placeholder="Select an Origin..."
              items={origins.map((origin) => ({ name: origin.name || '', value: origin._id }))}
              bind:value={$form.origin}
            />
          </div>
          <div class="col-start-2 flex flex-row items-center justify-between gap-4">
            <span class="w-24 text-base">Post</span>
            <Select
              name="post"
              disabled={!$isEditing}
              placeholder="Select a Post..."
              items={posts.map((p) => ({ name: p.name || '', value: p._id }))}
              bind:value={$form.post}
            />
          </div>
        </div>
      </SheetCard>
      <div class="mt-10 flex flex-col gap-3">
        <SectionHeader color="default" label="Resources"></SectionHeader>
        <div class="flex w-full gap-4">
          <SheetCard class="h-full w-full" label="Salvage">
            <div class="space-y-3">
              {#each $form.salvage as salvage, i}
                <Input name={`salvage-${i}`} disabled={!$isEditing} bind:value={salvage.text} />
                {#if !$isEditing}
                  <Tooltip>{salvage.text}</Tooltip>
                {/if}
              {/each}
            </div>
          </SheetCard>
          <SheetCard class="h-full w-full" label="Specimens">
            <div class="space-y-3">
              {#each $form.specimens as specimen, i}
                <Input name={`specimen-${i}`} disabled={!$isEditing} bind:value={specimen.text} />
                {#if !$isEditing}
                  <Tooltip>{specimen.text}</Tooltip>
                {/if}
              {/each}
            </div>
          </SheetCard>
        </div>
        <div class="mt-4 flex w-full gap-4">
          <SheetCard class="h-full w-full" label="Whispers">
            <div class="space-y-3">
              {#each $form.whispers as whisper, i}
                <Input name={`whisper-${i}`} disabled={!$isEditing} bind:value={whisper.text} />
                {#if !$isEditing}
                  <Tooltip>{whisper.text}</Tooltip>
                {/if}
              {/each}
            </div>
          </SheetCard>
          <SheetCard class="h-full w-full" label="Charts">
            <div class="space-y-3">
              {#each $form.charts as chart, i}
                <Input name={`chart-${i}`} disabled={!$isEditing} bind:value={chart.text} />
                {#if !$isEditing}
                  <Tooltip>{chart.text}</Tooltip>
                {/if}
              {/each}
            </div>
          </SheetCard>
        </div>
        {#if $isEditing}
          <div class="flex flex-row gap-4">
            <Input class="w-2/3" placeholder="Resource..." />
            <Select
              class="w-1/3"
              placeholder="Resource type..."
              items={[
                { name: 'Salvage', value: 'salvage' },
                { name: 'Specimen', value: 'specimens' },
                { name: 'Whisper', value: 'whispers' },
                { name: 'Chart', value: 'charts' }
              ]}
            />
          </div>
          <Button outline color="dark">Add Resource</Button>
        {/if}
      </div>
      <div class="mt-10 flex flex-col gap-3">
        <SectionHeader color="default" label="Milestones"></SectionHeader>
        <div class="flex w-full gap-4">
          <SheetCard class="h-full w-full" label="Major">
            {#if $form.majorMilestones}
              {#each $form.majorMilestones as majorMilestone, i}
                <Input
                  name={`major-milestone-${i}`}
                  disabled={!$isEditing}
                  bind:value={majorMilestone}
                />
              {/each}
            {/if}
          </SheetCard>
          <SheetCard class="h-full w-full" label="Minor">
            {#if $form.minorMilestones}
              {#each $form.minorMilestones as minorMilestone, i}
                <Input
                  name={`minor-milestone-${i}`}
                  disabled={!$isEditing}
                  bind:value={minorMilestone}
                />
              {/each}
            {/if}
          </SheetCard>
        </div>
      </div>
    </div>
  </div>
  <!-- <div>
    <SuperDebug data={$form} />
  </div> -->
</form>
