<script>
  import MainNav from '$lib/components/MainNav/MainNav.svelte';
  import { fly } from 'svelte/transition';
  import '../app.pcss';
  import Footer from '$lib/components/Footer/Footer.svelte';

  export let data;
</script>

<header>
  <MainNav />
</header>

{#key data.url}
  <div
    class="flex overflow-hidden"
    in:fly={{ x: -200, duration: 200, delay: 50 }}
    out:fly={{ x: 200, duration: 200 }}
  >
    <div class=" h-full w-full">
      <slot />
    </div>
  </div>
{/key}


<Footer />
