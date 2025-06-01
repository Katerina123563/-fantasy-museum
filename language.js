function langue(langueOn,langueOff){
    if (!langueOn.classList.contains('current_lang')) {
        langueOn.classList.toggle('current_lang');
        langueOff.classList.toggle('current_lang');
    }

    if(langueOn.innerHTML == 'Ελληνικά'){
        afficher(el_txt, nb_el);
        cacher(en_txt, nb_en);
        document.getElementById("sound").style.visibility="visible";
    }

    else if(langueOn.innerHTML == 'English'){
        afficher(en_txt, nb_en);
        cacher(el_txt, nb_el);
        document.getElementById("sound").style.visibility="hidden";
        document.getElementById('player').pause();
    }
}

function afficher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'block';
    }
}

function cacher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'none';
    }
}

function init(){
    langue(greek,english);
}

