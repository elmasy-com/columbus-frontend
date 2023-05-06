<script>
	import { onMount } from 'svelte';
	import { totalDomain, totalSub } from './stores';

	onMount(async () => {
		if ($totalDomain != 0 || $totalSub != 0) {
			return;
		}

		const res = await fetch(`https://columbus.elmasy.com/api/stat`);

		if (res.ok) {
			// No content, the backend is counting
			if (res.status == 204) {
				return;
			}

			const statJson = await res.json();

			if (statJson.domain == 0 && statJson.sub == 0) {
				return;
			}

			totalDomain.set(statJson.domain);
			totalSub.set(statJson.sub);
		} else {
			console.log('Failed to fetch /stat:' + res.statusText + ' ' + res.text());
		}
	});
</script>
