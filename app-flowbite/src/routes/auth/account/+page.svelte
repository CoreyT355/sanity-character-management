<!-- src/routes/account/+page.svelte -->
<script lang="ts">
  import { enhance } from '$app/forms';
  import SheetCard from '$lib/components/SheetCard/SheetCard.svelte';
  import type { SubmitFunction } from '@sveltejs/kit';
  import { Button, Helper, Input, Label, Spinner } from 'flowbite-svelte';
  import z from 'zxcvbn';

  export let data;
  export let form;

  let { session, supabase, profile } = data;
  $: ({ session, supabase, profile } = data);

  let profileForm: HTMLFormElement;
  let loading = false;
  let fullName: string = profile?.full_name ?? '';
  let avatarUrl: string = profile?.avatar_url ?? '';

  $: newPassword = '';
  $: confirmPassword = '';
  $: passwordScore = z(newPassword).score;

  $: passwordsMatch = newPassword && newPassword === confirmPassword;

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
          <Label for="email" class="text-base text-black dark:text-white">Email</Label>
          <Input id="email" type="text" value={session.user.email} disabled />
        </div>
        <div class="space-y-2">
          <Label for="fullName" class="text-base text-black dark:text-white">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Enter your name..."
            value={form?.fullName ?? fullName}
          />
        </div>
        <Button type="submit" disabled={loading}>
          {#if loading}
            <Spinner class="me-2" size="4" />
          {/if}
          Update
        </Button>
      </div>
    </form>
  </SheetCard>

  <!-- <SheetCard label="Change Password">
    <form class="flex w-96 flex-col justify-center p-4" method="post" action="?/changepassword">
      <div class="flex flex-col justify-center gap-4">
        <div class="space-y-2">
          <Label for="newPassword" class="text-base text-black dark:text-white">New Password</Label>
          <Input
            id="newPassword"
            name="newPassword"
            type="password"
            placeholder="Enter your new password..."
            bind:value={newPassword}
          />
          <Helper class="grid grid-cols-4 gap-2 p-2">
            {#each { length: passwordScore } as _}
              <div class="h-1 bg-orange-300 dark:bg-orange-400" />
            {/each}
            {#each { length: 4 - passwordScore } as _}
              <div class="h-1 bg-gray-200 dark:bg-gray-600" />
            {/each}
          </Helper>
        </div>
        <div class="space-y-2">
          <Label for="confirmPassword" class="text-base text-black dark:text-white"
            >Confirm Password</Label
          >
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your new password..."
            bind:value={confirmPassword}
          />
          {#if !passwordsMatch}
             <Helper>Passwords do not match</Helper>
          {/if}
        </div>
        <Button type="submit" disabled={loading || !passwordsMatch}>
          {#if loading}
            <Spinner class="me-2" size="4" />
          {/if}
          Change Password
        </Button>
      </div>
    </form>
  </SheetCard> -->
</div>
