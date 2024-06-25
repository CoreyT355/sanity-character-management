<!-- src/routes/account/+page.svelte -->
<script lang="ts">
  import { enhance } from '$app/forms';
  import SheetCard from '$lib/components/SheetCard/SheetCard.svelte';
  import type { SubmitFunction } from '@sveltejs/kit';

  export let data;
  export let form;

  let { session, supabase, profile } = data;
  $: ({ session, supabase, profile } = data);

  let profileForm: HTMLFormElement;
  let loading = false;
  let fullName: string = profile?.full_name ?? '';
  let avatarUrl: string = profile?.avatar_url ?? '';

  const handleSubmit: SubmitFunction = () => {
    loading = true;
    return async () => {
      loading = false;
    };
  };

  const handleSignOut: SubmitFunction = () => {
    loading = true;
    return async ({ update }) => {
      loading = false;
      update();
    };
  };
</script>

<div class="flex h-screen items-start justify-center gap-8 p-6">
  <SheetCard label="Profile Settings">
    <form
      class="flex w-96 flex-col justify-center p-4"
      method="post"
      action="?/update"
      use:enhance={handleSubmit}
      bind:this={profileForm}
    >
      <div class="flex flex-col justify-center gap-4">
        <div class="space-y-2">
          <label class="label">
            <span>Email</span>
            <input id="email" name="email" class="input" type="text" value={session.user.email} disabled />
          </label>
        </div>
        <div class="space-y-2">
          <label class="label">
            <span>Full Name</span>
            <input
              id="fullName"
              name="fullName"
              class="input"
              type="text"
              placeholder="Enter your name..."
              value={form?.fullName ?? fullName}
            />
          </label>
        </div>
        <button class="btn variant-filled-primary" type="submit" disabled={loading}>
          Update
        </button>
      </div>
    </form>
  </SheetCard>
</div>
