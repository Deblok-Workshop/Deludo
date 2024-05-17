<script>
    import Obfuscator from "./Obfuscator.svelte"
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

<div class="card p-4 rounded-xl bg-blue-900/65 inline-flex flex-row m-2 min-w-60" id={idName}>
    <img class="w-8 h-8 m-2" src="{img}" alt="Icon">
    <div class="flex flex-col">
        <span class="flex flex-row align-middle items-center ">
        <h4 class="title text-lg font-light"> <TextObfuscator text={title}></TextObfuscator> </h4>
        <span class="tag px-2 py-0.5 bg-blue-800 text-blue rounded-full m-2 text-sm font-mono w-fit">
            {data.split(";")[0]}
        </span>
    </span>
        <a href="{href}" class="card-link btn hero-btn !py-1 !px-6 !m-0">
        <TextObfuscator text="Play"></TextObfuscator>
        </a>
    </div>
</div>