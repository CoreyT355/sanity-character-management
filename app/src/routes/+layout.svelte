<script lang="ts">
  import MainNav from '$lib/components/MainNav/MainNav.svelte';
  import { fly } from 'svelte/transition';
  import '../app.postcss';
  import Footer from '$lib/components/Footer/Footer.svelte';
  import { onMount } from 'svelte';
  import { goto, invalidate } from '$app/navigation';
  import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
  import { AppShell, Modal, Toast, initializeStores, storePopup, type ModalComponent } from '@skeletonlabs/skeleton';
  import AspectForm from '$lib/components/Aspect/AspectForm.svelte';
  import ResourceForm from '$lib/components/ResourceForm/ResourceForm.svelte';

  const modalRegistry: Record<string, ModalComponent> = {
    modalAspectForm: { ref: AspectForm },
    modalResourceForm: { ref: ResourceForm }
  };

  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

  initializeStores();

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
  };
</script>

<Modal components={modalRegistry} />
<Toast />
<AppShell>
  <svelte:fragment slot="header">
    <MainNav {session} on:signOut={() => handleSignOut()} />
  </svelte:fragment>
  {#key data.url}
    <div
      class="flex overflow-hidden"
      in:fly={{ x: 200, duration: 200, delay: 100 }}
      out:fly={{ x: -200, duration: 200 }}
    >
      <div class="h-full w-full">
        <slot />
      </div>
    </div>
  {/key}
  <svelte:fragment slot="footer">
    <Footer />
  </svelte:fragment>
</AppShell>
