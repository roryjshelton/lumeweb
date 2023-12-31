import React, {useState} from 'react'
import './NavbarStyles.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const toggleNav = () => setNav(!nav)

    return (
        <div className='w-full h-20 flex justify-between items-center whitespace-nowrap gap-9 bg-[#031418] pt-[75px] px-[3%]'>
            <div className="bg-[url(../../src/assets/lume-logo.webp)] bg-no-repeat bg-contain h-[55px] min-w-[210px] z-[998] ml-[1%]">
            </div>
            <ul className='transition-opacity duration-150 ease-out md:max-lg:opacity-0 lg:opacity-100 nav-menu'>
                <li><a href="#">Home</a></li>
                <li><a href="#vision">Vision</a></li>
                <li><a href="#whatisweb3">What is Web3</a></li>
                <li>Donate</li>
                <div className='text-[color:var(--black)] font-normal not-italic items-end bg-[color:var(--aquamarine)] flex h-[52px] max-w-[195px] transition-[0.5s] border px-[5.2px] py-3 rounded-[5px] border-solid border-transparent scale-100 hover:transition-[0.5s] hover:bg-transparent hover:border hover:border-[color:var(--aquamarine)] hover:text-[white] hover:border-solid;'>
                    <a className='download-btn' href="#">Download Extension</a>
                </div>
            </ul>

            <div className="transition-opacity duration-150 ease-out nav-menu hamburger" onClick={toggleNav}>
            ☰
            </div>
            <div className={nav ? 'mobile-menu active className="transition duration-[0.55s] linear"' : 'mobile-menu className="transition duration-[0.55s] linear"'}>
                <ul className="mobile-nav">
                    <li onClick={toggleNav}><a href="#">Home</a></li>
                    <li onClick={toggleNav}><a href="#vision">Vision</a></li>
                    <li onClick={toggleNav}><a href="#whatisweb3">What is Web3</a></li>
                    <li onClick={toggleNav}><a href="#donate">Donate</a></li>
                    <div className='text-[color:var(--black)] text-[length:var(--font-size-s)] font-normal not-italic items-end bg-[color:var(--aquamarine)] flex h-[52px] min-w-[245px] transition-[0.5s] border px-[5.2px] py-3 rounded-[5px] border-solid border-transparent scale-100 hover:transition-[0.5s] hover:bg-transparent hover:border hover:border-[color:var(--aquamarine)] hover:text-[white] hover:border-solid transition-[0.5s] ml-[-0.8em] scale-[0.7] hover:scale-75'>
                        <a className="download-btn pl-2.5" href="#">Download Extension</a>
                    </div>
                </ul>
                <div className="mobile-menu-btn"></div>
            </div>
        </div>
    )
}

export default Navbar