<script>
	// Your custom Skeleton theme:
	import '../theme.postcss';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/all.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';

	import Navigation from './Navigation.svelte';

	function drawerOpen() {
		drawerStore.open({});
	}
</script>

<svelte:head>
	<title>Columbus Project - Elmasy</title>

	<meta
		name="description"
		content="Columbus Project is an API first subdomain discovery service. A blazingly fast subdomain enumeration service with advanced features."
	/>

	<link rel="icon" href="/icon.svg" type="image/svg+xml" />

	<link rel="canonical" href="https://columbus.elmasy.com/" />

	<meta property="og:site_name" content="Columbus Project - Elmasy" />

	<meta property="og:type" content="website" />

	<meta property="og:title" content="Columbus Project - Elmasy" />

	<meta
		property="og:description"
		content="Columbus Project is an API first subdomain discovery service. A blazingly fast subdomain enumeration service with advanced features."
	/>

	<meta property="og:url" content="https://columbus.elmasy.com/" />

	<meta property="og:image" content="/cover.png" />

	<meta property="article:published_time" content="2023-05-09T00:00:00.000Z" />

	<meta property="article:modified_time" content="2023-05-10T00:00:00.000Z" />

	<meta name="twitter:card" content="summary_large_image" />

	<meta name="twitter:title" content="Columbus Project - Elmasy" />

	<meta
		name="twitter:description"
		content="Columbus Project is an API first subdomain discovery service. A blazingly fast subdomain enumeration service with advanced features."
	/>

	<meta name="twitter:url" content="https://columbus.elmasy.com/" />

	<meta name="twitter:image" content="/cover.png" />

	<meta name="twitter:label1" content="Written by" />

	<meta name="twitter:data1" content="Daniel Gorbe" />

	<meta name="twitter:label2" content="Filed under" />

	<meta name="twitter:data2" content="Columbus - Elmasy" />

	<meta property="og:image:width" content="1501" />

	<meta property="og:image:height" content="501" />

	<meta property="article:tag" content="Elmasy" />
</svelte:head>

<Drawer position="right" width="15rem">
	<h2 class="py-4 px-8">Navigation</h2>
	<hr />
	<Navigation />
</Drawer>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase text-primary-500">
					<a href="/">Columbus</a>
				</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<!-- Buttons visible on big screen, invisible on mobile -->
				<a class="btn btn-sm variant-ghost-primary max-md:hidden md:visible" href="/about">
					About
				</a>
				<a class="btn btn-sm variant-ghost-primary max-md:hidden md:visible" href="/tools">
					Tools
				</a>
				<a class="btn btn-sm variant-ghost-primary max-md:hidden md:visible" href="/roadmap">
					Roadmap
				</a>
				<a
					class="btn btn-sm variant-ghost-primary max-md:hidden md:visible"
					href="/swagger/index.html"
				>
					API
				</a>

				<a class="btn btn-sm variant-ghost-primary max-md:hidden md:visible" href="/contact">
					Contact
				</a>

				<!-- Sidebar visible on small screen, invisible on big screen -->
				<div class="flex items-center md:hidden">
					<button class=" btn btn-sm mr-4" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-6">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Page Route Content -->
	<slot />

	<svelte:fragment slot="footer">
		<div class="container h-full mx-auto flex justify-center items-center mt-4">
			<div class="space-y-10 text-center">
				<p class="pb-5">Columbus Project is a module of <a href="https://elmasy.com">Elmasy</a>.</p>
			</div>
		</div>
	</svelte:fragment>
</AppShell>
