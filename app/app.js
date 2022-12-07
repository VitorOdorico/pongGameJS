// parametros da bolina
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 15;
let raio = diametroBolinha / 2;
let reverse = -1

// velociadade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// parametros raquete
let xRaquete = 5;
let yRaquete =150;
let larguraRaquete = 10;
let comprimentoRaquete = 90;

// cria a tela
function setup() {
  createCanvas(600, 400);
}

// objetos no game
function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostrarRaquete(); 
  movimentaRaquete();
  verificaColisaoRaquete();
}
// funções
function mostraBolinha(){
  circle(xBolinha, yBolinha, diametroBolinha);
}
function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
function verificaColisaoBorda(){
  if(xBolinha + raio > width || xBolinha - raio < 0){
     velocidadeXBolinha *= -1; 
   }
      // eixo y
   if(yBolinha + raio > height || yBolinha - raio < 0){
     velocidadeYBolinha *= -1; 
   }
}
function mostrarRaquete(){
    rect(xRaquete, yRaquete, larguraRaquete, comprimentoRaquete);

}


function  movimentaRaquete(){
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}
function   verificaColisaoRaquete(){
  if(xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + comprimentoRaquete && yBolinha + raio < yRaquete){
    velocidadeXBolinha *= -1;
  }
}

