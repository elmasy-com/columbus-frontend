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
	<title>Contact - Columbus Project</title>

	<meta
		name="description"
		content="Columbus Project is a blazingly fast API first subdomain discovery service."
	/>

	<link rel="icon" href="/icon.svg" type="image/svg+xml" />

	<link rel="canonical" href="https://columbus.elmasy.com/contact" />

	<meta property="og:site_name" content="Contact - Columbus Project" />

	<meta property="og:type" content="website" />

	<meta property="og:title" content="Contact - Columbus Project" />

	<meta
		property="og:description"
		content="Columbus Project is a blazingly fast API first subdomain discovery service."
	/>

	<meta property="og:url" content="https://columbus.elmasy.com/contact" />

	<meta property="og:image" content="/cover.png" />

	<meta property="article:published_time" content="2023-05-09T00:00:00.000Z" />

	<meta property="article:modified_time" content="2023-05-10T00:00:00.000Z" />

	<meta name="twitter:card" content="summary_large_image" />

	<meta name="twitter:title" content="Contact - Columbus Project" />

	<meta
		name="twitter:description"
		content="Columbus Project is a blazingly fast API first subdomain discovery service."
	/>

	<meta name="twitter:url" content="https://columbus.elmasy.com/contact" />

	<meta name="twitter:image" content="/cover.png" />

	<meta name="twitter:label1" content="Written by" />

	<meta name="twitter:data1" content="Daniel Gorbe" />

	<meta name="twitter:label2" content="Filed under" />

	<meta name="twitter:data2" content="Columbus - Elmasy" />

	<meta property="og:image:width" content="1501" />

	<meta property="og:image:height" content="501" />

	<meta property="article:tag" content="Elmasy" />
</svelte:head>

<!-- App Shell -->
<AppShell>
	<!-- Page Route Content -->
	<slot />
</AppShell>
