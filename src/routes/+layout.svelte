<script>
    import "../tw.css";
    import Navbar from '../components/Navbar.svelte';
    import { MetaTags } from 'svelte-meta-tags';
</script>


<Navbar />

<slot />
<MetaTags openGraph={{title:"Deludo"}} twitter={{title:"Deludo"}} titleTemplate="%s | Deludo"/>

