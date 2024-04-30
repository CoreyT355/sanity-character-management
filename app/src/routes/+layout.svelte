<script>
  import '../app.pcss';
  import { ModeWatcher } from 'mode-watcher';
  import MainNav from '$lib/components/ui/main-nav/main-nav.svelte';
  import ModeToggle from '$lib/components/ui/mode-toggle/mode-toggle.svelte';
</script>

<ModeWatcher />
<div class="root-layout flex flex-col h-screen">
  <div class="flex items-center border-b py-3 px-6 justify-between">
    <!-- <TeamSwitcher /> -->
    <MainNav />
    <div class="flex items-center gap-4">
      <ModeToggle />
      <div class="flex h-8 w-8 justify-center rounded-full bg-slate-500 align-middle">
        <div>ct</div>
      </div>
    </div>
  </div>
  <main class="p-6 h-screen">
    <slot />
  </main>
</div>
