<script lang="ts">
  import { Button, TabItem, Tabs } from 'flowbite-svelte';
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

<div class="flex h-screen flex-col">
  <div class="flex w-full flex-col gap-4 p-8">
    <h3 class="text-lg font-medium text-black dark:text-white">Section Header</h3>
    <div class="flex w-full flex-row gap-4">
      {#each colors as color}
        <SectionHeader label={color} {color} class="w-32"></SectionHeader>
      {/each}
    </div>
  </div>
  <div class="flex w-full flex-col gap-4 p-8">
    <h3 class="text-lg font-medium text-black dark:text-white">Sheet Card</h3>
    <div class="flex w-full flex-row gap-4">
      {#each colors as color}
        <SheetCard label={color} {color} class="h-48 w-32"></SheetCard>
      {/each}
    </div>
  </div>

  <!-- <div class="flex w-full flex-col gap-4 p-8 w-">
    <h3 class="text-lg font-medium text-black dark:text-white">Custom Tabs Test</h3>
    <Tabs
      tabStyle="none"
      divider={false}
      inactiveClasses="min-w-28 corner-cut uppercase overflow-hidden p-2 text-center h-min dark:text-white text-white bg-slate-500 border-r border-slate-500"
      activeClasses="min-w-28 corner-cut uppercase overflow-hidden p-2 text-center h-min dark:text-white text-white bg-blue-500 border-r border-blue-500"
      defaultClass="flex flex-wrap space-x-8"
      contentClass="p-4"
    >
      <TabItem open>
        <span slot="title">Tab I</span>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus reprehenderit
          officia iusto dolores reiciendis animi, corrupti ullam delectus rem ratione! Fugit,
          voluptatum nulla ipsa alias corrupti ab ex magni delectus.
        </div>
      </TabItem>
      <TabItem>
        <span slot="title">Tab II</span>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus reprehenderit
          officia iusto dolores reiciendis animi, corrupti ullam delectus rem ratione! Fugit,
          voluptatum nulla ipsa alias corrupti ab ex magni delectus.
        </div>
      </TabItem>
      <TabItem>
        <span slot="title">Tab III</span>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus reprehenderit
          officia iusto dolores reiciendis animi, corrupti ullam delectus rem ratione! Fugit,
          voluptatum nulla ipsa alias corrupti ab ex magni delectus.
        </div>
      </TabItem>
    </Tabs>
  </div> -->
</div>
