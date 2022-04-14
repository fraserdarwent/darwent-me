<script context="module">
  export let prerender = true;
  import { fly, scale, slide, fade } from 'svelte/transition';
  import Item from '$lib/components/item.svelte';
  import Consultant from '$lib/components/text/consultant.svelte';
</script>

<script>
  let show = '';
</script>

<style>
  :global(html) {
    background: #7000ff;
    color: white;
    font-family: 'Inter', sans-serif;
    height: 100%;
    width: 100%;
    font-size: min(3vw, 15px);
  }

  :global(body) {
    min-height: 100%;
    min-width: 100%;
    display: flex;
    justify-content: center;
  }

  :global(body, h1) {
    margin: 0;
  }

  :global(p) {
    font-weight: 200;
    font-size: 1.2rem;
  }

  :global(h2) {
    font-weight: 300;
    font-size: 1.5rem;
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
</style>

<main>
  <h1>Fraser Darwent</h1>
  <Item words={['consultant', 'problem solver']} />
  <Item words={['developer', 'cloud advocate']} delay={2000} />
  <Item words={['scrum master', 'team enabler']} delay={4000} />
</main>
