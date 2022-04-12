<script>
  import github from '$lib/assets/Octicons-mark-github.svg';
  // Client side, after rendering
  let message = 'Fraser Darwent';
</script>

<style lang="scss">
  #container {
    position: relative;
  }

  #container > h1 {
    font-size: 3rem;
    width: 100%;
    padding: 0 20px;
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

  #github {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    p {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-weight: 100;
      font-size: 0.5rem;
    }
    img {
      height: 20px;
      width: 20px;
      margin-left: 5px;
    }
  }
</style>

<div />
<div id="container">
  <h1 id="front">{message}</h1>
  <h1 id="middle">{message}</h1>
  <h1 id="back">{message}</h1>
</div>
<a href="https://github.com/fraserdarwent/darwent-me">
  <div id="github">
    <p>View code on</p>
    <img src={github} />
  </div>
</a>
