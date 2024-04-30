<script lang="ts">
  import { PortableText } from '@portabletext/svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="flex flex-col items-center p-4">
  <div
    class="flex w-full gap-3 max-w-screen-2xl flex-col divide-gray-200 rounded-lg border border-gray-200 bg-white p-4 text-gray-900 shadow-md sm:p-6 dark:divide-gray-700 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
  >
    <div class="flex flex-row items-center justify-between">
      <h3 class="text-3xl font-medium capitalize">
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
</div>
