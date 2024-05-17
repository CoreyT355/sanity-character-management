<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import Icon from '@iconify/svelte';
  import { mode, toggleMode } from 'mode-watcher';
</script>

<Button on:click={toggleMode} variant="outline" size="icon">
  {#if $mode === 'dark'}
    <Icon icon="line-md:moon-loop" class="h-5 w-5" />
  {:else}
    <Icon icon="line-md:sun-rising-loop" class="h-5 w-5" />
  {/if}
  <span class="sr-only">Toggle theme</span>
</Button>
