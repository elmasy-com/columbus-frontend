<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center">
		<h1 class="font-bold">Contact</h1>

		<hr />

		<div class="card variant-ghost-primary p-10">
			<nav class="list-nav">
				<ul class="fa-ul">
					<li>
						<a href="https://elmasy.com">
							<i class="fa-li fa-solid fa-globe fa-lg" />
							<p>elmasy.com</p>
						</a>
					</li>
					<li>
						<a href="mailto:info@elmasy.com">
							<i class="fa-li fa-solid fa-envelope fa-lg" />
							<p>Email</p>
						</a>
					</li>
					<li>
						<a href="https://github.com/elmasy-com">
							<i class="fa-li fa-brands fa-github fa-lg" />
							<p>GitHub</p>
						</a>
					</li>
					<li>
						<a href="https://infosec.exchange/@elmasy">
							<i class="fa-li fa-brands fa-mastodon fa-lg" />
							<p>Mastodon</p>
						</a>
					</li>
					<li>
						<a href="https://twitter.com/elmasy_com">
							<i class="fa-li fa-brands fa-twitter fa-lg" />
							<p>Twitter</p>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</div>

<style lang="postcss">
	/* figure {
		@apply flex relative flex-col;
	} */
	/* figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	} */
	/* .img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite, glow 5s linear infinite;
	} */
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
