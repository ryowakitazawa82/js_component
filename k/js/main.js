'use strict';

 {
     const next = document.getElementById('next');
     const ul = document.querySelector('ul');
     const slides = ul.children;
     let currentIndex = 0;
    //  計算のために、一旦全てのスライドを取得
    // currentIndexをまずは初期化

     next.addEventListener('click',() => {
        currentIndex++;
         const slideWidth = slides[0].getBoundingClientRect().width;
         ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;

        //  スライド1枚分の幅を計算するために、まずはslideWidthで定数を宣言。
        //  スライドの幅はすべて同じなため、最初のスライド（slides[0])を取得。
        //  getBoundingClientRect()というメソッドを使い、この要素に関する情報を取得。
        //  その上で、widthプロパティを使えばok。
        //  そして、テンプレートリテラルで値を埋め込む。
        // slideWidthを使うが、マイナス方向に移動させたいのでマイナスをかける。（単位をつけるのも忘れずに）
        // 初期化したcurrentIndexがクリックするたびに1増やせば、クリックするたびにb,cと移動する。

     });
 }
