<script>
  import { slide } from 'svelte/transition';

  export let words = [];
  export let duration = 500;

  let index = 0;
  let word = words[index];
  let open = false;

  function toggle() {
    if (!open) {
      setTimeout(() => {
        open = !open;
      }, duration);
      return;
    }
    open = !open;
  }
</script>

<style lang="scss">
  h2 {
    text-transform: capitalize;
    // /* Potentially required to stop text wrapping on transition */
    // width: max-content;
  }

  .layout {
    outline: none;
    display: flex;
    flex-direction: row;
    max-width: 300px;
    cursor: pointer;
    transition: flex 1s;
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
    animation: animate-flex-0 var(--duration) forwards;
  }

  .arrow.left.open {
    animation: animate-flex-1 var(--duration) forwards;
  }

  .arrow.right {
    animation: animate-flex-1 var(--duration) forwards;
    text-align: end;
  }

  .arrow.left {
    animation: animate-flex-0 var(--duration) forwards;
  }

  .arrow {
    // Set initial 0 to prevent stuttering
    overflow: hidden;
  }
</style>

<div
  class="layout"
  on:click={toggle}
  in:slide={{ delay: duration, duration }}
  out:slide={{ duration }}
  style="--duration:{duration}ms"
>
  <h2 class="arrow left" class:open>&lt;</h2>
  <h2>{word}</h2>
  <h2 class="arrow right" class:open>&gt;</h2>
</div>
