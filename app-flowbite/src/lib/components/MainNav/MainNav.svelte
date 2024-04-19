<script lang="ts">
  import { page } from '$app/stores';
  import { DarkMode, Navbar, NavLi, NavUl } from 'flowbite-svelte';

  $: activeUrl = $page.url.pathname;
</script>

<Navbar let:NavContainer>
  <NavContainer>
    <NavUl {activeUrl}>
      <NavLi href="/" class="text-base">Home</NavLi>
      <NavLi href="/rules" class="text-base">Rules</NavLi>
      <NavLi href="/characters" class="text-base">Characters</NavLi>
      <NavLi href="/campaigns" class="text-base">Campaigns</NavLi>
      <NavLi href="/settings" class="text-base">Settings</NavLi>
    </NavUl>
    <div class="ms-auto flex items-center text-gray-500 dark:text-gray-400 sm:order-2">
			<DarkMode />
		</div>
  </NavContainer>
</Navbar>
