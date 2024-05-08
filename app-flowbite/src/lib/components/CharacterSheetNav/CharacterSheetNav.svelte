<script lang="ts">
  import { SectionHeader } from "../SectionHeader";
  import { page } from "$app/stores";

  let currentPath = $page.url.pathname.substring($page.url.pathname.lastIndexOf('/'));
</script>

<nav class="flex flex-row justify-center gap-8 pt-0 p-4">
  <SectionHeader variant={currentPath === '/sheet' ? 'info' : 'default'} class="w-32" label="Main" href="/characters/sheet" />
  <SectionHeader variant={currentPath === '/aspects' ? 'info' : 'default'} class="w-32" label="Aspects" href="/characters/sheet/aspects" />
  <SectionHeader variant={currentPath === '/notes' ? 'info' : 'default'} class="w-32" label="Notes" href="/characters/sheet/notes" />
</nav>