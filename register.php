<?php
?>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/stylesheet.css">
    <title>Register</title>
</head>

<body>

    <div id="navbar">
        <div id="navbar-left">
            <a href="index.php">home</a>
            <a href="gallery.php">gallery</a>
            <a href="#effects">effects</a>
        </div>
        <div id="navbar-right">
            <a href="login.php">log in<a href="register.php" class="active">register</a></a>
        </div>
    </div>

    <div class="content">
        <form method="post" action="registration.php">
            <div class="container-register">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>

                <label for="username"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" id="username" required>

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required>

                <label for="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" id="password" required>

                <label for="password-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="password-repeat" id="password-repeat"
                    required>
                <hr>
                <!---<p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>--->

                <button type="submit" class="registerbtn" name="register">Register</button>
            </div>

            <div class="container signin">
                <p>Already have an account? <a href="#">Sign in</a>.</p>
            </div>
        </form>

    </div>

</body>

</html>