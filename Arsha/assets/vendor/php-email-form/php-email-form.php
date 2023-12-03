<?php

class PHP_Email_Form
{


    public function send()
    {
        $message = "New message from:\n";
        $message .= "Name: " . $this->from_name . "\n";
        $message .= "Email: " . $this->from_email . "\n";
        $message .= "Subject: " . $this->subject . "\n";
        $message .= "Message:\n" . $this->get_pretty_message() . "\n";

        $headers = 'From: ' . $this->from_name . ' <' . $this->from_email . '>' . "\r\n";
        $headers .= 'Reply-To: ' . $this->from_email . "\r\n";
        $headers .= 'X-Mailer: PHP/' . phpversion();

        if ($this->ajax) {
            $response = mail($this->to, $this->subject, $message, $headers);

            if ($response) {
                return 'OK';
            } else {
                return 'Error sending mail.';
            }
        } else {
            mail($this->to, $this->subject, $message, $headers);
        }
    }

    public function add_message($message, $label, $length = 0)
    {
        $message = wordwrap($message, 70);
        $message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

        if ($length > 0) {
            $message = substr($message, 0, $length);
        }

        $this->message .= "$label: $message\n";
    }

    private function get_pretty_message()
    {
        return $this->message;
    }
}

?>