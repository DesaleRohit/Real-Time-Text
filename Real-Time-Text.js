function showText() {
    const contain = document.querySelector('.js-input');
    const show = contain.value;
    console.log(show);
    document.querySelector('.js-result').innerHTML = show;
}