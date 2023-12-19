// burger menu for screen 380px
const hamburger = document.querySelector('.hamburger');
if (hamburger) {
    const navigation = document.querySelector('.header_navigation');
    const header = document.querySelector('.header');

    const lineHiddenOne = document.querySelector ('.line_hidden_one');
    const lineHiddenTwo = document.querySelector ('.line_hidden_two');
    const lineUp = document.querySelector ('.line_up');
    const lineDown = document.querySelector ('.line_down');

    hamburger.addEventListener("click", function (e) {
        navigation.classList.toggle('_active');
        header.classList.toggle('_active');
        lineHiddenOne.classList.toggle ('_active');
        lineHiddenTwo.classList.toggle ('_active');
        lineUp.classList.toggle ('_active');
        lineDown.classList.toggle ('_active');
        
        const linkWelcom = document.querySelector('.link_welcom');
        const linkAbout = document.querySelector('.link_about');
        const linkService = document.querySelector('.link_service');
        const linkPrices = document.querySelector('.link_prices');
        const linkContacts = document.querySelector('.link_contacts');

        linkWelcom.addEventListener("click", function () {
            navigation.classList.remove('_active');
            header.classList.remove('_active');
            lineHiddenOne.classList.remove('_active');
            lineHiddenTwo.classList.remove('_active');
            lineUp.classList.remove('_active');
            lineDown.classList.remove('_active');
        });
        linkAbout.addEventListener("click", function () {
            navigation.classList.remove('_active');
            header.classList.remove('_active');
            lineHiddenOne.classList.remove('_active');
            lineHiddenTwo.classList.remove('_active');
            lineUp.classList.remove('_active');
            lineDown.classList.remove('_active');
        });
        linkService.addEventListener("click", function () {
            navigation.classList.remove('_active');
            header.classList.remove('_active');
            lineHiddenOne.classList.remove('_active');
            lineHiddenTwo.classList.remove('_active');
            lineUp.classList.remove('_active');
            lineDown.classList.remove('_active');
        });
        linkPrices.addEventListener("click", function () {
            navigation.classList.remove('_active');
            header.classList.remove('_active');
            lineHiddenOne.classList.remove('_active');
            lineHiddenTwo.classList.remove('_active');
            lineUp.classList.remove('_active');
            lineDown.classList.remove('_active');
        });
        linkContacts.addEventListener("click", function () {
            navigation.classList.remove('_active');
            header.classList.remove('_active');
            lineHiddenOne.classList.remove('_active');
            lineHiddenTwo.classList.remove('_active');
            lineUp.classList.remove('_active');
            lineDown.classList.remove('_active');
        });
    })
};




//handler for section services (blur)

 window.onload = function () {
    addTagsClickHandler();
 }

   const addTagsClickHandler = () => {
      document.querySelector('.buttons__service').addEventListener('click', (e) => {
           if (e.target.classList.contains('button_service')) {
               let clickedTag = e.target;
               selectClickTag(clickedTag);
              filterStrategyTag(clickedTag);
           }
       })
   }

   const selectClickTag = (clickedTag) => {
       clickedTag.classList.toggle('button_service_clicked');
   }

 const filterStrategyTag = (selectedTag) => {
     let items = document.querySelectorAll('.wrapper__items .layout__item');
     items.forEach(item => {
         item.classList.add('layout-3-colums_blur');
         item.querySelectorAll('.wrapper__items .layout__item .layout_h5').forEach(itemH => {
             if (itemH.innerText.split(' ')[0] === selectedTag.textContent || `${itemH.innerText.split(' ')[0]}s` === selectedTag.textContent) {
                item.classList.toggle('layout-3-colums_blur_no')
            } else {item.classList.add('layout-3-colums_blur')}
        })
     })
 }


//accordion in section PRICES


const prisesUl = document.querySelector('.prices_ul');
//determine tag point (for closed tags)
const tagBasics = document.querySelector('.tag_point_basics');
const tagStandart = document.querySelector('.tag_point_standard');
const tagProCare = document.querySelector('.tag_point_pro-care');
//determine tag point (for opened tags)
const tagBasicsOpened = document.querySelector('.wrapper__tag_opened_basics');
const tagStandartOpened = document.querySelector('.wrapper__tag_opened_standart');
const tagProCareOpened = document.querySelector('.wrapper__tag_opened_pro-care');
////determine tag li (for closed tags)
const tagLiBasics = document.querySelector('.tag_basics');
const tagLiStandart = document.querySelector('.tag_standart');
const tagLiProCare = document.querySelector('.tag_pro-care');

//implement for Basics
//'click' for point in tag Basics closed
tagBasics.addEventListener('click', function (e) {
    tagBasicsOpened.classList.toggle('wrapper__tag_opened_closed');
    tagLiBasics.classList.add('tag_li_close');
    //closing others tags
    tagStandartOpened.classList.remove('wrapper__tag_opened_closed');
    tagLiStandart.classList.remove('tag_li_close');
    tagProCareOpened.classList.remove('wrapper__tag_opened_closed');
    tagLiProCare.classList.remove('tag_li_close');
    //'click' for point in tag Basics opened
    let tagPointBasics = document.querySelector('.tag_point_basics_opened');
    tagPointBasics.addEventListener('click', function () {
        tagBasicsOpened.classList.remove('wrapper__tag_opened_closed');
        tagLiBasics.classList.remove('tag_li_close');
    })
});

