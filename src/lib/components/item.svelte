<script>
  import { fly } from 'svelte/transition';
  import * as easing from 'svelte/easing';
  import { onMount } from 'svelte';

  export let reverse = false;
  export let words = [];
  export let delay = 0;
  let index = 0;
  let duration = 150;
  let strike = false;
  let completed = true;

  function change() {
    if (completed) {
      completed = false;
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

          completed = true;
        }, 3000);
        delay = 0;
      }, delay);
    }
  }

  function stop() {
    index = 0;
  }

  function start() {
    change();
  }

  onMount(() => {
    change();
  });

  function expand() {
    reverse = true;
  }
</script>

<style lang="scss">
  h2 {
    text-transform: capitalize;
    /* Required to stop text wrapping on transition */
    width: max-content;
  }

  .layout {
    display: flex;
    flex-direction: row;
    max-width: 300px;
    cursor: pointer;
    transition: all 1s;
  }

  /* This container is used to move the word from one side to the other */
  .word-container {
    flex: 1;
    position: relative;
  }

  .word {
    width: min-content;
    /* Required to set position of the strike */
    position: relative;
    // margin-left: 0%;
    // transform: translateX(0%);
  }

  .word.reverse {
    // margin-left: 100%;
    // transform: translateX(-100%);
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
  <!-- {#if reverse == true}
    <h2 transition:fly>&lt;</h2>
  {/if} -->
  {#key words[index]}
    <div
      class="word-container"
      on:click={() => {
        expand();
      }}
    >
      <div
        class="word"
        class:reverse
        on:mouseenter={stop}
        on:mouseleave={start}
      >
        {#if strike}
          <div
            in:fly={{ x: -200, y: 0, duration: 500, easing: easing.circOut }}
            out:fly={{ y: 20, duration, easing: easing.circIn }}
            class="strike"
          />
        {/if}
        <h2
          in:fly={{ y: -20, duration, delay: duration, easing: easing.circOut }}
          out:fly={{ y: 20, duration, easing: easing.circIn }}
        >
          {words[index]}
        </h2>
      </div>
    </div>
  {/key}
  <h2 transition:fly>&gt;</h2>
</div>
