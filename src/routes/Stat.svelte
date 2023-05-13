<script>
	import { onMount } from 'svelte';
	import { statTotal, statTld, statDomain, statFullDomain, statSub } from './stores';

	onMount(async () => {
		if (
			$statTotal != 0 ||
			$statTld != 0 ||
			$statDomain != 0 ||
			$statFullDomain != 0 ||
			$statSub != 0
		) {
			return;
		}

		const res = await fetch(`https://columbus.elmasy.com/api/stat`);

		if (res.ok) {
			// No content, the backend is counting
			if (res.status == 204) {
				return;
			}

			const statJson = await res.json();

			if (
				statJson.total == 0 ||
				statJson.tld == 0 ||
				statJson.domain == 0 ||
				statJson.fulldomain == 0 ||
				statJson.tld == 0
			) {
				return;
			}

			statTotal.set(statJson.total);
			statTld.set(statJson.tld);
			statDomain.set(statJson.domain);
			statFullDomain.set(statJson.fulldomain);
			statSub.set(statJson.sub);
		} else {
			console.log('Failed to fetch /stat:' + res.statusText + ' ' + res.text());
		}
	});
</script>
