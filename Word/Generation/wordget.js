var sketchProc = function(processing) {
    const largura = 10;
    const altura = 10;
    const tamanhoBloco = 40;
    let mundo = [];

    processing.setup = function() {
        processing.size(largura * tamanhoBloco, altura * tamanhoBloco);
        // Preencher o mundo com blocos de "terra"
        for (let y = 0; y < altura; y++) {
            mundo[y] = [];
            for (let x = 0; x < largura; x++) {
                mundo[y][x] = 'terra';
            }
        }
    };

    processing.draw = function() {
        for (let y = 0; y < mundo.length; y++) {
            for (let x = 0; x < mundo[y].length; x++) {
                if (mundo[y][x] === 'terra') {
                    processing.fill(139, 69, 19); // Cor da terra
                }
                processing.rect(x * tamanhoBloco, y * tamanhoBloco, tamanhoBloco, tamanhoBloco);
            }
        }
    };
};

var canvas = document.getElementById("processing-canvas");
var processingInstance = new Processing(canvas, sketchProc);

