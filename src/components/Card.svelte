<script>
    import TextObfuscator from "./TextObfuscator.svelte";
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

<div style="max-width:460px;" class="card" id={idName}>
    <div class="flex flex-col">
        <span class="flex flex-row align-middle items-center">
        <h4 class="title text-md font-medium"> <TextObfuscator text={title}></TextObfuscator> </h4>
        <span class="tag mx-2 px-2 py-0.5 bg-blue-800 mb-2 mt-1 text-blue rounded-full text-sm font-mono w-fit">
            {data.split(";")[0]}
        </span>
    </span>
    
        <a href="{href}" class="card-link btn hero-btn !py-1  !px-6 !m-0 !mt-2">
        <TextObfuscator text="Play"></TextObfuscator>
        </a>
    </div>
</div>