<script lang="ts">
  import { PortableText } from '@portabletext/svelte';
  import type { PageData } from './$types';
  import { TabGroup, Tab } from '@skeletonlabs/skeleton';

  export let data: PageData;

  const tabs = [
    { value: 'bloodlines', label: 'Bloodlines', type: 'bloodline', data: data.bloodlines },
    { value: 'origins', label: 'Origins', type: 'origin', data: data.origins },
    { value: 'posts', label: 'Posts', type: 'post', data: data.posts }
  ];

  let tabSet: number = 0;
</script>

<TabGroup style="underline" contentClass="p-4 bg-gray-50 rounded-none dark:bg-gray-800 mt-4">
  {#each tabs as tab, i}
    <Tab bind:group={tabSet} name={tab.label} value={i}></Tab>
  {/each}
  <svelte:fragment slot="panel">
    {#if tabSet === 0}
      <div class="flex flex-col items-center gap-3">
        <div
          class="flex w-full max-w-screen-2xl flex-col divide-gray-200 rounded-lg border border-gray-200 bg-white p-4 text-gray-900 shadow-md sm:p-6 dark:divide-gray-700 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
        >
          <a
            href={`/rules/${tab.type}/${tabs[0].data.name}`}
            title={`view ${tab.type} ${tabs[0].data.name}`}
          >
            <div class="flex flex-row items-center justify-between">
              <div class="text-2xl font-medium capitalize">{tabs[0].data.name}</div>
              <div class="font-light italic">{tabs[0].data.summary}</div>
            </div>
          </a>
          <div class="flex flex-col gap-2">
            <PortableText value={tabs[0].data.description} />
          </div>
        </div>
      </div>
    {:else if tabSet === 1}
      <div class="flex flex-col items-center gap-3">
        <div
          class="flex w-full max-w-screen-2xl flex-col divide-gray-200 rounded-lg border border-gray-200 bg-white p-4 text-gray-900 shadow-md sm:p-6 dark:divide-gray-700 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
        >
          <a
            href={`/rules/${tab.type}/${tabs[1].data.name}`}
            title={`view ${tab.type} ${tabs[1].data.name}`}
          >
            <div class="flex flex-row items-center justify-between">
              <div class="text-2xl font-medium capitalize">{tabs[1].data.name}</div>
              <div class="font-light italic">{tabs[1].data.summary}</div>
            </div>
          </a>
          <div class="flex flex-col gap-2">
            <PortableText value={tabs[1].data.description} />
          </div>
        </div>
      </div>
    {:else if tabSet === 2}
      <div class="flex flex-col items-center gap-3">
        <div
          class="flex w-full max-w-screen-2xl flex-col divide-gray-200 rounded-lg border border-gray-200 bg-white p-4 text-gray-900 shadow-md sm:p-6 dark:divide-gray-700 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
        >
          <a
            href={`/rules/${tab.type}/${tabs[2].data.name}`}
            title={`view ${tab.type} ${tabs[2].data.name}`}
          >
            <div class="flex flex-row items-center justify-between">
              <div class="text-2xl font-medium capitalize">{tabs[2].data.name}</div>
              <div class="font-light italic">{tabs[2].data.summary}</div>
            </div>
          </a>
          <div class="flex flex-col gap-2">
            <PortableText value={tabs[2].data.description} />
          </div>
        </div>
      </div>
    {/if}
  </svelte:fragment>
</TabGroup>
