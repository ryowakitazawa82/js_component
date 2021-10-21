'use strict';

{
    const open = document.getElementById('open');
    const overlay = document.querySelector('.overlay');
    const close = document.getElementById('close');

    open.addEventListener('click',() => {
        overlay.classList.add('show');
        // オーバーレイを表示させる
        open.classList.add('hide');
        // ハンバーガーメニューを非表示にする
    });

    close.addEventListener('click',() => {
        overlay.classList.remove('show');
        // オーバーレイを非表示にさせる
        open.classList.remove('hide');
        // ばつ印を非表示に
    });
}
