
// HTML References

// ID_IMAGES
const idImg_fuego = document.getElementById('id-img-fuego');
const idImg_agua = document.getElementById('id-img-agua');
const idImg_tierra = document.getElementById('id-img-tierra');
const idImg_aire = document.getElementById('id-img-aire');


// ID-BTN
const idFuego = document.getElementById('btn_id-fuego');
const idAgua = document.getElementById('btn_id-agua');
const idTierra = document.getElementById('btn_id-tierra');
const idAire = document.getElementById('btn_id-aire');


idFuego.addEventListener('click', () => {
    idImg_aire.style.display = 'none';
    idImg_tierra.style.display = 'none';
    idImg_agua.style.display = 'none';

    idImg_fuego.style.display = 'block';

});

idAgua.addEventListener('click', () => {
    idImg_aire.style.display = 'none';
    idImg_tierra.style.display = 'none';
    idImg_fuego.style.display = 'none';

    idImg_agua.style.display = 'block';
});

idTierra.addEventListener('click', () => {
    idImg_aire.style.display = 'none';
    idImg_fuego.style.display = 'none';
    idImg_agua.style.display = 'none';
    
    idImg_tierra.style.display = 'block';
});

idAire.addEventListener('click', () => {
    idImg_fuego.style.display = 'none';
    idImg_tierra.style.display = 'none';
    idImg_agua.style.display = 'none';

    idImg_aire.style.display = 'block';
});


