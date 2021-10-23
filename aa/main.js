'use strict';

// モーダル

// {
//     const open = document.getElementById('open');
//     const close = document.getElementById('close');
//     const modal = document.getElementById('modal');
//     const mask = document.getElementById('mask');

//     open.addEventListener('click' ,() => {
//         modal.classList.remove('hidden');
//         mask.classList.remove('hidden');
//     });


//     close.addEventListener('click' ,() => {
//         modal.classList.add('hidden');
//         mask.classList.add('hidden');
//     });

//     mask.addEventListener('click' ,() => {
//         // modal.classList.add('hidden');
//         // mask.classList.add('hidden');
//         close.click();
//     });
// }



// タブメニュー

// {
//     const menuItems = document.querySelectorAll('.menu li a');
//     const contents = document.querySelectorAll('.content');

//     menuItems.forEach(clickedItem => {
//         clickedItem.addEventListener('click' , e => {
//             e.preventDefault();

//             menuItems.forEach(item => {
//                 item.classList.remove('active');
//             });
//             clickedItem.classList.add('active');

//             contents.forEach(content => {
//                 content.classList.remove('active');
//             });
//             document.getElementById(clickedItem.dataset.id).classList.add('active');
//         });
//     });
// }



// ハンバーガーメニュー

// {
//     const open = document.getElementById('open');
//     const overlay = document.querySelector('.overlay');
//     const close = document.getElementById('close');

//     open.addEventListener('click',() => {
//         overlay.classList.add('show');
//         // オーバーレイを表示させる
//         open.classList.add('hide');
//         // ハンバーガーメニューを非表示にする
//     });

//     close.addEventListener('click',() => {
//         overlay.classList.remove('show');
//         // オーバーレイを非表示にさせる
//         open.classList.remove('hide');
//         // ばつ印を非表示に
//     });
// }



// アコーディオンメニュー

// {
//     const dts = document.querySelectorAll('dt');

//     dts.forEach(dt => {
//         dt.addEventListener('click', () => {
//             dt.parentNode.classList.toggle('appear');

//             dts.forEach(el => {
//                 if(dt !== el){
//                     el.parentNode.classList.remove('appear');
//                     // 今クリックされているdtと、今調べているelが異なっていたら、その要素の親要素からappearクラスを外す。
//                 }
//             });
//         });
//     });
// }
