<script lang="ts">
  import { Button } from 'flowbite-svelte';
  import SectionHeader from '$lib/components/SectionHeader/SectionHeader.svelte';
  import SheetCard from '$lib/components/SheetCard/SheetCard.svelte';

  const colors = [
    'default',
    'destructive',
    'info',
    'primary',
    'success',
    'info',
    'violet',
    'warning'
  ];
</script>

<div class="flex flex-col h-screen">
  <div class="flex w-full flex-col gap-4 p-8">
    <h3 class="dark:text-white text-black text-lg font-medium">Section Header</h3>
    <div class="flex w-full flex-row gap-4">
      {#each colors as color}
         <SectionHeader label={color} {color} class="w-32"></SectionHeader>
      {/each}
    </div>
  </div>
  <div class="flex w-full flex-col gap-4 p-8">
    <h3 class="dark:text-white text-black text-lg font-medium">Sheet Card</h3>
    <div class="flex w-full flex-row gap-4">
      {#each colors as color}
         <SheetCard label={color} {color} class="h-48 w-32"></SheetCard>
      {/each}
    </div>
  </div>
</div>

