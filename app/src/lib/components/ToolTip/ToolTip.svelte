<script lang="ts">
  export let popupName: string;
</script>

<div data-popup={popupName} class="card p-3 z-10 max-w-96">
  <slot />
</div>
