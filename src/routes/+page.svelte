<script>
	import Stat from './Stat.svelte';
	import Lookup from './Lookup.svelte';
	import { statTotal, statTld, statFullDomain, statSub } from './stores';

	import { onMount } from 'svelte';
</script>

<Stat />

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center">
		<img class="max-w-[20%] inline" src="logo_white.svg" alt="Elmasy Logo" />
		<h1 class="font-bold">Columbus Project</h1>
		<hr />

		{#if $statTotal == 0 || $statTld == 0 || $statFullDomain == 0 || $statSub == 0}
			<p class="max-sm:mx-6">
				Columbus Project is a subdomain discovery service with an easy to integrate API.
			</p>
		{:else}
			<p class="max-sm:mx-6">
				Columbus Project is a subdomain discovery service with an easy to integrate API.<br />
				There are <b>{$statTotal}</b> different entries in the database, combined from
				<b>{$statSub}</b>
				different subdomains, <b>${statFullDomain}</b> different domains and <b>{$statTld}</b> top level
				domains.
			</p>
		{/if}

		<Lookup />
	</div>
</div>

<style>
	/* img {
		max-width: 20%;
	} */
</style>
