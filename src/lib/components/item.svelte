<script>
  export let name;
</script>

<style>
  p {
    text-transform: capitalize;
    font-weight: 300;
    font-size: 1.5rem;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 300px;
    cursor: pointer;
  }
</style>

<div>
  <p>{name}</p>
  <p>></p>
</div>
