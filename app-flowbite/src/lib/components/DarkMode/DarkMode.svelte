<script lang="ts">
  import { DarkMode } from 'flowbite-svelte';
  import { isDarkMode } from '$lib/store/theme';
  import { onMount } from 'svelte';

  const updateTheme = () => {
    isDarkMode.set(document.documentElement.classList.contains('dark'));
  };

  onMount(() => {
    updateTheme();

    // Make a mutation observer to watch for class changes on ownerDocument.documentElement
    // and update the theme accordingly
    const darkModeObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          updateTheme();
        }
      });
    });
    // Observe changes to the class attribute of the ownerDocument.documentElement
    darkModeObserver.observe(document.documentElement, {
      attributes: true
    });
  });
</script>

<DarkMode />
