<script>
	// Your custom Skeleton theme:
	import '../../theme.postcss';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/all.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../../app.postcss';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<svelte:head>
	<title>Tools - Columbus Project</title>

	<meta
		name="description"
		content="Columbus Project is an API first subdomain discovery service. A blazingly fast subdomain enumeration service with advanced features."
	/>

	<link rel="icon" href="https://columbus.elmasy.com/icon.svg" type="image/svg+xml" />

	<link rel="canonical" href="https://columbus.elmasy.com/tools" />

	<meta property="og:site_name" content="Tools - Columbus Project" />

	<meta property="og:type" content="website" />

	<meta property="og:title" content="Tools - Columbus Project" />

	<meta
		property="og:description"
		content="Columbus Project is an API first subdomain discovery service. A blazingly fast subdomain enumeration service with advanced features."
	/>

	<meta property="og:url" content="https://columbus.elmasy.com/tools" />

	<meta property="og:image" content="https://columbus.elmasy.com/cover.png" />

	<meta property="article:published_time" content="2023-05-09T00:00:00.000Z" />

	<meta property="article:modified_time" content="2023-05-10T00:00:00.000Z" />

	<meta name="twitter:card" content="summary_large_image" />

	<meta name="twitter:title" content="Tools - Columbus Project" />

	<meta
		name="twitter:description"
		content="Columbus Project is an API first subdomain discovery service. A blazingly fast subdomain enumeration service with advanced features."
	/>

	<meta name="twitter:url" content="https://columbus.elmasy.com/tools" />

	<meta name="twitter:image" content="https://columbus.elmasy.com/cover.png" />

	<meta name="twitter:label1" content="Written by" />

	<meta name="twitter:data1" content="Daniel Gorbe" />

	<meta name="twitter:label2" content="Filed under" />

	<meta name="twitter:data2" content="Columbus - Elmasy" />

	<meta property="og:image:width" content="1500" />

	<meta property="og:image:height" content="500" />

	<meta property="article:tag" content="Elmasy" />

	<script
		defer
		data-api="/api/event"
		data-domain="columbus.elmasy.com"
		src="/js/script.js"
	></script>
</svelte:head>

<!-- App Shell -->
<AppShell>
	<!-- Page Route Content -->
	<slot />
</AppShell>
