<script>
  import { getModalStore, SlideToggle } from '@skeletonlabs/skeleton';
  import SuperDebug, { superForm } from 'sveltekit-superforms';

  const modalStore = getModalStore();

  const aspectForm = $modalStore[0].meta.aspectForm;

  console.log('ASPECT FORM', aspectForm);

  const { form } = superForm(aspectForm, {
    applyAction: true,
    dataType: 'json'
  });
</script>

<div class="card flex flex-col gap-2 px-6 py-3 w-[500px]">
  <form>
    <span class="text-xl font-semibold">Add New Aspect</span>
    <div class="flex flex-col gap-4 border-t border-b py-4 my-3">
      <input
        class="input"
        type="text"
        placeholder="What is this Aspect's name?"
        bind:value={$form.name}
      />
      <textarea
        class="textarea"
        placeholder="Describe this aspect..."
        bind:value={$form.description}
      />
      <select class="select" name="type" bind:value={$form.type}>
        <option value="">Select an Aspect type...</option>
        <option value="companion">Companion</option>
        <option value="gear">Gear</option>
        <option value="trait">Trait</option>
      </select>
      <div class="flex flex-row gap-3 items-center">
        <input
          class="input"
          type="number"
          min="1"
          name="track_length"
          placeholder="Track length..."
          bind:value={$form.track_length}
        />
        <SlideToggle name="isComplex" active="bg-success-500" bind:checked={$form.is_complex}
          >Complex?</SlideToggle
        >
      </div>
    </div>
    <div class="flex flex-row justify-end gap-4">
      <button class="btn variant-soft-error" on:click={() => modalStore.close()}>Cancel</button>
      <button class="btn variant-soft-primary">Add</button>
    </div>
  </form>
  <!-- <SuperDebug data={$form} />bind:value={$form.name} -->
</div>
