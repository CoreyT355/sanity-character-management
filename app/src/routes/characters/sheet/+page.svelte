<script lang="ts">
  import { Checkbox } from '$lib/components/ui/checkbox';
  import { Label } from '$lib/components/ui/label';
  import * as RadioGroup from '$lib/components/ui/radio-group';
  import * as Form from '$lib/components/ui/form';
  import Input from '$lib/components/ui/input/input.svelte';
  import SheetCard from '$lib/components/ui/sheet-card/sheet-card.svelte';
  import SectionHeader from '$lib/components/ui/section-header/section-header.svelte';
  import Track from '$lib/components/ui/track/track.svelte';
  import RankInput from '$lib/components/ui/rank-input/rank-input.svelte';
  import { Button } from '$lib/components/ui/button';
  import Icon from '@iconify/svelte';
  import Mire from '$lib/components/ui/mire/mire.svelte';
</script>

  <div class="h-full w-full space-y-4 md:w-5/12">
    <!-- <SectionHeader class="mb-3" label="How to play" />
     <div class="grid grid-cols-2 gap-3">
      <SheetCard variant="info" label="Roll">
        <div class="flex flex-col">
          <div class="flex flex-row justify-between">
            <span>Edge</span>
            <span>(1d6)</span>
          </div>
          <div class="flex flex-row justify-between">
            <span>Skill</span>
            <span>(Up to 3d6)</span>
          </div>
          <div class="flex flex-row justify-between">
            <span>Advantage</span>
            <span>(Up to 2d6)</span>
          </div>
        </div>
      </SheetCard>
      <SheetCard variant="info" label="Results">
        <div class="flex flex-col">
          <div class="flex flex-row justify-between">
            <span>Triumph</span>
            <span>[6]</span>
          </div>
          <div class="flex flex-row justify-between">
            <span>Conflict</span>
            <span>[5/4]</span>
          </div>
          <div class="flex flex-row justify-between">
            <span>Disaster</span>
            <span>[3/2/1]</span>
          </div>
          <div class="flex flex-row justify-between">
            <span>Twist</span>
            <span>[Doubles]</span>
          </div>
        </div>
      </SheetCard>
    </div> -->

    <div class="flex gap-4">
      <SheetCard class="w-3/12 h-full" variant="success" label="Edges">
        <div class="flex flex-col gap-2">
          <div class="flex flex-row justify-between">
            <Label
              for="terms"
              class="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Grace
            </Label>
            <RankInput maxRanks={1} currentRank={0} />
          </div>
          <div class="flex flex-row justify-between">
            <Label
              for="terms"
              class="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Iron
            </Label>
            <RankInput maxRanks={1} currentRank={0} />
          </div>
          <div class="flex flex-row justify-between">
            <Label
              for="terms"
              class="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Instinct
            </Label>
            <RankInput maxRanks={1} currentRank={0} />
          </div>
          <div class="flex flex-row justify-between">
            <Label
              for="terms"
              class="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Sharps
            </Label>
            <RankInput maxRanks={1} currentRank={0} />
          </div>
          <div class="flex flex-row justify-between">
            <Label
              for="terms"
              class="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Teeth
            </Label>
            <RankInput maxRanks={1} currentRank={0} />
          </div>
          <div class="flex flex-row justify-between">
            <Label
              for="terms"
              class="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Tides
            </Label>
            <RankInput maxRanks={1} currentRank={0} />
          </div>
          <div class="flex flex-row justify-between">
            <Label
              for="terms"
              class="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Veils
            </Label>
            <RankInput maxRanks={1} currentRank={0} />
          </div>
        </div>
      </SheetCard>
      <SheetCard class="w-9/12 h-full" variant="info" label="Languages">
        <div class="grid grid-cols-2 gap-x-4 gap-y-2">
          <div class="flex flex-row justify-between">
            <span>Low Sour</span>
            <RankInput maxRanks={3} currentRank={3} />
          </div>
          <div class="flex flex-row justify-between">
            <span>Raka Spit</span>
            <RankInput maxRanks={3} currentRank={0} />
          </div>
          <div class="flex flex-row justify-between">
            <span>Chthonic</span>
            <RankInput maxRanks={3} currentRank={0} />
          </div>
          <div class="flex flex-row justify-between">
            <span>Lyre-Bite</span>
            <RankInput maxRanks={3} currentRank={0} />
          </div>
          <div class="flex flex-row justify-between">
            <span>Saprekk</span>
            <RankInput maxRanks={3} currentRank={0} />
          </div>
          <div class="flex flex-row justify-between">
            <span>Old Hand</span>
            <RankInput maxRanks={3} currentRank={0} />
          </div>
          <div class="flex flex-row justify-between">
            <span>Gaudimm</span>
            <RankInput maxRanks={3} currentRank={0} />
          </div>
          <div class="flex flex-row justify-between">
            <span>Signalling</span>
            <RankInput maxRanks={3} currentRank={0} />
          </div>
          <div class="flex flex-row justify-between">
            <span>Knock</span>
            <RankInput maxRanks={3} currentRank={0} />
          </div>
          <div class="flex flex-row justify-between">
            <span>Highvin</span>
            <RankInput maxRanks={3} currentRank={0} />
          </div>
          <div class="flex flex-row justify-between">
            <span>Brasston...</span>
            <RankInput maxRanks={3} currentRank={0} />
          </div>
          <div class="flex flex-row justify-between">
            <span>Raolin</span>
            <RankInput maxRanks={3} currentRank={0} />
          </div>
        </div>
      </SheetCard>
    </div>

    <SheetCard class="w-full" variant="violet" label="Skills">
      <div class="grid grid-cols-3 gap-x-4 gap-y-2">
        <div class="flex flex-row justify-between">
          <span>Brace</span>
          <RankInput maxRanks={3} currentRank={0} />
        </div>
        <div class="flex flex-row justify-between">
          <span>Hack</span><RankInput maxRanks={3} currentRank={0} />
        </div>
        <div class="flex flex-row justify-between">
          <span>Sense</span>
          <RankInput maxRanks={3} currentRank={0} />
        </div>
        <div class="flex flex-row justify-between">
          <span>Break</span><RankInput maxRanks={3} currentRank={0} />
        </div>
        <div class="flex flex-row justify-between">
          <span>Harvest</span><RankInput maxRanks={3} currentRank={0} />
        </div>
        <div class="flex flex-row justify-between">
          <span>Study</span><RankInput maxRanks={3} currentRank={0} />
        </div>
        <div class="flex flex-row justify-between">
          <span>Concoct</span><RankInput maxRanks={3} currentRank={0} />
        </div>
        <div class="flex flex-row justify-between">
          <span>Hunt</span><RankInput maxRanks={3} currentRank={0} />
        </div>
        <div class="flex flex-row justify-between">
          <span>Sway</span><RankInput maxRanks={3} currentRank={0} />
        </div>
        <div class="flex flex-row justify-between">
          <span>Cook</span><RankInput maxRanks={3} currentRank={0} />
        </div>
        <div class="flex flex-row justify-between">
          <span>Outwit</span><RankInput maxRanks={3} currentRank={0} />
        </div>
        <div class="flex flex-row justify-between">
          <span>Tend</span><RankInput maxRanks={3} currentRank={0} />
        </div>
        <div class="flex flex-row justify-between">
          <span>Delve</span><RankInput maxRanks={3} currentRank={0} />
        </div>
        <div class="flex flex-row justify-between">
          <span>Rattle</span><RankInput maxRanks={3} currentRank={0} />
        </div>
        <div class="flex flex-row justify-between">
          <span>Vault</span><RankInput maxRanks={3} currentRank={0} />
        </div>
        <div class="flex flex-row justify-between">
          <span>Flourish</span><RankInput maxRanks={3} currentRank={0} />
        </div>
        <div class="flex flex-row justify-between">
          <span>Scavenge</span><RankInput maxRanks={3} currentRank={0} />
        </div>
        <div class="flex flex-row justify-between">
          <span>Wavewalk</span><RankInput maxRanks={3} currentRank={0} />
        </div>
      </div>
    </SheetCard>

    <SheetCard class="w-full" label="Drives">
      <div class="flex flex-col gap-2">
        <Input placeholder="Enter a Drive" />
        <Input placeholder="Enter a Drive" />
        <Input placeholder="Enter a Drive" />
      </div>
      <Button variant="success" size="sm" class="mt-3 rounded-full">
        <Icon icon="ph:plus" class="h-4 w-4" />
      </Button>
    </SheetCard>

    <SheetCard class="w-full" label="Mires">
      <div class="flex flex-col gap-4">
        <Mire text="Your movements are staccato, disturbing (Tzelicrae)" />
        <Mire text="The open sky is wide, oppressive (Rootless)" />
      </div>
    </SheetCard>
  </div>
  <div class="flex h-full w-full flex-col md:w-7/12">
    <div class="grid grid-cols-1 gap-3">
      <SheetCard class="w-full" label="Background">
        <div class="grid grid-cols-2 gap-x-6 gap-y-2">
          <div class="flex flex-row items-center justify-between gap-4">
            <Label class="w-24 text-base">Name</Label>
            <Input placeholder="Enter your character's name" />
          </div>
          <div class="flex flex-row items-center justify-between gap-4">
            <Label class="w-24  text-base">Bloodline</Label>
            <Input placeholder="Select a Bloodline" />
          </div>
          <div class="flex flex-row items-center justify-between gap-4">
            <Label class="w-24  text-base">Player</Label>
            <Input placeholder="Enter your name" />
          </div>
          <div class="flex flex-row items-center justify-between gap-4">
            <Label class="w-24  text-base">Origin</Label>
            <Input placeholder="Select an Origin" />
          </div>
          <div class="col-start-2 flex flex-row items-center justify-between gap-4">
            <Label class="w-24 text-base">Post</Label>
            <Input placeholder="Select a Post" />
          </div>
        </div>
      </SheetCard>

      <div class="mt-10 flex flex-col gap-3">
        <SectionHeader label="Resources"></SectionHeader>
        <div class="flex w-full gap-4">
          <SheetCard class="h-full w-full" label="Salvage"></SheetCard>
          <SheetCard class="h-full w-full" label="Specimens"></SheetCard>
        </div>
        <div class="mt-4 flex w-full gap-4">
          <SheetCard class="h-full w-full" label="Whispers"></SheetCard>
          <SheetCard class="h-full w-full" label="Carts"></SheetCard>
        </div>
      </div>

      <div class="mt-10 flex flex-col gap-3">
        <SectionHeader variant="default" label="Milestones"></SectionHeader>
        <div class="flex w-full gap-4">
          <SheetCard class="h-full w-full" label="Major"></SheetCard>
          <SheetCard class="h-full w-full" label="Minor"></SheetCard>
        </div>
      </div>
    </div>
  </div>
