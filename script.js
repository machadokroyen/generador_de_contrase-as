document.addEventListener("DOMContentLoaded", () => {

    let caracteres = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "e", "s", "t", "u", "v", "w", "x", "y", "z",
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        ".", ",", "!", "#", "$", "%", "&", "/", "(", ")", "=", "+", "\\-", "\\*"];

    let m = document.getElementById("m");
    let M = document.getElementById("M");
    let N = document.getElementById("N");
    let S = document.getElementById("S");
    let generar = document.getElementById("generar");
    let mostrarPassword = document.getElementById("mostrarPassword");
    let largoCon = document.getElementById("largoCon");


    function password(largo) {
        let caracParaContra = []
        if (m.checked) {
            for (i = 0; i < 27; i++) {
                caracParaContra.push(caracteres[i])
            }
        }
        if (M.checked) {
            for (i = 27; i < 54; i++) {
                caracParaContra.push(caracteres[i])
            }
        }
        if (N.checked) {
            for (i = 54; i < 64; i++) {
                caracParaContra.push(caracteres[i])
            }
        }
        if (S.checked) {
            for (i = 64; i < 78; i++) {
                caracParaContra.push(caracteres[i])
            }
        }

        let pass = [];

        for (let i = 0; i < largo; i++) {
            let caracter = Math.floor(Math.random() * (caracParaContra.length - 0) + 0);
            pass += caracParaContra[caracter];
        }

        // comprueba si la contraseña generada cumple todos los requisitos seleccionados
        
        if ((N.checked && !/\d/.test(pass)) || // verifica si se pidio que la contraseña tenga número y si no tiene
            (M.checked && !/[A-Z]/.test(pass)) || // idem para mayúsculas
            (m.checked && !/[a-z]/.test(pass)) || // idem para minúsculas
            (S.checked && !/[.,!#$%&/()=+\-*]/.test(pass)) // idem para simbolos
            ){ // en casa que la contraseña le falte algo de lo que se pidio
            
                console.log("La contraseña no cumple con los requisitos. Se generara otra...");
            password(largo); // comienza de nuevo la función para crear contraseña
            
        } else {
            mostrarPassword.innerHTML = `${pass}`;
        }
    }

    generar.addEventListener("click", () => {
        password(largoCon.value)
    })
})