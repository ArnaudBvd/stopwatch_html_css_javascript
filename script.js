// Les variables dont on a besoin
let sp, btn_start, btn_stop, t, mseconde, seconde, minute, hour

// Fonction pour initialiser les variables quand la page se charge
window.onload = function () {
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
    t;
    mseconde = 0, seconde = 0, minute = 0, hour = 0;
};

// Mise en place du compteur
function update_chrono() {
    mseconde += 1;
    if (mseconde == 10) {
        mseconde = 1;
        seconde += 1;
    }
    if (seconde == 60) {
        seconde = 0;
        minute += 1;
    }
    if (minute == 60) {
        minute = 0;
        hour += 1;
    }

    // Insertion des valeurs dans les span
    sp[0].innerHTML = hour + "h";
    sp[1].innerHTML = minute + "min";
    sp[2].innerHTML = seconde + "s";
    sp[3].innerHTML = mseconde + "ms";
};

// Mise en place de la fonction du bouton Start
function start() {
    // éxécute la fonction "update_chrono" toute les 100 ms
    t = setInterval(update_chrono, 100);
    btn_start.disabled = true;
};

// Mise en place de la fonction du bouton Stop
function stop() {
    clearInterval(t); // suppression de l'intervalle "t" créé précédement
    btn_start.disabled = false;
};

// Mise en place de la fonction du bouton Reset
function reset() {
    clearInterval(t);
    btn_start.disabled = false;
    mseconde = 0, seconde = 0, minute = 0, hour = 0;
    // Insertion de ces nouvelles valeurs dans les spans
    sp[0].innerHTML = hour + "h";
    sp[1].innerHTML = minute + "min";
    sp[2].innerHTML = seconde + "s";
    sp[3].innerHTML = mseconde + "ms";
};
