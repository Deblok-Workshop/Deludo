<script lang="ts">
    import TextObfuscator from "../../components/TextObfuscator.svelte";
    import fs from "../../components/FSHandler"
    document.addEventListener("load",async ()=>{
        await fs();
    })
</script>
<br><br><br>
<div class="px-2 w-full h-full">
<h1 class="text-4xl ">
    <span class="soonBold"><TextObfuscator text="Games" />
</h1>
</div>