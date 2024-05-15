<script>
  import MainNav from '$lib/components/MainNav/MainNav.svelte';
  import { fly } from 'svelte/transition';
  import '../app.pcss';
  import Footer from '$lib/components/Footer/Footer.svelte';
  import { onMount } from 'svelte';
  import { goto, invalidate } from '$app/navigation';

  export let data;

  let { supabase, session } = data;
  $: ({ supabase, session } = data);

  onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth');
      }
    });

    return () => data.subscription.unsubscribe();
  });

  const handleSignOut = async () => {
    if (session) {
      await supabase.auth.signOut();
      goto('/');
    }
  }
</script>

<header>
  <MainNav {session} on:signOut={() => handleSignOut()}/>
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
