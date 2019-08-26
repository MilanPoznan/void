<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package void
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'void' ); ?></a>

	<header id="masthead" class="header">
		<div class="header__logo" >
			<img id="header-logo-img" src="http://localhost:8888/void/wp-content/uploads/2019/08/logo-black.png" >
			<a href="<?php echo get_home_url() ?>/" id="header-logo">
			</a>
			<!-- <img src="" />			 -->
			<?php
			// the_custom_logo();
			?>
		</div><!-- .site-branding -->
		<div class="header__hamburger-wrapp hamburger-wrapp">
			<div class="header__hamburger hamburger"></div>
		</div>
		<div class="header__menu js-menu">
			<nav id="site-navigation" class="navigation header__navi">
				<?php
				wp_nav_menu( array(
					'theme_location' => 'menu-1',
					'menu_id'        => 'primary-menu',
				) );
				?>
			</nav><!-- #site-navigation -->
		</div>
	</header><!-- #masthead -->

	<div class="site-animation">
			<div class="site-animation__logo-wrapper">
				<div class="site-animation__logo-top">
					<span class="animation-logo-objects" id="void-v"></span>
					<span class="animation-logo-objects rotated-object" id="void-o"></span>
					<span class="animation-logo-objects" id="void-i"></span>
					<span class="animation-logo-objects" id="void-d"></span>
				</div>
				<div class="site-animation__logo-bottom"></div>
			</div>
		</div>
	<div id="content" class="site-content">	
	