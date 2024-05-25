// @ts-nocheck typescript being a bitch

import pop from "../../components/Populator.ts"
export default (()=>{
    
    let assets = {"html":[],"rom":{"nes":[],"snes":[],"megadrive":[]},"flash":{}}
    let len = 0;
    function toUpper(str:string) {
        return str
            .toLowerCase()
            .split(' ')
            .map(function(word) {
                return word[0].toUpperCase() + word.substr(1);
            })
            .join(' ');
         }
        
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
            
            card.querySelector(".card-link").href = `/_x#${btoa(assets.html[i].name)}||${btoa("/assets/handlers/html.html#"+assets.html[i].id)}`
            
            card.querySelector("img").src = `/assets/html/thumbs/${assets.html[i].id}.jpg`
            
            document.querySelector(".gcontainer").appendChild(card)
            
            card.id = ""
        }
            
            len += assets.flash.length
            
            for (let x = 0; x < assets.flash.length; x++) {
        
            let templatecard = document.querySelector("#template");
            
            let card = templatecard.cloneNode(true)

            card.querySelector("img").addEventListener("error",()=>{
            card.querySelector("img").src = "/assets/missing.png"
            })
            card.querySelector(".title").innerText = assets.flash[x].name
            card.querySelector(".tag").innerText = "Flash"
            card.querySelector(".card-link").href = `/_x#${btoa(assets.flash[x].name)}||${btoa("/assets/handlers/flash.html#"+assets.flash[x].id)}`
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
            card.querySelector(".card-link").href = `/_x#${btoa(fidx[y])}||${btoa(`/assets/handlers/rom.html#${idx[y]};${assets.rom[idx[y]][b].id}`)}`
            card.querySelector("img").addEventListener("error",()=>{
            card.querySelector("img").src = "/assets/missing.png"
            })
            document.querySelector(".gcontainer").appendChild(card)
            card.id = ""
        }}
        
        // make an index
        var pidx= [];
        for (var x in assets.yt_playables) {
           pidx.push(x);
        }
        len += pidx.length;
        for (let c = 0; c < pidx.length; c++) {
            let templatecard = document.querySelector("#template");
            let card = templatecard.cloneNode(true)
            card.querySelector(".title").innerText = toUpper(pidx[c].replaceAll("-"," "))
            card.querySelector(".tag").innerText = `Playable`
            card.querySelector("img").style.display = "none"; // will work on thubms later
            card.querySelector(".card-link").href = `/_x#${btoa(toUpper(pidx[c].replaceAll("-"," ")))}||${btoa(assets.yt_playables[pidx[c]])}`
            document.querySelector(".gcontainer").appendChild(card)
            card.id = ""
        }
        
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
        
})