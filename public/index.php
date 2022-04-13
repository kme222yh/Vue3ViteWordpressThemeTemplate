<!DOCTYPE html>
<html lang="en">
  <?php wp_head() ?>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php echo get_bloginfo( 'name' ); ?></title>
    <?= file_get_contents(__DIR__.'/index.html') ?>
  </head>
  <body>
      <div id="app"></div>
  </body>
  <?php wp_footer() ?>
</html>
