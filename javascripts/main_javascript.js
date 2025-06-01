document.addEventListener('DOMContentLoaded', function() {
    // ヘッダーのスクロール時の挙動
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // トップへ戻るボタン
    const toTopButton = document.getElementById('to-top-button');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            toTopButton.classList.add('show');
        } else {
            toTopButton.classList.remove('show');
        }
    });

    toTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});