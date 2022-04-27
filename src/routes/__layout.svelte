<style>
  @font-face {
    font-family: 'Inter Flex';
    src: url('Inter-Flex.ttf') format('woff2-variations');
    font-weight: 100 900;
  }
  :global(html) {
    font-family: 'Inter Flex';

    /* font-family: 'Inter', sans-serif; */
    font-size: min(3vw, 15px);
    height: 100%;
    width: 100%;
    -webkit-tap-highlight-color: transparent;
  }

  :global(body) {
    height: 100%;
    width: 100%;
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
</style>

<slot />
