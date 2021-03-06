<?php
/**
 * void functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package void
 */

if ( ! function_exists( 'void_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function void_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on void, use a find and replace
		 * to change 'void' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'void', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'void' ),
			'footer-menu' => esc_html__( 'Footer', 'void' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'void_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'void_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function void_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'void_content_width', 640 );
}
add_action( 'after_setup_theme', 'void_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function void_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'void' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'void' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'void_widgets_init' );

function get_the_news() {
	$args = array(
		'post_type'=> 'articles',
    'order'    => 'ASC'
    );              

$the_query = new WP_Query( $args );
if ($the_query->have_posts() ) {
	while ( $the_query->have_posts() ) {
		$the_query->the_post();
		// $the_query2->post_thumbnail(); 
	}

}
// $final_query =    
	
return $the_query;

}
/**
 * Enqueue scripts and styles.
 */
function void_scripts() {
	wp_enqueue_style( 'google-fonts', 'https://fonts.googleapis.com/css?family=Montserrat:400,700|Raleway:400,700,900&display=swap' );

	wp_deregister_script( 'jquery' );
	wp_enqueue_script( 'jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js', NULL, '3.4.1', true);
	wp_enqueue_script( 'slick', get_theme_file_uri('/assets/slick/slick.min.js'), array('jquery'), '1.0', true );
	wp_enqueue_script( 'gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js', array('jquery'), '2.1.3', true);
	wp_enqueue_script( 'index', get_theme_file_uri('/assets/js/main.js'), array('jquery', 'gsap','slick'), '1.0', true );
	wp_enqueue_script( 'press', get_theme_file_uri('/assets/js/pressScript.js'), array('jquery', 'index'), '1.0', true );

	wp_localize_script( 'index', 'projectData', array(
		'root_url' => get_site_url(),
		'post_ID' => get_the_ID(),
		'nonce' => wp_create_nonce('wp_rest'),
		'all_posts' => get_posts(),
		'all_news' => get_the_news()
));
wp_enqueue_style( 'void-style', get_stylesheet_uri() );
wp_enqueue_style( 'slick-style', get_theme_file_uri('/assets/slick/slick.css') );
wp_enqueue_style( 'slick-theme-style', get_theme_file_uri('/assets/slick/slick-theme.css') );


}
add_action( 'wp_enqueue_scripts', 'void_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}


/**
 * Add CPT Projects
 */
function add_cpt_projects() {

	$labels = array(
    'name'               => 'Projects',
    'singular_name'      => 'Project',
    'menu_name'          => 'Projects',
    'name_admin_bar'     => 'Project',
    'add_new'            => 'Add New',
    'add_new_item'       => 'Add New Project',
    'new_item'           => 'New Project',
    'edit_item'          => 'Edit Project',
    'view_item'          => 'View Project',
    'all_items'          => 'All Projects',
    'search_items'       => 'Search Projects',
    'parent_item_colon'  => 'Parent Projects:',
    'not_found'          => 'No Projects found.',
    'not_found_in_trash' => 'No Projects found in Trash.',
  );

	$args = array(
    'labels'             => $labels,
    'public'             => true,
		'show_in_rest'			 => true,
    'capability_type'    => 'post',
    'has_archive'        => true,
		// 'hierarchical'       => false,
		'rewrite' => array(
			"with_front" => true
		),
		'cptp_permalink_structure' => '%post_id%',
    'menu_icon'          => 'dashicons-palmtree',
    'taxonomies'         => array( 'category', 'post_tag' )
	);
  register_post_type( 'projects', $args );

}
add_action('init', 'add_cpt_projects');


/**
 * Add CPT News
 */
function add_cpt_articles() {

	$labels = array(
    'name'               => 'Articles',
    'singular_name'      => 'Article',
    'menu_name'          => 'Articles',
    'name_admin_bar'     => 'New',
    'add_new'            => 'Add New',
    'add_new_item'       => 'Add New Article',
    'new_item'           => 'New Article',
    'edit_item'          => 'Edit Article',
    'view_item'          => 'View Article',
    'all_items'          => 'All Articles',
    'search_items'       => 'Search Articles',
    'parent_item_colon'  => 'Parent Articles:',
    'not_found'          => 'No Articles found.',
    'not_found_in_trash' => 'No Articles found in Trash.',
	);
	
	$args = array(
    'labels'             => $labels,
    'public'             => true,
		'show_in_rest'			 => true,
    'capability_type'    => 'post',
		'has_archive'        => true,
		'supports' => array( 'title', 'editor', 'thumbnail' ),

		// 'hierarchical'       => false,
		'rewrite' => array(
			"with_front" => true
		),
		'cptp_permalink_structure' => '%post_id%',
    'menu_icon'          => 'dashicons-welcome-write-blog',
    'taxonomies'         => array( 'category', 'post_tag' )
	);
  register_post_type( 'Articles', $args );

}
add_action('init', 'add_cpt_articles');


function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

// Enable the option show in rest
add_filter( 'acf/rest_api/field_settings/show_in_rest', '__return_true' );

// Enable the option edit in rest
add_filter( 'acf/rest_api/field_settings/edit_in_rest', '__return_true' );