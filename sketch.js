var canva;
var jogador;
var grupoCaixa;


function preload(){
    



}
function setup() {
    canva = createCanvas(700, 300);
    
    jogador = createSprite(50,50,50,50);
    edges = createEdgeSprites();
    plataforma1 = createSprite(50,75,100,25)
    GCaixa = createGroup();
    GPlataforma = createGroup();
    GEspinho = createGroup();
	

	

}
    function draw(){
    background("green");
    jogador.collide(edges);
    jogador.collide(plataforma1);
    jogador.collide(GCaixa);
    



    if(keyDown(RIGHT_ARROW)){
       jogador.x = jogador.x+5;
       jogador.y = jogador.y+2;
       GCaixa.setVelocityXEach(-5);
       GPlataforma.setVelocityXEach(-5);
       GEspinho.setVelocityXEach(-5);
    }
    if(keyDown(DOWN_ARROW)){
        jogador.y = jogador.y+2;
        GCaixa.setVelocityXEach(-5);
        GPlataforma.setVelocityXEach(-5);
        GEspinho.setVelocityXEach(-5);
    }
    if(keyDown(LEFT_ARROW)){
       jogador.x = jogador.x-5;
       jogador.y = jogador.y+2;
       GCaixa.setVelocityXEach(0);
       GPlataforma.setVelocityXEach(0);
       GEspinho.setVelocityXEach(0);
    }
    if(GCaixa.isTouching(jogador)){
         pular();

    }
    jogador.velocityY = jogador.velocityY+0.5;
    gerarCaixas();
    drawSprites();
}
    function gerarCaixas(){
        if (frameCount % 30 === 0){
            var caixa = createSprite(700,300,50,50);
            GCaixa.add(caixa);
            caixa.y = Math.round(random(250,150));
            caixa.velocityX = -5;
        }
    } 
    function gerarPlataforma(){
        if(frameCount % 30 === 0){
            var plataforma = createSprite(700,300,50,50);
            GPlataforma.add(plataforma);
            plataforma.y = Math.round(random(250,150));
            plataforma.veloctyX = -5;
            var espinho = createSprite(700,300,25,25);
            GEspinho.add(espinho);
            espinho.y = plataforma.y+50;
            espinho.x = plataforma.x;
        }
      }
    function pular(){
        if(keyDown("space")){
            jogador.velocityY = jogador.velocityY-5;
        }
        
    
    
    }
    
    
    