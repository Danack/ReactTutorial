<?php


$filemtime = filemtime(__DIR__ . "/../public/styles/app.css");
$filemtime = intval($filemtime);

echo $filemtime;