<script lang="ts">
  import { SectionHeader } from '../SectionHeader';
  import { page } from '$app/stores';

  let currentPath = $page.url.pathname.substring($page.url.pathname.lastIndexOf('/'));
  const characterId = $page.params.id;
</script>

<nav class="flex flex-row justify-center gap-8 p-4 pt-0">
  <SectionHeader
    variant={currentPath === '/sheet' ? 'info' : 'default'}
    class="w-32"
    label="Main"
    href={`/characters/${characterId}/sheet`}
  />
  <SectionHeader
    variant={currentPath === '/aspects' ? 'info' : 'default'}
    class="w-32"
    label="Aspects"
    href={`/characters/${characterId}/sheet/aspects`}
  />
  <SectionHeader
    variant={currentPath === '/notes' ? 'info' : 'default'}
    class="w-32"
    label="Notes"
    href={`/characters/${characterId}/sheet/notes`}
  />
</nav>
