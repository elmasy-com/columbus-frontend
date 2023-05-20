<script>
	import Stat from './Stat.svelte';
	import { statTotal } from './stores';
</script>

<Stat />

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center">
		<img class="max-w-[20%] inline" src="logo_white.svg" alt="Elmasy Logo" />
		<h1 class="font-bold">Columbus Project</h1>
		<hr />

		{#if $statTotal == 0}
			<p class="max-sm:mx-6">
				Columbus Project is an API first subdomain discovery service.
				<br />
				A blazingly fast subdomain enumeration service with advanced features.
				<br />
				More than <b>800M</b> unique records and its growin!
			</p>
		{:else}
			<p class="max-sm:mx-6">
				Columbus Project is an API first subdomain discovery service.
				<br />
				A blazingly fast subdomain enumeration service with advanced features.
				<br />
				More than <b>{$statTotal}</b> unique records and its growing!
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
