<script lang="ts">
	export let title: string = '(Title)';
	export let timestamp: string = '(Timestamp)';
	export let description: string = '(Description)';
	export let badgeText: string = '(Badge)';
</script>

<li class="mb-10 ml-10">
	<!-- Slot: Icon -->
	<!-- After -->
	{#if badgeText == 'TODO'}
		<span
			class="absolute flex items-center justify-center w-6 h-6 variant-filled-secondary rounded-full -left-3 ring-8 ring-surface-200-700-token"
		/>
	{:else}
		<span
			class="absolute flex items-center justify-center w-6 h-6 variant-filled-primary rounded-full -left-3 ring-8 ring-surface-200-700-token"
		/>
	{/if}

	<h3 class="flex items-center mb-1 space-x-2 -translate-y-2">
		<span>{title}</span>
		{#if badgeText}
			{#if badgeText == 'TODO'}
				<span class="badge variant-soft-secondary">{badgeText}</span>
			{:else}
				<span class="badge variant-soft-primary">{badgeText}</span>
			{/if}
		{/if}
	</h3>
	<time class="block mb-2">{timestamp}</time>
	<p class="mb-4 opacity-75">{description}</p>
	<!-- Slot: Default -->
	{#if $$slots.default}<div><slot /></div>{/if}
</li>
