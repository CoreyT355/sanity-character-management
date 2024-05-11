<!-- svelte-ignore a11y-no-static-element-interactions -->
<script lang="ts">
  import { cn } from '$lib/utils';
  import { sectionHeaderVariants, type Props } from '.';
  import { Button } from '$lib/components/ui/button';
  import Icon from '@iconify/svelte';

  export let variant: Props['variant'] = 'default';
  export let href: Props['href'] = undefined;
  export let isEditable: Props['isEditable'] = false;

  export let label: string;

  let showEdit = false;
</script>

{#if href}
  <a {href} target="_self" class={cn(sectionHeaderVariants({ variant }), $$props.class)}>
    {label}
  </a>
{:else}
  <div
    class={cn(sectionHeaderVariants({ variant }), $$props.class, 'flex flex-row justify-center')}
    on:mouseenter={() => (showEdit = true)}
    on:mouseleave={() => (showEdit = false)}
  >
    <span class="ml-auto">{label}</span>
    <div class="w-6 h-6 ml-auto mr-3">
      {#if isEditable && showEdit}
        <Button size="icon" class="h-6 w-6">
          <Icon icon="ph:pencil-light" class="h-5 w-5" />
        </Button>
      {/if}
    </div>
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
