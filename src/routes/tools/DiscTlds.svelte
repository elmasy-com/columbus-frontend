<script>
	import { ProgressBar } from '@skeletonlabs/skeleton';

	let domain = '';

	async function tldLookup() {
		// A hack to use "let promise = lookup();" without real API call.
		if (domain === '') {
			return;
		}

		const res = await fetch(`https://columbus.elmasy.com/api/tld/` + domain);
		const tlds = await res.json();

		if (res.ok) {
			return tlds;
		} else {
			console.log(res);
			console.log(tlds);
			throw new Error(await tlds.error);
		}
	}

	let promise = tldLookup();

	function handleClick() {
		promise = tldLookup();
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
			<p>...waiting</p>
			<ProgressBar />
		{/if}
	{:then tlds}
		<!-- Print only when domain and subs are set -->
		{#if domain != '' && tlds != undefined}
			{#if tlds.length != 0}
				<p>Found {tlds.length} TLD.</p>
			{/if}

			<ol class="list">
				{#each tlds as tld}
					<li>
						{#if tld == ''}
							<span class="flex-auto">{domain}</span>
						{:else}
							<span class="flex-auto">{domain}.{tld}</span>
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

	ol {
		columns: 3;
		-webkit-columns: 2;
		-moz-columns: 2;
	}
</style>
