<!DOCTYPE html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <link rel="stylesheet" href="css/normalize.min.css">
        <link rel="stylesheet" href="css/main.css">

        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    </head>
    <body class="home">
        <section class="container">

            <?php

                $foo = 1+1;

                echo '<h2>Hello '.$foo.' World!</h2>';

            ?>

            <h1>My Facebookster</h1>

            <p><a href="post.html">Add a post</a></p>
            
        </section><!-- // .container -->

        <section id="feed" class="container clearfix">
            
        </section>



        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.1.min.js"><\/script>')</script>

        <script src="js/main.js"></script>
    </body>
</html>
