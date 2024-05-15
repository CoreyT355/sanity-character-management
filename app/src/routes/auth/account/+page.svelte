<!-- src/routes/account/+page.svelte -->
<script lang="ts">
  import { enhance } from '$app/forms';
  import SectionHeader from '$lib/components/SectionHeader/SectionHeader.svelte';
  import SheetCard from '$lib/components/SheetCard/SheetCard.svelte';
  import type { SubmitFunction } from '@sveltejs/kit';
  import { Label, Input, Button } from 'flowbite-svelte';

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

<div class="flex h-screen items-start justify-center p-6">
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
          <Label for="email" class="text-base text-black dark:text-white">Email</Label>
          <Input id="email" type="text" value={session.user.email} disabled />
        </div>
        <div class="space-y-2">
          <Label for="fullName" class="text-base text-black dark:text-white">Full Name</Label>
          <Input id="fullName" name="fullName" type="text" value={form?.fullName ?? fullName} />
        </div>
        <Button type="submit" class="button primary block" disabled={loading}>
          {loading ? 'Loading...' : 'Update'}
        </Button>
      </div>
    </form>
  </SheetCard>

  <!-- <form method="post" action="?/signout" use:enhance={handleSignOut}>
    <div>
      <Button class="" disabled={loading}>Sign Out</Button>
    </div>
  </form> -->
</div>
