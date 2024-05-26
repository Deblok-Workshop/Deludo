<script>
import Card from "../../components/Card.svelte";
import TextObfuscator from "../../components/TextObfuscator.svelte";
import search from "../../components/GameSearch.ts";
import loader from "./loader.ts"
loader();


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
    <input type="search" id="searchInput" on:keyup={search} placeholder="Search" class="input">
    <span class="mr-1">Filter:</span>
    <select class="input hover:ring-green !py-1.5 tagFilter font-mono" placeholder="Filter by..." on:change={search} on:mouseleave={search}>
        <option selected>All</option>
        <option disabled>Emulators ----</option>
        <option value="NES"><TextObfuscator text="NES" /></option>
        <option value="SNES"><TextObfuscator text="SNES" /></option>
        <option value="Megadrive"><TextObfuscator text="Megadrive" /></option>
        <option disabled>Other --------</option>
        <option value="HTML"><TextObfuscator text="HTML" /></option>
        <option value="Flash"><TextObfuscator text="Flash" /></option>
        <option value="Playable"><TextObfuscator text="YT Playables" /></option>
    </select>
</div>
<br>
<div class="gcontainer mx-auto w-fit">
    <Card idName="template"></Card>
  </div>
</div>