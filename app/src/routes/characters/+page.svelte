<script>
  import { goto } from "$app/navigation";
  import Button from "$lib/components/ui/button/button.svelte";

</script>

<div>
  <Button on:click={() => goto('characters/create')}>Create New Character</Button>
</div>