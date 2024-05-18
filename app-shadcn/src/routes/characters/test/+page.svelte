<script lang="ts">
  import Aspect from '$lib/components/ui/aspect/aspect.svelte';
  import { SectionHeader } from '$lib/components/ui/section-header';
  import { SheetCard } from '$lib/components/ui/sheet-card';
  import { TrackMarker } from '$lib/components/ui/track-marker';
</script>


<div class="flex flex-col gap-4">
  <SectionHeader label="SECTION I" />
  <SheetCard label="test">
    <p>lorem ipsum dolor sit amet</p>
  </SheetCard>

  <TrackMarker state={0} />
  <TrackMarker state={1} />
  <TrackMarker state={2} />

  <Aspect name="Gossamercraft" description="Mark to produce a resource, 'Silk-Like Web' (either dry or sticky).(Tzelicrae)" type="trait" trackLength={6} currentTrack={[]} />
</div>
