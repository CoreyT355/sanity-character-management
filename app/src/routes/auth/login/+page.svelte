<script lang="ts">
  import { applyAction, enhance } from '$app/forms';
  import SheetCard from '$lib/components/SheetCard/SheetCard.svelte';
  import { Button, Label, Input, Spinner } from 'flowbite-svelte';

  export let data;

  let loading = false;
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
            await applyAction(result);
          };
        }}
      >
        <div class="flex flex-col justify-center gap-4">
          <div class="space-y-2">
            <Label for="email" class="text-base text-black dark:text-white">Email</Label>
            <Input name="email" type="email" placeholder="Please enter your email address..." />
          </div>
          <Button color="green" type="submit" class="" disabled={loading}>
            {#if loading}
              <Spinner class="me-3" size="4" />
            {:else}
              <span class="me-3"></span>
            {/if}
            Send magic link...
          </Button>
        </div>
      </form>
    </div>
  </SheetCard>
</main>
