<script>
import Card from "../../components/Card.svelte";
import TextObfuscator from "../../components/TextObfuscator.svelte";
import pop from "../../components/Populator.ts"
let assets = {"html":[],"rom":{"nes":[],"snes":[],"megadrive":[]},"flash":{}}
let len = 0;
setTimeout(async()=>{assets = await pop();
    len += assets.html.length
for (let i = 0; i < assets.html.length; i++) {
    let templatecard = document.querySelector("#template");
    let card = templatecard.cloneNode(true)
    card.querySelector(".title").innerText = assets.html[i].name
    card.querySelector(".tag").innerText = "HTML"
    card.querySelector(".card-link").href = "/assets/handlers/html.html#"+assets.html[i].id
    document.querySelector(".gcontainer").appendChild(card)
    card.id = ""}
    len += assets.flash.length
    for (let x = 0; x < assets.flash.length; x++) {
    let templatecard = document.querySelector("#template");
    let card = templatecard.cloneNode(true)
    card.querySelector(".title").innerText = assets.flash[x].name
    card.querySelector(".tag").innerText = "Flash"
    card.querySelector(".card-link").href = "/assets/handlers/flash.html#"+assets.flash[x].id
    document.querySelector(".gcontainer").appendChild(card)
    card.id = ""}
var idx= ["nes","snes","megadrive"];
for (let y = 0; y < idx.length; y++) {
    len += assets.rom[idx[y]].length;
for (let b = 0; b < assets.rom[idx[y]].length; b++) {
    let templatecard = document.querySelector("#template");
    let card = templatecard.cloneNode(true)
    card.querySelector(".title").innerText = assets.rom[idx[y]][b].name
    card.querySelector(".tag").innerText = `ROM | ${idx[y]}`
    card.querySelector(".card-link").href = `/assets/handlers/rom.html#${idx[y]};${assets.rom[idx[y]][b].id}`
    document.querySelector(".gcontainer").appendChild(card)
    card.id = ""
}}
document.querySelector("#template").remove();
console.log(len)
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