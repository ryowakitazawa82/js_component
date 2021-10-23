'use strict';

 {
     const next = document.getElementById('next');
     const prev = document.getElementById('prev');
     const ul = document.querySelector('ul');
     const slides = ul.children;
     const dots = [];
     let currentIndex = 0;
    //  計算のために、一旦全てのスライドを取得
    // currentIndexをまずは初期化

    function updateButtons() {
        prev.classList.remove('hidden');
        next.classList.remove('hidden');

        if (currentIndex === 0) {
            prev.classList.add('hidden');
        }
        if (currentIndex === slides.length - 1) {
            next.classList.add('hidden');
        }
    }
    function moveSlides() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
    }
    // 重複している処理を関数でまとめる

    function setupDots() {
        for(let i = 0; i < slides.length; i++){
            const button = document.createElement('button');
            button.addEventListener('click',() => {
                currentIndex = i;
                updateDots();
                updateButtons();
                moveSlides();
            });
            dots.push(button);
            document.querySelector('nav').appendChild(button);
        }

        dots[0].classList.add('current');
    }

    function updateDots() {
        dots.forEach(dot => {
            dot.classList.remove('current')
         });
         dots[currentIndex].classList.add('current');
    }

    updateButtons();
    // 最初に currentIndex が 0 の時に prev を消しておきたいため、ページを読み込んだ直後に実行。
    setupDots();

     next.addEventListener('click',() => {
        currentIndex++;
        updateButtons();
        updateDots();
        // const slideWidth = slides[0].getBoundingClientRect().width;
        // ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
        moveSlides();
        });
        //  スライド1枚分の幅を計算するために、まずはslideWidthで定数を宣言。
        //  スライドの幅はすべて同じなため、最初のスライド（slides[0])を取得。
        //  getBoundingClientRect()というメソッドを使い、この要素に関する情報を取得。
        //  その上で、widthプロパティを使えばok。
        //  そして、テンプレートリテラルで値を埋め込む。
        // slideWidthを使うが、マイナス方向に移動させたいのでマイナスをかける。（単位をつけるのも忘れずに）
        // 初期化したcurrentIndexがクリックするたびに1増やせば、クリックするたびにb,cと移動する。


        prev.addEventListener('click',() => {
            currentIndex--;
            updateButtons();
            updateDots();
            //  const slideWidth = slides[0].getBoundingClientRect().width;
            //  ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
            moveSlides();

            window.addEventListener('resize', () => {
                moveSlides();
            });
            // ウィンドウの大きさを変えてしまうと画像が中途半端な位置にきてしまう。
            // そこでwindowに対してイベントリスナーを追加。
            // スライドの幅を再計算して移動すればいいため、 moveSlidesを実行すれば良い。
     });
 }
