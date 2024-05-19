<script lang="ts">
  import { Button, Input, Select, Tooltip } from 'flowbite-svelte';
  import SheetCard from '$lib/components/SheetCard/SheetCard.svelte';
  import SectionHeader from '$lib/components/SectionHeader/SectionHeader.svelte';
  import { RankInput } from '$lib/components/RankInput';
  import Mire from '$lib/components/Mire/Mire.svelte';
  import { isEditing } from '$lib/store/characters.js';
  import { unionWith } from 'lodash-es';
  import { beforeNavigate } from '$app/navigation';

  export let data;

  beforeNavigate(() => {
    isEditing.set(false);
  });

  const { bloodlines, edges, languages, origins, posts, skills, characterFromSanity } = data;

  $: console.log('CHARACTER UPDATE', characterFromSanity);

  const handleRankClick = (type: string, _id: string, name: string, ranks: number) => {
    characterFromSanity[type] = unionWith(
      [{ _id, name, ranks }],
      characterFromSanity[type],
      (updatedItem, currentItem) => updatedItem.name === currentItem.name
    );
  };
</script>

<!-- Left Column -->
<div class="h-full w-full space-y-4 md:w-5/12">
  <!-- First Row -->
  <div class="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_auto]">
    <!-- Edges -->
    <SheetCard color="success" label="Edges">
      <div class="flex flex-row flex-wrap gap-2 md:flex-col">
        {#each edges as edge}
          <div class="flex max-w-60 flex-row items-center justify-between gap-3">
            <span class="text-base leading-none">
              {edge.displayName}
            </span>
            <Tooltip defaultClass="py-2 px-3 max-w-64 z-10">{edge.summary}</Tooltip>
            <RankInput
              disabled={!$isEditing}
              maxRanks={1}
              currentRank={characterFromSanity.edges.map((e) => e.name).includes(edge.name) ? 1 : 0}
              on:click={({ detail }) => handleRankClick('edges', edge._id, edge.name, detail)}
            />
          </div>
        {/each}
      </div>
    </SheetCard>
    <!-- Languages -->
    <SheetCard color="info" label="Languages">
      <div class="grid grid-cols-1 gap-x-4 gap-y-2 lg:grid-cols-2">
        {#each languages as language}
          <div class="flex max-w-72 flex-row items-center justify-between">
            <span class="capitalize">{language.displayName}</span>
            <Tooltip defaultClass="py-2 px-3 max-w-64 z-10">{language.description}</Tooltip>
            <RankInput
              disabled={!$isEditing}
              maxRanks={3}
              currentRank={characterFromSanity.languages.find((l) => l.name === language.name)
                ?.ranks}
              on:click={({ detail }) =>
                handleRankClick('languages', language._id, language.name, detail)}
            />
          </div>
        {/each}
      </div>
    </SheetCard>
  </div>
  <!-- Skills -->
  <SheetCard class="w-full" color="violet" label="Skills">
    <div class="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
      {#each skills as skill}
        <div class="flex max-w-64 flex-row items-center justify-between">
          <span class="capitalize">{skill.name}</span>
          <Tooltip defaultClass="py-2 px-3 w-80 z-10 flex flex-col gap-3">
            <div><span class="text-base font-bold">Description:</span> {skill.description}</div>
            <div><span class="text-base font-bold">Examples:</span> {skill.exampleUses}</div>
          </Tooltip>
          <RankInput
            maxRanks={3}
            disabled={!$isEditing}
            currentRank={characterFromSanity.skills.find((s) => s.name === skill.name)?.ranks}
            on:click={({ detail }) => handleRankClick('skills', skill._id, skill.name, detail)}
          />
        </div>
      {/each}
    </div>
  </SheetCard>
  <!-- Drives -->
  <SheetCard class="w-full" label="Drives">
    <div class="flex flex-col gap-2">
      {#each characterFromSanity.drives || [] as drive}
        <Input disabled={!$isEditing} bind:value={drive} placeholder="Enter a Drive..." />
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
          on:click={() => (characterFromSanity.drives = [...characterFromSanity.drives, ''])}
          >Add Drive</Button
        >
      {/if}
    </div>
  </SheetCard>
  <!-- Mires -->
  <SheetCard class="w-full" label="Mires">
    <div class="flex flex-col gap-4">
      {#each characterFromSanity.mires || [] as mire}
        <Mire
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
            (characterFromSanity.mires = [
              ...characterFromSanity.mires,
              { text: '', currentTrack: [0, 0] }
            ])}>Add Mire</Button
        >
      {/if}
    </div>
  </SheetCard>
</div>
<!-- Right Column -->
<div class="flex h-full w-full flex-col md:w-7/12">
  <!-- Background Info -->
  <SheetCard class="w-full" label="Background">
    <div class="grid grid-cols-2 gap-x-6 gap-y-2">
      <div class="flex h-10 flex-row items-center gap-4">
        <span class="w-24 text-base">Name</span>
        <Input
          disabled={!$isEditing}
          placeholder="Enter your character's name"
          bind:value={characterFromSanity.name}
        />
      </div>
      <div class="flex h-10 flex-row items-center gap-4">
        <span class="w-24 text-base">Bloodline</span>
        <Select
          disabled={!$isEditing}
          placeholder="Select a Bloodline..."
          items={bloodlines.map((b) => ({ name: b.name || '', value: b._id }))}
          bind:value={characterFromSanity.bloodline._id}
        />
      </div>
      <div class="flex flex-row items-center justify-between gap-4">
        <span class="w-24 text-base">Player</span>
        <Input
          disabled={!$isEditing}
          placeholder="Enter your name"
          bind:value={characterFromSanity.player}
        />
      </div>
      <div class="flex flex-row items-center justify-between gap-4">
        <span class="w-24 text-base">Origin</span>
        <Select
          disabled={!$isEditing}
          placeholder="Select an Origin..."
          items={origins.map((origin) => ({ name: origin.name || '', value: origin._id }))}
          bind:value={characterFromSanity.origin._id}
        />
      </div>
      <div class="col-start-2 flex flex-row items-center justify-between gap-4">
        <span class="w-24 text-base">Post</span>
        <Select
          disabled={!$isEditing}
          placeholder="Select a Post..."
          items={posts.map((p) => ({ name: p.name || '', value: p._id }))}
          bind:value={characterFromSanity.post._id}
        />
      </div>
    </div>
  </SheetCard>

  <div class="mt-10 flex flex-col gap-3">
    <SectionHeader color="default" label="Resources"></SectionHeader>
    <div class="flex w-full gap-4">
      <SheetCard class="h-full w-full" label="Salvage">
        <div class="space-y-3">
          {#each characterFromSanity.salvage || [] as salvage}
            <Input disabled={!$isEditing} bind:value={salvage.text} />
            {#if !$isEditing}
              <Tooltip>{salvage.text}</Tooltip>
            {/if}
          {/each}
        </div>
      </SheetCard>
      <SheetCard class="h-full w-full" label="Specimens">
        <div class="space-y-3">
          {#each characterFromSanity.specimens || [] as specimen}
            <Input disabled={!$isEditing} bind:value={specimen.text} />
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
          {#each characterFromSanity.whispers || [] as whisper}
            <Input disabled={!$isEditing} bind:value={whisper.text} />
            {#if !$isEditing}
              <Tooltip>{whisper.text}</Tooltip>
            {/if}
          {/each}
        </div>
      </SheetCard>
      <SheetCard class="h-full w-full" label="Charts">
        <div class="space-y-3">
          {#each characterFromSanity.charts || [] as chart}
            <Input disabled={!$isEditing} bind:value={chart.text} />
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
        {#if characterFromSanity.majorMilestones}
          {#each characterFromSanity.majorMilestones as majorMilestone}
            <Input disabled={!$isEditing} bind:value={majorMilestone} />
          {/each}
        {/if}
      </SheetCard>
      <SheetCard class="h-full w-full" label="Minor">
        {#if characterFromSanity.minorMilestones}
          {#each characterFromSanity.minorMilestones as minorMilestone}
            <Input disabled={!$isEditing} bind:value={minorMilestone} />
          {/each}
        {/if}
      </SheetCard>
    </div>
  </div>
</div>
