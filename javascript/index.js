let artistElements = document.getElementsByClassName('artist');

for (let i = 0; i < artistElements.length; i++) {
    artistElements[i].addEventListener('click', (event) => {
        showModal(event.currentTarget.id, 'modal-art', 'art');
    })
}

function showModal(artist, modalContainerID, modalArtID) {
    const modal = document.getElementById(modalContainerID);
    const art   = document.getElementById(modalArtID);

    modal.classList.add('modal-show');
    modal.addEventListener('click', (event) => {
        if (event.target.id == modal.id || event.target.id == 'modal-close') {
            modal.classList.remove('modal-show');
        }
    })

    art.style.backgroundImage    = `url(../img/art-${artist}.jpg)`;
    art.style.backgroundRepeat   = 'no-repeat';
    art.style.backgroundSize     = 'contain';
    art.style.backgroundPosition = 'center center';
}