<script lang="ts">
  import { cn } from '$lib/utils';
  import { sectionHeaderVariants, type Props } from '.';

  export let variant: Props['variant'] = 'default';

  export let label: string;
</script>

<div class={cn(sectionHeaderVariants({ variant }), $$props.class)}>{label}</div>

<style>
  .corner-cut {
    clip-path: polygon(
      0% 20px,
      20px 0%,
      100% 0%,
      100% 0%,
      100% calc(100% - 20px),
      calc(100% - 20px) 100%,
      0% 100%,
      0% 100%);
  }
</style>
