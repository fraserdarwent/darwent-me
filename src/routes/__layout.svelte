<style>
  @font-face {
    font-family: 'Inter Flex';
    src: url('/Inter-Var.woff2') format('woff2');
    font-weight: 100 900;
    font-display: swap;
  }

  :global(html) {
    font-family: 'Inter Flex';
    font-size: min(3vw, 15px);
    -webkit-tap-highlight-color: transparent;
    background-color: #7000ff;
  }

  :global(html, body) {
    /* VH to fix the behaviour when address bar hides */
    height: 100vh;
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

<svelte:head>
  <title>Fraser Darwent</title>
  <meta name="description" content="Personal website of Fraser Darwent" />
  <link rel="icon" href="/7000ff.svg" />
  <link
    rel="preload"
    href="/Inter-Var.woff2"
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
</svelte:head>
<slot />
