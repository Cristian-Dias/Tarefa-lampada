let body = document.querySelector("body");
let button = document.createElement("button")
let img = document.createElement("img");
let interruptor = document.createElement("img");
img.setAttribute("src", "imagens/apagada.png");
interruptor.setAttribute("src", "imagens/desligado.png");
body.setAttribute("class", "preto");
button.setAttribute("class", "preto");
button.append(interruptor);
body.append(button);
body.append(img);
button.onclick = function(){
    if(img.getAttribute("src") == "imagens/apagada.png"){
        img.setAttribute("src", "imagens/acesa.png");
        interruptor.setAttribute("src", "imagens/ligado.png");
        body.setAttribute("class", "branco");
        button.setAttribute("class", "branco");
    }else{
        img.setAttribute("src", "imagens/apagada.png");
        interruptor.setAttribute("src", "imagens/desligado.png");
        body.setAttribute("class", "preto");
        button.setAttribute("class", "preto");
    }
}