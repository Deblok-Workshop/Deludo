<script>
// svelte intellisense this shitshow of a code is typescript. 🤦
import TextObfuscator from '../components/TextObfuscator.svelte';
import dragging from "./dragging.ts"
setTimeout(()=>{dragging();},500)
	

</script>
<div class="bgDotContainer  w-full h-[100vh] z-[0]  relative block"></div>
<hero class="flex-1 w-full h-[100vh] bg-slate-900 flex flex-col">
	
	<div class="flex flex-col w-full h-full">
		<div class="draggable p-8 rounded-xl bg-black/35 active:bg-black/55 hover:bg-black/50 active:shadow-2xl hover:shadow-2xl shadow-black/50 backdrop-blur-md absolute top-28 left-8 inline-block slideIn">
		<h1 class="text-4xl ">
			Welcome to <span class="soonBold"><TextObfuscator text="Deludo" />,
		</h1>
		<h2 class="text-2xl  text-blue font-semilight">
			The world's <span class="soonBold">biggest</span>
			<TextObfuscator text="game" /> site
		</h2>
		<br><br>
		<a href="_a" class="btn hero-btn">
			<TextObfuscator text="Start Playing" />
		</a>
		<a href="_dsc" class="btn hero-btn-secondary" target="_blank">
			<TextObfuscator text="Discord" />
		</a>
		</div>
	</div>
</hero>

