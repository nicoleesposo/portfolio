import React from 'react'
import LogoWhite from '../assets/images/ne-white.svg'
import Menu from '../assets/images/menu.svg';

const Nav = () => {
    return (
		<>
        <nav>
			<div className="logo">
				<a href="#top">
					<img src={ LogoWhite } alt="Nicole Esposo Logo in Black" />
				</a>
			</div>
			<div className="menu-link">
				<ul id="full-links">
					<a href="#about">
						<li>About.</li>
					</a>
					<a href="#works">
						<li>Works.</li>
					</a>
					<a href="#contact">
						<li>Say hello.</li>
					</a>
				</ul>
				{/* <ul id="burger" className="hamburger">
					<li>
						<img src={ Menu } alt="Menu" />
					</li>
				</ul> */}
			</div>
		</nav>
		{/* <div className="megamenu">
			<div className="inner">
				<ul>
					<a href="#about">
						<li>About.</li>
					</a>
					<a href="#works">
						<li>Works.</li>
					</a>
					<a href="#contact">
						<li>Say hello.</li>
					</a>
				</ul>
			</div>
		</div> */}
		</>
    );
}

export default Nav;