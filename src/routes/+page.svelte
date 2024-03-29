<script lang="ts">
	import TextObfuscator from '@/components/TextObfuscator.svelte';
</script>

<hero class="flex-1 w-full h-[100vh] bg-slate-900 flex flex-col">
	<div class="flex flex-col w-full h-full">
		<h1 class="text-4xl absolute top-24 left-8">
			The world's <span class="soonBold">biggest</span>...
		</h1>
		<sub class="text-xl absolute top-36 left-8 text-blue/70"
			><TextObfuscator text="Unblocked" /></sub
		>
		<h2 class="text-3xl absolute top-36 left-36 text-blue font-bold">
			<TextObfuscator text="game" /> site
		</h2>
	</div>
</hero>

