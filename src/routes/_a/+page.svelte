<script>
import Card from "../../components/Card.svelte";
import TextObfuscator from "../../components/TextObfuscator.svelte";
import pop from "../../components/Populator.ts"
import search from "../../components/GameSearch.ts";
let assets = {"html":[],"rom":{"nes":[],"snes":[],"megadrive":[]},"flash":{}}
let len = 0;
setTimeout(async()=>{assets = await pop();
    len += assets.html.length
for (let i = 0; i < assets.html.length; i++) {
    let templatecard = document.querySelector("#template");
    let card = templatecard.cloneNode(true)
    card.querySelector("img").addEventListener("error",()=>{
    card.querySelector("img").src = "/assets/missing.png"
    })
    card.querySelector(".title").innerText = assets.html[i].name
    card.querySelector(".tag").innerText = "HTML"
    card.querySelector(".card-link").href = "/assets/handlers/html.html#"+assets.html[i].id
    card.querySelector("img").src = `/assets/html/thumbs/${assets.html[i].id}.jpg`
    document.querySelector(".gcontainer").appendChild(card)
    card.id = ""}
    len += assets.flash.length
    for (let x = 0; x < assets.flash.length; x++) {

    let templatecard = document.querySelector("#template");
    let card = templatecard.cloneNode(true)
    card.querySelector("img").addEventListener("error",()=>{
    card.querySelector("img").src = "/assets/missing.png"
    })
    card.querySelector(".title").innerText = assets.flash[x].name
    card.querySelector(".tag").innerText = "Flash"
    card.querySelector(".card-link").href = "/assets/handlers/flash.html#"+assets.flash[x].id
    card.querySelector("img").src = `/assets/flash/thumbs/${assets.flash[x].id.split(".")[0]}_flash.jpg`
    document.querySelector(".gcontainer").appendChild(card)
    card.id = ""
}
var idx= ["nes","snes","megadrive"];
var fidx = ["NES","SNES","Megadrive"]
for (let y = 0; y < idx.length; y++) {
    len += assets.rom[idx[y]].length;
for (let b = 0; b < assets.rom[idx[y]].length; b++) {
    let templatecard = document.querySelector("#template");
    let card = templatecard.cloneNode(true)
    card.querySelector(".title").innerText = assets.rom[idx[y]][b].name
    card.querySelector(".tag").innerText = `${fidx[y]}`
    card.querySelector("img").src = `/assets/rom/thumbs/${assets.rom[idx[y]][b].id.split(".")[0]}_${idx[y]}.jpg`
    card.querySelector(".card-link").href = `/assets/handlers/rom.html#${idx[y]};${assets.rom[idx[y]][b].id}`
    card.querySelector("img").addEventListener("error",()=>{
    card.querySelector("img").src = "/assets/missing.png"
    })
    document.querySelector(".gcontainer").appendChild(card)
    card.id = ""
}}
document.querySelector("#template").remove();
console.log(len)
setTimeout(()=>{
    document.querySelector(".loadingOverlay").style.opacity = 0; 
    setTimeout(()=>{
        document.querySelector(".loadingOverlay").remove();
        document.querySelector(".title span").classList.add("soonBold2")
    },350)
},2000)
},33)

</script>

<div class=" duration-300 loadingOverlay z-10 fixed top-0 left-0 px-2 w-full h-full backdrop-blur-lg bg-blue-900/30 flex flex-col justify-center items-center">
    <h2 class="text-4xl">
        Loading <span class="soonBold2"><TextObfuscator text="games" /></span>...
    </h2>

</div>
<div class="px-2 w-full h-full">
    <br><br><br>
<h1 class="text-4xl title text-center">
    <span ><TextObfuscator text="Games" /></span>
</h1>
<br>
<div class="searchContainer w-full flex flex-row justify-center items-center">
    <input type="search" id="searchInput" on:keyup={search} placeholder="Search" class="shadow-sm hover:shadow-md ring-2 ring-surface0 hover:ring-mauve shadow-black/15 px-4 rounded-full bg-surface0 hover:bg-surface1 duration-200 py-1">
</div>
<br>
<div class="gcontainer mx-auto w-fit">
    <Card idName="template"></Card>
  </div>
</div>