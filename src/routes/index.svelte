<script>
  // Client side, after rendering
  let message = 'Fraser Darwent';
</script>

<style>
  #container {
    position: relative;
  }

  #container > h1 {
    font-size: 3rem;
    width: 100%;
  }

  #front {
    color: white;
  }

  #middle {
    z-index: -1;
    color: dodgerblue;
    top: 2px;
    left: 2px;
    position: absolute;
  }

  #back {
    z-index: -2;
    color: rgb(242, 0, 255);
    top: 4px;
    left: 4px;
    position: absolute;
  }
</style>

<div id="container">
  <h1 id="front">{message}</h1>
  <h1 id="middle">{message}</h1>
  <h1 id="back">{message}</h1>
</div>
