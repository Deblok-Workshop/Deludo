<script lang="ts">
    import TextObfuscator from "../../components/TextObfuscator.svelte";
    import pop from "../../components/Populator"
    setTimeout(async()=>{
     let assets = await pop();
     console.log(assets)
    },33)
        
   
</script>
<br><br><br>
<div class="px-2 w-full h-full">
<h1 class="text-4xl ">
    <span class="soonBold2"><TextObfuscator text="Games" />
</h1>
</div>