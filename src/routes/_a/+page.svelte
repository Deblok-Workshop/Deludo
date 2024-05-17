<script lang="ts">
    import Card from "../../components/Card.svelte";
    import TextObfuscator from "../../components/TextObfuscator.svelte";
    import pop from "../../components/Populator.ts"
    let assets = {"html":[],"rom":{"nes":[],"snes":[],"megadrive":[]},"flash":{}}
    setTimeout(async()=>{
     assets = await pop();
     
    },33)
        
   
</script>
<br><br><br>
<div class="px-2 w-full h-full">
<h1 class="text-4xl ">
    <span class="soonBold2"><TextObfuscator text="Games" />
</h1>
<div class="gcontainer">
    <Card idName="template"></Card>
  </div>
</div>