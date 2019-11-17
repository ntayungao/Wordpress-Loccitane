<?php
/**
 * loveloccitane functions and definitions
 */

add_action('wp_enqueue_scripts', 'enqueue_theme_scripts');
function enqueue_theme_scripts()
{
    wp_enqueue_script('microsite_jquery_js', get_theme_file_uri('assets/js/jquery-1.8.3.min.js'),  false, true);

    wp_enqueue_style('microsite_index_css', get_theme_file_uri('assets/css/index.css'));
    wp_enqueue_style('microsite_index_css', get_theme_file_uri('assets/css/phone-index.css'));
    wp_enqueue_style('microsite_site_global_css', get_theme_file_uri('assets/css/site-global.css'));

    wp_enqueue_script('microsite_whatinput_js', get_theme_file_uri('assets/js/whatinput.js'),  false, true);
    wp_enqueue_script('microsite_webpro_js', get_theme_file_uri('assets/js/webpro.js'),  false, true);
    wp_enqueue_script('microsite_require_js', get_theme_file_uri('assets/js/require.js'),  false, true);
    wp_enqueue_script('microsite_museutils_js', get_theme_file_uri('assets/js/museutils.js'),  false, true);
    wp_enqueue_script('microsite_museconfig_js', get_theme_file_uri('assets/js/museconfig.js'),  false, true);
    wp_enqueue_script('microsite_jquerywatch_js', get_theme_file_uri('assets/js/jquery.watch.js'),  false, true);
    wp_enqueue_script('microsite_jqueryscrolleffects_js', get_theme_file_uri('assets/js/jquery.scrolleffects.js'),  false, true);
    wp_enqueue_script('microsite_jquerybgsize_js', get_theme_file_uri('assets/js/jquery.musepolyfill.bgsize.js'),  false, true);
    //wp_enqueue_script('microsite_redirect_js', get_theme_file_uri('assets/js/redirect.js'),  false, true);
    wp_enqueue_script('microsite_missingfile_js', get_theme_file_uri('assets/js/missingfile.js'),  false, true);

}