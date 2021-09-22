let artistElements = document.getElementsByClassName('artist');
const modal        = document.getElementById('modal-art');
const art          = document.getElementById('art');

for (let i = 0; i < artistElements.length; i++) {
    artistElements[i].addEventListener('click', (event) => {
        showModal(event.currentTarget.id);
    })
}

function showModal(artist) {
    modal.classList.add('modal-show');
    modal.addEventListener('click', (event) => {
        if (event.target.id == modal.id || event.target.id == 'modal-close') {
            modal.classList.remove('modal-show');
        }
    })

    art.style.backgroundImage    = `url(img/art-${artist}.jpg)`;
    art.style.backgroundRepeat   = 'no-repeat';
    art.style.backgroundSize     = 'contain';
    art.style.backgroundPosition = 'center center';
}

document.onkeydown = function(evt) {
    if (evt.key ==  'Escape') {
        modal.classList.remove('modal-show');
    }
}