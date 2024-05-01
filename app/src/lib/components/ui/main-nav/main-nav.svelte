<script lang="ts">
  import { cn } from '$lib/utils';

  let className: string | undefined | null = undefined;
  export { className as class };
</script>

<nav class={cn('flex items-center space-x-4 lg:space-x-6', className)}>
  <div class="uppercase flex flex-col -space-y-1">
    <span class="pl-4 font-light">the</span>
    <span class="text-5xl tracking-wider font-semibold">wildsea</span>
  </div>
  <a href="/" class="text-base font-light transition-colors hover:text-primary"> Home </a>
  <a
    href="/characters/sheet"
    class="text-base font-light text-muted-foreground transition-colors hover:text-primary"
  >
    Character Sheet
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
