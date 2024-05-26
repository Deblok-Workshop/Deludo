<script>
    import { Maximize } from 'lucide-svelte';
    setTimeout(()=>{
        try {
        let params = document.location.hash.slice(1).split("||")
        console.log(params)
        if (params.length == 2) {
        document.querySelector("iframe").src = atob(params[1])
        document.querySelector(".gtitle").innerText = atob(params[0])
        } else {
            document.location = "/_a"
        }
        document.location.hash = "#"
    } catch (e){
        alert(e)
        document.location = "/_a"
    }
    },100)
    
</script>
<br><br>
<div class="w-full h-full flex flex-row justify-center items-center align-middle" onmousemove="document.querySelector('iframe').focus()">
    <iframe src=""  class="mx-auto w-[calc(100%-420px)] duration-300 h-[calc(100%-32px)] bg-transparent" title="container"></iframe>
    <div class="flex flex-col ml-auto hover:w-[400px] hover:max-w-[400px] duration-500 max-w-[64px] w-[64px] overflow-clip sidepanel pt-32 h-full bg-crust rounded-l-2xl text-center">
        <div class="duration-300 w-full h-full delay-200 flex flex-col overflow-clip">
        <h2 class="gtitle font-bold text-3xl mx-3" style="display: -webkit-box;-webkit-line-clamp: 5;-webkit-box-orient: vertical;overflow:clip;">_</h2>
        <gap class="flex flex-1"></gap>
        <div class="ring-2 ring-crust p-4 bg-mantle rounded-xl px-8 rounded-b-none">
            <button onclick="document.querySelector('iframe').requestFullscreen();document.querySelector('iframe').focus()" class="p-3 duration-300 backdrop-brightness-0 bg-mauve/30 text-mauve hover:bg-mauve/40 rounded-lg">
                <Maximize />
            </button>
        </div>
        </div>
    </div>
</div>