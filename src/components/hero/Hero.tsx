import './heroStyle.scss'

// you done with nav?

export default function Hero() {
  return (
	<div class='hero-container'>
		<section class="hero">
			<div class="text">
				<p>What business are you?</p>
				<h1>Main Hero Message to sell yourself! </h1>
				<h2>Sub-hero message, not too long and not too short. Make it just right! </h2>
				<button>Subscibe</button>
			</div>
			<img class='hero-img' src="/hero.png" alt="alt text" />
		</section>
		<img src="/wave1.svg" alt="" class="waves" />
	</div>
  )
}
// title...
// ..........
