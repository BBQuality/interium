const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {})

})

router.get('/main', function (req, res) {
  res.render('main', {
    layout: 'index',
    titles: {
      header: 'Institute "Intermarium"',
      main: 'Welcome',
      public: 'Публікація',
      news: 'Новини',
      media: 'Медіа',
      contact: 'Контакти',
      item: 'Заголовок ...',
      image: 'https://picsum.photos/100/100',
    },
    image: 'https://picsum.photos/400/200',
    menu: [
      {
        item: 'Про нас',
      },
      {
        item: 'Аналітика',
      },
      {
        item: 'Команда',
      },
      {
        item: 'Статті',
      },
      {
        item: 'Події',
      },
      {
        item: 'Медіа',
      },
      {
        item: 'Контакти',
      }
    ],
    descriptions: {
      about: {
        title: 'Institute "Intermarium"',
        image: 'https://picsum.photos/300/130',
        primary: `Це – проєкт громадянської та політичної просвіти, започаткований Лабораторією законодавчих ініціатив та Радою Європи у 2005 році 
        як демократичний здобуток Помаранчевої революції та з нагоди 10-ї річниці вступу України до Ради Європи.`,
        secondary: `Школа має на меті навчання й об’єднання лідерів з різних середовищ зі спільним прагненням розвивати сильну державу Україна.`,
      },
      publ: {
        title: `Витік документів Пентагону: які секрети про війну в Україні більше не секрети`,
        image: 'https://picsum.photos/400/200',
        preview: `Мережею "гуляють" знімки секретних документів Пентагону й НАТО, серед яких чимало стосуються України. 
        Хтось вже поспішив назвати ці дані фейком, а хтось - проривом російської розвідки. УНІАН розбирався, що це насправді та які наслідки може мати такий витік.`,
        full: `Експерт з питань інформаційних воєн та конкурентної розвідки Дмитро Золотухін звертає увагу, 
        що злиті документи не стосуються виключно ситуації в Україні й справляють враження "солянки" з документів, підготовлених різними органами.
        Ялі переконаний, що одне з головних завдань у війні – обдурити супротивника: здатись слабше, ніж ти є насправді, коли ти реально сильний. 
        І навпаки, переконати ворога в тому, що ти сильний, коли насправді слабкий.`,
      },
      news: {
        image: 'https://picsum.photos/400/200',
        text: `Співробітники СБУ знайшли іграшкового Вадима Новинського під час обшуків у компаніях, 
      пов'язаних з проросійським політиком, повідомляє Ліга.нет з посиланням на співрозмовника у правоохоронних органах. 
      Також під час обшуків знайшли велику кількість релігійної літератури, зокрема томи "Історії Російської церкви" російського митрополита Макарія (Булгакова). 
      У деяких книгах містяться нападки як на Православну церкву України, так і на Українську греко-католицьку церкву.`,
      },
    },
  })
})

module.exports = router
