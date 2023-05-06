<script>
	import { ProgressBar } from '@skeletonlabs/skeleton';

	let domain = '';

	async function getTld() {
		// A hack to use "let promise = getTld();" without real API call.
		if (domain === '') {
			return;
		}

		const res = await fetch(`https://columbus.elmasy.com/api/tools/tld/` + domain);
		const tld = await res.json();

		if (res.ok) {
			return tld;
		} else {
			console.log(res);
			console.log(tld);
			throw new Error(await tld.error);
		}
	}

	let promise = getTld();

	function handleClick() {
		promise = getTld();
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
	{:then tld}
		<!-- Print only when domain and subs are set -->
		{#if domain != '' && tld != undefined}
			<p>Top Level Domain: <code>{tld.result}</code></p>
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
