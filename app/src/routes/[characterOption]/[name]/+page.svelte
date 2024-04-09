<script lang="ts">
  import { PortableText } from '@portabletext/svelte';
  import * as Card from '$lib/components/ui/card/index.js';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<Card.Root>
  <Card.Header>
    <Card.Title class="capitalize text-3xl">
      {data._type} - {data.name}
    </Card.Title>
    <Card.Description>{data.summary}</Card.Description>
  </Card.Header>
  <Card.Content>
    <div class="space-y-3">
      <PortableText value={data.description} />
    </div>
  </Card.Content>
</Card.Root>
