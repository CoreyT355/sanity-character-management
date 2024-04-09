<script lang="ts">
  import { PortableText } from '@portabletext/svelte';
  import { formatDate } from '$lib/utils';
  import { urlFor } from '$lib/utils/image';
  import type { PageData } from './$types';

  export let data: PageData;

  console.log(data);
  
</script>

<section class="post">
  <div class="post__cover--none" />
  <div class="post__container">
    <h1 class="post__title">{data.name}</h1>
    <p class="post__excerpt">{data.summary}</p>
    <div class="post__content">
      <h3>Description:</h3>
      <PortableText value={data.description} />
    </div>
    <div class="post__content">
      <h3>Lore:</h3>
      {#each data.lore as lore}
         <h4>{lore.key}</h4>
          <PortableText value={lore.value} />
      {/each}
    </div>
    <p class="post__date">
      {formatDate(data._createdAt)}
    </p>
  </div>
</section>
