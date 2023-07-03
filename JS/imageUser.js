function uploadImage() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    var previewImage = document.getElementById('previewImage');

    if (file) {
        var reader = new FileReader();

        reader.onload = function(e) {
            var newImage = e.target.result;

            // Exibe a nova imagem na tela
            previewImage.src = newImage;

            // Aqui você pode enviar a nova imagem para o servidor e atualizar o perfil do usuário
            // com a nova imagem. O código para isso dependerá da sua arquitetura e tecnologias utilizadas.
            // Por exemplo, você pode fazer uma requisição AJAX para enviar a imagem para o servidor.

            console.log('Imagem enviada com sucesso!');
        }

        reader.readAsDataURL(file);
    }
}
