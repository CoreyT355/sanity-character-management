<script lang="ts">
  import { isEditing } from '$lib/store/characters';
  import Icon from '@iconify/svelte';
  import { getDrawerStore, popup, type PopupSettings } from '@skeletonlabs/skeleton';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const drawerStore = getDrawerStore();

  const speedDialPopup: PopupSettings = {
    event: 'click',
    target: 'speedDialPopup',
    placement: 'top'
  };
</script>

<div class="fixed end-6 bottom-6 group">
  <ul data-popup="speedDialPopup" class="space-y-2">
    <li>
      <button class="btn-icon variant-filled" name="Help - How to Play" on:click={() => dispatch('open-help')}>
        <Icon icon="ph:question-mark" class="h-8 w-8" />
      </button>
    </li>
    <li>
      <button class="btn-icon variant-filled" name="Save" disabled={!$isEditing} form="characterForm" type="submit">
        <Icon icon="ph:floppy-disk-back-light" class="h-8 w-8" />
      </button>
    </li>
    <li>
      <button class="btn-icon variant-filled" name="Cancel" disabled={!$isEditing} on:click={() => isEditing.set(false)}>
        <Icon icon="ph:x-light" class="h-8 w-8" />
      </button>
    </li>
    <li>
      <button class="btn-icon variant-filled" name="Edit" on:click={() => isEditing.set(true)}>
        <Icon icon="ph:pencil-light" class="h-8 w-8" />
      </button>
    </li>
  </ul>
  <button class="btn-icon variant-filled" use:popup={speedDialPopup}>
    <Icon icon="ph:plus" class="h-8 w-8 hover:rotate-45 transition-all" />
  </button>
</div>
