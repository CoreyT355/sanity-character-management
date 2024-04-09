<script>
  import '../app.pcss';
  import { ModeWatcher } from 'mode-watcher';
  import MainNav from '$lib/components/ui/main-nav/main-nav.svelte';
  import ModeToggle from '$lib/components/ui/mode-toggle/mode-toggle.svelte';
</script>

<ModeWatcher />
<div class="flex-col md:flex">
  <div class="flex h-16 items-center border-b p-6">
    <!-- <TeamSwitcher /> -->
    <MainNav />
    <div class="ml-auto flex items-center gap-4">
      <ModeToggle />
      <div class="flex h-8 w-8 justify-center rounded-full bg-slate-500 align-middle">
        <div>ct</div>
      </div>
    </div>
  </div>
  <div class="p-6">
    <slot />
  </div>
</div>
