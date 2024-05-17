<script lang="ts">
    import Card from "../../components/Card.svelte";
    import TextObfuscator from "../../components/TextObfuscator.svelte";
    import pop from "../../components/Populator.ts"
    let assets = {"html":[],"rom":{"nes":[],"snes":[],"megadrive":[]},"flash":{}}
    setTimeout(async()=>{
     assets = await pop();
     for (let i = 0; i < assets.html.length; i++) {
        let templatecard = document.querySelector("#template");
        // @ts-expect-error
        let card = templatecard.cloneNode(true)
        // @ts-expect-error
        card.querySelector(".title").innerText = assets.html[i].name
        // @ts-expect-error
        card.querySelector(".tag").innerText = "HTML"
        // @ts-expect-error
        card.querySelector(".card-link").href = "/assets/handlers/html.html#"+assets.html[i].id
        // @ts-expect-error
        document.querySelector(".gcontainer").appendChild(card)
        // @ts-expect-error
        card.id = ""
     }
     document.querySelector("#template")?.remove();
    },33)
        
   
</script>
<br><br><br>
<div class="px-2 w-full h-full">
<h1 class="text-4xl ">
    <span class="soonBold2"><TextObfuscator text="Games" />
</h1>
<div class="gcontainer mx-auto">
    <Card idName="template"></Card>
  </div>
</div>