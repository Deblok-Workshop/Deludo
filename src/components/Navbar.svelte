<script>
    import Obfuscator from "./Obfuscator.svelte"
    import TextObfuscator from "./TextObfuscator.svelte";

</script>
<nav class="z-[10000] shadow-lg shadow-crust/30 w-full py-2 px-4 bg-crust/80 backdrop-blur-md flex flex-row items-center fixed top-0">
    <h1 class="navbar-h1 text-xl font-semibold"><TextObfuscator text="Deludo"/></h1>
    <a href="/" class="ml-4 btn navbar-btn">Home</a>
    <Obfuscator href="_a" className="ml-4 btn navbar-btn" text="Games" />
    <Obfuscator href="_b" className="ml-4 btn navbar-btn" text="Emulator" />
    <Obfuscator href="_s" className="ml-4 btn navbar-btn" text="Settings" />
</nav>