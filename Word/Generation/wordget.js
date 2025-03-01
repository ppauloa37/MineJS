var sketchProc = function(processing) {

    processing.setup = function() {
        // Definir o tamanho da tela
        processing.size(400, 400, processing.P3D);
        
        // Definir a perspectiva da câmera
        processing.perspective(PI / 3, processing.width / processing.height, 0.1, 100);
        
        // Configurar a posição da câmera
        processing.camera(0, -200, 200, 0, 0, 0, 0, 1, 0);
    };

    processing.draw = function() {
        processing.background(200);
        
        // Rotacionar a cena para dar um efeito visual
        processing.rotateX(processing.frameCount * 0.01);
        processing.rotateY(processing.frameCount * 0.01);
        
        // Desenhar um cubo 3D
        processing.fill(139, 69, 19); // Cor do cubo (terra)
        processing.box(100); // Tamanho do cubo
    };
};

var canvas = document.getElementById("processing-canvas");
var processingInstance = new Processing(canvas, sketchProc);
