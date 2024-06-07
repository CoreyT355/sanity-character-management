<script lang="ts">
  import { enhance } from '$app/forms';
  import { page } from '$app/stores';
  import RankInput from '$lib/components/RankInput/RankInput.svelte';
  import { superForm } from 'sveltekit-superforms';
  import SuperDebug from 'sveltekit-superforms';

  export let data;

  const { form, errors, message } = superForm(data.form, {
    applyAction: true,
    dataType: 'json'
  });

  const attributes = [
    { name: 'str-atr', display: 'Strength' },
    { name: 'con-atr', display: 'Constitution' },
    { name: 'dex-atr', display: 'Dexterity' },
    { name: 'wis-atr', display: 'Wisdom' },
    { name: 'int-atr', display: 'Intelligence' },
    { name: 'chr-atr', display: 'Charisma' }
  ];
</script>

<SuperDebug data={$form} />

<h3>Superforms testing ground - Zod</h3>

{#if $message}
  <!-- eslint-disable-next-line svelte/valid-compile -->
  <div class="status" class:error={$page.status >= 400} class:success={$page.status == 200}>
    {$message}
  </div>
{/if}

<form method="POST" use:enhance action="?/save">
  <div class="flex flex-row gap-4">
    <label>
      Name<br />
      <input
        class="input !w-60"
        name="name"
        aria-invalid={$errors.name ? 'true' : undefined}
        bind:value={$form.name}
      />
      {#if $errors.name}<span class="invalid">{$errors.name}</span>{/if}
    </label>

    <label>
      Email<br />
      <input
        class="input w-60"
        name="email"
        type="email"
        aria-invalid={$errors.email ? 'true' : undefined}
        bind:value={$form.email}
      />
      {#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
    </label>
  </div>

  <div class="flex gap-2 mt-4">
    {#each attributes as attribute}
      <!-- <label>
        {attribute.display}
        <input class="input w-60" type="number" bind:value={$form.attributes[attribute.name]} />
      </label> -->
      <span>{attribute.display}</span>
      <RankInput
        disabled={false}
        class="place-self-end"
        maxValue={1}
        bind:value={$form.attributes[attribute.name]}
      />
    {/each}
  </div>

  <div class="flex flex-col gap-2">
    {#each $form.drives as drive, i}
      <input class="input" bind:value={drive} placeholder="Enter a Drive..." />
    {:else}
      <span>No Drives Yet</span>
    {/each}
    <button
      class="btn variant-outline-tertiary"
      type="button"
      on:click={() => ($form.drives = [...$form.drives, ''])}>Add Drive</button
    >
  </div>

  <button class="btn variant-filled-primary">Submit</button>
</form>

<hr />
<p>
  💥 <a target="_blank" href="https://superforms.rocks">Created with Superforms for SvelteKit</a> 💥
</p>

<style>
  .invalid {
    color: red;
  }

  .status {
    color: white;
    padding: 4px;
    padding-left: 8px;
    border-radius: 2px;
    font-weight: 500;
  }

  .status.success {
    background-color: seagreen;
  }

  .status.error {
    background-color: #ff2a02;
  }

  input {
    background-color: #ddd;
  }

  a {
    text-decoration: underline;
  }

  hr {
    margin-top: 4rem;
  }

  form {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
</style>
