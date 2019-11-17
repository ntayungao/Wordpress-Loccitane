<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'loveloccitane' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'h,iPp,x}w[7B1q<~MX|7RE<S64fI[j;:b*n?8UJ/u;a+j{E#Xn|09BOfkdo?ufoo' );
define( 'SECURE_AUTH_KEY',  't[JVjlk@$cdHwXidD_l};~Y`EIg8xDP%-AN%QzwA!Ev&*@3[nL!C[S;qDr2=qv e' );
define( 'LOGGED_IN_KEY',    '3[N^eR)0lPyj,B<Rhgb8@n}5Z0gN(g;i4@U!D}Is9.4XLJg6!>S;`]k2erKdo;T5' );
define( 'NONCE_KEY',        'cIp()RS1g>b3pjQlYXIC}XXP,PB6S:Ly1HB!T+#r`F;@z+{%y&lMN~o6gVF($_#p' );
define( 'AUTH_SALT',        'IVNSm!QjIYeSGM7fc}Bv E,Uw<xq}6)4Nz^=$fgi{C06Zq_EP_DqL-`e_V@>#*qe' );
define( 'SECURE_AUTH_SALT', 'DN]i~v1/yb=yCGG>xV7]3Iqz=ceE0ID~6ei3WL+qY<n:s9rL;PJQV-FqaNq*?mTI' );
define( 'LOGGED_IN_SALT',   '(MlDPLx(>l8q^]]Y&lu(:Zk-7MrDI3g-A!LlOy*`P/pi~<v[(OG5G>cXuG^9VVd3' );
define( 'NONCE_SALT',       '69-Y}{C#s!K{AVr^?(H0))GwR|U9l6}^)GWNTnFy?vZ<.&IYg#=*8<*&W8_BytH<' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
