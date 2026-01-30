const transdutor = document.getElementById("transdutor");
const gravida = document.getElementById("gravida");
const ultrassom = document.querySelector(".ultrassom");
const som = document.getElementById("somUltrassom");

let arrastando = false;
let somAtivo = false;

// 🎧 Desbloquear o áudio no primeiro clique da página
document.body.addEventListener("click", () => {
    som.play().then(() => {
        som.pause();
        som.currentTime = 0;
        console.log("Som desbloqueado com sucesso!");
    }).catch((err) => {
        console.warn("O som será desbloqueado após interação:", err);
    });
}, { once: true });

// 🖱️ Iniciar arraste
transdutor.addEventListener("mousedown", () => {
    arrastando = true;
    transdutor.style.cursor = "grabbing";
});

// 🖱️ Parar arraste
document.addEventListener("mouseup", () => {
    arrastando = false;
    transdutor.style.cursor = "grab";
});

// 🧭 Detectar movimento e colisão
document.addEventListener("mousemove", (e) => {
    if (arrastando) {
        const tela = document.querySelector(".tela");
        const telaRect = tela.getBoundingClientRect();
        const x = e.clientX - telaRect.left - transdutor.offsetWidth / 2;
        const y = e.clientY - telaRect.top - transdutor.offsetHeight / 2;
        transdutor.style.left = `${x}px`;
        transdutor.style.top = `${y}px`;
    }

    const gravidaRect = gravida.getBoundingClientRect();
    const transdutorRect = transdutor.getBoundingClientRect();

    const colide =
        transdutorRect.right > gravidaRect.left &&
        transdutorRect.left < gravidaRect.right &&
        transdutorRect.bottom > gravidaRect.top &&
        transdutorRect.top < gravidaRect.bottom;

    // 🔊 Se encostar, ativa imagem e som
    if (colide && !somAtivo) {
        ultrassom.style.opacity = "1";
        som.currentTime = 0;
        som.play().catch((err) => console.log("Erro ao reproduzir som:", err));
        somAtivo = true;
    }

    // 🔇 Se sair, pausa e reseta o som
    if (!colide && somAtivo) {
        ultrassom.style.opacity = "0";
        som.pause();
        som.currentTime = 0;
        somAtivo = false;
    }
});
