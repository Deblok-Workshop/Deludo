<script>
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
<div class="w-full h-full flex flex-row justify-center items-center align-middle">
    <iframe src="" class="mx-auto w-[calc(100%-420px)] h-[calc(100%-32px)] bg-transparent" title="container"></iframe>
    <div class="ml-auto hover:w-[400px] hover:max-w-[400px] duration-500 max-w-[64px] w-[64px] overflow-clip sidepanel py-32 h-full bg-crust rounded-l-2xl text-center">
        <div class="duration-300 w-full h-full delay-200">
        <h2 class="gtitle font-bold text-3xl">_</h2>
        </div>
    </div>
</div>