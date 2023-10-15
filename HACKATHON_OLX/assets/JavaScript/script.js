let reconhecimentoRealizado = false;

// Captura um quadro da câmera e exibe na tela
function capturarQuadro() {
    if (!reconhecimentoRealizado) {
        context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
        // Aqui você pode processar o quadro capturado para o reconhecimento facial
    }
}

const intervalId = setInterval(capturarQuadro, 1000); // Captura um quadro a cada segundo

// Exibir a mensagem após 15 segundos
setTimeout(() => {
    reconhecimentoRealizado = true;
    clearInterval(intervalId);  // Para a captura de quadros
    videoStream.getTracks().forEach(track => track.stop());  // Para a câmera
    alert('Reconhecimento realizado com sucesso!!!');
}, 15000);
