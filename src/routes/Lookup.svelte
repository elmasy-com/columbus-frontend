<script>
	import { ProgressBar } from '@skeletonlabs/skeleton';

	let domain = '';

	async function lookup() {
		if (domain === '') {
			return;
		}

		const res = await fetch(`https://columbus.elmasy.com/api/lookup/` + domain);
		const subs = await res.json();

		if (res.ok) {
			return subs;
		} else {
			console.log(res);
			console.log(subs);
			throw new Error(await subs.error);
		}
	}

	let promise = lookup();

	function handleClick() {
		promise = lookup();
	}

	// Removes the previous result when a user starts to type
	function clearresult() {
		let elem = document.getElementById('result');

		if (elem != null && elem.innerHTML != '') {
			elem.innerHTML = '';
		}
	}
</script>

<form>
	<input type="text" bind:value={domain} on:input={clearresult} placeholder="Domain name" />
	<input type="submit" value="Find" on:click={handleClick} />
</form>

<div id="result">
	{#await promise}
		<!-- Print only, when domain is set -->
		{#if domain != ''}
			<ProgressBar />
		{/if}
	{:then subs}
		<!-- Print only when domain and subs are set -->
		{#if domain != '' && subs != undefined}
			{#if subs.length != 0}
				<p class="mx-10 mb-5 py-2 border-2 border-primary-500">
					Number of subdomains found: <b>{subs.length}</b>
				</p>
			{/if}

			<ol class="list sm:columns-2 md:columns-3">
				{#each subs as subdomain}
					<li>
						{#if subdomain == ''}
							<span class="flex-auto">{domain}</span>
						{:else}
							<span class="flex-auto">{subdomain}.{domain}</span>
						{/if}
					</li>
				{/each}
			</ol>
		{/if}
	{:catch error}
		<p style="color: #ff3333">{error.message}</p>
	{/await}
</div>

<style>
	form {
		margin-top: 4rem;
		padding-left: 1rem;
		padding-right: 1rem;
		width: 100%;
		display: flex;
	}

	form input[type='text'] {
		flex-grow: 8;
		color: black;
	}

	form input {
		padding: 0.2em;
	}

	form input[type='submit'] {
		flex-grow: 2;
		border: none;
		background: #1ddddd;
		font-weight: 700;
	}
	form input {
		padding: 0.2em;
	}
</style>
