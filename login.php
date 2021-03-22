<?php
?>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/stylesheet.css">
    <title>Login</title>
</head>

<body>

    <ul class="sidenav">
        <li><a href="index.php">home</a></li>
        <li><a href="#galery">gallery</a></li>
        <li><a href="#effects">effects</a></li>
        <li style="float:right"><a href="login.php" name="login">log in<a href="register.php">register</a></a></li>
    </ul>

    <div class="content">
        <form method="post" action="registration.php">
            <div class="container">
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