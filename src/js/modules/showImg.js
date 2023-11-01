const showImg = () => {
    const img = document.querySelector('.works'),
          imgPopup = document.createElement('div'),
          bigImg = document.createElement('img');
    
    imgPopup.classList.add('popup');
    img.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImg);

    img.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target && e.target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = e.target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
        }

        if (e.target && e.target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
        }
    })
}
export default showImg();