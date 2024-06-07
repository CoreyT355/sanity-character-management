<script lang="ts">
  import SheetCard from '$lib/components/SheetCard/SheetCard.svelte';
  import SectionHeader from '$lib/components/SectionHeader/SectionHeader.svelte';
  import RankInput from '$lib/components/RankInput/RankInput.svelte';
  import Mire from '$lib/components/Mire/Mire.svelte';
  import { isEditing } from '$lib/store/characters.js';
  import { beforeNavigate } from '$app/navigation';
  import SuperDebug, { superForm } from 'sveltekit-superforms';
  import { enhance } from '$app/forms';
  import ToolTip from '$lib/components/ToolTip/ToolTip.svelte';
  import { popup, type PopupSettings } from '@skeletonlabs/skeleton';

  export let data;

  beforeNavigate(() => {
    isEditing.set(false);
  });

  const { bloodlines, edges, languages, origins, posts, skills, form: formData } = data;

  const { form } = superForm(formData, {
    applyAction: false,
    dataType: 'json'
  });

  // $: console.log('CHARACTER FROM STORE', $form);
</script>

<form
  id="characterForm"
  use:enhance={() => {
    return async ({ result }) => {
      if (result.type === 'success') {
        console.log('result', result);

        isEditing.set(false);
      } else {
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
                <span
                  class="text-base w-20"
                  use:popup={{
                    event: 'hover',
                    target: `tooltip-${edge._id}`
                  }}
                >
                  {edge.displayName}
                </span>
                <ToolTip popupName={`tooltip-${edge._id}`}
                  ><div class="flex flex-col justify-start gap-2">
                    <span class="uppercase font-semibold place-self-center">edge</span>
                    <span class="border-b"></span>
                    <span class="font-semibold">Name: {edge.displayName}</span>
                    <span>{edge.description}</span>
                  </div></ToolTip
                >
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
              <div class="flex max-w-72 flex-row items-center justify-start">
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
            <div class="flex max-w-64 flex-row items-center justify-start">
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
              name="drive"
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
              description={mire.text}
              currentTrack={mire.currentTrack || [0, 0]}
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
              name="name"
              disabled={!$isEditing}
              placeholder="Enter your character's name"
              bind:value={$form.name}
            />
          </div>
          <div class="flex h-10 flex-row items-center gap-4">
            <span class="w-24 text-base">Bloodline</span>
            <select
              class="select"
              name="bloodline"
              disabled={!$isEditing}
              placeholder="Select a Bloodline..."
              bind:value={$form.bloodline}
            >
              {#each bloodlines as bloodline}
                <option value={bloodline._id}>{bloodline.name}</option>
              {/each}
            </select>
          </div>
          <div class="flex flex-row items-center justify-between gap-4">
            <span class="text-base">Player</span>
            <input
              class="input"
              name="player"
              disabled={!$isEditing}
              placeholder="Enter your name"
              bind:value={$form.player}
            />
          </div>
          <div class="flex flex-row items-center justify-between gap-4">
            <span class="w-24 text-base">Origin</span>
            <select
              class="select"
              name="origin"
              disabled={!$isEditing}
              placeholder="Select a Origin..."
              bind:value={$form.origin}
            >
              {#each origins as origin}
                <option value={origin._id}>{origin.name}</option>
              {/each}
            </select>
          </div>
          <div class="col-start-2 flex flex-row items-center justify-between gap-4">
            <span class="w-24 text-base">Post</span>
            <select
              class="select"
              name="post"
              disabled={!$isEditing}
              placeholder="Select a Post..."
              bind:value={$form.post}
            >
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
              {#each $form.salvage as salvage, i}
                <div class="input-group grid-cols-[1fr_auto]">
                  <input
                    class="input"
                    name={`salvage-${i}`}
                    disabled={!$isEditing}
                    bind:value={salvage.text}
                    use:popup={{ event: 'hover', target: `tooltip-salvage-${i}` }}
                  />
                  <div class="flex flex-row gap-2 py-2">
                    {#each salvage.tags as tag}
                      <span class="badge variant-filled-secondary">{tag}</span>
                    {/each}
                  </div>
                </div>
                {#if !$isEditing}
                  <ToolTip popupName={`tooltip-salvage-${i}`}>
                    <div class="flex flex-col justify-start gap-2">
                      <span class="uppercase font-semibold place-self-center">salvage</span>
                      <span class="border-b"></span>
                      <span class="font-semibold">Name: {salvage.text}</span>
                      <span
                        >Tags: {#each salvage.tags as tag}
                          {tag}
                        {:else}
                          <span>none</span>
                        {/each}</span
                      >
                    </div>
                  </ToolTip>
                {/if}
              {/each}
            </div>
          </SheetCard>
          <SheetCard class="h-full w-full" label="Specimens">
            <div class="space-y-3">
              {#each $form.specimens as specimen, i}
                <div class="input-group grid-cols-[1fr_auto]">
                  <input
                    class="input"
                    name={`specimen-${i}`}
                    disabled={!$isEditing}
                    bind:value={specimen.text}
                    use:popup={{ event: 'hover', target: `tooltip-specimens-${i}` }}
                  />
                  <div class="flex flex-row gap-2 py-2">
                    {#each specimen.tags as tag}
                      <span class="badge variant-filled-secondary">{tag}</span>
                    {/each}
                  </div>
                </div>
                {#if !$isEditing}
                  <ToolTip popupName={`tooltip-specimens-${i}`}>
                    <div class="flex flex-col justify-start gap-2">
                      <span class="uppercase font-semibold place-self-center">specimens</span>
                      <span class="border-b"></span>
                      <span class="font-semibold">Name: {specimen.text}</span>
                      <span
                        >Tags: {#each specimen.tags as tag}
                          {tag}
                        {:else}
                          <span>none</span>
                        {/each}</span
                      >
                    </div>
                  </ToolTip>
                {/if}
              {/each}
            </div>
          </SheetCard>
        </div>
        <div class="mt-4 flex w-full gap-4">
          <SheetCard class="h-full w-full" label="Whispers">
            <div class="space-y-3">
              {#each $form.whispers as whisper, i}
                <dic class="input-group grid-cols-[1fr_auto]">
                  <input
                    class="input"
                    name={`whisper-${i}`}
                    disabled={!$isEditing}
                    bind:value={whisper.text}
                    use:popup={{ event: 'hover', target: `tooltip-whispers-${i}` }}
                  />
                  <div class="flex flex-row gap-2 py-2">
                    {#each whisper.tags as tag}
                      <span class="badge variant-filled-secondary">{tag}</span>
                    {/each}
                  </div>
                </dic>
                {#if !$isEditing}
                  <ToolTip popupName={`tooltip-whispers-${i}`}>
                    <div class="flex flex-col justify-start gap-2">
                      <span class="uppercase font-semibold place-self-center">whispers</span>
                      <span class="border-b"></span>
                      <span class="font-semibold">Name: {whisper.text}</span>
                      <span
                        >Tags: {#each whisper.tags as tag}
                          {tag}
                        {:else}
                          <span>none</span>
                        {/each}</span
                      >
                    </div>
                  </ToolTip>
                {/if}
              {/each}
            </div>
          </SheetCard>
          <SheetCard class="h-full w-full" label="Charts">
            <div class="space-y-3">
              {#each $form.charts as chart, i}
                <div class="input-group grid-cols-[1fr_auto]">
                  <input
                    class="input"
                    disabled={!$isEditing}
                    bind:value={chart.text}
                    use:popup={{ event: 'hover', target: `tooltip-charts-${i}` }}
                  />
                  <div class="flex flex-row gap-2 py-2">
                    {#each chart.tags as tag}
                      <span class="badge variant-filled-secondary">{tag}</span>
                    {/each}
                  </div>
                </div>
                {#if !$isEditing}
                  <ToolTip popupName={`tooltip-charts-${i}`}>
                    <div class="flex flex-col justify-start gap-2">
                      <span class="uppercase font-semibold place-self-center">charts</span>
                      <span class="border-b"></span>
                      <span class="font-semibold">Name: {chart.text}</span>
                      <span
                        >Tags: {#each chart.tags as tag}
                          {tag}
                        {:else}
                          <span>none</span>
                        {/each}</span
                      >
                    </div>
                  </ToolTip>
                {/if}
              {/each}
            </div>
          </SheetCard>
        </div>
        {#if $isEditing}
          <div class="flex flex-row gap-4">
            <input class="w-2/3 input" placeholder="Resource..." />
            <select class="w-1/3 select" placeholder="Resource type...">
              <option>Salvage</option>
              <option>Specimen</option>
              <option>Whisper</option>
              <option>Chart</option>
            </select>
          </div>
          <button class="btn variant-outline-tertiary">Add Resource</button>
        {/if}
      </div>
      <div class="mt-10 flex flex-col gap-3">
        <SectionHeader color="default" label="Milestones"></SectionHeader>
        <div class="flex w-full gap-4">
          <SheetCard class="h-full w-full" label="Major">
            {#if $form.majorMilestones}
              {#each $form.majorMilestones as majorMilestone, i}
                <input
                  class="input"
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
                <input
                  class="input"
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
