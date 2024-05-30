<script lang="ts">
  import { page } from '$app/stores';
  import { AppBar, Avatar, LightSwitch, popup, type PopupSettings } from '@skeletonlabs/skeleton';
  import { createEventDispatcher } from 'svelte';

  $: activeUrl = $page.url.pathname;

  console.log(activeUrl);
  

  export let session;

  const userPopupClick: PopupSettings = {
    event: 'click',
    target: 'userPopup',
    placement: 'bottom'
  };

  const dispatch = createEventDispatcher();
</script>

<AppBar>
  <svelte:fragment slot="lead">
    <div class="mr-2 flex flex-col -space-y-1 uppercase">
      <span class="pl-4 font-light">the</span>
      <span class="text-5xl font-semibold tracking-wider">wildsea</span>
    </div>
  </svelte:fragment>
  <ul class="flex flex-row text-lg font-medium gap-3" >
    <a href="/" class="text-base" class:active={activeUrl === '/'}>Home</a>
    <!-- <a href="/rules" class="text-base">Rules</a> -->
    <a href="/characters" class="text-base" class:active={activeUrl.includes('/characters')}>Characters</a>
    <!-- <a href="/campaigns" class="text-base">Campaigns</a> -->
    <a href="/auth/account" class="text-base" class:active={activeUrl === '/auth/account'}>Account</a>
  </ul>
  <svelte:fragment slot="trail">
    <LightSwitch />
    <span use:popup={userPopupClick}>
      <Avatar
        class="cursor-pointer hover:opacity-75 border-4 border-surface-300-600-token hover:!border-green-500"
        id="userAvatar"
        initials="WS"
        rounded="rounded-full"
        width="w-12"
        fontSize={175}
      />
    </span>
    <div data-popup="userPopup">
      {#if session}
        <div>
          <span class="text-sm font-light">Logged in as:</span>
          <div>{session.user.email}</div>
        </div>
        <a class="rounded" href="/auth/account">Account</a>
        <a class="rounded" href="/characters">Characters</a>
        <button class="rounded" on:click={() => dispatch('signOut')}>Sign Out</button>
      {:else}
        <a class="rounded" href="/auth/login">Sign In</a>
      {/if}
    </div>
  </svelte:fragment>
</AppBar>

<style>
  .active {
    @apply underline decoration-green-800 dark:decoration-green-300 decoration-2 underline-offset-2;
  }
</style>