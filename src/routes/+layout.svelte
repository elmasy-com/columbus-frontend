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

<Drawer position="right" width="20rem">
	<h2 class="p-4">Navigation</h2>
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
				<a class="btn btn-sm variant-ghost-primary invisible lg:visible" href="/about"> About </a>
				<a class="btn btn-sm variant-ghost-primary invisible lg:visible" href="/tools"> Tools </a>
				<a class="btn btn-sm variant-ghost-primary invisible lg:visible" href="/swagger/index.html">
					API
				</a>

				<a class="btn btn-sm variant-ghost-primary invisible lg:visible" href="/contact">
					Contact
				</a>

				<!-- Sidebar visible on small screen, invisible on big screen -->
				<div class="flex items-center lg:invisible">
					<button class=" btn btn-sm mr-4" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
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
		<div class="container h-full mx-auto flex justify-center items-center">
			<div class="space-y-10 text-center">
				<p class="pb-5">Columbus Project is a module of <a href="https://elmasy.com">Elmasy</a>.</p>
			</div>
		</div>
	</svelte:fragment>
</AppShell>
