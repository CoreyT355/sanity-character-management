<script lang="ts">
  import { formatDate } from '$lib/utils';
  import type { Bloodline } from '$lib/types/sanity.types';
  export let bloodline: Bloodline;
</script>

<div class="card">
  <div class="card__cover--none" />

  <div class="card__container">
    <h3 class="card__title">
      <a class="card__link" href={`/bloodline/${bloodline.name}`}>
        {bloodline.name}
      </a>
    </h3>
    <p class="card__excerpt">{bloodline.summary}</p>
    <p class="card__subtitle">
      <em>{bloodline.quote}</em>
    </p>
    <p class="card__date">
      updated: {formatDate(bloodline._createdAt)}
    </p>
  </div>
</div>
