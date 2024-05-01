<script lang="ts">
  import Aspect from '$lib/components/ui/aspect/aspect.svelte';
  import { SectionHeader } from '$lib/components/ui/section-header';
  import { SheetCard } from '$lib/components/ui/sheet-card';

  const aspects = [
    {
      name: 'Blade of Husks',
      description: 'A ritual weapon made from the chitin of lost colony-members. Deals CQ Keen or Salt damage (Tzelicrae)',
      type: 'gear',
      trackLength: 3,
      currentCount: 0
    },
    {
      name: 'Slingshot',
      description: 'A simple slingshot, loaded with anything from stones to scrap to seeds. Deals LR Blunt or Blast damage (Rootless)',
      type: 'gear',
      trackLength: 3,
      currentCount: 0
    },
    {
      name: 'To The Bone',
      description: 'Use a task to direct your swarm to consume a fallen foe. When this task is completed, gain one of all possible non-edible resources that looting or butchering the foe might have offered',
      type: 'trait',
      trackLength: 1,
      currentCount: 0
    },
    {
      name: 'Gossamercraft',
      description: 'Mark to produce a resource, "Silk-Like Web" (either dry or sticky). (Tzelicrae)',
      type: 'trait',
      trackLength: 3,
      currentCount: 0
    },
    {
      name: 'Needs Must',
      description: 'You never mark mire for consuming food or drink, no matter the source or condition. (Rootless)',
      type: 'trait',
      trackLength: 4,
      currentCount: 0
    },
    {
      name: 'Dedicated Swarm',
      description: 'Perhaps centipedes, or bees, or scorpions - the crawling, droning creatures that swarm around you, are up to you to define. When you choose Dedicated Swarm as an aspect, it gains two benefits of your choice from  the following list... Used to It: You are resistant to Toxin damage, and any damage dealt by swarm or insect-based hazards. Releasing the Horde: Deals Spike, Toxin, or Acid damage at CQ or LR (choose the type and range when you gain this benefit). (Swarmjack)',
      type: 'companion',
      trackLength: 2,
      currentCount: 0
    }
  ]
</script>

<div class="flex flex-col gap-4 w-full">
  <SectionHeader class="" label="Aspects" />
  <div class="grid grid-cols-2 gap-4">
    {#each aspects as aspect}
      <Aspect {...aspect} />
    {/each}
  </div>
</div>
