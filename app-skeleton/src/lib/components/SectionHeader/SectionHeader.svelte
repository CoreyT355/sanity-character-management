<!-- svelte-ignore a11y-no-static-element-interactions -->
<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let href: string = '';
  export let label: string;

  const sectionHeaderBaseClass =
    'corner-cut uppercase overflow-hidden p-2 text-center h-min dark:text-white text-white';

  type SectionHeaderColor = keyof typeof colorClasses;
  export let color: SectionHeaderColor = 'default';
  const colorClasses = {
    default: 'bg-slate-500 border-r border-slate-500',
    destructive: 'bg-red-500 border-r border-red-500 ',
    primary: 'bg-primary-500 border-r border-primary-500',
    secondary: 'bg-secondary border-r border-secondary',
    success: 'bg-green-500 border-r border-green-500',
    info: 'bg-blue-500 border-r border-blue-500',
    warning: 'bg-amber-500 border-r border-amber-500',
    violet: 'bg-violet-500 border-r border-violet-500'
  };

  $: sectionHeaderClass = twMerge(sectionHeaderBaseClass, colorClasses[color], $$props.class);
</script>

{#if href}
  <a {href} target="_self" class={sectionHeaderClass}>
    {label}
  </a>
{:else}
  <div class={sectionHeaderClass}>
    <span>{label}</span>
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
