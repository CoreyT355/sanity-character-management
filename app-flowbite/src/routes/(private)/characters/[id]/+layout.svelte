<script lang="ts">
  import CharacterSheetNav from '$lib/components/CharacterSheetNav/CharacterSheetNav.svelte';
  import Icon from '@iconify/svelte';
  import { Drawer, SpeedDial, SpeedDialButton } from 'flowbite-svelte';
  import { fly } from 'svelte/transition';
  import { currentCharacter, isDrawerHidden, isEditing } from '$lib/store/characters';
  import SectionHeader from '$lib/components/SectionHeader/SectionHeader.svelte';
  import SheetCard from '$lib/components/SheetCard/SheetCard.svelte';
  import { page } from '$app/stores';

  export let data;

  if ($page.url.searchParams.has('new')) {
    isEditing.set(true);
  }

  const handleSave = async () => {
    const response = await fetch('/api/characters', {
      method: 'POST',
      body: JSON.stringify({
        character: $currentCharacter
      })
    });
    const returnJson = await response.json();
    console.log('GOT IT', returnJson);
  };
</script>

<Drawer
  transitionType="fly"
  transitionParams={{ x: -300, duration: 200 }}
  bind:hidden={$isDrawerHidden}
>
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
  <SpeedDial defaultClass="fixed end-6 bottom-6">
    <SpeedDialButton
      name="Help - How to Play"
      on:click={() => ($isDrawerHidden = !$isDrawerHidden)}
    >
      <Icon icon="ph:question-mark" class="h-8 w-8" />
    </SpeedDialButton>
    <!-- <SpeedDialButton disabled name="Print">
      <Icon icon="ph:printer-light" class="w-8 h-8" />
    </SpeedDialButton> -->
    <SpeedDialButton name="Save" disabled={!$isEditing} form="characterForm" type="submit">
      <Icon icon="ph:floppy-disk-back-light" class="h-8 w-8" />
    </SpeedDialButton>
    <SpeedDialButton name="Cancel" disabled={!$isEditing} on:click={() => isEditing.set(false)}>
      <Icon icon="ph:x-light" class="h-8 w-8" />
    </SpeedDialButton>
    <SpeedDialButton name="Edit" on:click={() => isEditing.set(true)}>
      <Icon icon="ph:pencil-light" class="h-8 w-8" />
    </SpeedDialButton>
  </SpeedDial>
</div>
