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

    $HTML = <<< HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Hello World</title>

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
</html>

HTML;


    return $HTML;
}