<script lang="ts">
  import SectionHeader from '$lib/components/SectionHeader/SectionHeader.svelte';
  import { cn } from '$lib/utils';
  import { twMerge } from 'tailwind-merge';

  export let label: string;

  const sheetCardBaseClass =
    'dark:bg-slate-900 bg-slate-300 border-2 rounded-b-md -mt-6 pt-10 pb-4 px-4 dark:text-white text-slate-900';
  type SheetCardColor = keyof typeof colorClasses;
  export let color: SheetCardColor = 'default';
  const colorClasses = {
    default: 'border-slate-500',
    destructive: 'border-red-500',
    primary: 'border-primary-500',
    success: 'border-green-500',
    info: 'border-blue-500',
    warning: 'border-amber-500',
    violet: 'border-violet-500'
  };

  $: sheetCardClass = twMerge(sheetCardBaseClass, colorClasses[color], $$props.class);
</script>

<div class={cn($$props.class)}>
  <SectionHeader {color} {label} />
  <div class={sheetCardClass}>
    <slot />
  </div>
</div>
