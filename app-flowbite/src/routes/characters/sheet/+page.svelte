<script lang="ts">
  import { Input, Select, Tooltip } from 'flowbite-svelte';
  import { SheetCard } from '$lib/components/SheetCard';
  import { SectionHeader } from '$lib/components/SectionHeader';
  import { RankInput } from '$lib/components/RankInput';
  import Mire from '$lib/components/Mire/Mire.svelte';
  import { isEditing } from '$lib/store/characters.js';

  export let data;

  const { bloodlines, edges, languages, origins, posts, skills, characterFromSanity } = data;
</script>

<!-- Left Column -->
<div class="h-full w-full space-y-4 md:w-5/12">
  <!-- <SectionHeader class="mb-3" label="How to play" />
     <div class="grid grid-cols-2 gap-3">
      <SheetCard variant="info" label="Roll">
        <div class="flex flex-col">
          <div class="flex flex-row justify-between">
            <span>Edge</span>
            <span>(1d6)</span>
          </div>
          <div class="flex flex-row justify-between">
            <span>Skill</span>
            <span>(Up to 3d6)</span>
          </div>
          <div class="flex flex-row justify-between">
            <span>Advantage</span>
            <span>(Up to 2d6)</span>
          </div>
        </div>
      </SheetCard>
      <SheetCard variant="info" label="Results">
        <div class="flex flex-col">
          <div class="flex flex-row justify-between">
            <span>Triumph</span>
            <span>[6]</span>
          </div>
          <div class="flex flex-row justify-between">
            <span>Conflict</span>
            <span>[5/4]</span>
          </div>
          <div class="flex flex-row justify-between">
            <span>Disaster</span>
            <span>[3/2/1]</span>
          </div>
          <div class="flex flex-row justify-between">
            <span>Twist</span>
            <span>[Doubles]</span>
          </div>
        </div>
      </SheetCard>
    </div> -->

  <!-- First Row -->
  <div class="flex flex-col gap-4 lg:flex-row">
    <!-- Edges -->
    <SheetCard class="h-full w-full lg:w-3/12" variant="success" label="Edges">
      <div class="flex flex-row flex-wrap gap-2 md:flex-col">
        {#each edges as edge}
          <div class="flex max-w-60 flex-row items-center justify-between gap-3">
            <span class="text-base leading-none">
              {edge.displayName}
            </span>
            <RankInput
              disabled={!$isEditing}
              maxRanks={1}
              currentRank={characterFromSanity.edges.map((e) => e.name).includes(edge.name) ? 1 : 0}
            />
          </div>
        {/each}
      </div>
    </SheetCard>
    <!-- Languages -->
    <SheetCard class="h-full w-full lg:w-9/12" variant="info" label="Languages">
      <div class="grid grid-cols-1 gap-x-4 gap-y-2 lg:grid-cols-2">
        {#each languages as language}
          <div class="flex max-w-64 flex-row items-center justify-between">
            <span class="capitalize">{language.displayName}</span>
            <RankInput
              disabled={!$isEditing}
              maxRanks={3}
              currentRank={characterFromSanity.languages.find((l) => l.name === language.name)
                ?.ranks}
            />
          </div>
        {/each}
      </div>
    </SheetCard>
  </div>
  <!-- Skills -->
  <SheetCard class="w-full" variant="violet" label="Skills">
    <div class="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
      {#each skills as skill}
        <div class="flex max-w-64 flex-row items-center justify-between">
          <span class="capitalize">{skill.name}</span>
          <RankInput
            maxRanks={3}
            disabled={!$isEditing}
            currentRank={characterFromSanity.skills.find((s) => s.name === skill.name)?.ranks}
          />
        </div>
      {/each}
    </div></SheetCard
  >
  <!-- Drives -->
  <SheetCard class="w-full" label="Drives">
    <div class="flex flex-col gap-2">
      {#each characterFromSanity.drives as drive}
        <Input disabled={!$isEditing} bind:value={drive} />
        {#if !$isEditing}
          <Tooltip>{drive}</Tooltip>
        {/if}
      {/each}
    </div>
  </SheetCard>
  <!-- Mires -->
  <SheetCard class="w-full" label="Mires">
    <div class="flex flex-col gap-4">
      {#each characterFromSanity.mires as mire}
        <Mire disabled={!$isEditing} description={mire} currentTrack={[0, 0]} />
      {/each}
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
          items={origins.map((origin) => ({ name: origin.name || '', value: origin._id }))}
          bind:value={characterFromSanity.origin._id}
        />
      </div>
      <div class="col-start-2 flex flex-row items-center justify-between gap-4">
        <span class="w-24 text-base">Post</span>
        <Select
          disabled={!$isEditing}
          items={posts.map((p) => ({ name: p.name || '', value: p._id }))}
          bind:value={characterFromSanity.post._id}
        />
      </div>
    </div>
  </SheetCard>

  <div class="mt-10 flex flex-col gap-3">
    <SectionHeader label="Resources"></SectionHeader>
    <div class="flex w-full gap-4">
      <SheetCard class="h-full w-full" label="Salvage">
        <div class="space-y-3">
          {#each characterFromSanity.resources.filter((r) => r.type === 'Salvage') as salvage}
            <Input disabled={!$isEditing} bind:value={salvage.name} />
            {#if !$isEditing}
              <Tooltip>{salvage.name}</Tooltip>
            {/if}
          {/each}
        </div>
      </SheetCard>
      <SheetCard class="h-full w-full" label="Specimens">
        <div class="space-y-3">
          {#each characterFromSanity.resources.filter((r) => r.type === 'Specimens') as specimen}
            <Input disabled={!$isEditing} bind:value={specimen.name} />
            {#if !$isEditing}
              <Tooltip>{specimen.name}</Tooltip>
            {/if}
          {/each}
        </div>
      </SheetCard>
    </div>
    <div class="mt-4 flex w-full gap-4">
      <SheetCard class="h-full w-full" label="Whispers">
        <div class="space-y-3">
          {#each characterFromSanity.resources.filter((r) => r.type === 'Whispers') as whisper}
            <Input disabled={!$isEditing} bind:value={whisper.name} />
            {#if !$isEditing}
              <Tooltip>{whisper.name}</Tooltip>
            {/if}
          {/each}
        </div>
      </SheetCard>
      <SheetCard class="h-full w-full" label="Charts">
        <div class="space-y-3">
          {#each characterFromSanity.resources.filter((r) => r.type === 'Charts') as chart}
            <Input disabled={!$isEditing} bind:value={chart.name} />
            {#if !$isEditing}
              <Tooltip>{chart.name}</Tooltip>
            {/if}
          {/each}
        </div>
      </SheetCard>
    </div>
  </div>

  <div class="mt-10 flex flex-col gap-3">
    <SectionHeader variant="default" label="Milestones"></SectionHeader>
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
