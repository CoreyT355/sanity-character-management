<script lang="ts">
  import { InputChip, getModalStore, getToastStore } from '@skeletonlabs/skeleton';
  import { resourceSchema } from '$lib/schema/resource.schema';
  import SuperDebug, { superForm } from 'sveltekit-superforms';

  const modalStore = getModalStore();

  $: selectedType = '';
  $: resourceText = '';
  $: resourceTags = [];

  const handleClick = () => {
    if ($modalStore[0].response) {
      $modalStore[0].response({
        type: selectedType,
        text: resourceText,
        tags: resourceTags
      });
    }
  };
</script>

<div class="card flex flex-col gap-2 px-6 py-3 w-[500px]">
  <span class="text-xl font-semibold">Add New Aspect</span>
  <div class="flex flex-col gap-4 border-t border-b py-4 my-3">
    <input class="input" placeholder="Resource name..." bind:value={resourceText} />
    <InputChip
      bind:value={resourceTags}
      name="newResourceTags"
      placeholder="Tags (press enter to add each one)"
      chips="variant-filled-primary rounded-full"
    />
    <select class="select" placeholder="Resource type..." bind:value={selectedType}>
      <option value="">Select a Resource Type...</option>
      <option value="salvage">Salvage</option>
      <option value="specimens">Specimen</option>
      <option value="whispers">Whisper</option>
      <option value="charts">Chart</option>
    </select>
  </div>
  <button class="btn variant-filled-primary" on:click={() => handleClick()}>Add to Character</button
  >
</div>
