import './footer.scss'

export const Footer = () => {
  return (
	<footer>
		<div class="logo">
			<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 20q-2.275 0-3.888-1.575T1 14.575q0-1.95 1.175-3.475T5.25 9.15q.625-2.3 2.5-3.725T12 4q2.925 0 4.963 2.038T19 11q1.725.2 2.863 1.488T23 15.5q0 1.875-1.313 3.188T18.5 20h-12Zm0-2h12q1.05 0 1.775-.725T21 15.5q0-1.05-.725-1.775T18.5 13H17v-2q0-2.075-1.463-3.538T12 6Q9.925 6 8.462 7.463T7 11h-.5q-1.45 0-2.475 1.025T3 14.5q0 1.45 1.025 2.475T6.5 18Zm5.5-6Z"/></svg>

			Landing
		</div>
		<nav class="footer-nav">
			<div class="links">
				<h1>Links</h1>
				<div class="navs">
					<a href="">FAQ</a>
					<a href="">Help</a>
					<a href="">Support</a>
				</div>
			</div>
			<div class="legal">
				<h1>Legal</h1>
				<div class="navs">
					<a href="">terms</a>
					<a href="">provacy</a>
				</div>
			</div>
			<div class="social">
				<h1>Social</h1>
				<div class="navs">
					<a href="">Facebook</a>
					<a href="">linkedin</a>
					<a href="">twitter</a>
				</div>
			</div>
			<div class="Company">
				<h1>Caompany</h1>
				<div class="navs">
					<a href="">Blogs</a>
					<a href="">Asbout Us</a>
					<a href="">Contact</a>
				</div>
			</div>
		</nav>
	</footer>
  )
}
