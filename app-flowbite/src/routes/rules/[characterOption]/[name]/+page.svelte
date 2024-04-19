<script lang="ts">
  import { PortableText } from '@portabletext/svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="m-2 flex flex-col gap-2 rounded-md border bg-slate-600 p-4 text-gray-200">
  <div class="flex flex-row justify-between items-center">
    <h3 class="capitalize text-3xl font-medium">
      {data._type} - {data.name}
    </h3>
    <div class="font-light italic">
      {data.summary}
    </div>
  </div>
  <div class="space-y-3">
    <PortableText value={data.description} />
  </div>
</div>
