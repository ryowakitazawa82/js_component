'use strict';

{
    const dts = document.querySelectorAll('dt');

    dts.forEach(dt => {
        dt.addEventListener('click', () => {
            dt.parentNode.classList.toggle('appear');

            dts.forEach(el => {
                if(dt !== el){
                    el.parentNode.classList.remove('appear');
                    // 今クリックされているdtと、今調べているelが異なっていたら、その要素の親要素からappearクラスを外す。
                }
            });
        });
    });
}


// 同時に複数のアコーディオンを開くことができる版
// {
//     const dts = document.querySelectorAll('dt');

//     dts.forEach(dt => {
//         dt.addEventListener('click', () => {
//             dt.parentNode.classList.toggle('appear');
//         });
//     });
// }

