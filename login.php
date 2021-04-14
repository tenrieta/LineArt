<?php
?>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/stylesheet.css">
    <title>Login</title>
</head>

<body>

    <div id="navbar">
        <div id="navbar-left">
            <a href="index.php">home</a>
            <a href="gallery.php">gallery</a>
            <a href="#effects">effects</a>
        </div>
        <div id="navbar-right">
            <a href="login.php" class="active">log in<a href="register.php">register</a></a>
        </div>
    </div>

    <div class="content">
        <form method="post" action="registration.php">
            <div class="container-register">
                <h1>Login</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>

                <label for="username"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" id="username" required>

                <label for="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" id="password" required>

                <hr>

                <button type="submit" class="loginbtn" name="login">Login</button>
            </div>
        </form>
    </div>

</body>

</html>