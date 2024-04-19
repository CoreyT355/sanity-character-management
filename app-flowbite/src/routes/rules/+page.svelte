<script lang="ts">
  import { Card, Tabs, TabItem } from 'flowbite-svelte';
  import { PortableText } from '@portabletext/svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  const tabs = [
    { value: 'bloodlines', label: 'Bloodlines', type: 'bloodline', data: data.bloodlines },
    { value: 'origins', label: 'Origins', type: 'origin', data: data.origins },
    { value: 'posts', label: 'Posts', type: 'post', data: data.posts }
  ];
</script>

<Tabs style="underline">
  {#each tabs as tab, i}
    <TabItem open={i === 0} title={tab.label}>
      <div class="flex flex-col gap-3">
        {#each tab.data as item}
          <div class="flex flex-col gap-2 rounded-md border bg-slate-600 p-4 text-gray-200">
            <a href={`/rules/${tab.type}/${item.name}`} title={`view ${tab.type} ${item.name}`}>
              <div class="flex flex-row justify-between items-center">
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
