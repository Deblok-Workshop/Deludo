<script>
    
    import Populator from "../../components/Populator";
    
    (async()=>{
        let assets = await Populator()
        console.log(assets)
    })();
</script>
<br><br>
<div class="w-full h-full flex flex-row justify-center items-center align-middle">
    <iframe src="" class="mx-auto w-[700px] h-[480px] bg-black" title="container"></iframe>
    <div class="ml-auto hover:w-[400px] hover:max-w-[400px] duration-300 max-w-[64px] w-[64px] overflow-clip sidepanel py-32 h-full bg-mantle rounded-l-2xl text-center">
        <div class="duration-300 w-full h-full">
        <h2 class="gtitle font-bold text-3xl">Testing 123</h2>
        </div>
    </div>
</div>