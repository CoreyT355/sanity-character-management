<script>
  import MainNav from '$lib/components/MainNav/MainNav.svelte';
import '../app.pcss';
</script>

<header>
  <MainNav />
</header>

<div class="flex overflow-hidden">
  <div class=" h-full w-full">
    <slot />
  </div>
</div>
