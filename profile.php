<?php

session_start();

include_once("config.php");

echo "Welcome " . $_SESSION['username'];

echo "<br></br><a href='logout.php'> Logout </a>";
echo "<a href='update.php'> Update </a>";

?>