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

<style lang="postcss">
	/* figure {
		@apply flex relative flex-col;
	} */
	/* figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	} */
	/* .img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite, glow 5s linear infinite;
	} */
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
