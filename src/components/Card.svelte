<script>
    import TextObfuscator from "./TextObfuscator.svelte";
    export let img = '/assets/missing.png'; 
    export let title = "Placeholder";
    export let data = "html;000;nes";
    export let idName = ""
    let href = "#"
    if (data.split(";")[0] == "html") {
    href = `assets/handlers/${data.split(";")[0]}.html`
    } else if (data.split(";")[0] == "flash") {
        href = `assets/handlers/${data.split(";")[0]}.html#${data.split(";")[1]}`
    } else if (data.split(";")[0] == "rom") {
        href = `assets/handlers/${data.split(";")[0]}.html#${data.split(";")[2]};${data.split(";")[1]}`
    }
</script>

<div style="max-width:460px;" class="card p-4 rounded-xl bg-slate-800 shadow-sm duration-300 hover:shadow-black/35 shadow-black/25 hover:shadow-md hover:scale-105 inline-flex flex-row m-2 min-w-60 text-blue" id={idName}>
    <img class="w-8 h-8 m-2" src="{img}" alt="Icon">
    <div class="flex flex-col">
        <span class="flex flex-row align-middle items-center">
        <h4 class="title text-md  font-medium" style="max-width:250px;max-height:45px;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;overflow:clip;"> <TextObfuscator text={title}></TextObfuscator> </h4>
        
    </span>
    <span class="tag px-2 py-0.5 bg-blue-800 mb-2 mt-1 text-blue rounded-full text-sm font-mono w-fit">
        {data.split(";")[0]}
    </span>
        <a href="{href}" class="card-link btn hero-btn !py-1 !px-6 !m-0">
        <TextObfuscator text="Play"></TextObfuscator>
        </a>
    </div>
</div>