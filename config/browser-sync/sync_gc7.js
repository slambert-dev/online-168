  //<![CDATA[
document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.27.10'><\/script>".replace(
  "HOST", location.hostname));
//]]>

// In project folder:
// browser-sync start --proxy "localhost/feature_contact-form" --files "css/*.css, *.html, *.php"

// In the index.php:
// <script id="__bs_script__" src='../aGC7/js/sync_gc7.js'></script>
// 2do GULP
