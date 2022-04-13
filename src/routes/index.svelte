<script context="module">
  export let prerender = true;
</script>

<script>
  import Item from '$lib/components/item.svelte';
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
  <Item name="consultant" />
  <Item name="engineer" />
  <Item name="scrum master" />
</main>
