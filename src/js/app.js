window.addEventListener('load', function () {
    document.addEventListener('click', function (e) {
        let tgtelem = e.target;
        let arr = { block: "start", inline: "nearest", behavior: "smooth" };
        if (tgtelem.classList.contains('_scroll-btn')) {
            document.querySelector('.popup').classList.add('_open');
            document.querySelector('.wrapper').classList.add('_noscroll');
        }

        if (tgtelem.classList.contains('scroll-to-contacts')) {
            prevDef(e);
            document.querySelector('.contacts').scrollIntoView(arr);
        }
        if (tgtelem.classList.contains('scroll-to-cars')) {
            prevDef(e);
            document.querySelector('.cars').scrollIntoView(arr);
        }
        if (tgtelem.classList.contains('scroll-to-steps')) {
            prevDef(e);
            document.querySelector('.steps').scrollIntoView(arr);
        }
        function prevDef(e) {
            e.preventDefault();
        }
        if (tgtelem.classList.contains('popup__close')) {
            tgtelem.closest('.popup').classList.remove('_open');
            document.querySelector('.wrapper').classList.remove('_noscroll');
        }

    });
})
if (document.querySelector('.popup')) {
    let popup = document.querySelector('.popup');
    popup.addEventListener('click', function (e) {
        if (!e.target.closest('.popup__content')) {
            popup.classList.remove('_open');
            document.querySelector('.wrapper').classList.remove('_noscroll');
            console.log(e.target);
        }
    });
}


if (document.querySelector('.form-name')) {
    let names = document.querySelectorAll('.form-name');
    for (let i = 0; i < names.length; i++) {
        names[i].addEventListener('input', function () {
            if (this.value.match(/[^a-zа-я\s]/gi)) {
                this.value = this.value.replace(/[^a-zа-я\s]/gi, '');
            }

        })
    }
}

if (document.querySelector('.contacts__form-phone')) {
    $(".contacts__form-phone").mask("+7(999)999-99-99");
}

if (document.querySelector('.popup__form-phone')) {
    $(".popup__form-phone").mask("+7(999)999-99-99");
}