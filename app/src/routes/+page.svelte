<script lang="ts">
  import { applyAction, enhance } from '$app/forms';
  import SheetCard from '$lib/components/SheetCard/SheetCard.svelte';
  import { Button, Label, Input, Spinner } from 'flowbite-svelte';
  import { page } from '$app/stores';

  export let data;
</script>

<main class="flex h-screen flex-row justify-center p-4">
  <SheetCard label="The wildsea character manager" class="w-full">
  </SheetCard>
</main>
