<script lang="ts">
  import { applyAction, enhance } from '$app/forms';
  import SheetCard from '$lib/components/SheetCard/SheetCard.svelte';
  import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';

  let loading = false;

  const toastStore = getToastStore();

  const toast: ToastSettings = {
    message: 'Magic link sent. Please check your email (even the spam filter).',
    hideDismiss: false
  };
</script>

<main class="flex h-screen flex-row justify-center p-4">
  <SheetCard color="info" label="login">
    <div class="flex flex-col gap-6">
      <div>
        <h3>Welcome to The Wildsea Character Manager</h3>
        <p>To start please login using your email below.</p>
      </div>
      <form
        class="flex w-96 flex-col justify-center"
        method="POST"
        action="?/login"
        use:enhance={({ formElement, formData, action, cancel }) => {
          return async ({ result }) => {
            console.log('result', result);
            toastStore.trigger(toast);
            await applyAction(result);
          };
        }}
      >
        <div class="flex flex-col justify-center gap-4">
          <div class="space-y-2">
            <label class="label">
              <span>Email</span>
              <input name="email" type="email" placeholder="Please enter your email address..." />
            </label>
          </div>
          <button type="submit" class="btn variant-filled-primary" disabled={loading}>
            {#if loading}
              <span class="me-3"></span>
            {:else}
              <span class="me-3"></span>
            {/if}
            Send magic link...
          </button>
        </div>
      </form>
    </div>
  </SheetCard>
</main>
