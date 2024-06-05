const colorBtns = document.querySelectorAll('#image-picker li');
const productImage = document.getElementById('product-image');

document.addEventListener('DOMContentLoaded', function(){
    colorBtns.forEach(btn => {
        btn.addEventListener('click', function(){
            const colorId = btn.id;
            const imagePath = `./img/iphone_${colorId}.jpg`;
            productImage.src = imagePath; 

            colorBtns.forEach(btns => btns.querySelector('.color').classList.remove('selected'));
            btn.querySelector('.color').classList.add('selected');
        });
    });
});