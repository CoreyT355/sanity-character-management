<script lang="ts">
  import Aspect from '$lib/components/ui/aspect/aspect.svelte';
  import { SectionHeader } from '$lib/components/ui/section-header';
  import { SheetCard } from '$lib/components/ui/sheet-card';
</script>

<div class="flex flex-col gap-4">
  <SheetCard label="test">
    <p>lorem ipsum dolor sit amet</p>
  </SheetCard>
  <SheetCard label="test">
    <p>lorem ipsum dolor sit amet</p>
  </SheetCard>
  <SheetCard label="test">
    <p>lorem ipsum dolor sit amet</p>
  </SheetCard>

  <Aspect name="Gossamercraft" description="Mark to produce a resource, 'Silk-Like Web' (either dry or sticky).(Tzelicrae)" type="trait" trackLength={3} currentCount={0} />
</div>
