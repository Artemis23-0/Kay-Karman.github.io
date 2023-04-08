<?php
// Retrieve form data
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$organization = $_POST['organization'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Construct email message
$to = 'youremail@example.com';
$subject = 'New form submission';
$message = "First name: $first_name\n"
         . "Last name: $last_name\n"
         . "Organization: $organization\n"
         . "Email: $email\n"
         . "Phone: $phone\n"
         . "Message: $message\n";
$headers = 'From: ' . $email . "\r\n" .
           'Reply-To: ' . $email . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

// Send email
mail($to, $subject, $message, $headers);

exit;
?>
