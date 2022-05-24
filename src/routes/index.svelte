<script context="module">
  export let prerender = true;
  export let router = false;
  import { slide } from 'svelte/transition';
  import Trait from '$lib/components/trait.svelte';
  import Consultant from '$lib/components/text/consultant.svelte';
  import Developer from '$lib/components/text/developer.svelte';
  import ScrumMaster from '$lib/components/text/sm.svelte';

  const duration = 400;
  const traits = [
    {
      words: ['consultant', 'problem solver'],
      content: Consultant,
      background: '#FF4848',
    },
    {
      words: ['developer', 'cloud advocate'],
      content: Developer,
      background: '#FFEE58',
      font: 'black',
    },
    {
      words: ['scrum master', 'team enabler'],
      content: ScrumMaster,
      background: '#58FF7D',
      font: 'black',
    },
  ];
</script>

<script>
  let expanded = -1;

  function toggle(index) {
    expanded = expanded == index ? -1 : index;
  }
</script>

<style>
  .layout {
    transition: all var(--duration);
    background: var(--background);
    color: var(--font);
    min-height: 100%;
    min-width: 100%;
    display: flex;
    justify-content: center;
  }

  main {
    padding: 3rem;
    max-width: 1000px;
    flex: 1;
  }

  h1 {
    font-size: 5rem;
    margin-bottom: 50px;
  }

  .content {
    overflow: hidden;
  }
</style>

<svelte:head>
  <link
    rel="icon"
    href="/{expanded < 0
      ? 'favicon'
      : traits[expanded].background.replace('#', '')}.svg"
  />
</svelte:head>

<div
  class="layout"
  style="--background:{traits[expanded]?.background ||
    '#7000ff'};--duration:{duration * 3}ms;--font:{traits[expanded]?.font ||
    'white'};"
>
  <main>
    <h1>Fraser Darwent</h1>
    {#each traits as trait, index}
      {#if expanded < 0 || expanded == index}
        <div
          on:click={() => {
            toggle(index);
          }}
        >
          <Trait words={trait.words} {duration} />
        </div>
      {/if}
    {/each}

    {#if -1 < expanded}
      <div
        class="content"
        in:slide={{ delay: duration, duration }}
        out:slide={{ duration }}
      >
        <svelte:component
          this={traits[expanded].content}
          background={traits[expanded].background}
        />
      </div>
    {/if}
  </main>
</div>
