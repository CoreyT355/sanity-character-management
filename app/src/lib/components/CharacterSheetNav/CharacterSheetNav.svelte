<script lang="ts">
  import SectionHeader from '$lib/components/SectionHeader/SectionHeader.svelte';
  import { page } from '$app/stores';

  let currentPath = $page.url.pathname.substring($page.url.pathname.lastIndexOf('/'));
  const characterId = $page.params.id;
</script>

<nav class="flex flex-row justify-center gap-8 p-4 pt-0">
  <SectionHeader
    color={currentPath === '/sheet' ? 'info' : 'default'}
    class="w-32 hover:underline decoration-2"
    label="Main"
    href={`/characters/${characterId}/sheet`}
  />
  <SectionHeader
    color={currentPath === '/aspects' ? 'info' : 'default'}
    class="w-32 hover:underline decoration-2"
    label="Aspects"
    href={`/characters/${characterId}/aspects`}
  />
  <SectionHeader
    color={currentPath === '/notes' ? 'info' : 'default'}
    class="w-32 hover:underline decoration-2"
    label="Notes"
    href={`/characters/${characterId}/notes`}
  />
</nav>
