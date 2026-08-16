#!/usr/bin/env bash
#
# One-time setup for the enhanced-ajax-add-to-cart-wc PHPUnit suite.
#
# WHY THIS EXISTS
# -----------------------------------------------------------------------------
# The suite needs three things that are not in the repo: the WordPress test
# library, a MySQL database to run it against, and WooCommerce - because this
# plugin's AJAX handler calls straight into WC()->cart and wc_get_product(),
# so almost nothing in it can be exercised without WooCommerce loaded.
#
# This script reuses a WooCommerce that is already installed and known to
# work, rather than git-cloning woocommerce/woocommerce - that repo has been a
# monorepo (the plugin lives under plugins/woocommerce and needs a build step)
# since before this script was written, so cloning it produces a directory
# WordPress cannot activate.
#
# USAGE
#
#   bin/setup-tests.sh <db-name> <db-user> [db-pass] [db-host] [wp-version]
#
# Credentials are ARGUMENTS, never committed. There are no default credentials
# in this file on purpose.
#
# After this, `composer test` runs the suite.

set -euo pipefail

DB_NAME=${1:-}
DB_USER=${2:-}
DB_PASS=${3:-}
DB_HOST=${4:-localhost}
WP_VERSION=${5:-latest}

if [ -z "$DB_NAME" ] || [ -z "$DB_USER" ]; then
	echo "usage: $0 <db-name> <db-user> [db-pass] [db-host] [wp-version]" >&2
	echo "" >&2
	echo "  The database is DROPPED AND RECREATED. Use a dedicated test database," >&2
	echo "  never the one behind a site you care about." >&2
	exit 1
fi

WP_TESTS_DIR=${WP_TESTS_DIR-/tmp/wordpress-tests-lib}
WP_CORE_DIR=${WP_CORE_DIR-/tmp/wordpress}

# Where to find a WooCommerce to borrow. Override WC_SOURCE to point elsewhere.
WC_SOURCE=${WC_SOURCE:-$HOME/mac-sites/wp56tester/wp-content/plugins/woocommerce}

echo "==> Installing the WordPress test library (WP $WP_VERSION)"
bin/install-wp-tests.sh "$DB_NAME" "$DB_USER" "$DB_PASS" "$DB_HOST" "$WP_VERSION"

echo "==> Providing WooCommerce to the test install"
mkdir -p "$WP_CORE_DIR/wp-content/plugins"
rm -rf "$WP_CORE_DIR/wp-content/plugins/woocommerce"

if [ -d "$WC_SOURCE" ]; then
	WC_VERSION=$(grep -m1 -E "^[[:space:]]*\*?[[:space:]]*Version:" "$WC_SOURCE/woocommerce.php" | sed -E 's/.*Version:[[:space:]]*//' | tr -d '[:space:]')
	echo "    borrowing WooCommerce $WC_VERSION from $WC_SOURCE"
	# Copied rather than symlinked: WooCommerce resolves paths from its own
	# location, and a symlink makes plugin_dir_path() point back at the source
	# tree, which the test run would then write into.
	cp -R "$WC_SOURCE" "$WP_CORE_DIR/wp-content/plugins/woocommerce"
else
	# No local WooCommerce - a CI runner, for instance. Fetch the release zip
	# from wordpress.org rather than git-cloning the monorepo, because the repo
	# root has not been the installable plugin since WooCommerce moved to a
	# monorepo and would need a build step.
	# PINNED, not "latest", on purpose. downloads.wordpress.org/plugin/woocommerce.zip
	# serves whatever is current, and when this was written that was
	# 11.0.0-rc.2 - a release candidate. A test suite that silently changes its
	# WooCommerce underneath you reports failures that are not yours, which is
	# how people learn to ignore a red build.
	#
	# 10.9.4 is what the local test site and sandbox.theritesites.com run, so
	# results match the environment the plugin is actually verified against.
	# Bump this deliberately, and expect to read the failures when you do.
	WC_VERSION=${WC_VERSION:-10.9.4}
	if [ "$WC_VERSION" = "latest" ]; then
		WC_URL="https://downloads.wordpress.org/plugin/woocommerce.zip"
	else
		WC_URL="https://downloads.wordpress.org/plugin/woocommerce.${WC_VERSION}.zip"
	fi
	echo "    no WooCommerce at $WC_SOURCE - downloading $WC_URL"
	TMP_ZIP=$(mktemp -t woocommerce-XXXXXX).zip
	curl -sSL "$WC_URL" -o "$TMP_ZIP"
	unzip -q "$TMP_ZIP" -d "$WP_CORE_DIR/wp-content/plugins"
	rm -f "$TMP_ZIP"
	WC_VERSION=$(grep -m1 -E "^[[:space:]]*\*?[[:space:]]*Version:" "$WP_CORE_DIR/wp-content/plugins/woocommerce/woocommerce.php" | sed -E 's/.*Version:[[:space:]]*//' | tr -d '[:space:]')
	echo "    installed WooCommerce $WC_VERSION"
fi

echo ""
echo "Done."
echo "  WP test library : $WP_TESTS_DIR"
echo "  WP core         : $WP_CORE_DIR"
echo "  WooCommerce     : $WC_VERSION"
echo ""
echo "Run the suite with: composer test"
