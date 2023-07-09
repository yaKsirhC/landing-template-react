import './about.scss';

export const About = () => {
  return (
	<section class='about'>
		<div class="about-text">
			<h1>About</h1>
			<hr />
		</div>
		<div class="item normal">
			<div class="text">
				<h2>Lorem ipsum dolor sit amet</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>
				<p>Image from <a href="">undraw.co</a> </p>
			</div>
			<img src="/back_lady.svg" alt="ALT" />
		</div>
		<div class="item reverse">
			<div class="text">
				<h2>Lorem ipsum dolor sit amet</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>
				<p>Image from <a href="">undraw.co</a> </p>
			</div>
			<img src="/world_view.svg" alt="ALT" />
		</div>
	</section>
  )
}
