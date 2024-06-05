<script lang="ts">
  import { isEditing } from '$lib/store/characters';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
</script>

<div class="fixed end-6 bottom-16 group">
  <ul class="space-y-3 invisible group-hover:visible mb-3">
    <li>
      <button
        class="btn-icon variant-filled-primary ring hover:ring-blue-500"
        name="Help - How to Play"
        on:click={() => dispatch('open-help')}
      >
        <span class="icon-[ph--question-mark] h-8 w-8"></span>
      </button>
    </li>
    <li>
      <button
        class="btn-icon variant-filled-primary ring hover:ring-blue-500"
        disabled={!$isEditing}
        form="createCharacterForm"
        type="submit"
      >
        <span class="icon-[ph--floppy-disk-back-light] h-8 w-8"></span>
      </button>
    </li>
    <li>
      <button
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
