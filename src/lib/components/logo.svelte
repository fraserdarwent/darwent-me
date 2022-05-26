<script>
  export let fill;
  export let duration;
</script>

<style>
  svg {
    transition: all var(--duration);
  }
</style>

<svg
  width="54"
  height="54"
  viewBox="0 0 54 54"
  style="fill:{fill};--duration:{duration * 3}ms;"
  xmlns="http://www.w3.org/2000/svg"
>
  <slot />
</svg>
