<script>
	import Timeline from './Timeline.svelte';
	import TimelineItem from './TimelineItem.svelte';
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="max-sm:basis-10/12 sm:basis-3/5 md:basis-3/5">
		<h1 class="font-bold my-10 text-center">Roadmap</h1>

		<hr class="text-center mb-20" />

		<Timeline>
			<TimelineItem
				title="Cetificate Transparency Logs"
				timestamp="08/2022"
				description="Started parsing more than 4 billion entry across 10 logs."
				badgeText="Source"
			/>
			<TimelineItem
				title="Subdomain Lookup"
				timestamp="10/2022"
				description="First feature implemented: return every known subdomain for the given domain."
				badgeText="Feature"
			>
				<a href="/"> <button class="btn variant-ghost-primary">Try it out!</button> </a>
			</TimelineItem>
			<TimelineItem
				title="Alpha Release"
				timestamp="12/2022"
				description="Releases the alpha version of the Columbus Project. With a lot of optimization and an enterprise server, Columbus responds in ~0.3 seconds with 601 results. More than 1.7 millionlookup on the first 3 day!"
				badgeText="Release"
			/>
			<TimelineItem
				title="The Privacy, Security, & OSINT Show"
				timestamp="01/2023"
				description="Columbus Project is featured in Episode 288. Thanks you!"
				badgeText="Show"
			>
				<a
					href="https://inteltechniques.com/blog/2023/01/27/the-privacy-security-osint-show-episode-288/"
				>
					<button class="btn variant-ghost-primary">Listen</button>
				</a>
			</TimelineItem>
			<TimelineItem
				title="Top Level Domain Lookup"
				timestamp="04/2023"
				description="Columbus can now return all of the known TLDs for the given domain."
				badgeText="Feature"
			>
				<a href="/tools"> <button class="btn variant-ghost-primary">Test it!</button> </a>
				<a href="/swagger/index.html#/tools/get_api_tools_tld__fqdn_">
					<button class="btn variant-ghost-primary sm:ml-4">Learn how the API works</button>
				</a>
			</TimelineItem>
			<TimelineItem
				title="???"
				timestamp="??/????"
				description="More advanced search!"
				badgeText="TODO"
			/>
		</Timeline>
	</div>
</div>
