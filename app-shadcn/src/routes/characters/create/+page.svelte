<script lang="ts">
  import type { PageData } from './$types.js';
  import CreateCharacterForm from '$lib/components/character/create-character-form.svelte';

  export let data: PageData;
</script>

<div class="flex flex-col justify-start">
  <h3>Create Character</h3>
  <CreateCharacterForm
    data={data.form}
    bloodlines={data.bloodlines.map((bloodline) => bloodline.name)}
    origins={data.origins.map((origin) => origin.name)}
    posts={data.posts.map((post) => post.name)}
  />
</div>
