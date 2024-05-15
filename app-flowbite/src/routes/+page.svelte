<script lang="ts">
  import { Auth } from '@supabase/auth-ui-svelte';
  import { ThemeSupa } from '@supabase/auth-ui-shared';
  import colors from 'tailwindcss/colors';
  import Aspect from '$lib/components/Aspect/Aspect.svelte';
  import { SheetCard } from '$lib/components/SheetCard';

  export let data;

  const supaAuthTheme = {
    theme: ThemeSupa,
    variables: {
      default: {
        colors: {
          brand: colors.emerald[500]
        }
      }
    }
  };
</script>

<main class="flex h-screen flex-row p-4 justify-center">
  <SheetCard variant="info" label="welcome" class="w-96 h-min">
    <div>
      <h3>Welcome to The Wildsea Character Manager</h3>
      <p>To start please login using your email below.</p>
    </div>
    <Auth
      supabaseClient={data.supabase}
      view="magic_link"
      redirectTo={`${data.url}/auth/callback`}
      showLinks={false}
      appearance={supaAuthTheme}
    />
  </SheetCard>
</main>
