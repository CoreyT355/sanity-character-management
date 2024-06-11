<script lang="ts">
  import Aspect from '$lib/components/Aspect/Aspect.svelte';
  import SectionHeader from '$lib/components/SectionHeader/SectionHeader.svelte';
  import { isEditing } from '$lib/store/characters.js';
  import {
    getDrawerStore,
    getModalStore,
    getToastStore,
    type ModalSettings
  } from '@skeletonlabs/skeleton';
  import { aspectsList } from '$lib/store/characters.js';
  import { page } from '$app/stores';

  const drawerStore = getDrawerStore();
  const modalStore = getModalStore();
  const toastStore = getToastStore();

  export let data;

  let { aspects, form, supabase } = data;
  $: ({ aspects, form, supabase } = data);

  const refreshAspectsList = async () => {
    const { data } = await supabase
      .from('aspects')
      .select()
      .eq('player_character_id', $page.params.id);
    aspectsList.set(data);
  };

  const addAspectModal: ModalSettings = {
    type: 'component',
    title: 'Add New Aspect',
    component: 'modalAspectForm',
    meta: { aspectForm: form },
    response(r) {
      if (r.status === 200) {
        refreshAspectsList();
      }
    }
  };

  // const addAspect = () => {};

  const handleAddAspectClick = async () => {
    modalStore.trigger(addAspectModal);
  };

  aspectsList.set(aspects);

  const deleteAspect = async (aspectId: string) => {
    const { error } = await supabase.from('aspects').delete().eq('id', aspectId);
    if (error) {
      console.log('Error deleting aspect', error);
      toastStore.trigger({
        message: 'Something went wrong.'
      });
    }
    refreshAspectsList();
  };

  const handleDeleteAspectClick = async (aspectId: string) => {
    const deleteConfirm: ModalSettings = {
      type: 'confirm',
      title: 'Please Confirm',
      body: 'Are you sure you want to delete this aspect? This action cannot be undone.',
      response(response) {
        if (response) {
          deleteAspect(aspectId);
          toastStore.trigger({
            background: 'variant-filled-success',
            message: 'Aspect deleted successfully.'
          });
        }
      }
    };

    modalStore.trigger(deleteConfirm);
  };
</script>

<div class="flex w-full flex-col gap-4">
  <SectionHeader class="" label="Aspects" />
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    {#each $aspectsList as aspect}
      <Aspect
        disabled={!$isEditing}
        name={aspect.name}
        type={aspect.type}
        description={aspect.description}
        trackLength={aspect.track_length}
        currentTrack={aspect.current_track}
        on:delete={() => handleDeleteAspectClick(aspect.id)}
      />
    {/each}
  </div>
  <button
    class="btn variant-filled-primary w-40 place-self-center"
    on:click={() => handleAddAspectClick()}>Add Aspect</button
  >
</div>
<div class="fixed end-6 bottom-16 group">
  <ul class="space-y-3 invisible group-hover:visible mb-3">
    <li>
      <button
        type="button"
        class="btn-icon variant-filled-primary ring hover:ring-blue-500"
        name="Help - How to Play"
        on:click={() => drawerStore.open()}
      >
        <span class="icon-[ph--question-mark] h-8 w-8"></span>
      </button>
    </li>
    <li>
      <button
        class="btn-icon variant-filled-primary ring hover:ring-blue-500"
        disabled={!$isEditing}
      >
        <span class="icon-[ph--floppy-disk-back-light] h-8 w-8"></span>
      </button>
    </li>
    <li>
      <button
        type="button"
        class="btn-icon variant-filled-primary ring hover:ring-blue-500"
        name="Cancel"
        disabled={!$isEditing}
        on:click={() => isEditing.set(false)}
      >
        <span class="icon-[ph--x-light] h-8 w-8"></span>
      </button>
    </li>
    <li>
      <button
        type="button"
        class="btn-icon variant-filled-primary ring hover:ring-blue-500"
        name="Edit"
        on:click={() => isEditing.set(true)}
      >
        <span class="icon-[ph--pencil-light] h-8 w-8"></span>
      </button>
    </li>
  </ul>
  <button class="btn-icon variant-filled-tertiary ring hover:ring-indigo-500">
    <span class="icon-[ph--plus] h-8 w-8 hover:rotate-45 transition-all"></span>
  </button>
</div>
