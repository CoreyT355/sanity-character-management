<script>
  import SheetCard from '$lib/components/SheetCard/SheetCard.svelte';
  import Icon from '@iconify/svelte';
  import { v4 as uuidv4 } from 'uuid';

  export let data;

  const newCharacterId = uuidv4();
  const { characters } = data ?? [];
</script>

<div class="flex h-screen flex-col p-6">
  <div class="flex flex-row flex-wrap gap-4">
    {#each characters as character}
      {@const characterLabel = `${character.name} - Player: ${character.player}`}
      <a href={`/characters/${character._id}/sheet`}>
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
                {character.bloodline}
              </div>
              <div class="flex flex-col">
                <span class="text-lg font-medium">Origin:</span>
                {character.origin}
              </div>
              <div class="flex flex-col">
                <span class="text-lg font-medium">Post:</span>
                {character.post}
              </div>
              <div class="mt-auto flex flex-col">
                <span class="text-lg font-medium">Player:</span>
                {character.player}
              </div>
            </div>
            <div
              class="absolute inset-0 z-10 flex items-center justify-center text-6xl font-semibold text-white opacity-0 duration-300 hover:opacity-80"
            >
              <div class="rounded-full bg-violet-500 p-2">
                <Icon icon="ph:share-fat-light" class="h-12 w-12" />
              </div>
            </div>
          </div>
        </SheetCard>
      </a>
    {:else}
      <div class="flex flex-col justify-center">
        <span class="text-white">No characters found. Go make some...</span>
      </div>
    {/each}
    <a href={`/characters/${newCharacterId}/sheet?new=true`}>
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
            <div class="rounded-full bg-green-500 p-2">
              <Icon icon="ph:plus" class="h-12 w-12" />
            </div>
          </div>
        </div>
      </SheetCard>
    </a>
  </div>
</div>