//implement for Standart
//'click' for point in tag Standart closed
tagStandart.addEventListener('click', function () {
    tagStandartOpened.classList.toggle('wrapper__tag_opened_closed');
    tagLiStandart.classList.add('tag_li_close');
    //closing others tags
    tagBasicsOpened.classList.remove('wrapper__tag_opened_closed');
    tagLiBasics.classList.remove('tag_li_close');
    tagProCareOpened.classList.remove('wrapper__tag_opened_closed');
    tagLiProCare.classList.remove('tag_li_close');
    //'click' for point in tag Standart opened
    let tagPointStandart = document.querySelector('.tag_point_standart_opened');
    tagPointStandart.addEventListener('click', function () {
        tagStandartOpened.classList.remove('wrapper__tag_opened_closed');
        tagLiStandart.classList.remove('tag_li_close');
    })
})

//implement for Pro Care
//'click' for point in tag Pro Care closed
tagProCare.addEventListener('click', function () {
    tagProCareOpened.classList.toggle('wrapper__tag_opened_closed');
    tagLiProCare.classList.add('tag_li_close');
    //closing others tags
    tagBasicsOpened.classList.remove('wrapper__tag_opened_closed');
    tagLiBasics.classList.remove('tag_li_close');
    tagStandartOpened.classList.remove('wrapper__tag_opened_closed');
    tagLiStandart.classList.remove('tag_li_close');
    //'click' for point in tag Pro Care opened
    let tagPointProCare = document.querySelector('.tag_point_pro-care_opened');
    tagPointProCare.addEventListener('click', function () {
        tagProCareOpened.classList.remove('wrapper__tag_opened_closed');
        tagLiProCare.classList.remove('tag_li_close');
    })
})


//implement SELECT for section CONTACTS

let contactCityPoint = document.querySelector('.circle');
let contactSelectionUl = document.querySelector('.contact__selection_cities');
let contactCityColor = document.querySelector('.contact__city');


contactCityPoint.addEventListener('click', function () {
    contactSelectionUl.classList.toggle('contact__selection_ul_open');
    contactCityColor.classList.add('contact__city_change_color');

    let selectCanandaigua = document.querySelector('.selection_li_canandaigua');
    let selectNewJork = document.querySelector('.selection_li_new-jork');
    let selectYonkers = document.querySelector('.selection_li_yonkers');
    let selectSherrill = document.querySelector('.selection_li_sherrill');

    let openCanandaigua = document.querySelector('.contact__selection_canandaigua');
    let openNewJork = document.querySelector('.contact__selection_new-jork');
    let openYonkers = document.querySelector('.contact__selection_yonkers');
    let openSherrill = document.querySelector('.contact__selection_sherrill');

    let paragrapInTag = document.querySelector('.contact_city');

    selectCanandaigua.addEventListener ('click', function () {
        paragrapInTag.textContent = 'Canandaigua, NY';
        openCanandaigua.classList.add ('contact__selection_canandaigua_open');
        contactSelectionUl.classList.remove('contact__selection_ul_open');
        contactCityColor.classList.add('contact__city_change_color');
        contactCityPoint.addEventListener('click', function () {
            openCanandaigua.classList.remove ('contact__selection_canandaigua_open');
            paragrapInTag.textContent = 'City';
            contactCityColor.classList.remove('contact__city_change_color');
        })
    })

    selectNewJork.addEventListener ('click', function () {
        paragrapInTag.textContent = 'New York City';
        openNewJork.classList.add ('contact__selection_new-jork_open');
        contactSelectionUl.classList.remove('contact__selection_ul_open');
        contactCityColor.classList.add('contact__city_change_color');
        contactCityPoint.addEventListener('click', function () {
            openNewJork.classList.remove ('contact__selection_new-jork_open');
            paragrapInTag.textContent = 'City';
            contactCityColor.classList.remove('contact__city_change_color');
        })
    })

    selectYonkers.addEventListener ('click', function () {
        paragrapInTag.textContent = 'Yonkers, NY';        
        openYonkers.classList.add ('contact__selection_yonkers_open');
        contactSelectionUl.classList.remove('contact__selection_ul_open');
        contactCityColor.classList.add('contact__city_change_color');
        contactCityPoint.addEventListener('click', function () {
            openYonkers.classList.remove ('contact__selection_yonkers_open');
            paragrapInTag.textContent = 'City';
            contactCityColor.classList.remove('contact__city_change_color');
        })
    })

    selectSherrill.addEventListener ('click', function () {
        paragrapInTag.textContent = 'Sherrill, NY';  
        openSherrill.classList.add ('contact__selection_sherrill_open');
        contactSelectionUl.classList.remove('contact__selection_ul_open');
        contactCityColor.classList.add('contact__city_change_color');
        contactCityPoint.addEventListener('click', function () {
            openSherrill.classList.remove ('contact__selection_sherrill_open');
            paragrapInTag.textContent = 'City';
            contactCityColor.classList.remove('contact__city_change_color');
        })
    })
})


{/* <input type="button" id="button" value="Кнопка">
<script>
  button.onclick = function() {
    alert('Клик!');
  };
</script> */}