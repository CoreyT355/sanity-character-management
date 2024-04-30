<script lang="ts">
  import { RadioGroup as RadioGroupPrimitive } from 'bits-ui';
  import Icon from '@iconify/svelte';
  import { cn } from '$lib/utils';

  type $$Props = RadioGroupPrimitive.ItemProps;
  type $$Events = RadioGroupPrimitive.ItemEvents;

  let className: $$Props['class'] = undefined;
  export let value: $$Props['value'];
  export { className as class };
</script>

<RadioGroupPrimitive.Item
  {value}
  class={cn(
    'border-primary text-primary ring-offset-background focus-visible:ring-ring aspect-square h-5 w-5 rounded-full border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    className
  )}
  {...$$restProps}
  on:click
>
  <div class="flex items-center justify-center">
    <RadioGroupPrimitive.ItemIndicator>
      <Icon icon="ph:check-bold" class="h-3 w-3 fill-current text-current" />
    </RadioGroupPrimitive.ItemIndicator>
  </div>
</RadioGroupPrimitive.Item>
