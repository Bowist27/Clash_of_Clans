const barbaro = {nivel: 1, vida: 20, ataque: 12};
const arquera = {nivel: 1, vida: 14, ataque: 8};

const boton_levelear_barbaro = document.getElementById("boton_levelear_barbaro");

const subir_barbaro = () => {
    barbaro.nivel++;
    barbaro.vida += 4;
    barbaro.ataque += 2;
}

boton_levelear_barbaro.onclick = () => {
    subir_barbaro();
    const span_nivel = document.getElementById("nivel_barbaro");
    span_nivel.innerHTML = barbaro.nivel;
    const span_ataque = document.getElementById("ataque_barbaro");
    span_ataque.innerHTML = barbaro.ataque;
    const span_vida = document.getElementById("vida_barbaro");
    span_vida.innerHTML = barbaro.vida;
}

const boton_atacar_arquera = document.getElementById("boton_atacar_arquera");

boton_atacar_arquera.onclick = () => {
    arquera.vida -= barbaro.ataque;
    
    if (arquera.vida <= 0) {
        const imagen_arquera = document.getElementById("imagen_arquera");
        imagen_arquera.src = "https://pbs.twimg.com/media/FGqnaSAWYAM-P__.jpg"
    }

    const span_vida = document.getElementById("vida_arquera");
    span_vida.innerHTML = arquera.vida;
}