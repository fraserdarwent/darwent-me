<script context="module">
  import 'carbon-components-svelte/css/g10.css';
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');

  :global(body) {
    color: white;
    background-color: black;
    height: 100%;
  }

  :global(html) {
    @media (min-width: 600px) {
      font-size: 150%;
    }
  }

  :global(html) {
    height: 100%;
  }
  :global(a) {
    text-decoration: none;
    color: unset;
  }

  main {
    font-family: 'Rock Salt', cursive;
    flex: 1;
    display: flex;
    flex-direction: column;
    // padding: 50px;
    width: 100%;
    min-height: 100%;
    justify-content: space-between;
    align-items: center;
    // max-width: 1024px;
    box-sizing: border-box;
  }
</style>

<main>
  <slot />
</main>
