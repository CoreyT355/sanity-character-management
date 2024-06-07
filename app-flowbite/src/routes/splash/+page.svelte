<script lang="ts">
  import { Progressbar } from 'flowbite-svelte';
  import { sineOut } from 'svelte/easing';
</script>

<div class="h-screen w-full items-center justify-center">
  <Progressbar
    divClass="flex flex-row items-center justify-center"
    size="h-1"
    class="w-full"
    animate
    tweenDuration={800}
    color="indigo"
    easing={sineOut}
    progress={100}
  />
</div>
