<script context="module">
  export let prerender = true;
  export let router = false;
  import { slide } from 'svelte/transition';
  import Trait from '$lib/components/trait.svelte';
  import Consultant from '$lib/components/text/consultant.svelte';
  import Developer from '$lib/components/text/developer.svelte';
  import ScrumMaster from '$lib/components/text/sm.svelte';
  import Github from '$lib/components/logos/github.svelte';
  import LinkedIn from '$lib/components/logos/linkedin.svelte';
  import Logo from '$lib/components/logo.svelte';

  const duration = 400;
  const traits = [
    {
      background: '#7000ff',
      font: 'white',
    },
    {
      words: ['consultant', 'problem solver'],
      content: Consultant,
      background: '#FF4848',
      font: 'white',
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
  let expanded = 0;

  function toggle(index) {
    expanded = expanded == index ? 0 : index;
  }
</script>

<style lang="scss">
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
  }

  .content {
    overflow: hidden;
  }

  .logos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-between;

    .logo {
      margin: 10px 10px 10px 0;
    }
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 50px;
  }
</style>

<svelte:head>
  <link rel="icon" href="{traits[expanded].background.replace('#', '')}.svg" />
</svelte:head>

<div
  class="layout"
  style="
  --background:{traits[expanded].background};
  --duration:{duration * 3}ms;
  --font:{traits[expanded].font};"
>
  <main>
    <header>
      <h1>Fraser Darwent</h1>
      <div class="logos">
        <a href="https://github.com/fraserdarwent">
          <div class="logo">
            <Logo fill={traits[expanded]?.font || 'white'} {duration}>
              <Github />
            </Logo>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/fraserdarwent/">
          <div class="logo">
            <Logo fill={traits[expanded]?.font || 'white'} {duration}>
              <LinkedIn />
            </Logo>
          </div>
        </a>
      </div>
    </header>

    {#each traits as trait, index}
      {#if 0 < index}
        {#if expanded < 1 || expanded == index}
          <div
            on:click={() => {
              toggle(index);
            }}
          >
            <Trait words={trait.words} {duration} />
          </div>
        {/if}
      {/if}
    {/each}

    {#if 0 < expanded}
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
