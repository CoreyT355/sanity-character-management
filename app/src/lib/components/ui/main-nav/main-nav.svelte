<script lang="ts">
  import { cn } from '$lib/utils';

  let className: string | undefined | null = undefined;
  export { className as class };
</script>

<nav class={cn('flex items-center space-x-4 lg:space-x-6', className)}>
  <a href="/" class="text-base font-light transition-colors hover:text-primary"> Home </a>
  <a
    href="/characters"
    class="text-base font-light text-muted-foreground transition-colors hover:text-primary"
  >
    Characters
  </a>
  <a
    href="/"
    class="text-base font-light text-muted-foreground transition-colors hover:text-primary"
  >
    Campaigns
  </a>
  <a
    href="/"
    class="text-base font-light text-muted-foreground transition-colors hover:text-primary"
  >
    Settings
  </a>
</nav>
