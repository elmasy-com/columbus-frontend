<script>
	import Stat from './Stat.svelte';
	import Lookup from './Lookup.svelte';
	import { totalDomain, totalSub } from './stores';

	import { onMount } from 'svelte';
</script>

<Stat />

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center">
		<h1 class="font-bold">Columbus Project</h1>
		<hr />

		{#if $totalDomain == 0 && $totalSub == 0}
			<p class="max-sm:mx-6">
				Columbus Project is a subdomain discovery service with an easy to integrate API.
			</p>
		{:else}
			<p class="max-sm:mx-6">
				Columbus Project is a subdomain discovery service with an easy to integrate API.<br />
				There are <b>{$totalDomain}</b> number of domains and <b>{$totalSub}</b> number of subdomains
				in the database.
			</p>
		{/if}

		<Lookup />
	</div>
</div>
