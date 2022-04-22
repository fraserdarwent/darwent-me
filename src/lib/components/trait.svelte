<script>
  import { fly } from 'svelte/transition';
  import * as easing from 'svelte/easing';
  import { onMount } from 'svelte';

  export let words = [];
  let index = 0;
  let word = words[index];
  let open = false;
  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<style lang="scss">
  h2 {
    text-transform: capitalize;
    // /* Required to stop text wrapping on transition */
    width: max-content;
  }

  .layout {
    display: flex;
    flex-direction: row;
    max-width: 300px;
    cursor: pointer;
    transition: all 1s;
  }

  @keyframes animate-flex-0 {
    from {
      flex: 1;
    }
    to {
      flex: 0;
    }
  }

  @keyframes animate-flex-1 {
    from {
      flex: 0;
    }
    to {
      flex: 1;
    }
  }

  .arrow.right.open {
    animation: animate-flex-0 500ms forwards;
  }

  .arrow.left.open {
    animation: animate-flex-1 500ms forwards;
  }

  .arrow.right {
    animation: animate-flex-1 500ms forwards;
    text-align: end;
  }

  .arrow.left {
    animation: animate-flex-0 500ms forwards;
  }

  .arrow {
    // Set initial 0 to prevent stuttering
    overflow: hidden;
  }
</style>

<div
  class="layout"
  on:click={() => {
    open = !open;
  }}
>
  <h2 class="arrow left" class:open class:mounted transition:fly>&lt;</h2>
  <h2>{word}</h2>
  <h2 class="arrow right" class:open class:mounted transition:fly>&gt;</h2>
</div>
