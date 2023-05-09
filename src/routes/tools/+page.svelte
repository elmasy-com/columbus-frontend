<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<script>
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import DiscTlds from './DiscTlds.svelte';
	import GetTld from './GetTld.svelte';
	import GetDomain from './GetDomain.svelte';
	import GetSub from './GetSub.svelte';
	import IsValid from './IsValid.svelte';
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center max-sm:basis-10/12 sm:basis-3/5 md:basis-3/5">
		<h1 class="font-bold">Tools</h1>

		<hr />

		<Accordion autocollapse class="card p-4 text-token">
			<AccordionItem open>
				<svelte:fragment slot="lead"
					><i class="fa-solid fa-magnifying-glass text-xl w-6 text-center" /></svelte:fragment
				>
				<svelte:fragment slot="summary"
					><p class="font-bold">Top Level Domain finder</p></svelte:fragment
				>
				<svelte:fragment slot="content">
					<p class="text-left">
						Find TLDs for the given domain.
						<br />
						Returns a list of all known Top Level Domains for the given domain.
						<br />
						The domain parameter must be only the Second Level Domain (eg.: <code>example</code>).
						<br />
						Example: <code>/api/tld/example</code> returns <code>["com", "org", "net"]</code>.
					</p>

					<DiscTlds />
				</svelte:fragment>
			</AccordionItem>

			<AccordionItem>
				<svelte:fragment slot="lead"
					><i class="fa-solid fa-layer-group text-xl w-6 text-center" /></svelte:fragment
				>
				<svelte:fragment slot="summary"
					><p class="font-bold">Get the TLD from a FQDN</p></svelte:fragment
				>
				<svelte:fragment slot="content">
					<p class="text-left">
						Get the top level domain part (eg.: <code>com</code>) from a FQDN (eg.:
						<code>columbus.elmasy.com</code>).
						<br />
						<strong>IMPORTANT</strong>: Only ICANN managed TLDs are handled.
						<br />
						The private ones are only returned as the last part of the string
						<br />
						Examples:
						<br />
						<code>/api/tools/tld/columbus.elmasy.co.uk</code> -> <code>co.uk</code>
						<br />
						<code>/api/tools/tld/columbus.elmasy.local</code> -> <code>local</code>
					</p>

					<GetTld />
				</svelte:fragment>
			</AccordionItem>

			<AccordionItem>
				<svelte:fragment slot="lead"
					><i class="fa-solid fa-layer-group text-xl w-6 text-center" /></svelte:fragment
				>
				<svelte:fragment slot="summary"
					><p class="font-bold">Get the domain from a FQDN</p></svelte:fragment
				>
				<svelte:fragment slot="content">
					<p class="text-left">
						Get the domain part (eg.: <code>elmasy.com</code>) from a FQDN (eg.:
						<code>columbus.elmasy.com</code>).
						<br />
						Example:
						<br />
						<code>/api/tools/tld/columbus.elmasy.com</code> -> <code>elmasy.com</code>
					</p>

					<GetDomain />
				</svelte:fragment>
			</AccordionItem>

			<AccordionItem>
				<svelte:fragment slot="lead"
					><i class="fa-solid fa-layer-group text-xl w-6 text-center" /></svelte:fragment
				>
				<svelte:fragment slot="summary"
					><p class="font-bold">Get the subdomain from a FQDN</p></svelte:fragment
				>
				<svelte:fragment slot="content">
					<p class="text-left">
						Get the subdomain part (eg.: <code>columbus</code>) from a FQDN (eg.:
						<code>columbus.elmasy.com</code>).
						<br />
						Example:
						<br />
						<code>/api/tools/subdomain/columbus.elmasy.com</code> -> <code>columbus</code>
					</p>

					<GetSub />
				</svelte:fragment>
			</AccordionItem>

			<AccordionItem>
				<svelte:fragment slot="lead"
					><i class="fa-solid fa-circle-check text-xl w-6 text-center" /></svelte:fragment
				>
				<svelte:fragment slot="summary"
					><p class="font-bold">Returns whether FQDN is a valid domain</p></svelte:fragment
				>
				<svelte:fragment slot="content">
					<p class="text-left">
						Returns whether FQDN is a valid domain.
						<br />
						Examples:
						<br />
						<code>/api/tools/isvalid/columbus.elmasy.com</code> -> <code>true</code>
						<br />
						<code>/api/tools/isvalid/.elmasy.com</code> -> <code>false</code>
					</p>

					<IsValid />
				</svelte:fragment>
			</AccordionItem>
		</Accordion>

		<a class="btn btn-l variant-ghost-primary" href="/swagger/index.html"
			>Read the API documentation!</a
		>
	</div>
</div>
