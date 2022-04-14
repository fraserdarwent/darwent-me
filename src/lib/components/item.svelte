<script>
  import { fly } from 'svelte/transition';
  import * as easing from 'svelte/easing';

  export let words = [];
  export let delay = 0;
  let index = 0;
  let duration = 150;
  let strike = false;

  setTimeout(() => {
    setTimeout(() => {
      if (index + 1 < words.length) {
        strike = true;
      }
    }, 2000);

    setTimeout(() => {
      if (index + 1 < words.length) {
        strike = false;
        index = index + 1;
      } else {
        index = 0;
      }
    }, 3000);
  }, delay);
</script>

<style>
  p {
    text-transform: capitalize;
    font-weight: 300;
    font-size: 1.5rem;
  }

  .layout {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 300px;
    cursor: pointer;
  }

  .word {
    position: relative;
    overflow: hidden;
  }

  .strike {
    height: 1px;
    width: 100%;
    background-color: white;
    position: absolute;
    top: 50%;
  }
</style>

<div class="layout">
  {#key words[index]}
    <div class="word">
      {#if strike}
        <div
          in:fly={{ x: -200, y: 0, duration: 500, easing: easing.circOut }}
          out:fly={{ y: 20, duration, easing: easing.circIn }}
          class="strike"
        />
      {/if}
      <p
        in:fly={{ y: -20, duration, delay: duration, easing: easing.circOut }}
        out:fly={{ y: 20, duration, easing: easing.circIn }}
      >
        {words[index]}
      </p>
    </div>
  {/key}
  <p>></p>
</div>
