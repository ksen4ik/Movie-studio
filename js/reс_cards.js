import image1 from '../images/m3gan.jpg'
import image2 from '../images/captain-marvel.jpg'
import image3 from '../images/interstellar.png'
import image4 from '../images/midnight_sun.png'
import image5 from '../images/svati_7.png'
import image6 from '../images/chernobil_1.jpg'
import image7 from '../images/svati_6.jpg'

const rec_cards = [
    {
        id: 1,
        title: "М3ГАН",
        image: image1,
        year: "2022",
        genre: "Фантастика, ужасы",
    },
    {
        id: 2,
        title: "Капитан Марвел",
        image: image2,
        year: "2019",
        genre: "Фантастика, боевик, приключения",
    },
    {
        id: 3,
        title: "Интерстеллар",
        image: image3,
        year: "2014",
        genre: "Фантастика, драма, приключения",
    },
    {
        id: 4,
        title: "Полночное солнце",
        image: image4,
        year: "2018",
        genre: "Драма, мелодрама",
    },
    {
        id: 5,
        title: "Сваты-7",
        image: image5,
        year: "2021",
        genre: "Комедия",
    },
    {
        id: 6,
        title: "Чернобыль: Зона отчуждения, 1 сезон",
        image: image6,
        year: "2014",
        genre: "Триллер, фантастика",
    },
    {
        id: 7,
        title: "Сваты-6",
        image: image7,
        year: "2013",
        genre: "Комедия",
    },
]

let cardItem = '';

let recCards = document.getElementById('recCards')
rec_cards.forEach ((item) => {
    cardItem +=
    `
    <div>
        <p>${item.image}</p>
        <p>${item.title}</p>
        <p>${item.year}</p>
        <p>${item.genre}</p>
    </div>
    `
})
out.insertAdjacentHTML('afterbegin', cardItem);