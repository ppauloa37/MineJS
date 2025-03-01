// Definir o código do seu sketch do Processing
var sketchProc = function(processing) {

    // Definir o tamanho da tela do Processing
    processing.setup = function() {
        processing.size(400, 400); // Tamanho do canvas
        processing.background(200); // Cor de fundo
    };

    // Desenhar no canvas
    processing.draw = function() {
        processing.fill(255, 0, 0); // Cor do quadrado (vermelho)
        processing.rect(150, 150, 100, 100); // Desenha um quadrado
    };
};

// Inicializar o ProcessingJS no canvas
var canvas = document.getElementById("processing-canvas");
var processingInstance = new Processing(canvas, sketchProc);
