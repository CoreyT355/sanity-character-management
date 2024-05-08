<script>
  import '../app.pcss';
  import { ModeWatcher } from 'mode-watcher';
  import MainNav from '$lib/components/ui/main-nav/main-nav.svelte';
  import ModeToggle from '$lib/components/ui/mode-toggle/mode-toggle.svelte';
  import { fly } from 'svelte/transition';

  export let data;
</script>

<ModeWatcher />
<div class="root-layout flex h-screen flex-col">
  <div class="flex items-center justify-between border-b px-6 py-3">
    <!-- <TeamSwitcher /> -->
    <MainNav />
    <div class="flex items-center gap-4">
      <ModeToggle />
      <!-- <div class="flex h-8 w-8 justify-center rounded-full bg-slate-500 align-middle">
        <div>ct</div>
      </div> -->
    </div>
  </div>
  {#key data.url}
    <main
      class="h-screen p-6 pt-4"
      in:fly={{ x: -200, duration: 300, delay: 100 }}
      out:fly={{ x: 200, duration: 300 }}
    >
      <slot />
    </main>
  {/key}
</div>
