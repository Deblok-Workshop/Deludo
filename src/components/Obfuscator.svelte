
<script lang="ts">
export let text = ''; 
export let href = ''; 
export let className = '';

let isHovered = false;

function handle() {
  isHovered = true;
}
// @ts-ignore
function splitText(text) {
  return text.split('');
}
let characters = splitText(text);
  </script>
    <a 
        href={isHovered ? href : '#'} 
        class={className} 
        on:mouseover={handle}
        on:mouseenter={handle}
        on:focus={handle}
        on:click={handle}
      >
  {#each characters as character, i}
  <span>{character}</span>
  {/each}
</a>
  
