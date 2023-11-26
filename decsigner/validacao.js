$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');
    $('#data_nascimento').mask('00/00/0000');
    $('#cpf').mask('000.000.000-00');
    $('#cnpj').mask('00.000.000/0000-00');


    $('form').on('submit', function(e){
        e.preventDefault();

        var isValid = true;
        $('input').each(function() {
            if ($(this).prop('required') && $(this).val() == '') {
                alert('Por favor, preencha o campo: ' + $(this).attr('name'));
                isValid = false;
                return false;
            }
        });

        if ($('#telefone').val().length != 15) {
            alert('Por favor, preencha o campo Telefone corretamente.');
            isValid = false;
        }

        if ($('#cep').val().length != 9) {
            alert('Por favor, preencha o campo CEP corretamente.');
            isValid = false;
        }

        if ($('#cpf').val().length > 0 && $('#cpf').val().length != 14) {
            alert('Por favor, preencha o campo CPF corretamente.');
            isValid = false;
        }

        if ($('#cnpj').val().length > 0 && $('#cnpj').val().length != 18) {
            alert('Por favor, preencha o campo CNPJ corretamente.');
            isValid = false;
        }
        if ($('#data_nascimento').val().length > 0 && $('#data_nascimento').val().length != 10) {
            alert('Por favor, preencha o campo Data de Nascimento corretamente.');
            isValid = false;
        }
        var email = $('#email').val();
        var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, preencha o campo E-mail corretamente.');
            isValid = false;
        }

        if (isValid) {
            this.submit();
        }
    });

    $('#cpf').on('input', function() {
        if ($(this).val() != '') {
            $('#cnpj').prop('disabled', true);
        } else {
            $('#cnpj').prop('disabled', false);
        }
    });

    $('#cnpj').on('input', function() {
        if ($(this).val() != '') {
            $('#cpf').prop('disabled', true);
        } else {
            $('#cpf').prop('disabled', false);
        }
    });
});
