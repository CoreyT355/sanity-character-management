<script lang="ts">
  import SheetCard from '$lib/components/SheetCard/SheetCard.svelte';
  import SectionHeader from '$lib/components/SectionHeader/SectionHeader.svelte';
  import RankInput from '$lib/components/RankInput/RankInput.svelte';
  import Mire from '$lib/components/Mire/Mire.svelte';
  import { isEditing } from '$lib/store/characters.js';
  import { beforeNavigate, goto } from '$app/navigation';
  import SuperDebug, { superForm } from 'sveltekit-superforms';
  import ToolTip from '$lib/components/ToolTip/ToolTip.svelte';
  import {
    getDrawerStore,
    getModalStore,
    getToastStore,
    popup,
    type ModalSettings
  } from '@skeletonlabs/skeleton';
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';

  export let data;

  const drawerStore = getDrawerStore();
  const modalStore = getModalStore();
  const toastStore = getToastStore();

  beforeNavigate(() => {
    isEditing.set(false);
  });

  const { bloodlines, edges, languages, origins, posts, skills, session, supabase } = data;

  const { form, enhance } = superForm(data.form, {
    applyAction: true,
    dataType: 'json',
    onUpdated: ({ form }) => {
      if (form.posted) {
        toastStore.trigger({
          message: 'Character saved successfully!',
          background: 'variant-filled-success'
        });
        goto(`/characters/${form.data.id}/sheet`);
      } else {
        toastStore.trigger({
          message: 'Oh no...Something went wrong.',
          background: 'variant-filled-error'
        });
      }
    }
  });

  $: console.log('CHARACTER FROM STORE', $form);

  const modalResourceFormSettings: ModalSettings = {
    title: 'Add a new Resource',
    type: 'component',
    component: 'modalResourceForm',
    response(response) {
      if (!response) {
        modalStore.close();
      }
      $form.player_character_resources = [
        ...$form.player_character_resources,
        {
          player_character_id: response.player_character_id,
          text: response.text,
          tags: response.tags,
          type: response.type
        }
      ];
      modalStore.close();
    }
  };

  const deleteResource = async (resourceId: string) => {
    const { error } = await supabase
      .from('player_character_resources')
      .delete()
      .eq('id', resourceId);
    if (error) {
      console.log('Error deleting resource', error);
      toastStore.trigger({
        message: 'Something went wrong.'
      });
    }
    const { data } = await supabase
      .from('player_character_resources')
      .select()
      .eq('player_character_id', $page.params.id);
  };

  const handleDeleteResource = async (resourceId: string) => {
    console.log('TACOCAT handle ID', resourceId);
    const deleteConfirm: ModalSettings = {
      type: 'confirm',
      title: 'Please Confirm',
      body: 'Are you sure you want to delete this resource? This action cannot be undone.',
      response(response) {
        if (response) {
          deleteResource(resourceId);
          toastStore.trigger({
            message: 'Resource deleted successfully.'
          });
        }
      }
    };

    modalStore.trigger(deleteConfirm);
  };
</script>

