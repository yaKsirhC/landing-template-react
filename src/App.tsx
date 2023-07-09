import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import { Footer } from './components/footer/Footer'
import { About } from './components/about/About'
import { Customers } from './components/customers/Customers'
import { Plans } from './components/plans/Plans'
import Action  from './components/callToAction/Action'

export default function App() {
  return (
	<div class='app'>
		<Navbar />
		<Hero />
		<About />
		<Customers />
		<Plans />
		<Action />
		<Footer />
	</div>
  )
}