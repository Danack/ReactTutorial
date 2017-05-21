<?php


function foo() {
    return "bar";
}


function displayStuff() {

    $debugString = "Welcome to PHP.";
    $debugString .= "<br/>";
    $debugString .= foo();
    $debugString .= "<br/>";
    $debugString .= \Example\Foo::test();


    $filemtime = filemtime(__DIR__ . "/../public/styles/app.css");
    $filemtime = intval($filemtime);

    $HTML = <<< HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
    <link rel="stylesheet" type="text/css" href="/styles/app.css" data-original="/styles/app.css">
</head>
<body>

$debugString

There should be a clock here:<br/>
<div id="clock"></div>
<br/>

There should be a weather forecast here:<br/>
<div id="weather_forecast"></div>

</body>

<script src="/js_dev/vendor.js"></script>
<script src="/js_dev/app.js"></script>

<script src="/js_src/live_css_update.js"></script>

</html>

HTML;


    return $HTML;
}