<form use:enhance method="POST" action="?/save" class="flex h-full w-full flex-col gap-3">
  <div class="flex flex-col gap-3 md:flex-row">
    <!-- Left Column -->
    <div class="h-full w-full space-y-4 lg:w-5/12">
      <!-- First Row -->
      <div class="grid grid-cols-1 gap-4 xl:grid-cols-[auto_1fr]">
        <!-- Edges -->
        <SheetCard color="success" label="Edges">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-1">
            {#each edges as edge}
              <div class="flex flex-row justify-start gap-3">
                <span
                  class="text-base w-20"
                  use:popup={{
                    event: 'hover',
                    target: `tooltip-${edge._id}`
                  }}
                >
                  {edge.displayName}
                </span>
                <ToolTip popupName={`tooltip-${edge._id}`}>
                  <div class="flex flex-col justify-start gap-2">
                    <span class="uppercase font-semibold place-self-center">edge</span>
                    <span class="border-b"></span>
                    <span class="font-semibold">Name: {edge.displayName}</span>
                    <span>{edge.description}</span>
                  </div>
                </ToolTip>
                <RankInput
                  class="place-self-end"
                  disabled={!$isEditing}
                  maxValue={1}
                  bind:value={$form.edges[edge._id]}
                />
              </div>
            {/each}
          </div>
        </SheetCard>
        <!-- Languages -->
        <SheetCard color="info" label="Languages">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 lg:grid-cols-2">
            {#each languages as language}
              <div class="flex max-w-72 flex-row justify-start">
                <span
                  class="text-base w-32"
                  use:popup={{
                    event: 'hover',
                    target: `tooltip-${language._id}`
                  }}
                >
                  {language.displayName}
                </span>
                <ToolTip popupName={`tooltip-${language._id}`}
                  ><div class="flex flex-col justify-start gap-2">
                    <span class="uppercase font-semibold place-self-center">language</span>
                    <span class="border-b"></span>
                    <span class="font-semibold">Name: {language.displayName}</span>
                    <span>{language.description}</span>
                  </div></ToolTip
                >
                <RankInput
                  disabled={!$isEditing}
                  maxValue={3}
                  bind:value={$form.languages[language._id]}
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
            <div class="flex max-w-64 flex-row justify-start">
              <span
                class="text-base w-32"
                use:popup={{
                  event: 'hover',
                  target: `tooltip-${skill._id}`
                }}
              >
                {skill.displayName}
              </span>
              <ToolTip popupName={`tooltip-${skill._id}`}
                ><div class="flex flex-col justify-start gap-2">
                  <span class="uppercase font-semibold place-self-center">skill</span>
                  <span class="border-b"></span>
                  <span class="font-semibold">Name: {skill.displayName}</span>
                  <span>{skill.description}</span>
                </div></ToolTip
              >
              <RankInput maxValue={3} disabled={!$isEditing} bind:value={$form.skills[skill._id]} />
            </div>
          {/each}
        </div>
      </SheetCard>
      <!-- Drives -->
      <SheetCard class="w-full" label="Drives">
        <div class="flex flex-col gap-2">
          {#each $form.drives as drive, i}
            <input
              class="input"
              disabled={!$isEditing}
              bind:value={drive}
              placeholder="Enter a Drive..."
              use:popup={{ event: 'hover', target: `tooltip-drive-${i}` }}
            />
            {#if !$isEditing}
              <ToolTip popupName={`tooltip-drive-${i}`}>{drive}</ToolTip>
            {/if}
          {:else}
            <span>No Drives Yet</span>
          {/each}
          {#if $isEditing}
            <button
              class="btn variant-outline-tertiary"
              type="button"
              on:click={() => ($form.drives = [...$form.drives, ''])}>Add Drive</button
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
              bind:description={$form.mires[i].text}
              bind:currentTrack={$form.mires[i].currentTrack}
            />
          {:else}
            <span>No Mires Yet</span>
          {/each}
          {#if $isEditing}
            <button
              class="btn variant-outline-tertiary"
              type="button"
              on:click={() => ($form.mires = [...$form.mires, { text: '', currentTrack: [0, 0] }])}
              >Add Mire</button
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
            <span class="text-base">Name</span>
            <input
              class="input"
              disabled={!$isEditing}
              placeholder="Enter your character's name"
              bind:value={$form.name}
            />
          </div>
          <div class="flex h-10 flex-row items-center gap-4">
            <span class="w-24 text-base">Bloodline</span>
            <select
              class="select"
              disabled={!$isEditing}
              placeholder="Select a Bloodline..."
              bind:value={$form.bloodline}
            >
              <option value="">Select a Bloodline...</option>
              {#each bloodlines as bloodline}
                <option value={bloodline._id}>{bloodline.name}</option>
              {/each}
            </select>
          </div>
          <div class="flex flex-row items-center justify-between gap-4">
            <span class="text-base">Player</span>
            <input
              class="input"
              disabled={!$isEditing}
              placeholder="Enter your name"
              bind:value={$form.player}
            />
          </div>
          <div class="flex flex-row items-center justify-between gap-4">
            <span class="w-24 text-base">Origin</span>
            <select
              class="select"
              disabled={!$isEditing}
              placeholder="Select a Origin..."
              bind:value={$form.origin}
            >
              <option value="">Select an Origin...</option>
              {#each origins as origin}
                <option value={origin._id}>{origin.name}</option>
              {/each}
            </select>
          </div>
          <div class="col-start-2 flex flex-row items-center justify-between gap-4">
            <span class="w-24 text-base">Post</span>
            <select
              class="select"
              disabled={!$isEditing}
              placeholder="Select a Post..."
              bind:value={$form.post}
            >
              <option value="">Select a Post...</option>
              {#each posts as post}
                <option value={post._id}>{post.name}</option>
              {/each}
            </select>
          </div>
        </div>
      </SheetCard>
      <div class="mt-10 flex flex-col gap-3">
        <SectionHeader color="default" label="Resources"></SectionHeader>
        <div class="flex w-full gap-4">
          <SheetCard class="h-full w-full" label="Salvage">
            <div class="space-y-3">
              {#each $form.player_character_resources.filter((salvage) => salvage.type === 'salvage') as salvage, i}
                <div class="flex flex-row gap-3">
                  <div class="input-group group grid-cols-[1fr_auto]">
                    <input
                      class="input"
                      name={`salvage-${i}`}
                      disabled={!$isEditing}
                      bind:value={salvage.text}
                      use:popup={{
                        event: 'hover',
                        target: !$isEditing ? `tooltip-salvage-${i}` : ''
                      }}
                    />
                    <div class="flex flex-row gap-2 py-2">
                      {#each salvage.tags as tag}
                        <span class="badge variant-filled-secondary">{tag}</span>
                      {/each}
                    </div>
                  </div>
                  {#if $isEditing}
                    <div
                      class="flex flex-row gap-3 items-center"
                      in:fade={{ duration: 500 }}
                      out:fade={{ duration: 250 }}
                    >
                      <!-- <button
                        type="button"
                        title="delete resource"
                        class="bg-blue-600 ring h-8 w-8 rounded-full p-1 ring-blue-600 hover:ring-blue-500"
                        on:click={() => handleDeleteResource(salvage.id)}
                      >
                        <span class="icon-[ph--pencil-light] h-6 w-6"></span>
                      </button> -->
                      <button
                        type="button"
                        title="delete resource"
                        class="bg-red-600 ring h-8 w-8 rounded-full p-1 ring-red-600 hover:ring-red-500"
                        on:click={() => handleDeleteResource(salvage.id)}
                      >
                        <span class="icon-[ph--trash-light] h-6 w-6"></span>
                      </button>
                    </div>
                  {/if}
                </div>

                <ToolTip popupName={`tooltip-salvage-${i}`}>
                  <div class="flex flex-col justify-start gap-2">
                    <span class="uppercase font-semibold place-self-center">salvage</span>
                    <span class="border-b"></span>
                    <span class="font-semibold">Name: {salvage.text}</span>
                    <span
                      >Tags: {#each salvage.tags as tag}
                        <span class="badge variant-filled-secondary">{tag}</span>
                      {:else}
                        <span>none</span>
                      {/each}</span
                    >
                  </div>
                </ToolTip>
              {/each}
            </div>
          </SheetCard>
          <SheetCard class="h-full w-full" label="Specimens">
            <div class="space-y-3">
              {#each $form.player_character_resources.filter((specimen) => specimen.type === 'specimens') as specimen, i}
                <div class="input-group grid-cols-[1fr_auto]">
                  <input
                    class="input"
                    name={`specimen-${i}`}
                    disabled={!$isEditing}
                    bind:value={specimen.text}
                    use:popup={{
                      event: 'hover',
                      target: !$isEditing ? `tooltip-specimen-${i}` : ''
                    }}
                  />
                  <div class="flex flex-row gap-2 py-2">
                    {#each specimen.tags as tag}
                      <span class="badge variant-filled-secondary">{tag}</span>
                    {/each}
                  </div>
                </div>
                <ToolTip popupName={`tooltip-specimen-${i}`}>
                  <div class="flex flex-col justify-start gap-2">
                    <span class="uppercase font-semibold place-self-center">specimens</span>
                    <span class="border-b"></span>
                    <span class="font-semibold">Name: {specimen.text}</span>
                    <span
                      >Tags: {#each specimen.tags as tag}
                        <span class="badge variant-filled-secondary">{tag}</span>
                      {:else}
                        <span>none</span>
                      {/each}</span
                    >
                  </div>
                </ToolTip>
              {/each}
            </div>
          </SheetCard>
        </div>
        <div class="mt-4 flex w-full gap-4">
          <SheetCard class="h-full w-full" label="Whispers">
            <div class="space-y-3">
              {#each $form.player_character_resources.filter((whisper) => whisper.type === 'whispers') as whisper, i}
                <div class="input-group grid-cols-[1fr_auto]">
                  <input
                    class="input"
                    name={`whisper-${i}`}
                    disabled={!$isEditing}
                    bind:value={whisper.text}
                    use:popup={{
                      event: 'hover',
                      target: !$isEditing ? `tooltip-whisper-${i}` : ''
                    }}
                  />
                  <div class="flex flex-row gap-2 py-2">
                    {#each whisper.tags as tag}
                      <span class="badge variant-filled-secondary">{tag}</span>
                    {/each}
                  </div>
                </div>
                <ToolTip popupName={`tooltip-whisper-${i}`}>
                  <div class="flex flex-col justify-start gap-2">
                    <span class="uppercase font-semibold place-self-center">whispers</span>
                    <span class="border-b"></span>
                    <span class="font-semibold">Name: {whisper.text}</span>
                    <span
                      >Tags: {#each whisper.tags as tag}
                        <span class="badge variant-filled-secondary">{tag}</span>
                      {:else}
                        <span>none</span>
                      {/each}</span
                    >
                  </div>
                </ToolTip>
              {/each}
            </div>
          </SheetCard>
          <SheetCard class="h-full w-full" label="Charts">
            <div class="space-y-3">
              {#each $form.player_character_resources.filter((chart) => chart.type === 'charts') as chart, i}
                <div class="input-group grid-cols-[1fr_auto]">
                  <input
                    class="input"
                    name={`chart-${i}`}
                    disabled={!$isEditing}
                    bind:value={chart.text}
                    use:popup={{ event: 'hover', target: !$isEditing ? `tooltip-chart-${i}` : '' }}
                  />
                  <div class="flex flex-row gap-2 py-2">
                    {#each chart.tags as tag}
                      <span class="badge variant-filled-secondary">{tag}</span>
                    {/each}
                  </div>
                </div>
                <ToolTip popupName={`tooltip-chart-${i}`}>
                  <div class="flex flex-col justify-start gap-2">
                    <span class="uppercase font-semibold place-self-center">charts</span>
                    <span class="border-b"></span>
                    <span class="font-semibold">Name: {chart.text}</span>
                    <span
                      >Tags: {#each chart.tags as tag}
                        <span class="badge variant-filled-secondary">{tag}</span>
                      {:else}
                        <span>none</span>
                      {/each}</span
                    >
                  </div>
                </ToolTip>
              {/each}
            </div>
          </SheetCard>
        </div>
        {#if $isEditing}
          <button
            type="button"
            class="btn variant-outline-tertiary"
            on:click={() => modalStore.trigger(modalResourceFormSettings)}>Add Resource</button
          >
        {/if}
      </div>
      <div class="mt-10 flex flex-col gap-3">
        <SectionHeader color="default" label="Milestones"></SectionHeader>
        <div class="flex w-full gap-4">
          <SheetCard class="h-full w-full" label="Major">
            {#if $form.majorMilestones}
              {#each $form.majorMilestones as majorMilestone, i}
                <input class="input" disabled={!$isEditing} bind:value={majorMilestone} />
              {/each}
            {/if}
          </SheetCard>
          <SheetCard class="h-full w-full" label="Minor">
            {#if $form.minorMilestones}
              {#each $form.minorMilestones as minorMilestone, i}
                <input class="input" disabled={!$isEditing} bind:value={minorMilestone} />
              {/each}
            {/if}
          </SheetCard>
        </div>
      </div>
    </div>
  </div>
  <div class="fixed end-6 bottom-16 group">
    <ul class="space-y-3 invisible group-hover:visible mb-3">
      <li>
        <button
          type="button"
          class="btn-icon variant-filled-primary ring hover:ring-blue-500"
          name="Help - How to Play"
          on:click={() => drawerStore.open()}
        >
          <span class="icon-[ph--question-mark] h-8 w-8"></span>
        </button>
      </li>
      <li>
        <button
          class="btn-icon variant-filled-primary ring hover:ring-blue-500"
          disabled={!$isEditing}
        >
          <span class="icon-[ph--floppy-disk-back-light] h-8 w-8"></span>
        </button>
      </li>
      <li>
        <button
          type="button"
          class="btn-icon variant-filled-primary ring hover:ring-blue-500"
          name="Cancel"
          disabled={!$isEditing}
          on:click={() => isEditing.set(false)}
        >
          <span class="icon-[ph--x-light] h-8 w-8"></span>
        </button>
      </li>
      <li>
        <button
          type="button"
          class="btn-icon variant-filled-primary ring hover:ring-blue-500"
          name="Edit"
          on:click={() => isEditing.set(true)}
        >
          <span class="icon-[ph--pencil-light] h-8 w-8"></span>
        </button>
      </li>
    </ul>
    <button class="btn-icon variant-filled-tertiary ring hover:ring-indigo-500">
      <span class="icon-[ph--plus] h-8 w-8 hover:rotate-45 transition-all"></span>
    </button>
  </div>
  <!-- <div>
    <SuperDebug data={$form} />
  </div> -->
</form>
