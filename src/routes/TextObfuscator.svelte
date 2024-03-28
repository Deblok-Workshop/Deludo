<script>
  export let text = ''; // Prop for the text string
</script>
{#each text.split('') as character, i}
  <span>{character}</span>
{/each}