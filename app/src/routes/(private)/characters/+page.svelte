<script lang="ts">
  import { goto, invalidateAll } from '$app/navigation';
  import SheetCard from '$lib/components/SheetCard/SheetCard.svelte';
  import { getModalStore, getToastStore, type ModalSettings } from '@skeletonlabs/skeleton';

  import { characterList } from '$lib/store/characters.js';

  export let data;

  const { characters, supabase, session } = data;

  const modalStore = getModalStore();
  const toastStore = getToastStore();

  characterList.set(characters);

  const deleteCharacter = async (characterId: string) => {
    const { error } = await supabase.from('player_character').delete().eq('id', characterId);
    if (error) {
      console.log('Error deleting character', error);
      toastStore.trigger({
        message: 'Something went wrong.'
      });
    }
    const { data } = await supabase
      .from('player_character')
      .select()
      .eq('user_id', session?.user.id)
      .order('updated_at', { ascending: false });
    characterList.set(data);
  };

  const handleDeleteCharacter = async (characterId: string) => {
    const deleteConfirm: ModalSettings = {
      type: 'confirm',
      title: 'Please Confirm',
      body: 'Are you sure you want to delete this character? This action cannot be undone.',
      response(response) {
        if (response) {
          deleteCharacter(characterId);
          toastStore.trigger({
            message: 'Character deleted successfully.'
          });
        }
      }
    };

    modalStore.trigger(deleteConfirm);
  };
</script>

<div class="flex h-screen flex-col p-6">
  <div class="flex flex-row flex-wrap gap-4">
    {#each $characterList as character}
      {@const characterLabel = `${character.name} - Player: ${character.player}`}
      <SheetCard color="violet" label={characterLabel} class="w-96">
        <div class="relative grid grid-cols-[200px_1fr] gap-4">
          <div>
            <img
              src={`https://placehold.co/200x300?text=${character.name?.replaceAll(' ', '\\n')}`}
              alt=""
            />
          </div>
          <div class="flex flex-col gap-6">
            <div class="flex flex-col">
              <span class="text-lg font-medium">Bloodline:</span>
              {data.bloodlines.find((bloodline) => bloodline._id === character.bloodline)?.name}
            </div>
            <div class="flex flex-col">
              <span class="text-lg font-medium">Origin:</span>
              {data.origins.find((origin) => origin._id === character.origin)?.name}
            </div>
            <div class="flex flex-col">
              <span class="text-lg font-medium">Post:</span>
              {data.posts.find((post) => post._id === character.post)?.name}
            </div>
            <div class="mt-auto flex flex-col">
              <span class="text-lg font-medium">Player:</span>
              {character.player}
            </div>
          </div>
          <div
            class="absolute inset-0 z-10 flex gap-8 items-center justify-center text-6xl font-semibold text-white opacity-0 duration-300 hover:opacity-90"
          >
            <button
              class="btn-icon btn-icon-xl bg-violet-600"
              on:click={() => goto(`/characters/${character.id}/sheet`)}
            >
              <span class="icon-[ph--share-fat-light] h-8 w-8"></span>
            </button>
            <button
              class="btn-icon btn-icon-xl bg-red-600"
              on:click={() => handleDeleteCharacter(character.id)}
            >
              <span class="icon-[ph--trash-light] h-8 w-8"></span>
            </button>
          </div>
        </div>
      </SheetCard>
    {:else}
      <div class="flex flex-col justify-center">
        <div class="card p-4">
          <span class="text-slate-900 dark:text-white">No characters found. Go make some...</span>
        </div>
      </div>
    {/each}
    <a href={`/characters/create/sheet`} title="goto create a new character">
      <SheetCard color="success" label="create new character" class="w-96">
        <div class="relative grid grid-cols-[200px_1fr] gap-4">
          <div>
            <img src="https://placehold.co/200x300?text=New\nCharacter" alt="" />
          </div>
          <div class="flex flex-col gap-3">
            <div class="flex flex-col">
              <span class="text-lg font-medium">Bloodline:</span>
              <span>??????</span>
            </div>
            <div class="flex flex-col">
              <span class="text-lg font-medium">Origin:</span>
              <span>??????</span>
            </div>
            <div class="flex flex-col">
              <span class="text-lg font-medium">Post:</span>
              <span>??????</span>
            </div>
            <div class="mt-auto flex flex-col">
              <span class="text-lg font-medium">Player:</span>
              <span>You</span>
            </div>
          </div>
          <div
            class="absolute inset-0 z-10 flex items-center justify-center text-6xl font-semibold text-white opacity-0 duration-300 hover:opacity-80"
          >
            <div class="btn-icon btn-icon-xl bg-green-500">
              <span class="icon-[ph--plus] h-8 w-8"></span>
            </div>
          </div>
        </div>
      </SheetCard>
    </a>
  </div>
</div>
