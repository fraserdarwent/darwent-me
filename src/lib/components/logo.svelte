<script>
  export let fill;
  export let duration;
</script>

<style>
  svg {
    transition: background var(--duration);
  }
</style>

<svg
  width="4rem"
  height="4rem"
  viewBox="0 0 54 54"
  style="fill:{fill};--duration:{duration * 3}ms;"
  xmlns="http://www.w3.org/2000/svg"
>
  <slot />
</svg>
