window.addEventListener('load', () => {
    const idImg_fuego = document.getElementById('id-img-fuego'),
        idImg_agua = document.getElementById('id-img-agua'),
        idImg_tierra = document.getElementById('id-img-tierra'),
        idImg_aire = document.getElementById('id-img-aire'),
        idFuego = document.getElementById('btn_id-fuego'),
        idAgua = document.getElementById('btn_id-agua'),
        idTierra = document.getElementById('btn_id-tierra'),
        idAire = document.getElementById('btn_id-aire');

        const refactorFuncion = (aire,tierra,agua,fuego ) => { 
            idImg_aire.style.display = aire;
            idImg_tierra.style.display = tierra;
            idImg_agua.style.display = agua;
            idImg_fuego.style.display = fuego;
        };

    idFuego.addEventListener('click', () => {refactorFuncion('none','none','none','block'); });
    idAgua.addEventListener('click',  () => {refactorFuncion('none','none','block','none'); });
    idTierra.addEventListener('click',() => {refactorFuncion('none','block','none','none'); });
    idAire.addEventListener('click',  () => { refactorFuncion('block','none','none','none');});
});

