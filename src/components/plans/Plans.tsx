import './plans.scss';

export const Plans = () => {
	return (
		<section class='plans'>
			<div class="plans-text">
				<h1>Plans</h1>
				<hr />
			</div>
			<div class="plans">
				<div class="free plan">
					<h2>Free</h2>
					<hr />
					<div class="offers">
						<h3 class="thing">Thing</h3>
						<h3 class="thing">Thing</h3>
						<h3 class="thing">Thing</h3>
					</div>
					<h2 class="price">$0</h2>
					<button>Sign Up</button>
				</div>
				<div class="basic special plan">
					<h2>Basic</h2>
					<hr />
					<div class="offers">
						<h3 class="thing">Thing</h3>
						<h3 class="thing">Thing</h3>
						<h3 class="thing">Thing</h3>
					</div>
					<h2 class="price">$10</h2>
					<button>Sign Up</button>
				</div>

				<div class="pro plan">
					<h2>Pro</h2>
					<hr />
					<div class="offers">
						<h3 class="thing">Thing</h3>
						<h3 class="thing">Thing</h3>
						<h3 class="thing">Thing</h3>
					</div>
					<h2 class="price">$100</h2>
					<button>Sign Up</button>
				</div>

			</div>
		</section>
	)
}
