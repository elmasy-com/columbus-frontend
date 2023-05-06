<script>
	import { drawerStore } from '@skeletonlabs/skeleton';

	function drawerClose() {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-6">
	<ul>
		<li><a href="/" on:click={drawerClose}>Homepage</a></li>
		<li><a href="/about" on:click={drawerClose}>About</a></li>
		<li><a href="/tools" on:click={drawerClose}>Tools</a></li>
		<li><a href="/swagger/index.html" on:click={drawerClose}>API</a></li>
		<li><a href="/contact" on:click={drawerClose}>Contact</a></li>
	</ul>
</nav>
