<script lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import Icon from '@iconify/svelte';
  import { cn } from '$lib/utils';

  type $$Props = SelectPrimitive.TriggerProps;
  type $$Events = SelectPrimitive.TriggerEvents;

  let className: $$Props['class'] = undefined;
  export { className as class };
</script>

<SelectPrimitive.Trigger
  class={cn(
    'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
    className
  )}
  {...$$restProps}
  let:builder
  on:click
  on:keydown
>
  <slot {builder} />
  <div>
    <Icon icon="ph:caret-down" class="h-4 w-4 opacity-50" />
  </div>
</SelectPrimitive.Trigger>
