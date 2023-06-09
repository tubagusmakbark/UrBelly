class appBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
		<header class="app-bar">
			<div class="app-bar__menu">
				<button id="hamburgerButton">☰</button>
			</div>
			<div class="app-bar__brand" id="logo">
				<img class="app-bar__logo" src="assets/images/logo/logo.png" alt="logo-urbelly" srcset="" width="144" height="41">
			</div>
			<nav id="navigationDrawer" class="app-bar__navigation">
				<ul>
					<li class="app-bar__link"><a href="/"> Home </a></li>
					<li class="app-bar__link"><a href="#/favorite"> Favorite </a></li>
					<li class="app-bar__link"><a href="https://github.com/tubagusmakbark" rel="norefferer" target="_blank"> About Us </a></li>
				</ul>
			</nav>
		</header>
		`;
  }
}

customElements.define('app-bar', appBar);
