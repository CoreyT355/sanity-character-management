<script lang="ts">
  import { SectionHeader } from "../section-header";
  import { page } from "$app/stores";
  import Button from "../button/button.svelte";

  let currentPath = $page.url.pathname.substring($page.url.pathname.lastIndexOf('/'));
</script>

<nav class="flex flex-row justify-center gap-8 pt-0 p-4">
  <SectionHeader color={currentPath === '/sheet' ? 'info' : 'default'} class="w-32" label="Main" href="/characters/sheet" />
  <SectionHeader color={currentPath === '/aspects' ? 'info' : 'default'} class="w-32" label="Aspects" href="/characters/sheet/aspects" />
  <SectionHeader color={currentPath === '/notes' ? 'info' : 'default'} class="w-32" label="Notes" href="/characters/sheet/notes" />
</nav>