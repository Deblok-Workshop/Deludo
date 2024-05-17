export default (async()=>{
let assetsHTTP = await fetch("assets/assets.json")
let assets = await assetsHTTP.json()
console.log(assets)
})
