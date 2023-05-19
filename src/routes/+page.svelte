<script>
	import Stat from './Stat.svelte';
	import { statTotal, statTld, statFullDomain, statSub } from './stores';
</script>

<Stat />

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center">
		<img class="max-w-[20%] inline" src="logo_white.svg" alt="Elmasy Logo" />
		<h1 class="font-bold">Columbus Project</h1>
		<hr />

		{#if $statTotal == 0 || $statTld == 0 || $statFullDomain == 0 || $statSub == 0}
			<p class="max-sm:mx-6">
				Columbus Project is an API first subdomain discovery service.
				<br />
				A blazingly fast subdomain enumeration service with advanced features.
			</p>
		{:else}
			<p class="max-sm:mx-6">
				Columbus Project is an API first subdomain discovery service.
				<br />
				A blazingly fast subdomain enumeration service with advanced features. <br />
				There are <b>{$statTotal}</b> different entries in the database, combined from
				<b>{$statSub}</b>
				different subdomains, <b>{$statFullDomain}</b> different domains and <b>{$statTld}</b> top level
				domains.
			</p>
		{/if}

		<a class="btn btn-l variant-ghost-primary max-sm:mx-3 sm:mx-5" href="/tools"
			>Try out the features</a
		>
		<a class="btn btn-l variant-ghost-primary max-sm:mx-3 sm:mx-5" href="/swagger/index.html"
			>Discover the API</a
		>
	</div>
</div>
