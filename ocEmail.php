<?php 


// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function

require 'PHPMailerAutoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

//Variable Declarations
$senderNTTotal = $_POST["senderNTTotal"];
$senderTotal = $_POST["senderTotal"];
$senderName = $_POST["senderName"];
$senderEmail = $_POST["senderEmail"];
$senderPhone = $_POST["senderPhone"];
$senderOrder = $_POST["senderOrder"];

    //Server settings
    $mail->SMTPDebug = 4;           
    $mail->isSMTP();                                      // Set mailer to use SMTP                             // Send using SMTP
    $mail->Host       = 'email@example.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'email@example.com';                     // SMTP username
    $mail->Password   = '*****';                               // SMTP password
    $mail->SMTPSecure = 'tls';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('email@example.com', 'Restaurant');
    $mail->addAddress("$senderEmail", "$senderName");     // Add a recipient // Name is optional
    $mail->addAddress('email@example.com', 'Order Recipient');     // Add a recipient // Name is optional
    $mail->addReplyTo('email@example.com', 'Information');


    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = "Order Confirmation For  $senderName @ $senderPhone";
    $mail->Body = " <h1 align='center' style='color='red''>THIS IS NOT A RECEIPT</h1>
    <br><br>
    <h2>Order Confirmation for $senderName</h2>
    <br><h3> $senderEmail <br> $senderPhone </h3>
    <br>
    <br>
    <h2><strong>↓   Below are the items in the following order  ↓</strong></h2>
    <br><br><br>        <h3>$senderOrder</h3> <br><br>
    <p>Total before tax: $senderNTTotal</p><hr>
    <p style='color:'white'; background-color:'green''>
    Total: $senderTotal
    </p>";

    
    
    $mail->AltBody = "
    THIS IS NOT A RECEIPT
    Order Confirmation for $senderName 
    

    $senderEmail  $senderPhone 

    ↓   Below are the items in the following order  ↓
    
    $senderOrder
    
    Total before tax: $senderNTTotal
    Total: $senderTotal";

    if(!$mail->send()) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}

?>
