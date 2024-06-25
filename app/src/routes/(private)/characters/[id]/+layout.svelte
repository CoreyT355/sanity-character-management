<script lang="ts">
  import CharacterSheetNav from '$lib/components/CharacterSheetNav/CharacterSheetNav.svelte';
  import { fly } from 'svelte/transition';
  import { currentCharacter, isEditing } from '$lib/store/characters';
  import SectionHeader from '$lib/components/SectionHeader/SectionHeader.svelte';
  import SheetCard from '$lib/components/SheetCard/SheetCard.svelte';
  import { page } from '$app/stores';
  import { Drawer, getDrawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';
  import SpeedDial from '$lib/components/SpeedDial/SpeedDial.svelte';

  const drawerStore = getDrawerStore();

  export let data;

  if ($page.url.searchParams.has('new')) {
    isEditing.set(true);
  }

  const drawerSettings: DrawerSettings = {
    bgDrawer: 'bg-gray-900 text-white',
    bgBackdrop: 'bg-gradient-to-tr from-teal-500/30 via-cyan-500/30 to-blue-500/30',
    width: 'w-[280px] md:w-[480px]',
    padding: 'p-2',
    rounded: 'rounded-xl'
  };

  // const handleSave = async () => {
  //   const response = await fetch('/api/characters', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       character: $currentCharacter
  //     })
  //   });
  //   const returnJson = await response.json();
  // };
</script>

<Drawer width="w-128"
  padding="p-4"
  rounded="rounded-md">
  <div class="p-5">
    <SectionHeader class="mb-3" label="How to play" />
    <div class="flex flex-col gap-4">
      <SheetCard color="info" label="Roll">
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
      <SheetCard color="info" label="Results">
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
    </div>
  </div>
</Drawer>
<div class="p-4">
  <div class="flex justify-center">
    <CharacterSheetNav />
  </div>
  {#key data.url}
    <div
      class="flex h-full flex-col gap-3 md:flex-row"
      in:fly={{ x: -200, duration: 300, delay: 100 }}
      out:fly={{ x: 200, duration: 300 }}
    >
      <slot />
    </div>
  {/key}

  <!-- <SpeedDial on:open-help={() => drawerStore.open(drawerSettings)} /> -->
</div>
