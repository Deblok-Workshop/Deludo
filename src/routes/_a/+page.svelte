<script>
import Card from "../../components/Card.svelte";
import TextObfuscator from "../../components/TextObfuscator.svelte";
import pop from "../../components/Populator.ts"
let assets = {"html":[],"rom":{"nes":[],"snes":[],"megadrive":[]},"flash":{}}
setTimeout(async()=>{assets = await pop();
for (let i = 0; i < assets.html.length; i++) {
    let templatecard = document.querySelector("#template");
    let card = templatecard.cloneNode(true)
    card.querySelector(".title").innerText = assets.html[i].name
    card.querySelector(".tag").innerText = "HTML"
    card.querySelector(".card-link").href = "/assets/handlers/html.html#"+assets.html[i].id
    document.querySelector(".gcontainer").appendChild(card)
    card.id = ""}
var idx= ["nes","snes","megadrive"];
for (let i = 0; i < idx.length; i++) {
for (let b = 0; b < assets.rom[idx[i]].length; b++) {
    let templatecard = document.querySelector("#template");
    let card = templatecard.cloneNode(true)
    card.querySelector(".title").innerText = assets.rom[idx[i]][b].name
    card.querySelector(".tag").innerText = `ROM | ${idx[i]}`
    card.querySelector(".card-link").href = `/assets/handlers/rom.html#${idx[i]};${assets.rom[idx[i]][b].id}`
    document.querySelector(".gcontainer").appendChild(card)
    card.id = ""
}}document.querySelector("#template")?.remove();},33)
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