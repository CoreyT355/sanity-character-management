<script lang="ts">
  import { cn } from '$lib/utils';

  let className: string | undefined | null = undefined;
  export { className as class };
</script>

<nav class={cn('flex items-end space-x-4 lg:space-x-6', className)}>
  <div class="flex flex-col -space-y-1 uppercase">
    <span class="pl-4 font-light">the</span>
    <span class="text-5xl font-semibold tracking-wider">wildsea</span>
  </div>
  <a href="/" class="hover:text-primary text-base font-light transition-colors"> Home </a>
  <a
    href="/characters/sheet"
    class="text-muted-foreground hover:text-primary text-base font-light transition-colors"
  >
    Character Sheet
  </a>

  <a
    href="/"
    class="text-muted-foreground hover:text-primary text-base font-light transition-colors"
  >
    Campaigns
  </a>
  <a
    href="/"
    class="text-muted-foreground hover:text-primary text-base font-light transition-colors"
  >
    Settings
  </a>
</nav>
