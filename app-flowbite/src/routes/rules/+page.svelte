<script lang="ts">
  import { Tabs, TabItem } from 'flowbite-svelte';
  import { PortableText } from '@portabletext/svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  const tabs = [
    { value: 'bloodlines', label: 'Bloodlines', type: 'bloodline', data: data.bloodlines },
    { value: 'origins', label: 'Origins', type: 'origin', data: data.origins },
    { value: 'posts', label: 'Posts', type: 'post', data: data.posts }
  ];
</script>

<Tabs style="underline" contentClass="p-4 bg-gray-50 rounded-none dark:bg-gray-800 mt-4">
  {#each tabs as tab, i}
    <TabItem open={i === 0} title={tab.label}>
      <div class="flex flex-col items-center gap-3">
        {#each tab.data as item}
          <div
            class="flex w-full max-w-screen-2xl flex-col divide-gray-200 rounded-lg border border-gray-200 bg-white p-4 text-gray-900 shadow-md sm:p-6 dark:divide-gray-700 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            <a href={`/rules/${tab.type}/${item.name}`} title={`view ${tab.type} ${item.name}`}>
              <div class="flex flex-row items-center justify-between">
                <div class="text-2xl font-medium capitalize">{item.name}</div>
                <div class="font-light italic">{item.summary}</div>
              </div>
            </a>
            <div class="flex flex-col gap-2">
              <PortableText value={item.description} />
            </div>
          </div>
        {/each}
      </div>
    </TabItem>
  {/each}
</Tabs>
