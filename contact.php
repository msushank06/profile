<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars($_POST['name']);
    $email   = htmlspecialchars($_POST['email']);
    $phone   = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    $to      = "mahato.sushank06@gmail.com"; // your email
    $subject = "New Contact from Portfolio";
    $body    = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "✅ Message sent successfully!";
    } else {
        echo "❌ Failed to send message. Please try again.";
    }
} else {
    // If someone opens contact.php directly, show a contact form
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Contact Form</title>
    </head>
    <body>
        <h2>Contact Me</h2>
        <form action="contact.php" method="POST">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" required><br><br>

            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" required><br><br>

            <label for="phone">Phone:</label><br>
            <input type="text" id="phone" name="phone"><br><br>

            <label for="message">Message:</label><br>
            <textarea id="message" name="message" required></textarea><br><br>

            <input type="submit" value="Send">
        </form>
    </body>
    </html>
    <?php
}
?>
