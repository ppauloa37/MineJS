var sketchProc = function(processing) {

    processing.setup = function() {
        processing.size(600, 600, processing.P3D);
        processing.perspective(PI / 3, processing.width / processing.height, 0.1, 100);
        processing.camera(0, -200, 300, 0, 0, 0, 0, 1, 0);
    };

    processing.draw = function() {
        processing.background(200);

        // Rotação da cena para efeito visual
        processing.rotateX(processing.frameCount * 0.01);
        processing.rotateY(processing.frameCount * 0.01);

        // Desenho de múltiplos blocos 3D
        for (var i = -2; i < 3; i++) {
            for (var j = -2; j < 3; j++) {
                processing.pushMatrix();
                processing.translate(i * 120, j * 120, 0); // Colocar blocos em diferentes posições
                processing.fill(139, 69, 19); // Cor de "terra"
                processing.box(100); // Desenhar cubo
                processing.popMatrix();
            }
        }
    };
};

var canvas = document.getElementById("processing-canvas");
var processingInstance = new Processing(canvas, sketchProc);

