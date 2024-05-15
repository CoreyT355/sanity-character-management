<script lang="ts">
  import { cn } from '$lib/utils';

  export let label: string;
  export let completed: boolean = false;
  export let active: boolean = false;

  const activeClass = 'text-blue-700 bg-blue-100 border border-blue-300 rounded-lg dark:bg-gray-800 dark:border-blue-800 dark:text-blue-400';
  const completedClass = 'border-green-300 bg-green-50 p-4 text-green-700 dark:border-green-800 dark:bg-gray-800 dark:text-green-400';
  const defaultClass = 'text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400';
</script>

<li>
  <div
    class={cn(
      'w-full p-4 rounded-lg border',
      active && activeClass,
      completed && completedClass,
      !active && !completed && defaultClass
    )}
    role="alert"
  >
    <div class="flex items-center justify-between">
      <span class="sr-only">{label}</span>
      <h3 class="font-medium">{label}</h3>

      {#if completed}
        <svg
          class="h-4 w-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 12"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5.917 5.724 10.5 15 1.5"
          />
        </svg>
      {:else if active}
        <svg
          class="h-4 w-4 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      {/if}
    </div>
    <slot />
  </div>
</li>
