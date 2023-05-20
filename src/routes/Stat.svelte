<script>
	import { onMount } from 'svelte';
	import { statTotal } from './stores';

	onMount(async () => {
		if ($statTotal != 0) {
			return;
		}

		const res = await fetch(`https://columbus.elmasy.com/api/stat`);

		if (res.ok) {
			// No content, the backend is counting
			if (res.status == 204) {
				return;
			}

			const statJson = await res.json();

			if (statJson.total == 0) {
				return;
			}

			statTotal.set(statJson.total);
		} else {
			console.log('Failed to fetch /stat:' + res.statusText + ' ' + res.text());
		}
	});
</script>
