const PRICES = {
  350: 350,
  450: 450,
  690: 690,
  750: 750,
}

export const restorans = [
  {
    name: 'Забыли сахар One Trinity Place',
    img: 'https://optim.tildacdn.com/tild6161-3037-4631-a666-623563353766/-/resize/360x240/-/format/webp/BEL_0783_4_5_6_7_8_9.jpg',
    menu: [
      {
        name: 'Веган раф “Лаванда-кокос”',
        price: 340
      },
      {
        name: 'Омлет с креветками и соусом биск',
        price: 750,
      },
      {
        name: 'Творожная запеканка со сгущенкой и сметаной',
        price: 450,
      },
      {
        name: 'Рисовая каша с персиками и хурмой на растительном кокосовом напитке',
        price: 450,
      },
      {
        name: 'Пряная шарлотка с конфитюром из мандаринов',
        price: 450,
      },
      {
        name: 'Tête de Cheval Brut 125мл',
        price: 490,
      },
    ]
  },
  {
    name: 'Небо и вино',
    img: 'https://static.tildacdn.com/tild3137-3562-4537-b466-376431363136/IMG_6488.JPG',
    menu: [
      {
        name: 'Банановый Айс Капучино',
        price: 450,
      },
      {
        name: 'Омлет с мясом краба,креветками и моцареллой с луковой эспумой и лимонным кимчи',
        price: 750,
      },
      {
        name: 'Нежные сырники с карамельно-ромовым соусом и свежими сезонными фруктами',
        price: 450,
      },
      {
        name: 'Гранола с запеченной айвой йогуртом, голубикой и ромовой карамелью',
        price: 450,
      },
      {
        name: 'Трайфл с гранатовым кремом,грейпфрутом, шоколадным бисквитом и соусом манго',
        price: 450,
      },
      {
        name: 'Tête de Cheval Blanc de Blancs 125 мл',
        price: 450,
      },
    ]
  },
  {
    name: 'СОН',
    img: 'https://optim.tildacdn.com/tild6464-6431-4562-a634-663466643062/-/resize/360x240/-/format/webp/IMG_3679.JPG',
    menu: [
      {
        name: 'Каша из полбы, сморчки, яйцо пашот',
        price: 450,
      },
      {
        name: 'Сырники ”Вкус Детства” из топлёного творога с вишнёвым кули',
        price: 450,
      },
      {
        name: 'Скрэмбл с беконом в кленовом сиропе и страчателлой',
        price: 450,
      },
      {
        name: 'Кокосовый капучино',
        price: 350,
      },
      {
        name: 'Брауни',
        price: 450,
      },
      {
        name: 'Tête de Cheval Blanc de Blancs 125',
        price: 570,
      },
    ]
  },
  {
    name: 'Ферма Бенуа',
    img: 'https://optim.tildacdn.com/tild3730-3133-4336-a636-303364383037/-/resize/360x240/-/format/webp/IMG_4425_1.jpg',
    menu: [
      {
        name: 'Бананово-карамельный раф',
        price: 350,
      },
      {
        name: 'Хэшбраун с лососем горячего копчения и яйцом пашот и игристое Tête de Cheval Blanc de Blancs',
        price: 750,
      },
      {
        name: 'Вареники “Вкус детства” со сливочно-лимонным кремом и домашним черничным вареньем',
        price: 450,
      },
      {
        name: 'Овсяные панкейки с печеным яблоком с корицей и сметаной',
        price: 450,
      },
      {
        name: 'Ватрушка с творогом и брусничным джемом и чай',
        price: 450,
      },
    ]
  },
  {
    name: 'AIKI terrasa',
    img: 'https://optim.tildacdn.com/tild3565-6630-4732-b865-616262663534/-/resize/360x240/-/format/webp/IMG_6263.jpg',
    menu: [
      {
        name: 'Ванильное какао',
        price: 350,
      },
      {
        name: 'Хэшбраун с лососем слабой соли и яйцом пашот и Tête de Cheval Blanc de Blancs',
        price: 750,
      },
      {
        name: 'Творожная запеканка с тыквой и апельсином+ чай/кофе',
        price: 450,
      },
      {
        name: 'Овсяная каша с пряным яблоком и фундуком + чай или американо/эспрессо',
        price: 450,
      },
      {
        name: 'Шоколадный кекс с начинкой из мягкого бельгийского шоколада и взбитыми сливками + чай или американо/эспрессо',
        price: 450,
      },
    ]
  },
  {
    name: 'Atlas Vin Bistro',
    img: 'https://optim.tildacdn.com/tild6533-3934-4861-a466-383238633536/-/resize/360x240/-/format/webp/IMG_6162.JPG',
    menu: [
      {
        name: 'Кокосовый латте',
        price: 350,
      },
      {
        name: 'Драник из цукини с тунцом и яйцом пашот с сырным соусом',
        price: 750,
      },
      {
        name: 'Сливочный птитим с грушей и горгонзолой',
        price: 450,
      },
      {
        name: 'Творог с йогуртом, домашним вареньем и вафельный крошкой',
        price: 450,
      },
      {
        name: 'Панкейки c соусом три молока',
        price: 450,
      },
      {
        name: 'Tête de Cheval Blanc de Blancs 125 мл',
        price: 550,
      },
    ]
  },
  {
    name: 'BANDEATOS',
    img: 'https://optim.tildacdn.com/tild6331-3066-4134-b565-656631643232/-/resize/360x240/-/format/webp/IMG_8193.JPG',
    menu: [
      {
        name: 'Овсяная каша с малиной, голубикой и лепестками миндаля',
        price: 450,
      },
      {
        name: 'Омлет с лососем, салатными листьями и соусом цезарь',
        price: 450,
      },
      {
        name: 'Драник с яйцом пашот, кремом из свра и лососем',
        price: 450,
      },
      {
        name: 'Сырники «вкус детства» со взбитыми сливками и ягодами',
        price: 450,
      },
    ]
  },
  {
    name: 'Cafe Claret',
    img: 'https://optim.tildacdn.com/tild6430-3434-4537-a466-656239333635/-/resize/360x240/-/format/webp/White_hall_Cafe_Clar.png',
    menu: [
      {
        name: 'Томаты с вяленой уткой, соусом из печеных перцев и взбитым творогом',
        price: 750,
      },
      {
        name: 'Кукурузная каша с тартаром из тунца и кремом из тархуна',
        price: 750,
      },
      {
        name: 'Испанский омлет с соусом ромеско, шефром и пармой',
        price: 750,
      },
      {
        name: 'Пирог с кумкватом',
        price: 750,
      },
    ]
  },
  {
    name: 'Cafe Flor',
    img: 'https://optim.tildacdn.com/tild3865-6161-4865-b036-373431666461/-/resize/360x240/-/format/webp/IMG_6287.JPG',
    menu: [
      {
        name: 'Глазунья с мортаделлой и зеленым горошком',
        price: 450,
      },
      {
        name: 'Французский омлет с белыми грибами',
        price: 450,
      },
      {
        name: 'Рисовый пудинг с корицей',
        price: 450,
      },
      {
        name: 'Гренка из бриоши с карамельным бананом и мороженым',
        price: 450,
      },
      {
        name: 'Латте миндаль',
        price: 350,
      },
      {
        name: 'Флэт уайт миндаль',
        price: 350,
      },
    ]
  },
  {
    name: 'Charlie',
    img: 'https://optim.tildacdn.com/tild3465-3533-4537-b439-363832343635/-/resize/360x240/-/format/webp/photo.jpeg',
    menu: [
      {
        name: 'Латте “Ванильный пломбир” с соленой карамелью и печеньем',
        price: 350,
      },
      {
        name: 'Паштет из печени трески с яйцом пятиминутка',
        price: 750,
      },
      {
        name: 'Круассан с ростбифом и томленой клубникой',
        price: 750,
      },
      {
        name: 'Пирог из говяжьей печени с печеным чесноком, копченым соусом и яйцом пашот',
        price: 750,
      },
      {
        name: 'Творог “Вкус детства” с фруктами',
        price: 450,
      },
    ]
  },
  {
    name: 'COFFEE 22',
    img: 'https://optim.tildacdn.com/tild3465-3032-4331-a437-323861333830/-/resize/360x240/-/format/webp/IMG_6173.JPG',
    menu: [
      {
        name: 'Халвичный латте-кокос',
        price: 350,
      },
      {
        name: 'Ванильный какао',
        price: 350,
      },
      {
        name: 'Тартин со скремблом и красной икрой',
        price: 750,
      },
      {
        name: 'Французский тост с окороком и сыром',
        price: 450,
      },
      {
        name: 'Рисовая каша со страчателлой и миндалем в соленой карамели',
        price: 450,
      },
      {
        name: 'Цитрусовый пирог',
        price: 450,
      },
    ]
  },
  {
    name: 'GIUSTO',
    img: 'https://optim.tildacdn.com/tild3438-3362-4266-a531-613736663764/-/resize/360x240/-/format/webp/Giusto_31_04_231193.jpg',
    menu: [
      {
        name: 'Caffè Coconut Affogato',
        price: 330,
      },
      {
        name: 'Caffè con scorza',
        price: 330,
      },
      {
        name: 'Завтрак Alla Grande',
        price: 750,
      },
      {
        name: 'Сырники “Вкус детства” с вишнёвым вареньем и кофе на выбор: американо, капучино, латте',
        price: 750,
      },
      {
        name: 'Овсяная каша с ягодами на растительном кокосовом напитке',
        price: 450,
      },
      {
        name: 'Свежеиспеченный круассан с джемом, фермерским мёдом и взбитым маслом и кофе',
        price: 750,
      },
    ]
  },
  {
    name: 'Goose Goose',
    img: 'https://optim.tildacdn.com/tild6335-3561-4031-a139-393962316661/-/resize/360x240/-/format/webp/Goose_Goose.jpg',
    menu: [
      {
        name: 'Капучино-кокос',
        price: 350,
      },
      {
        name: 'Спаржа с яйцом пашот и соусом голландез на тосте из домашнего хлеба',
        price: 750,
      },
      {
        name: 'Запеканка с ягодным вареньем и сметаной',
        price: 450,
      },
      {
        name: 'Рисовая каша с ананасами и манго на растительном кокосовом напитке',
        price: 450,
      },
      {
        name: 'Лимонный торт',
        price: 450,
      },
    ]
  },
  {
    name: 'HAND coffee',
    img: 'https://optim.tildacdn.com/tild3530-3233-4466-b230-366433326332/-/resize/360x240/-/format/webp/2.jpg',
    menu: [
      {
        name: 'Сет: арахисовый какао на банановом растительном напитке и десерт «Картоха»',
        price: PRICES[450],
      },
      {
        name: 'Бенедикт на картофельном дранике с цыпленком и белыми грибами',
        price: PRICES[450],
      },
      {
        name: 'Сытная каша с черными бобами, беконом, белыми грибами и сыром чеддер',
        price: PRICES[450],
      },
      {
        name: 'Сырники с кули клюква-апероль, халвой и мороженым',
        price: PRICES[450],
      },
    ]
  },
  {
    name: 'Hypes',
    img: 'https://optim.tildacdn.com/tild6234-3533-4131-a633-303837396639/-/resize/360x240/-/format/webp/IMG_6515.jpg',
    menu: [
      {
        name: 'Шишковый Раф',
        price: PRICES[450],
      },
      {
        name: 'Банановая Масала с арахисовой пасто',
        price: PRICES[690],
      },
      {
        name: 'Трюфельный скрэмбл с фермерских хлебом и молодой зеленью',
        price: PRICES[750],
      },
      {
        name: 'Манговые панкейки с взбитым творогом и кокосовым акцентом',
        price: PRICES[450],
      },
      {
        name: 'Вафли из цукини с креветкой и гуакамоле',
        price: PRICES[750],
      },
      {
        name: '⁠Йогурт с ореховой гранолой',
        price: PRICES[450],
      },
      {
        name: 'Зож- Бенедикт',
        price: PRICES[450],
      },
      {
        name: 'Творожный крем-пудинг с лимонным курдом',
        price: PRICES[450],
      },
    ]
  },
  {
    name: 'IGRIK Wine Bar & Yoga',
    img: 'https://optim.tildacdn.com/tild3563-3336-4137-b739-383162353363/-/resize/360x240/-/format/webp/IMG_6149.JPG',
    menu: [
      {
        name: 'Матча латте',
        price: 420,
      },
      {
        name: 'Флэт Уайт',
        price: 400,
      },
      {
        name: 'Зеленый омлет с пармезаном',
        price: PRICES[450],
      },
      {
        name: 'Крок-месье с мортаделлой',
        price: PRICES[450],
      },
      {
        name: 'Рисовая каша с хурмой и злаками',
        price: PRICES[450],
      },
      {
        name: 'Сырники с соленой карамелью',
        price: PRICES[450],
      },
    ]
  },
  {
    name: 'Italy',
    img: 'https://optim.tildacdn.com/tild3131-3166-4638-b065-653030623966/-/resize/360x240/-/format/webp/IMG_6574.JPG',
    menu: [
      {
        name: 'Горячий какао миндаль/кокос',
        price: PRICES[450],
      },
      {
        name: 'Зернистый творог с мандариновым вареньем',
        price: PRICES[450],
      },
      {
        name: 'Итальянский пирог с манго и мандаринами',
        price: PRICES[450],
      },
      {
        name: 'Яйца пашот с греческим йогуртом/перцем рамиро/базиликом',
        price: PRICES[750],
      },
      {
        name: 'Омлет с черным трюфелем',
        price: PRICES[750],
      },
      {
        name: 'Драник со сметаной и щучьей икрой',
        price: PRICES[750],
      },
    ]
  },
  {
    name: 'Joli Grand Bistrot',
    img: 'https://static.tildacdn.com/tild6362-3135-4633-a334-663737666338/IMG_6560.JPG',
    menu: [
      {
        name: 'Кофе для завтрака “Матча Латте”',
        price: PRICES[450],
      },
      {
        name: 'Каша из цельнозерновой овсянки с мандаринами и пеканом',
        price: PRICES[450],
      },
      {
        name: 'Яичница запеченная с картофелем и беконом',
        price: PRICES[750],
      },
      {
        name: 'Глазированный сырок “Вкус Детства”',
        price: PRICES[450],
      },
      {
        name: 'Трубочка с кремом из вареной сгущенки',
        price: PRICES[450],
      },
    ]
  },
  {
    name: 'La Biga Italian bistro',
    img: 'https://optim.tildacdn.com/tild3731-3437-4362-b761-656530613933/-/resize/360x240/-/format/webp/IMG_5920.JPG',
    menu: [
      {
        name: 'Раф жасмин-ваниль со взрывной карамелью',
        price: PRICES[350],
      },
      {
        name: 'Каша из овсяного печенья со взбитой сметаной',
        price: PRICES[450],
      },
      {
        name: 'Хашбраун с лососем и яйцом пашот с добавлением творога ЭкоНива',
        price: PRICES[750],
      },
      {
        name: 'Праздничный завтрак (докторская колбаса, тартин, яйцо, огурец, картофель, студень, свекла с черносливом)',
        price: PRICES[750],
      },
      {
        name: 'Жареный чизкейк',
        price: 0,
      },
    ]
  },
  {
    name: 'Lou Lou',
    img: 'https://optim.tildacdn.com/tild3534-6564-4033-a266-306236376131/-/resize/360x240/-/format/webp/photo_2022-11-30_105.jpeg',
    menu: [
      {
        name: 'Яйца à la russe с икрой',
        price: PRICES[450],
      },
      {
        name: 'Круассан с томлёной говядиной и сыром',
        price: PRICES[750],
      },
      {
        name: 'Сырники с хурмой и апельсиновым соусом',
        price: PRICES[750],
      },
      {
        name: 'Маковая бриошь de grand-mere',
        price: PRICES[450],
      },
      {
        name: 'Латте кокос-фисташка',
        price: PRICES[450],
      },
    ]
  },
  {
    name: 'Marius',
    img: 'https://optim.tildacdn.com/tild6536-6339-4837-a530-323635383865/-/resize/360x240/-/format/webp/Interior_Marius.jpg',
    menu: [
      {
        name: 'Израильский завтрак: яйцо, куриная сосиска, хумус, бабагануш, фалафель и пита',
        price: PRICES[750],
      },
      {
        name: 'ФишРолл с яйцом, судаком орли и соусом из трав',
        price: PRICES[750],
      },
      {
        name: 'Каша пшеничная с треской и томатами',
        price: PRICES[750],
      },
      {
        name: 'Шарлотка с цитрусами и орехами',
        price: PRICES[450],
      },
    ]
  },
  {
    name: 'Marso Polo',
    img: 'https://optim.tildacdn.com/tild3437-6236-4336-b165-623839643732/-/resize/360x240/-/format/webp/IMG_0609.jpg',
    menu: [
      {
        name: 'Каша из пряного булгура',
        price: PRICES[450],
      },
      {
        name: 'Запеканка из рикотты',
        price: PRICES[450],
      },
      {
        name: 'Сезонный тарт',
        price: PRICES[450],
      },
      {
        name: 'Омлет с соусом ромеско',
        price: PRICES[450],
      },
      {
        name: 'Банановый гляссе',
        price: 500,
      },
    ]
  },
  {
    name: 'MON CHOUCHOU',
    img: 'https://optim.tildacdn.com/tild3862-3430-4836-b061-653864646433/-/resize/360x240/-/format/webp/IMG_6500.JPG',
    menu: [
      {
        name: 'Датский блин с карамельным бананом и черной смородиной',
        price: PRICES[450],
      },
      {
        name: 'Гречневая каша с белыми грибами и черным трюфелем',
        price: PRICES[750],
      },
      {
        name: 'Бланманже с мадагаскарской ванилью, голубикой и миндалем',
        price: PRICES[450],
      },
      {
        name: 'Испанская тортилья с лососем и мандарином',
        price: PRICES[750],
      },
      {
        name: 'Творожные трюфеля в миндале с мандарином, виноградом и карамельным муссом',
        price: PRICES[750],
      },
    ]
  },
  {
    name: 'Pèchè bistrot',
    img: 'https://optim.tildacdn.com/tild3638-3735-4565-b439-646638373763/-/resize/360x240/-/format/webp/IMG_6001.JPG',
    menu: [
      {
        name: 'Рождественский вечер',
        price: 370,
      },
      {
        name: 'Вишневый латте',
        price: PRICES[350],
      },
      {
        name: 'Бенедикт на тартине / мортаделла / трюфель',
        price: PRICES[450],
      },
      {
        name: 'Безглютеновые сырники "Вкус детства" / вишня / крем вареная сгущенка',
        price: PRICES[450],
      },
      {
        name: 'Гречка / говяжья щека / сливочный демигляс',
        price: PRICES[450],
      },
      {
        name: 'Шу / мороженое крем-брюле / соленая карамель',
        price: PRICES[750],
      },
    ]
  },
  {
    name: 'PROSA Breakfast bar',
    img: 'https://optim.tildacdn.com/tild3938-3830-4862-a536-396238373631/-/resize/360x240/-/format/webp/IMG_0826.JPG',
    menu: [
      {
        name: 'Яйца по-Турецки',
        price: PRICES[450],
      },
      {
        name: 'Рисовая каша с миндальным кремом',
        price: PRICES[450],
      },
      {
        name: 'Творожная запеканка “Вкус детства с клубнично-брусничным вареньем”',
        price: 490,
      },
      {
        name: 'Круассан с английским кремом и сезонными фруктами',
        price: PRICES[450],
      },
      {
        name: '“Сливочное пиво” на основе растительного ванильного напитка',
        price: 390,
      },
      {
        name: '“Горячий шоколад” на основе растительного ванильного напитка',
        price: 390,
      },
    ]
  },
  {
    name: 'Saviv',
    img: 'https://optim.tildacdn.com/tild6535-3264-4162-b966-666665393736/-/resize/360x240/-/format/webp/IMG_4149.jpg',
    menu: [
      {
        name: 'Безалкогольный Сгроппино',
        price: PRICES[450],
      },
      {
        name: 'Лимонад Кокос-Ваниль',
        price: PRICES[450],
      },
      {
        name: 'Лимонад Малина-Пломбир',
        price: PRICES[450],
      },
      {
        name: 'Овсяная каша с томатами и беконом из говядины',
        price: PRICES[450],
      },
      {
        name: 'Falafel waffel',
        price: PRICES[450],
      },
      {
        name: 'Авокадо-киви боул',
        price: PRICES[450],
      },
      {
        name: 'Яблочный мильфей с мороженым из халвы',
        price: PRICES[450],
      },
    ]
  },
  {
    name: 'Settlers: Restaurant & Bar',
    img: 'https://optim.tildacdn.com/tild3332-6162-4936-b533-663035303761/-/resize/360x240/-/format/webp/IMG_7251_1.jpg',
    menu: [
      {
        name: 'Французский завтрак',
        price: PRICES[450],
      },
      {
        name: 'Печеный батат с яйцом пашот и беконом',
        price: PRICES[750],
      },
      {
        name: 'Сырники с мороженым из йогурта и клубничным компоте',
        price: PRICES[450],
      },
      {
        name: 'Пари Брест с кремом сгущенка',
        price: PRICES[450],
      },
      {
        name: 'Berry cream',
        price: PRICES[450],
      },
    ]
  },
  {
    name: 'The Legends',
    img: 'https://optim.tildacdn.com/tild6636-3331-4261-b035-363539653161/-/resize/360x240/-/format/webp/IMG_6139.JPG',
    menu: [
      {
        name: 'Американский Crispy какао',
        price: PRICES[350],
      },
      {
        name: 'Бейгл с лососем слабой соли',
        price: PRICES[750],
      },
      {
        name: 'Американский завтрак',
        price: PRICES[750],
      },
      {
        name: 'Творог с гранолой и печеной грушей',
        price: PRICES[450],
      },
      {
        name: 'Панкейки с сыром и нутеллой',
        price: PRICES[450],
      },
    ]
  },
  {
    name: 'The Lobby Bar',
    img: 'https://optim.tildacdn.com/tild3731-3437-4362-b761-656530613933/-/resize/360x240/-/format/webp/IMG_5920.JPG',
    menu: [
      {
        name: 'Какао малина-банан',
        price: PRICES[350],
      },
      {
        name: 'Малиново-кокосовый латте',
        price: PRICES[350],
      },
      {
        name: 'Блины с лимонным сыром и русским песто',
        price: PRICES[450],
      },
      {
        name: 'Рисовая каша “Пина-колада” на растительном кокосовом напитке',
        price: PRICES[450],
      },
      {
        name: 'Омлет с голландским дрессингом, грибами и лососем',
        price: PRICES[750],
      },
      {
        name: 'Сырники с вареньем из черной смородины «Вкус детства»',
        price: PRICES[450],
      },
    ]
  },
  {
    name: 'Ume',
    img: 'https://optim.tildacdn.com/tild3137-3533-4534-b136-366264323661/-/resize/360x240/-/format/webp/IMG_6281.JPG',
    menu: [
      {
        name: 'Молочный коктейль «Ванильный пломбир» со взбитыми сливками и шоколадом',
        price: 430,
      },
      {
        name: 'Латте кокос/миндаль',
        price: 390,
      },
      {
        name: 'Овсяная каша с малиной, голубикой и лепестками миндаля',
        price: PRICES[450],
      },
      {
        name: 'Омлет цезарь с лососем',
        price: PRICES[450],
      },
      {
        name: 'Драник с яйцом пашот и лососем',
        price: PRICES[450],
      },
      {
        name: 'Сырники «Вкус детства» со взбитыми сливками и ягодами',
        price: PRICES[450],
      },
    ]
  },
  {
    name: 'UVA',
    img: 'https://optim.tildacdn.com/tild3232-3661-4839-b831-613861343238/-/resize/360x240/-/format/webp/IMG_6096.JPG',
    menu: [
      {
        name: 'Раф',
        price: PRICES[450],
      },
      {
        name: 'Флэт Уайт, Матча',
        price: PRICES[450],
      },
      {
        name: 'Киш с копченой форелью, зелеными овощами и сливочным биском',
        price: PRICES[450],
      },
      {
        name: 'Сырники со сливочно-карамельным кремом и клубничным вареньем',
        price: PRICES[450],
      },
      {
        name: 'Тартин со скремблом, креветками и гуакамоле',
        price: PRICES[750],
      },
      {
        name: 'Зеленая греча с беконом и яйцом пашот',
        price: PRICES[750],
      },
    ]
  },
]