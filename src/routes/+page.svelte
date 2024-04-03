<script lang="ts">
	import TextObfuscator from '@/components/TextObfuscator.svelte';
</script>

<hero class="flex-1 w-full h-[100vh] bg-slate-900 flex flex-col">
	<div class="flex flex-col w-full h-full">
		<div class="p-8 rounded-xl bg-black/30 backdrop-blur-md absolute top-28 left-8 inline-block slideIn">
		<h1 class="text-4xl ">
			Welcome to <span class="soonBold"><TextObfuscator text="Deludo" />,
		</h1>
		<h2 class="text-2xl  text-blue font-semilight">
			The world's <span class="soonBold">biggest</span>
			<TextObfuscator text="game" /> site
		</h2>
		</div>
	</div>
</hero>

