<script lang="ts">
  import { SectionHeader } from '$lib/components/ui/section-header';
  import { cn } from "$lib/utils";
  import { sheetCardVariants, type Props } from ".";

  export let variant: Props['variant'] = 'default';
  export let label: string;
</script>

<div class={cn($$props.class)}>
  <SectionHeader variant={variant} {label} />
  <div class={cn(sheetCardVariants({ variant, ...$$props.class }), 'h-full')}>
    <slot />
  </div>
</div>