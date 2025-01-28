window.addEventListener('resize',handleImageChange);
window.addEventListener('DOMContentLoaded',handleImageChange);

function handleImageChange(){
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    const screenWidth = window.innerWidth;

    if(screenWidth < 1200){
        image1.classList.remove('active');
        image2.classList.add('active');
    }else{
        image1.classList.add('active');
        image2.classList.remove('active');
    }
}