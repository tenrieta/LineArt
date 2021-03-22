<?php

session_start();

include_once("config.php");

if(isset($_POST['register']))
{
    $con = Config::connect();
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $password_repeat = $_POST['password-repeat'];
    $type = "2";
    if(SaveRegistrationData($con, $username, $email, $password, $password_repeat, $type))
    {
        $_SESSION['username'] = $username;
        header("Location: profile.php");
    }
    else
    {
        echo "Registration data failed to be saved.";
        //header("Location: register.php");
    }
}

if(isset($_POST['login']))
{
    $con = Config::connect();
    $username = $_POST['username'];
    $password = $_POST['password'];
  
    if(CheckIfUserExist($con, $username, $password))
    {
        $_SESSION['username'] = $username;
        header("Location: profile.php");
    }
    else
    {
        echo "The username and the password are incorrect.";
    }
}

function CheckIfUserExist($con, $username, $password)
{
    
    $stmt = $con->prepare("
        SELECT * FROM users WHERE username=:username");

    $hashed_password = $_POST['password'];
    $stmt->bindParam(":username", $username);
    //$stmt->bindParam(":password", $password);

    $stmt->execute();

    echo $stmt->rowCount();

    if($stmt->rowCount() == 1)
    {
        echo "YEAH ";
        return true;
    }
    else
    {
        return false;
    }
}

/*Add check for exiting username*/
function SaveRegistrationData($con, $username, $email, $password, $password_repeat, $type)
{
    try
    {
        $hashed_password = password_hash($_POST['password'], PASSWORD_DEFAULT);
        $hashed_password_repeat = password_hash($_POST['password-repeat'], PASSWORD_DEFAULT);

        $sql = $con->prepare("
        SELECT * FROM users WHERE username=:username");
        $sql->bindParam(":username", $username);
        $sql->execute();
        
        if($sql->rowCount() >= 1)
        {
            echo "Username: '" . $username . "' already exist. ";
            return false;
        }

        $stmt = $con->prepare("    
            INSERT INTO users (username, email, password, password_repeat, type)
            VALUES(:username, :email, :password, :password_repeat, :type)
        ");

        $stmt->bindParam(":username", $username);
        $stmt->bindParam(":email", $email);
        $stmt->bindParam(":password", $hashed_password);
        $stmt->bindParam(":password_repeat", $hashed_password_repeat);
        $stmt->bindParam(":type", $type);

        $query = $stmt->execute();

        if ($query == true) 
        {
            $verifyUser = VerifyUser($username, $password);
            if ($verifyUser == true) {
                //echo 'valid Username and  Password';
            } else {
                echo 'Invalid Username and password';
            }
        }

    }
    catch(PDOException $e)
    {
        echo $e->getMessage();
    }
    return true;
}

/*TO BE CHECKED*/
function VerifyUser($username, $password)
{
    $sql = "select username, password from users where username = :userName";
    try {
        $con = Config::connect();
        $stmt = $con->prepare($sql);
        $stmt->bindParam(":userName", $username);
        $execute = $stmt->execute();
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
    if ($execute == true) {
        /*
         * if the query executes and returs the user saved user details lets now compare
         * the password from the db and the password that the user has entered
         */

        $array = $stmt->fetch(PDO::FETCH_ASSOC);
        $hashedPassword = $array['password'];
        if (password_verify($password, $hashedPassword)) {
            //echo 'Password is valid!';
            return true;
        } else {
            echo 'Invalid password.';
            return false;
        }
    }
}

?>