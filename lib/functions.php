<?php


function foo() {
    return "bar";
}


function displayStuff() {

    $HTML = <<< HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
    <link rel="stylesheet" type="text/css" href="/styles/app.css" data-original="/styles/app.css">
    <link rel="stylesheet" type="text/css" href="/styles/fonts.css" data-original="/styles/app.css">
</head>
<body>


There should be a clock here:<br/>
<div id="clock"></div>
<br/>

There should be a weather forecast here:<br/>
<div id="weather_forecast"></div>

</body>

<script src="/js/vendor.js"></script>
<script src="/js/app.js"></script>

<script src="/js_src/live_css_update.js"></script>

</html>

HTML;


    return $HTML;
}