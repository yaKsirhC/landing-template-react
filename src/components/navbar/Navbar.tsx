import { JSX, Show, createSignal } from "solid-js";
import { createEffect } from "solid-js";
import './navbarStyle.scss'
import { createStore } from "solid-js/store";

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = createSignal(false)
    const [screenWidth, setScreenWidth] = createSignal(window.innerWidth)
    const [styles, setStyles] = createStore(
        [
            "transparent",
            "white", 
            "rgb(255, 255, 255, 0.7)",
        ]
    )

    let navRef: HTMLElement | undefined;

    window.addEventListener("scroll", e => {
        if (window.scrollY > 5) {
            setStyles(['white', "black", "linear-gradient(90deg,#d53369,#daae51)"])
            return
        }
        setStyles(['transparent', "white", "rgb(255, 255, 255, 0.7"])
        return
    })

    window.addEventListener("resize", e => {
        setScreenWidth(window.innerWidth)
    })

    createEffect(() => {
        window.addEventListener('click', e => {
            if(!navRef?.contains(e.target as HTMLElement)) {
                setToggleMenu(false);
            }
        })
    })

    return (
        <>
            <nav ref={navRef} style={{background: styles[0]}} class="navbar">
                <a style={{color: styles[1]}} href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 20q-2.275 0-3.888-1.575T1 14.575q0-1.95 1.175-3.475T5.25 9.15q.625-2.3 2.5-3.725T12 4q2.925 0 4.963 2.038T19 11q1.725.2 2.863 1.488T23 15.5q0 1.875-1.313 3.188T18.5 20h-12Zm0-2h12q1.05 0 1.775-.725T21 15.5q0-1.05-.725-1.775T18.5 13H17v-2q0-2.075-1.463-3.538T12 6Q9.925 6 8.462 7.463T7 11h-.5q-1.45 0-2.475 1.025T3 14.5q0 1.45 1.025 2.475T6.5 18Zm5.5-6Z"/></svg>

                    <p style={{color: styles[1]}} class='logo-text'>
                        LANDING
                    </p>
                </a>

                    <ul style={toggleMenu() || screenWidth() >= 800 ? {color: styles[1]} : {color: styles[1], transform: "translateX(100%)"}} class="nav-list">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Customers</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Contact</a></li>
                        <li>
                            <a style={screenWidth() > 800 ? {background: styles[2]}: {}} class="action" href="">Action</a>
                        </li>

                    </ul>
                <button class="ham" onClick={() => setToggleMenu(pre => !pre)}>
                    <img src="/ham.svg" alt="hambuger-icon" />
                </button>
            </nav>
        </>
    )
}