<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package void
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">
		<div class="footer">
			<div class="footer__logo">
				<img src="<?php echo get_template_directory_uri(); ?>/assets/img/logo-white.svg">
			</div>
			<div class="footer__wrapper">
				<div class="footer__navigation"> 
					<?php
						wp_nav_menu( array(
						'theme_location' => 'footer-menu',
						'menu_id'        => 'footer-menu',
						'menu_class'		 => 'footer__menu'
					) );
					?>
				</div>
				<div class="footer__contact">
					<p>Contact </p>
					<div class="footer__cont-info">
						<a href="mailto:filip@voidpictures.com">filip@voidpictures.com</a>
						<a href="tell:+381 00 00 000">+381 00 00 000</a>
					</div>
				</div>
				<div class="footer__socials">
					<a href="https://www.facebook.com/">
						<img src="<?php  echo get_template_directory_uri() ?>/assets/img/facebook-icon.svg">
						<p>@VoidPicturesProduction</p>
					</a>
					<a href="https://www.instagram.com/">
						<img src="<?php echo get_template_directory_uri() ?>/assets/img/instagram-icon.svg">
						<p>@void.pictures</p>
					</a>
				</div>

			</div>
			<div class="footer__bottom-footer">
			© Void Pictures, 2019
		</div>
		</div>
		
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
