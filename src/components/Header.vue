<template>

		<!-- Header
		============================================= -->
		<header id="header" class="border-full-header header-size-custom" data-sticky-shrink="false" data-sticky-offset="52">
			<div id="header-wrap">
				<div class="container">
					<div class="header-row justify-content-lg-between">

						<!-- Logo
						============================================= -->
						<div id="logo" class="order-lg-1 col-auto px-0 me-lg-0">
							<a href="#" class="standard-logo" data-dark-logo="/assets/images/logo-dark.png"><img src="/assets/images/logo.png" alt="Logo"></a>
							<a href="#" class="retina-logo" data-dark-logo="/assets/images/logo-dark@2x.png"><img src="/assets/images/logo2.png" alt="Logo"></a>
						</div>
						<div class="header-misc order-lg-3 col-auto col-lg-2 px-0 justify-content-end">
							<a href="demo-yoga-login.html" class="button-link"><div>Login</div></a>
							<a href="https://www.facebook.com/semicolonweb/" target="_blank" class="social-icon si-facebook si-small si-light mb-0"><i class="icon-facebook"></i><i class="icon-facebook"></i></a>
							<a href="https://www.instagram.com/semicolonweb/" target="_blank" class="social-icon si-instagram si-small si-light mb-0"><i class="icon-instagram"></i><i class="icon-instagram"></i></a>
						</div>
						<div id="primary-menu-trigger">
							<svg class="svg-trigger" viewBox="0 0 100 100"><path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path><path d="m 30,50 h 40"></path><path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path></svg>
						</div>

						<!-- Primary Navigation
						============================================= -->
						<nav class="primary-menu order-lg-2 col-auto px-0">

							<!-- Menu Left -->
							<ul class="menu-container">

								<li class="current menu-item">
                                    <router-link :to="{name: 'home'}" class="menu-link"><div>Beranda</div></router-link>
                                </li>
								<li class="menu-item">
                                    <router-link :to="{name: 'home'}" class="menu-link"><div>Profil</div></router-link>
                                </li>
								<li class="menu-item"><a class="menu-link" href=""><div>Informasi</div></a>
									<ul class="sub-menu-container">
										<li class="menu-item"><a class="menu-link" href="#"><div>Dropdown 1</div></a></li>
										<li class="menu-item"><a class="menu-link" href="#"><div>Dropdown 2</div></a></li>
										<li class="menu-item"><a class="menu-link" href="#"><div>Dropdown 3</div></a></li>
									</ul>
								</li>
								<li class="menu-item"><a class="menu-link" href=""><div>Publikasi</div></a></li>
								<!--<li class="menu-item">
                                    <router-link :to="{name: 'photo'}" class="menu-link"><div>Galeri Foto</div></router-link>
                                </li>
								<li class="menu-item">
                                    <router-link :to="{name: 'video'}" class="menu-link"><div>Video</div></router-link>
                                </li>
								<li class="menu-item">
                                    <router-link :to="{name: 'contact'}" class="menu-link"><div>Kontak</div></router-link>
                                </li>-->
							</ul>

						</nav><!-- #primary-menu end -->

					</div>
				</div>
			</div>
			<div class="header-wrap-clone"></div>
		</header><!-- #header end -->
    
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>
