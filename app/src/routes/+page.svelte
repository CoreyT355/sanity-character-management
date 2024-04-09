<script lang="ts">
  import * as Tabs from '$lib/components/ui/tabs/index.js';
  import * as Card from '$lib/components/ui/card/index.js';
  import type { PageData } from './$types';
  import { PortableText } from '@portabletext/svelte';

  export let data: PageData;

  const tabs = [
    { value: 'bloodlines', label: 'Bloodlines', type: 'bloodline', data: data.bloodlines },
    { value: 'origins', label: 'Origins', type: 'origin', data: data.origins},
    { value: 'posts', label: 'Posts', type: 'post', data: data.posts}
  ];
</script>

<section>
  <Tabs.Root>
    <Tabs.List class="grid w-full grid-cols-3">
      {#each tabs as tab}
        <Tabs.Trigger value={tab.value}>{tab.label}</Tabs.Trigger>
      {/each}
    </Tabs.List>
    {#each tabs as tab}
      <Tabs.Content value={tab.value} class="space-y-4">
        {#each tab.data as item}
          <Card.Root>
            <Card.Header>
              <Card.Title>
                <a href={`/${tab.type}/${item.name}`} title={`view ${tab.type} ${item.name}`}>{item.name}</a>
              </Card.Title>
              <Card.Description>{item.summary}</Card.Description>
            </Card.Header>
            <Card.Content>
              <div>
                <PortableText value={item.description} />
              </div>
            </Card.Content>
          </Card.Root>
        {/each}
      </Tabs.Content>
    {/each}
  </Tabs.Root>
</section>
