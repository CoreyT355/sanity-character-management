<script lang="ts">
  import { Checkbox } from '$lib/components/ui/checkbox';
  import { Label } from '$lib/components/ui/label';
  import * as RadioGroup from '$lib/components/ui/radio-group';
  import * as Form from '$lib/components/ui/form';
  import Input from '$lib/components/ui/input/input.svelte';
  import SheetCard from '$lib/components/ui/sheet-card/sheet-card.svelte';
  import SectionHeader from '$lib/components/ui/section-header/section-header.svelte';
</script>

<h2 class="text-3xl uppercase">The Wildsea</h2>
<div class="flex h-full flex-col gap-3 md:flex-row">
  <div class="h-full w-full md:w-5/12">
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
    <div class="flex w-full flex-row gap-4">
      <SheetCard class="w-3/12" variant="success" label="Edges">
        <div class="flex flex-col gap-2">
          <div class="flex flex-row justify-between">
            <Label
              for="terms"
              class="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Grace
            </Label>
            <Checkbox id="terms" />
          </div>
          <div class="flex flex-row justify-between">
            <Label
              for="terms"
              class="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Iron
            </Label>
            <Checkbox id="terms" />
          </div>
          <div class="flex flex-row justify-between">
            <Label
              for="terms"
              class="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Instinct
            </Label>
            <Checkbox id="terms" />
          </div>
          <div class="flex flex-row justify-between">
            <Label
              for="terms"
              class="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Sharps
            </Label>
            <Checkbox id="terms" />
          </div>
          <div class="flex flex-row justify-between">
            <Label
              for="terms"
              class="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Teeth
            </Label>
            <Checkbox id="terms" />
          </div>
          <div class="flex flex-row justify-between">
            <Label
              for="terms"
              class="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Tides
            </Label>
            <Checkbox id="terms" />
          </div>
          <div class="flex flex-row justify-between">
            <Label
              for="terms"
              class="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Veils
            </Label>
            <Checkbox id="terms" />
          </div>
        </div>
      </SheetCard>
      <SheetCard class="w-9/12" variant="info" label="Languages">
        <div class="grid grid-cols-2 gap-x-4 gap-y-2">
          <div class="flex flex-row justify-between">
            <span>Low Sour</span>
            <RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Raka Spit</span>
            <RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Chthonic</span>
            <RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Lyre-Bite</span>
            <RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Saprekk</span>
            <RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Old Hand</span>
            <RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Gaudimm</span>
            <RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Signalling</span>
            <RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Knock</span>
            <RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Highvin</span>
            <RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Brasston...</span>
            <RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Raolin</span>
            <RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
        </div>
      </SheetCard>
    </div>
    <div class="mt-10 flex w-full flex-row">
      <SheetCard class="w-full" variant="violet" label="Skills">
        <div class="grid grid-cols-3 gap-x-4 gap-y-2">
          <div class="flex flex-row justify-between">
            <span>Brace</span>
            <RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Hack</span><RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Sense</span>
            <RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Break</span><RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Harvest</span><RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Study</span><RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Concoct</span><RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Hunt</span><RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Sway</span><RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Cook</span><RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Outwit</span><RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Tend</span><RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Delve</span><RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Rattle</span><RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Vault</span><RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Flourish</span><RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Scavenge</span><RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
          <div class="flex flex-row justify-between">
            <span>Wavewalk</span><RadioGroup.Root class="flex flex-col space-y-1">
              <div class="flex items-center space-x-2">
                <RadioGroup.Item value="1" id="1" />
                <RadioGroup.Item value="2" id="2" />
                <RadioGroup.Item value="3" id="3" />
              </div>
            </RadioGroup.Root>
          </div>
        </div>
      </SheetCard>
    </div>
  </div>
  <div class="flex h-full w-full flex-col md:w-7/12">
    <div class="grid grid-cols-1 gap-3">
      <SheetCard class="w-full" label="Background">
        <div class="grid grid-cols-2 gap-x-6 gap-y-2">
          <div class="flex flex-row items-center gap-4 justify-between">
            <Label class="text-base w-24">Name</Label>
            <Input placeholder="Enter your character's name" />
          </div>
          <div class="flex flex-row items-center gap-4 justify-between">
            <Label class="text-base  w-24">Bloodline</Label>
            <Input placeholder="Select a Bloodline" />
          </div>
          <div class="flex flex-row items-center gap-4 justify-between">
            <Label class="text-base  w-24">Player</Label>
            <Input placeholder="Enter your name" />
          </div>
          <div class="flex flex-row items-center gap-4 justify-between">
            <Label class="text-base  w-24">Origin</Label>
            <Input placeholder="Select an Origin" />
          </div>
          <div class="col-start-2 flex flex-row items-center gap-4 justify-between">
            <Label class="text-base w-24">Post</Label>
            <Input placeholder="Select a Post" />
          </div>
        </div>
      </SheetCard>

      <div class="mt-10 flex flex-col gap-4">
        <SectionHeader label="Milestones"></SectionHeader>
        <div class="flex gap-4 w-full">
          <SheetCard class="w-full h-full" label="Major"></SheetCard>
          <SheetCard class="w-full h-full" label="Minor"></SheetCard>
        </div>
      </div>
    </div>
  </div>
</div>
