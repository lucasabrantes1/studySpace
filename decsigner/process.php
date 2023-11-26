<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $endereco = $_POST['endereco'];
    $complemento = $_POST['complemento'];
    $cep = $_POST['cep'];
    $cnpj = isset($_POST['cnpj']) ? $_POST['cnpj'] : '';
    $cpf = $_POST['cpf'];
    $data_nascimento = $_POST['data_nascimento'];

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = getenv('SMTP_SERVER');
        $mail->Port = getenv('SMTP_PORT');
        $mail->SMTPSecure = getenv('SMTP_SECURE');
        $mail->SMTPAuth = getenv('SMTP_AUTH') === 'true' ? true : false;      
        $mail->Username = getenv('SMTP_USERNAME');
        $mail->Password = getenv('SMTP_PASSWORD');
        

        $mail->setFrom('noreplay@areadeteste2.com.br', 'Nome da Agência');
        $mail->addAddress($email, 'Nome do Destinatário');
        $mail->CharSet = 'UTF-8';

        $mail->isHTML(true);
        $mail->Encoding = 'base64';

        $mail->Subject = 'Formulário de Contato';

        $mail->Body = "Nome: $nome<br>
        Email: $email<br>
        Telefone: $telefone<br>
        Endereço: $endereco<br>
        Complemento: $complemento<br>
        CEP: $cep<br>";

        if (!empty($cnpj)) {
            $cnpjFormatado = preg_replace('/[^0-9]/', '', $cnpj);
            $cnpjFormatado = substr($cnpjFormatado, 0, 2) . '.' . substr($cnpjFormatado, 2, 3) . '.' . substr($cnpjFormatado, 5, 3) . '/' . substr($cnpjFormatado, 8, 4) . '-' . substr($cnpjFormatado, 12, 2);
            $mail->Body .= "CNPJ: " . htmlspecialchars($cnpjFormatado) . "<br>";
        }

        $cpfFormatado = !empty($cpf) ? preg_replace('/[^0-9]/', '', $cpf) : '';
        $cpfFormatado = $cpfFormatado ? substr($cpfFormatado, 0, 3) . '.' . substr($cpfFormatado, 3, 3) . '.' . substr($cpfFormatado, 6, 3) . '-' . substr($cpfFormatado, 9, 2) : '';
        if (!empty($cpfFormatado)) {
            $mail->Body .= "CPF: " . htmlspecialchars($cpfFormatado) . "<br>";
        }

        $mail->Body .= "Data de Nascimento: $data_nascimento";

        $mail->send();

        $nomeUrl = urlencode($nome);
        header('Location: agradecimento.php?nome=' . $nomeUrl);
        exit();


    } catch (Exception $e) {
        echo 'Erro ao enviar o email: ' . $mail->ErrorInfo;
    }
}
?>
