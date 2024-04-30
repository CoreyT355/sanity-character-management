<script lang="ts">
  import { cn } from '$lib/utils';
  import Icon from '@iconify/svelte';

  export let label: string;
  export let completed: boolean = false;
  export let active: boolean = false;

  const defaultClass =
    'text-default-foreground bg-accent border-muted-foreground w-full rounded-lg border p-3';

  const activeClass = 'text-info bg-accent border-info';
  const completedClass = 'border-success bg-accent text-success';
</script>

<li>
  <div class={cn(defaultClass, active && activeClass, completed && completedClass)} role="alert">
    <div class="flex items-center justify-between">
      <span class="sr-only">{label}</span>
      <h3 class="font-medium">{label}</h3>

      {#if completed}
        <Icon icon="ph:check-bold" class="h-5 w-5" />
        <!-- <Icon icon="line-md:check-all" class="h-5 w-5" /> -->
      {:else if active}
        <Icon icon="ph:arrow-right-bold" class="h-5 w-5" />
        <!-- <Icon icon="line-md:arrow-right" class="h-5 w-5" /> -->
      {/if}
    </div>
    <slot />
  </div>
</li>
