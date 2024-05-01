<script lang="ts">
  import { cn } from '$lib/utils';
  import { sectionHeaderVariants, type Props } from '.';

  export let variant: Props['variant'] = 'default';
  export let href: Props['href'] = undefined;

  export let label: string;
</script>

{#if href}
  <a {href} target="_self" class={cn(sectionHeaderVariants({ variant }), $$props.class)}>{label}</a>
{:else}
  <div class={cn(sectionHeaderVariants({ variant }), $$props.class)}>
    {label}
  </div>
{/if}

<style>
  .corner-cut {
    clip-path: polygon(
      0% 16px,
      16px 0%,
      100% 0%,
      100% 0%,
      100% calc(100% - 16px),
      calc(100% - 16px) 100%,
      0% 100%,
      0% 100%
    );
  }
</style>
