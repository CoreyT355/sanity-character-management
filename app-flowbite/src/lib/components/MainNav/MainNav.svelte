<script lang="ts">
  import { page } from '$app/stores';
  import { Avatar, DarkMode, Navbar, NavLi, NavUl } from 'flowbite-svelte';

  $: activeUrl = $page.url.pathname;
</script>

<Navbar fluid let:NavContainer>
  <NavContainer fluid>
    <div class="mr-2 flex flex-col -space-y-1 uppercase">
      <span class="pl-4 font-light">the</span>
      <span class="text-5xl font-semibold tracking-wider">wildsea</span>
    </div>
    <NavUl {activeUrl}>
      <NavLi href="/" class="text-base">Home</NavLi>
      <!-- <NavLi href="/rules" class="text-base">Rules</NavLi> -->
      <NavLi href="/characters" class="text-base">Characters</NavLi>
      <!-- <NavLi href="/campaigns" class="text-base">Campaigns</NavLi>
      <NavLi href="/settings" class="text-base">Settings</NavLi> -->
    </NavUl>
    <div class="ms-auto flex items-center text-gray-500 sm:order-2 dark:text-gray-400">
      <DarkMode />
      <Avatar rounded />
    </div>
  </NavContainer>
</Navbar>
