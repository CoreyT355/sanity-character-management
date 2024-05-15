<script lang="ts">
  import * as Select from '$lib/components/ui/select';
  import Input from '$lib/components/ui/input/input.svelte';
  import SheetCard from '$lib/components/ui/sheet-card/sheet-card.svelte';
  import SectionHeader from '$lib/components/ui/section-header/section-header.svelte';
  import RankInput from '$lib/components/ui/rank-input/rank-input.svelte';
  import Mire from '$lib/components/ui/mire/mire.svelte';

  export let data;

  const {
    bloodlines,
    edges,
    languages,
    origins,
    posts,
    savedCharacter,
    skills,
    characterFromSanity
  } = data;

  const isEditing = true;

  console.log('tacocat', characterFromSanity);
  
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
        <div>
          {drive}
        </div>
      {/each}
    </div>
    <!-- <Button variant="success" size="sm" class="mt-3 rounded-full">
        <Icon icon="ph:plus" class="h-4 w-4" />
      </Button> -->
  </SheetCard>
  <!-- Mires -->
  <SheetCard class="w-full" label="Mires">
    <div class="flex flex-col gap-4">
      {#each characterFromSanity.mires as mire}
        <Mire description={mire} currentTrack={[0, 0]} />
      {/each}
    </div>
  </SheetCard>
</div>
<!-- Right Column -->
<div class="flex h-full w-full flex-col md:w-7/12">
  <!-- Background Info -->
  <SheetCard class="w-full" label="Background" isEditable={true}>
    <div class="grid grid-cols-2 gap-x-6 gap-y-2">
      <div class="flex flex-row items-center gap-4 h-10" class:justify-between={isEditing}>
        <span class="w-24 text-base">Name</span>
        {#if isEditing}
          <Input placeholder="Enter your character's name" bind:value={characterFromSanity.name} />
        {:else}
          <span>{characterFromSanity.name}</span>
        {/if}
      </div>
      <div class="flex flex-row items-center gap-4 h-10" class:justify-between={isEditing}>
        <span class="w-24 text-base">Bloodline</span>
        {#if isEditing}
           <Select.Root
             selected={{ label: characterFromSanity.bloodline.name, value: characterFromSanity.bloodline._id }}
           >
             <Select.Trigger class="">
               <Select.Value placeholder="Select a Bloodline" />
             </Select.Trigger>
             <Select.Content>
               <Select.Group>
                 {#each bloodlines as bloodline}
                   <Select.Item value={bloodline._id} label={bloodline.name}
                     >{bloodline.name}</Select.Item
                   >
                 {/each}
               </Select.Group>
             </Select.Content>
             <Select.Input name="favoriteFruit" />
           </Select.Root>
        {:else}
          <span>{characterFromSanity.bloodline}</span>
        {/if}
      </div>
      <div class="flex flex-row items-center justify-between gap-4">
        <span class="w-24 text-base">Player</span>
        <Input placeholder="Enter your name" bind:value={characterFromSanity.player} />
      </div>
      <div class="flex flex-row items-center justify-between gap-4">
        <span class="w-24 text-base">Origin</span>
        <Select.Root
          selected={{ label: characterFromSanity.origin.name, value: characterFromSanity.origin._id }}
        >
          <Select.Trigger class="">
            <Select.Value placeholder="Select an Origin" />
          </Select.Trigger>
          <Select.Content>
            <Select.Group>
              {#each origins as origin}
                <Select.Item value={origin._id} label={origin.name}>{origin.name}</Select.Item>
              {/each}
            </Select.Group>
          </Select.Content>
          <Select.Input name="favoriteFruit" />
        </Select.Root>
      </div>
      <div class="col-start-2 flex flex-row items-center justify-between gap-4">
        <span class="w-24 text-base">Post</span>
        <Select.Root
          selected={{ label: characterFromSanity.post.name, value: characterFromSanity.post._id }}
        >
          <Select.Trigger class="">
            <Select.Value placeholder="Select a Post" />
          </Select.Trigger>
          <Select.Content>
            <Select.Group>
              {#each posts as post}
                <Select.Item value={post._id} label={post.name}>{post.name}</Select.Item>
              {/each}
            </Select.Group>
          </Select.Content>
          <Select.Input name="favoriteFruit" />
        </Select.Root>
      </div>
    </div>
  </SheetCard>

  <div class="mt-10 flex flex-col gap-3">
    <SectionHeader label="Resources"></SectionHeader>
    <div class="flex w-full gap-4">
      <SheetCard class="h-full w-full" label="Salvage">
        {#each characterFromSanity.resources.filter((r) => r.type === 'Salvage') as salvage}
          <div>{salvage.name}</div>
        {/each}
      </SheetCard>
      <SheetCard class="h-full w-full" label="Specimens">
        {#each characterFromSanity.resources.filter((r) => r.type === 'Specimens') as specimen}
          <div>{specimen.name}</div>
        {/each}
      </SheetCard>
    </div>
    <div class="mt-4 flex w-full gap-4">
      <SheetCard class="h-full w-full" label="Whispers">
        {#each characterFromSanity.resources.filter((r) => r.type === 'Whispers') as whisper}
          <div>{whisper.name}</div>
        {/each}
      </SheetCard>
      <SheetCard class="h-full w-full" label="Carts">
        {#each characterFromSanity.resources.filter((r) => r.type === 'Charts') as chart}
          <div>{chart.name}</div>
        {/each}
      </SheetCard>
    </div>
  </div>

  <div class="mt-10 flex flex-col gap-3">
    <SectionHeader color="default" label="Milestones"></SectionHeader>
    <div class="flex w-full gap-4">
      <SheetCard class="h-full w-full" label="Major">
        {#if characterFromSanity.majorMilestones}
          {#each characterFromSanity.majorMilestones as majorMilestones}
            <div>{majorMilestones}</div>
          {/each}
        {/if}
      </SheetCard>
      <SheetCard class="h-full w-full" label="Minor">
        {#if characterFromSanity.minorMilestones}
          {#each savedCharacter.minorMilestones as minorMilestones}
            <div>{minorMilestones}</div>
          {/each}
        {/if}
      </SheetCard>
    </div>
  </div>
</div>
