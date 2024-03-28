
<script>
    import { page } from '$app/stores';
</script>

<main class="flex flex-col w-full h-full flex-1 items-middle justify-center">
    <h1 class="text-6xl mx-auto text-center font-extrabold">{$page.status}!</h1>
    <img alt="{$page.status.toString()} error" src="https://http.cat/{$page.status}" style="height:200px;width:250px;" class="mt-4 mx-auto">
</main>