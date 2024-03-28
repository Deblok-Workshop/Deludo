<!-- Obfuscator.svelte -->
<script>
    export let text = ''; // Prop for the text
    export let href = ''; // Prop for the final href value
    export let className = ''; // Prop for the class name
  
    let isHovered = false;
  
    // Function to handle mouse hover or click events
    function handleHoverOrClick() {
      isHovered = true;
    }
  
    // Function to split the text into individual characters
    function splitText(text) {
      return text.split('');
    }
  
    // Array to hold individual characters
    let characters = splitText(text);
  </script>
  
  <!-- Render each character as a <span> element -->
    <a 
        href={isHovered ? href : '?obf'} 
        class={className} 
        on:mouseover={handleHoverOrClick}
        on:focus={handleHoverOrClick}
        on:click={handleHoverOrClick}
      >
  {#each characters as character, i}
  <span>{character}</span>
  {/each}
</a>
  
