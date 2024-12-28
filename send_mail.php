<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = "arkadujahnavi@gmail.com"; 
    $subject = "New Message from Contact Form";

    $headers = "From: " . $email . "\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";

    $body = "<h3>New message from $name</h3><p>$message</p>";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mail sent successfully";
    } else {
        echo "Failed to send email. Please try again.";
    }
}
?>
