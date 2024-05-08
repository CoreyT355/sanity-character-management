<script lang="ts">
  import { CharacterSheetNav } from '$lib/components/CharacterSheetNav';
  import Icon from '@iconify/svelte';
  import { Button, SpeedDial, SpeedDialButton } from 'flowbite-svelte';
  import { fly } from 'svelte/transition';
  import { isEditing } from '$lib/store/characters';

  export let data;
</script>

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
    <SpeedDialButton name="Print">
      <Icon icon="ph:printer-light" class="w-8 h-8" />
    </SpeedDialButton>
    <SpeedDialButton disabled={!$isEditing} name="Save" on:click={() => isEditing.set(false)}>
      <Icon icon="ph:floppy-disk-back-light" class="w-8 h-8" />
    </SpeedDialButton>
    <SpeedDialButton name="Edit" on:click={() => isEditing.set(true)}>
      <Icon icon="ph:pencil-light" class="w-8 h-8" />
    </SpeedDialButton>
  </SpeedDial>
</div>
