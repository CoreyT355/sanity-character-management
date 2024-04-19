<script>
  import { goto } from "$app/navigation";
  import { Button } from "flowbite-svelte";
</script>

<div class="flex flex-col p-6">
  <Button size="md" on:click={() => goto('/characters/create')}>Create New Character</Button>
</div>