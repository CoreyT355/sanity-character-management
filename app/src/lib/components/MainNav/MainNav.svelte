<script lang="ts">
  import { page } from '$app/stores';
  import {
    Avatar,
    DarkMode,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavLi,
    NavUl
  } from 'flowbite-svelte';
  import { createEventDispatcher } from 'svelte';

  $: activeUrl = $page.url.pathname;

  export let session;

  const dispatch = createEventDispatcher();
</script>

<Navbar fluid let:NavContainer>
  <NavContainer fluid>
    <div class="mr-2 flex flex-col -space-y-1 uppercase">
      <span class="pl-4 font-light">the</span>
      <span class="text-5xl font-semibold tracking-wider">wildsea</span>
    </div>
    <NavUl {activeUrl} activeClass="underline">
      <NavLi href="/" class="text-base">Home</NavLi>
      <!-- <NavLi href="/rules" class="text-base">Rules</NavLi> -->
      <NavLi href="/characters" class="text-base">Characters</NavLi>
      <!-- <NavLi href="/campaigns" class="text-base">Campaigns</NavLi>
      <NavLi href="/settings" class="text-base">Settings</NavLi> -->
    </NavUl>
    <div class="ms-auto flex items-center gap-4 text-gray-500 sm:order-2 dark:text-gray-400">
      <DarkMode />
      <Avatar class="cursor-pointer hover:opacity-75" id="userAvatar" rounded />
      <Dropdown triggeredBy="#userAvatar">
        {#if session}
          <DropdownHeader>
            <span class="text-sm font-light">Logged in as:</span>
            <div>{session.user.email}</div>
          </DropdownHeader>
          <DropdownItem class="rounded" href="/auth/account">Account</DropdownItem>
          <DropdownItem class="rounded" href="/characters">Characters</DropdownItem>
          <DropdownDivider />
          <DropdownItem class="rounded" on:click={() => dispatch('signOut')}>Sign Out</DropdownItem>
        {:else}
          <DropdownItem class="rounded" href="/">Sign In</DropdownItem>
        {/if}
      </Dropdown>
    </div>
  </NavContainer>
</Navbar>
