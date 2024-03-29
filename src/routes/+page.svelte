


<hero class="flex-1 w-full h-[100vh] bg-slate-900 flex flex-col ">
    <div class="flex flex-col w-full h-full ">
        <h1 class="text-4xl absolute top-24 left-8">The world's <span class="soonBold">biggest</span>...</h1>
        <sup class="text-xl absolute top-36 left-8 text-blue/70"><TextObfuscator text="Unblocked" /></sup>
        <h2 class="text-3xl absolute top-36 left-36 text-blue font-bold">
            <span class="alternating mr-2">test</span> site
        </h2>
    </div>
</hero>

<script type="text/javascript">
    
    import TextObfuscator from "./TextObfuscator.svelte"
import { onMount } from "svelte"
onMount(() => {

   
   function alternate() {
    let items = ["game","emulator", "flash game","retro game",""]
    let alt = document.querySelector(".alternating")
      alt.classList.add("alternating-anim")
      setTimeout(()=>{
          alt.innerText = items[Math.floor(Math.random() * items.length)]},1000)
   }
   setTimeout(()=>{
    alt.classList.remove("alternating-anim")
   })
  setInterval(()=>{
      alternate()
  },4000)
  alternate()

})

</script>
