<?php
$nomeRecebido = '';
if (isset($_GET['nome'])) {
    $nomeRecebido = htmlspecialchars(urldecode($_GET['nome']));
}
?>


<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>
    <script src="validacao.js"></script>
    <link rel="stylesheet" href="/agradecimento/css/styles-agradecimento.css">

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-54L6GKW4');</script>
    <!-- End Google Tag Manager -->

   
    <title>Formulário de Contato</title>
</head>
<body>
    <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-54L6GKW4"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <header>
        <div class="logo">
            <img src="assets/dec-logo.png">
        </div>
    </header>
    
    <div class="container">
    <h1>Seu Formulário de contato foi enviado, <?php echo $nomeRecebido; ?>!</h1>

        </div>
        </div>
    </div>

    <footer>
        <div class="black-footer">
            Exemplo de texto de rodapé
            <br><br><br><br>
            Template criado para teste
        </div>
    </footer>
</body>



</html>