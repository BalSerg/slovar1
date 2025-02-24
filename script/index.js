let infoFromJson = [];
let data = [];

//Получение Тем и всего что в них есть
fetch('https://portals.ruwiki.ru/slovnik/data.json')
    .then((res) => {
        if (res.status >= 200 && res.status < 300) {
            return res;
        } else {
            let error = new Error(res.statusText);
            error.response = res;
            throw error;
        }
    })
    .then((res) => {
        const contentType = res.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            let error = new Error('Некорректный ответ от сервера: ожидается application/json');
            error.response = res;
            throw error;
        }
        return res.json();
    })
    .then(data => {
        infoFromJson = displayData(data);

    })
//---------

//функция куда передаем data
function displayData(s) {
    return s;
}

let mokData = [
    {
        theme: 'Кино',
        subThemes: ['Фильмы', 'Актеры', 'Режиссёры', 'Сценаристы'],
        glossary: [
            {
                title: 'Фильмы',
                text: 'Список тем для статей из категории Фильмы.',
                action: {
                    edit: [
                        {
                            title: 'A',
                            content: [
                                {
                                    title: 'Армагеддон',
                                    url: "Армагеддон"
                                },
                                {
                                    title: 'Аты-баты',
                                    url: "Аты-баты"
                                },
                                {
                                    title: 'Ачетакова',
                                    url: "Ачетакова"
                                }
                            ]
                        },
                        {
                            title: 'B',
                            content: [
                                {
                                    title: 'Вий',
                                    url: "Вий"
                                },
                                {
                                    title: 'Ворон',
                                    url: "Ворон"
                                },
                                {
                                    title: 'Вытегра',
                                    url: "Вытегра"
                                },
                                {
                                    title: 'Вршки-мошки',
                                    url: "Вршки-мошки"
                                },
                            ]
                        },
                        {
                            title: 'Д',
                            content: [
                                {
                                    title: 'Дубровский',
                                    url: "Дубровский"
                                },
                                {
                                    title: 'Добродед',
                                    url: 'Добродед'
                                },
                            ]
                        },
                        {
                            title: 'E',
                            content: [
                                {
                                    title: 'Елки',
                                    url: 'Елки'
                                },
                            ]
                        },
                        {
                            title: 'Ф',
                            content: [
                                {
                                    title: 'Форсаж',
                                    url: 'Форсаж'
                                },
                                {
                                    title: 'Фурия',
                                    url: 'Фурия'
                                },
                            ]
                        },
                        {
                            title: 'К',
                            content: [
                                {
                                    title: 'Ку-клус-клан',
                                    url: 'Ку-клус-клан'
                                },
                                {
                                    title: 'Кин-дза-дза',
                                    url: 'Кин-дза-дза'
                                },
                                {
                                    title: 'Китайский городовой',
                                    url: 'Китайский городовой'
                                },
                            ]
                        },
                        {
                            title: 'Р',
                            content: [
                                {
                                    title: 'Распутин',
                                    url: 'Распутин'
                                },
                                {
                                    title: 'Роллинги',
                                    url: 'Роллинги'
                                },
                            ]
                        },
                        {
                            title: 'Т',
                            content: [
                                {
                                    title: 'Т-34',
                                    url: 'Т-34'
                                },
                            ]
                        },
                    ],
                    add: [
                        {
                            title: 'Б',
                            content: [
                                {
                                    title: 'Буги-бой',
                                    url: 'Буги-бой'
                                },
                            ]
                        },
                        {
                            title: 'Г',
                            content: [
                                {
                                    title: 'Роллинги',
                                    url: 'Роллинги'
                                },
                                {
                                    title: 'Город мертвых',
                                    url: 'Город мертвых'
                                },
                                {
                                    title: 'Глубина',
                                    url: 'Глубина'
                                },
                                {
                                    title: 'Грешники',
                                    url: 'Грешники'
                                },
                                {
                                    title: 'Гордость и предубеждение',
                                    url: 'Гордость и предубеждение'
                                },
                                {
                                    title: 'Голубая Линия',
                                    url: 'Голубая Линия'
                                },
                                {
                                    title: 'Гонщики',
                                    url: 'Гонщики'
                                },
                            ]
                        },
                        {
                            title: 'Ж',
                            content: [
                                {
                                    title: 'Жуковский',
                                    url: 'Жуковский'
                                },
                            ]
                        },
                        {
                            title: 'E',
                            content: [
                                {
                                    title: 'Елабуга',
                                    url: 'Елабуга'
                                },
                                {
                                    title: 'Естество',
                                    url: 'Естество'
                                },
                            ]
                        },
                        {
                            title: 'Л',
                            content: [
                                {
                                    title: 'Леха',
                                    url: 'Леха'
                                },
                                {
                                    title: 'Летняя жара',
                                    url: 'Летняя жара'
                                },
                            ]
                        },
                        {
                            title: 'М',
                            content: [
                                {
                                    title: 'Маринеско',
                                    url: 'Маринеско'
                                },
                                {
                                    title: 'Море',
                                    url: 'Море'
                                },
                                {
                                    title: 'Мировоплощение',
                                    url: 'Мировоплощение'
                                },
                            ]
                        },
                        {
                            title: 'С',
                            content: [
                                {
                                    title: 'СССР',
                                    url: 'СССР'
                                },
                                {
                                    title: 'Суета сует',
                                    url: 'Суета сует'
                                },
                                {
                                    title: 'Союзники',
                                    url: 'Союзники'
                                },
                                {
                                    title: 'Сквозь время',
                                    url: 'Сквозь время'
                                },
                                {
                                    title: 'Сотворение',
                                    url: 'Сотворение'
                                },
                            ]
                        },
                        {
                            title: 'Ч',
                            content: [
                                {
                                    title: 'Чернь',
                                    url: 'Чернь'
                                },
                            ]
                        },
                    ]
                }
            },
            {
                title: 'Актеры',
                text: 'Список тем для статей из категории Актеры.',
                action: {
                    edit : [
                        {
                            title: 'A',
                            content: [
                                {
                                    title: 'Абдулов',
                                    url: 'Абдулов'
                                },
                                {
                                    title: 'Ахеджакова',
                                    url: 'Ахеджакова'
                                },
                            ]
                        },
                        {
                            title: 'B',
                            content: [
                                {
                                    title: 'Вронский',
                                    url: 'Вронский'
                                },
                            ]
                        },
                        {
                            title: 'Д',
                            content: [
                                {
                                    title: 'Дедюшко',
                                    url: 'Дедюшко'
                                },
                                {
                                    title: 'Дамогаров',
                                    url: 'Дамогаров'
                                },
                            ]
                        },
                        {
                            title: 'E',
                            content: [
                                {
                                    title: 'Евланов',
                                    url: 'Евланов'
                                },
                            ]
                        },
                        {
                            title: 'Ф',
                            content: [
                                {
                                    title: 'Фарада',
                                    url: 'Фарада'
                                },
                                {
                                    title: 'Филатов',
                                    url: 'Филатов'
                                },
                            ]
                        },
                        {
                            title: 'К',
                            content: [
                                {
                                    title: 'Караченцев',
                                    url: 'Караченцев'
                                },
                                {
                                    title: 'Кустинская',
                                    url: 'Кустинская'
                                },
                                {
                                    title: 'Корейко',
                                    url: 'Корейко'
                                },
                            ]
                        },
                        {
                            title: 'Р',
                            content: [
                                {
                                    title: 'Рокотов',
                                    url: 'Рокотов'
                                },
                            ]
                        },
                        {
                            title: 'Т',
                            content: [
                                {
                                    title: 'Триандафилов',
                                    url: 'Триандафилов'
                                },
                            ]
                        },
                    ],
                    add : [
                        {
                            title: 'Б',
                            content: [
                                {
                                    title: 'Боярский',
                                    url: 'Боярский'
                                },
                                {
                                    title: 'Быков',
                                    url: 'Быков'
                                },
                            ]
                        },
                        {
                            title: 'Г',
                            content: [
                                {
                                    title: 'Гришевец',
                                    url: 'Гришевец'
                                },
                                {
                                    title: 'Голуб',
                                    url: 'Голуб'
                                },
                                {
                                    title: 'Горячев',
                                    url: 'Горячев'
                                },
                                {
                                    title: 'Гюсто',
                                    url: 'Гюсто'
                                },
                                {
                                    title: 'Голубинсакя',
                                    url: 'Голубинсакя'
                                },
                                {
                                    title: 'Гуляев',
                                    url: 'Гуляев'
                                },
                            ]
                        },
                        {
                            title: 'Ж',
                            content: [
                                {
                                    title: 'Жидков',
                                    url: 'Жидков'
                                },
                            ]
                        },
                        {
                            title: 'E',
                            content: [
                                {
                                    title: 'Ефрмеов',
                                    url: 'Ефрмеов'
                                },
                                {
                                    title: 'Евланов',
                                    url: 'Евланов'
                                },
                            ]
                        },
                        {
                            title: 'Л',
                            content: [
                                {
                                    title: 'Лобачев',
                                    url: 'Лобачев'
                                },
                                {
                                    title: 'Лактаев',
                                    url: 'Лактаев'
                                },
                            ]
                        },
                        {
                            title: 'М',
                            content: [
                                {
                                    title: 'Мухин',
                                    url: 'Мухин'
                                },
                                {
                                    title: 'Мосин',
                                    url: 'Мосин'
                                },
                                {
                                    title: 'Муртазов',
                                    url: 'Муртазов'
                                },
                            ]
                        },
                        {
                            title: 'С',
                            content: [
                                {
                                    title: 'Смоктуновский',
                                    url: 'Смоктуновский'
                                },
                                {
                                    title: 'Степанов',
                                    url: 'Степанов'
                                },
                            ]
                        },
                        {
                            title: 'Ч',
                            content: [
                                {
                                    title: 'Чичиков',
                                    url: 'Чичиков'
                                },
                            ]
                        },
                    ]
                }
            },
            {
                title: 'Режиссёры',
                text: 'Список тем для статей из категории Режиссёры.',
                action: {
                    edit : [
                        {
                            title: 'A',
                            content: [
                                {
                                    title: 'Режиссёры1',
                                    url: 'Режиссёры1'
                                },
                                {
                                    title: 'Режиссёры1',
                                    url: 'Режиссёры1'
                                },
                            ]
                        },
                        {
                            title: 'B',
                            content: [
                                {
                                    title: 'Режиссёр2',
                                    url: 'Режиссёры2'
                                }
                            ]
                        },
                        {
                            title: 'Д',
                            content: [
                                {
                                    title: 'Режиссёр3',
                                    url: 'Режиссёры3'
                                },
                                {
                                    title: 'Режиссёр3',
                                    url: 'Режиссёры3'
                                }
                            ]
                        },
                        {
                            title: 'E',
                            content: [
                                {
                                    title: 'Режиссёр4',
                                    url: 'Режиссёры4'
                                }
                            ]
                        },
                        {
                            title: 'Ф',
                            content: [
                                {
                                    title: 'Режиссёр5',
                                    url: 'Режиссёры5'
                                },
                                {
                                    title: 'Режиссёр5',
                                    url: 'Режиссёры5'
                                }
                            ]
                        },
                        {
                            title: 'К',
                            content: [
                                {
                                    title: 'Режиссёр6',
                                    url: 'Режиссёры6'
                                },
                                {
                                    title: 'Режиссёр6',
                                    url: 'Режиссёры6'
                                },
                                {
                                    title: 'Режиссёр6',
                                    url: 'Режиссёры6'
                                }
                            ]
                        },
                        {
                            title: 'Р',
                            content: [
                                {
                                    title: 'Режиссёр7',
                                    url: 'Режиссёры7'
                                }
                            ]
                        },
                        {
                            title: 'Т',
                            content: [
                                {
                                    title: 'Режиссёр8',
                                    url: 'Режиссёры8'
                                }
                            ]
                        },
                    ],
                    add : [
                        {
                            title: 'Б',
                            content: [
                                {
                                    title: 'Режиссёр11',
                                    url: 'Режиссёры11'
                                },
                                {
                                    title: 'Режиссёр11',
                                    url: 'Режиссёры11'
                                }
                            ]
                        },
                        {
                            title: 'Г',
                            content: [
                                {
                                    title: 'Режиссёр22',
                                    url: 'Режиссёры22'
                                },
                                {
                                    title: 'Режиссёр22',
                                    url: 'Режиссёры22'
                                },
                                {
                                    title: 'Режиссёр22',
                                    url: 'Режиссёры22'
                                },
                                {
                                    title: 'Режиссёр22',
                                    url: 'Режиссёры22'
                                },
                                {
                                    title: 'Режиссёр22',
                                    url: 'Режиссёры22'
                                },
                                {
                                    title: 'Режиссёр22',
                                    url: 'Режиссёры22'
                                }
                            ]
                        },
                        {
                            title: 'Ж',
                            content: [
                                {
                                    title: 'Режиссёры33',
                                    url: 'Режиссёры33'
                                }
                            ]
                        },
                        {
                            title: 'E',
                            content: [
                                {
                                    title: 'Режиссёр44',
                                    url: 'Режиссёры44'
                                },
                                {
                                    title: 'Режиссёр44',
                                    url: 'Режиссёры44'
                                }
                            ]
                        },
                        {
                            title: 'Л',
                            content: [
                                {
                                    title: 'Режиссёр55',
                                    url: 'Режиссёры55'
                                },
                                {
                                    title: 'Режиссёр55',
                                    url: 'Режиссёры55'
                                }
                            ]
                        },
                        {
                            title: 'М',
                            content: [
                                {
                                    title: 'Режиссёр66',
                                    url: 'Режиссёры66'
                                },
                                {
                                    title: 'Режиссёр66',
                                    url: 'Режиссёры66'
                                },
                                {
                                    title: 'Режиссёр66',
                                    url: 'Режиссёры66'
                                }
                            ]
                        },
                        {
                            title: 'С',
                            content: [
                                {
                                    title: 'Режиссёр77',
                                    url: 'Режиссёры77'
                                },
                                {
                                    title: 'Режиссёр77',
                                    url: 'Режиссёры77'
                                }
                            ]
                        },
                        {
                            title: 'Ч',
                            content: [
                                {
                                    title: 'Режиссёр88',
                                    url: 'Режиссёры88'
                                }
                            ]
                        },
                    ]
                }
            },
            {
                title: 'Сценаристы',
                text: 'Список тем для статей из категории Сценаристы.',
                action: {
                    edit : [
                        {
                            title: 'A',
                            content: [
                                {
                                    title: 'Сценаристы1',
                                    url: 'Сценаристы1'
                                },
                                {
                                    title: 'Сценаристы1',
                                    url: 'Сценаристы1'
                                },
                            ]
                        },
                        {
                            title: 'B',
                            content: [
                                {
                                    title: 'Сценаристы2',
                                    url: 'Сценаристы2'
                                }
                            ]
                        },
                        {
                            title: 'Д',
                            content: [
                                {
                                    title: 'Сценаристы3',
                                    url: 'Сценаристы3'
                                },
                                {
                                    title: 'Сценаристы3',
                                    url: 'Сценаристы3'
                                }
                            ]
                        },
                        {
                            title: 'E',
                            content: [
                                {
                                    title: 'Сценаристы4',
                                    url: 'Сценаристы4'
                                }
                            ]
                        },
                        {
                            title: 'Ф',
                            content: [
                                {
                                    title: 'Сценаристы6',
                                    url: 'Сценаристы6'
                                },
                                {
                                    title: 'Сценаристы6',
                                    url: 'Сценаристы6'
                                }
                            ]
                        },
                        {
                            title: 'К',
                            content: [
                                {
                                    title: 'Сценаристы7',
                                    url: 'Сценаристы7'
                                },
                                {
                                    title: 'Сценаристы7',
                                    url: 'Сценаристы7'
                                },
                                {
                                    title: 'Сценаристы7',
                                    url: 'Сценаристы7'
                                }
                            ]
                        },
                        {
                            title: 'Р',
                            content: [
                                {
                                    title: 'Сценаристы8',
                                    url: 'Сценаристы8'
                                }
                            ]
                        },
                        {
                            title: 'Т',
                            content: [
                                {
                                    title: 'Сценаристы9',
                                    url: 'Сценаристы9'
                                }
                            ]
                        },
                    ],
                    add : [
                        {
                            title: 'Б',
                            content: [
                                {
                                    title: 'Сценаристы11',
                                    url: 'Сценаристы11'
                                },
                                {
                                    title: 'Сценаристы11',
                                    url: 'Сценаристы11'
                                }
                            ]
                        },
                        {
                            title: 'Г',
                            content: [
                                {
                                    title: 'Сценаристы22',
                                    url: 'Сценаристы22'
                                },
                                {
                                    title: 'Сценаристы22',
                                    url: 'Сценаристы22'
                                },
                                {
                                    title: 'Сценаристы22',
                                    url: 'Сценаристы22'
                                },
                                {
                                    title: 'Сценаристы22',
                                    url: 'Сценаристы22'
                                },
                                {
                                    title: 'Сценаристы22',
                                    url: 'Сценаристы22'
                                },
                                {
                                    title: 'Сценаристы22',
                                    url: 'Сценаристы22'
                                }
                            ]
                        },
                        {
                            title: 'Ж',
                            content: [
                                {
                                    title: 'Сценаристы33',
                                    url: 'Сценаристы33'
                                }
                            ]
                        },
                        {
                            title: 'E',
                            content: [
                                {
                                    title: 'Сценаристы44',
                                    url: 'Сценаристы44'
                                }
                            ]
                        },
                        {
                            title: 'Л',
                            content: [
                                {
                                    title: 'Сценаристы55',
                                    url: 'Сценаристы55'
                                },
                                {
                                    title: 'Сценаристы55',
                                    url: 'Сценаристы55'
                                }
                            ]
                        },
                        {
                            title: 'М',
                            content: [
                                {
                                    title: 'Сценаристы66',
                                    url: 'Сценаристы66'
                                },
                                {
                                    title: 'Сценаристы66',
                                    url: 'Сценаристы66'
                                },
                                {
                                    title: 'Сценаристы66',
                                    url: 'Сценаристы66'
                                }
                            ]
                        },
                        {
                            title: 'С',
                            content: [
                                {
                                    title: 'Сценаристы77',
                                    url: 'Сценаристы77'
                                },
                                {
                                    title: 'Сценаристы77',
                                    url: 'Сценаристы77'
                                }
                            ]
                        },
                        {
                            title: 'Ч',
                            content: [
                                {
                                    title: 'Сценаристы88',
                                    url: 'Сценаристы88'
                                }
                            ]
                        },
                    ]
                }
            }
        ]
    },
    {
        theme: 'Сериалы',
        subThemes: ['Дорамы', 'Исторические'],
        glossary: [
            {
                title: 'Дорамы',
                text: 'Список тем для статей из категории Дорамы.',
                action: {
                    edit: [
                        {
                            title: 'Б',
                            content: [
                                {
                                    title: 'Белоснежка должна умереть',
                                    url: 'Белоснежка должна умереть'
                                },
                                {
                                    title: 'Бешеный пёс',
                                    url: 'Бешеный пёс'
                                },
                                {
                                    title: 'Блэк (телесериал)',
                                    url: 'Блэк (телесериал)'
                                },
                                {
                                    title: 'Болтун (телесериал)',
                                    url: 'Болтун (телесериал)'
                                },
                                {
                                    title: 'Бродяга (сериал)',
                                    url: 'Бродяга (сериал)'
                                },
                            ]
                        },
                        {
                            title: 'В',
                            content: [
                                {
                                    title: 'Винченцо (телесериал)',
                                    url: 'Винченцо (телесериал)'
                                },
                                {
                                    title: 'Военный прокурор Доберман',
                                    url: 'Военный прокурор Доберман'
                                }
                            ]
                        },
                        {
                            title: 'Г',
                            content: [
                                {
                                    title: 'Гипер нож',
                                    url: 'Гипер нож'
                                },
                                {
                                    title: 'Гость (телесериал)',
                                    url: 'Гость (телесериал)'
                                },
                            ]
                        },

                        {
                            title: 'Д',
                            content: [
                                {
                                    title: 'Девять загадок',
                                    url: 'Девять загадок'
                                },
                            ]
                        },
                        {
                            title: 'И',
                            content: [
                                {
                                    title: 'Набранный Вами номер',
                                    url: 'Набранный Вами номер'
                                },
                                {
                                    title: 'Начальник следственного отдела, 1958 год',
                                    url: 'Начальник следственного отдела, 1958 год'
                                },
                                {
                                    title: 'Незнакомец (сериал, 2017)',
                                    url: 'Незнакомец (сериал, 2017)'
                                },
                                {
                                    title: 'Никто не знает',
                                    url: 'Никто не знает'
                                },
                            ]
                        },
                        {
                            title: 'М',
                            content: [
                                {
                                    title: 'Магазин для киллеров',
                                    url: 'Магазин для киллеров'
                                },
                                {
                                    title: 'Мама в гневе',
                                    url: 'Мама в гневе'
                                },
                                {
                                    title: 'Меморист',
                                    url: 'Меморист'
                                },
                                {
                                    title: 'Моё имя',
                                    url: 'Моё имя'
                                },
                                {
                                    title: 'Монстр (телесериал, 2021)',
                                    url: 'Монстр (телесериал, 2021)'
                                },
                            ]
                        },
                        {
                            title: 'С',
                            content: [
                                {
                                    title: 'Сигнал (телесериал)',
                                    url: 'Сигнал (телесериал)'
                                },
                                {
                                    title: 'Скажи, что ты видела',
                                    url: 'Скажи, что ты видела'
                                },
                                {
                                    title: 'Слабый герой',
                                    url: 'Слабый герой'
                                },
                                {
                                    title: 'Славный парень',
                                    url: 'Славный парень'
                                },
                            ]
                        },
                        {
                            title: 'Т',
                            content: [
                                {
                                    title: 'Тайна (телесериал, 2013)',
                                    url: 'Тайна (телесериал, 2013)'
                                },
                                {
                                    title: 'Треугольник (телесериал)',
                                    url: 'Треугольник (телесериал)'
                                },
                            ]
                        },
                    ],
                    add : [
                        {
                            title: 'Б',
                            content: [
                                {
                                    title: 'Безумная парочка',
                                    url: 'Безумная парочка'
                                },
                                {
                                    title: 'Блэк (телесериал)',
                                    url: 'Блэк (телесериал)'
                                },
                            ]
                        },
                        {
                            title: 'В',
                            content: [
                                {
                                    title: 'В движении (дорама)',
                                    url: 'В движении (дорама)'
                                },
                                {
                                    title: 'В пламени',
                                    url: 'В пламени'
                                },
                                {
                                    title: 'Великий соблазнитель',
                                    url: 'Великий соблазнитель'
                                },
                                {
                                    title: 'Вера (телесериал, 2012)',
                                    url: 'Вера (телесериал, 2012)'
                                },
                                {
                                    title: 'Владыка морей (телесериал)',
                                    url: 'Владыка морей (телесериал)'
                                },
                                {
                                    title: 'Внутренняя красота',
                                    url: 'Внутренняя красота'
                                },
                            ]
                        },
                        {
                            title: 'Г',
                            content: [
                                {
                                    title: 'Гигант (телесериал, 2010)',
                                    url: 'Гигант (телесериал, 2010)'
                                },
                                {
                                    title: 'Гоблин (телесериал)',
                                    url: 'Гоблин (телесериал)'
                                },
                            ]
                        },
                        {
                            title: 'Д',
                            content: [
                                {
                                    title: 'Дан: единственная любовь (телесериал)',
                                    url: 'Дан: единственная любовь (телесериал)'
                                },
                                {
                                    title: 'Демон (телесериал)',
                                    url: 'Демон (телесериал)'
                                },
                                {
                                    title: 'День и ночь (дорама)',
                                    url: 'День и ночь (дорама)'
                                },
                                {
                                    title: 'Дневник психопата',
                                    url: 'Дневник психопата'
                                },
                            ]
                        },
                        {
                            title: 'Ж',
                            content: [
                                {
                                    title: 'Жемчужина дворца',
                                    url: 'Жемчужина дворца'
                                },
                                {
                                    title: 'Жизнь (дорама)',
                                    url: 'Жизнь (дорама)'
                                },
                            ]
                        },
                        {
                            title: 'И',
                            content: [
                                {
                                    title: 'Императрица Ки (телесериал)',
                                    url: 'Императрица Ки (телесериал)'
                                },
                                {
                                    title: 'История леди Ок',
                                    url: 'История леди Ок'
                                },
                            ]
                        },
                        {
                            title: 'М',
                            content: [
                                {
                                    title: 'Месть от третьего лица',
                                    url: 'Месть от третьего лица'
                                },
                                {
                                    title: 'Мир женатой пары',
                                    url: 'Мир женатой пары'
                                },
                                {
                                    title: 'Мистер Саншайн (сериал, 2018)',
                                    url: 'Мистер Саншайн (сериал, 2018)'
                                },
                                {
                                    title: 'Младший сын семьи чеболя',
                                    url: 'Младший сын семьи чеболя'
                                },
                            ]
                        },
                        {
                            title: 'С',
                            content: [
                                {
                                    title: 'Сигнал (телесериал)',
                                    url: 'Сигнал (телесериал)'
                                },
                                {
                                    title: 'Скажи, что ты видела',
                                    url: 'Скажи, что ты видела'
                                },
                                {
                                    title: 'Слабый герой',
                                    url: 'Слабый герой'
                                },
                                {
                                    title: 'Славный парень',
                                    url: 'Славный парень'
                                },
                            ]
                        },
                        {
                            title: 'Т',
                            content: [
                                {
                                    title: 'Тайна (телесериал, 2013)',
                                    url: 'Тайна (телесериал, 2013)'
                                },
                                {
                                    title: 'Треугольник (телесериал)',
                                    url: 'Треугольник (телесериал)'
                                },
                            ]
                        },
                    ]
                }
            },
            {
                title: 'Исторические',
                text: 'Список тем для статей из категории Исторические.',
                action: {
                    edit: [
                        {
                            title: 'Е',
                            content: [
                                {
                                    title: 'Ермак',
                                    url: 'Ермак'
                                },
                            ]
                        },
                        {
                            title: 'О',
                            content: [
                                {
                                    title: 'Освобождение',
                                    url: 'Освобождение'
                                },
                            ]
                        },
                    ],
                    add: [
                        {
                            title: 'Б',
                            content: [
                                {
                                    title: 'Борджиа',
                                    url: 'Борджиа'
                                },
                            ]
                        },
                        {
                            title: 'М',
                            content: [
                                {
                                    title: 'Медичи',
                                    url: 'Медичи'
                                },
                            ]
                        },
                    ]
                }
            }
        ]
    },
    {
        theme: 'Музыкальные жанры',
        subThemes: ['Металл', 'Панк'],
        glossary: [
            {
                title: 'Металл',
                text: 'Список тем для статей из категории Металл.',
                action: {
                    edit : [
                        {
                            title: 'A',
                            content: [
                                {
                                    title: 'Amaranthe',
                                    url: 'Amaranthe'
                                },
                                {
                                    title: 'Accept',
                                    url: 'Accept'
                                },
                                {
                                    title: 'AC/DC',
                                    url: 'AC/DC'
                                },
                            ]
                        },
                        {
                            title: 'S',
                            content: [
                                {
                                    title: 'Scorpions',
                                    url: 'Scorpions'
                                },
                                {
                                    title: 'Sepultura',
                                    url: 'Sepultura'
                                },
                            ]
                        },
                    ],
                    add : [
                        {
                            title: 'K',
                            content: [
                                {
                                    title: 'Kiss',
                                    url: 'Kiss'
                                },
                                {
                                    title: 'KorpikLaani',
                                    url: 'KorpikLaani'
                                },
                            ]
                        },
                        {
                            title: 'N',
                            content: [
                                {
                                    title: 'Nightwish',
                                    url: 'Nightwish'
                                },
                                {
                                    title: 'Nirvana',
                                    url: 'Nirvana'
                                },
                                {
                                    title: 'Nazi',
                                    url: 'Nazi'
                                },
                            ]
                        },
                    ]
                }
            },
            {
                title: 'Панк',
                text: 'Список тем для статей из категории Панк.',
                action: {
                    edit : [
                        {
                            title: 'O',
                            content: [
                                {
                                    title: 'Offspring',
                                    url: 'Offspring'
                                },
                            ]
                        },
                        {
                            title: 'S',
                            content: [
                                {
                                    title: 'Sex Pistols',
                                    url: 'Sex Pistols'
                                },
                            ]
                        },
                    ],
                    add : [
                        {
                            title: 'С',
                            content: [
                                {
                                    title: 'Сектор газа',
                                    url: 'Сектор газа'
                                },
                            ]
                        },
                        {
                            title: 'К',
                            content: [
                                {
                                    title: 'Красная плесень',
                                    url: 'Красная плесень'
                                },
                            ]
                        },
                        {
                            title: 'Х',
                            content: [
                                {
                                    title: 'Х-й забей',
                                    url: 'Х-й забей'
                                },
                            ]
                        },
                    ]
                }
            },
        ]
    },
    {
        theme: 'Литература',
        subThemes: ['Книги', 'Авторы'],
        glossary: [
            {
                title: 'Книги',
                text: 'Список тем для статей из категории Книги.',
                action: {
                    edit: [
                        {
                            title: 'Б',
                            content: [
                                {
                                    title: 'Книга1',
                                    url: 'Книга1'
                                },
                                {
                                    title: 'Книга1',
                                    url: 'Книга1'
                                },
                                {
                                    title: 'Книга1',
                                    url: 'Книга1'
                                },
                                {
                                    title: 'Книга1',
                                    url: 'Книга1'
                                },
                                {
                                    title: 'Книга1',
                                    url: 'Книга1'
                                },
                                {
                                    title: 'Книга1',
                                    url: 'Книга1'
                                },
                            ]
                        },
                        {
                            title: "Г",
                            content: [
                                {
                                    title: 'Книга2',
                                    url: 'Книга2'
                                },
                                {
                                    title: 'Книга2',
                                    url: 'Книга2'
                                },
                                {
                                    title: 'Книга2',
                                    url: 'Книга2'
                                },
                                {
                                    title: 'Книга2',
                                    url: 'Книга2'
                                },
                                {
                                    title: 'Книга2',
                                    url: 'Книга2'
                                },
                            ]
                        },
                        {
                            title: 'E',
                            content: [
                                {
                                    title: 'Книга3',
                                    url: 'Книга3'
                                },
                                {
                                    title: 'Книга3',
                                    url: 'Книга3'
                                },
                                {
                                    title: 'Книга3',
                                    url: 'Книга3'
                                },
                                {
                                    title: 'Книга3',
                                    url: 'Книга3'
                                },
                            ]
                        },
                        {
                            title: 'П',
                            content: [
                                {
                                    title: 'Книга4',
                                    url: 'Книга4'
                                },
                                {
                                    title: 'Книга4',
                                    url: 'Книга4'
                                },
                                {
                                    title: 'Книга4',
                                    url: 'Книга4'
                                },
                                {
                                    title: 'Книга4',
                                    url: 'Книга4'
                                },
                            ]
                        },
                        {
                            title: 'C',
                            content: [
                                {
                                    title: 'Книга5',
                                    url: 'Книга5'
                                },
                                {
                                    title: 'Книга5',
                                    url: 'Книга5'
                                },
                                {
                                    title: 'Книга5',
                                    url: 'Книга5'
                                },
                            ]
                        },
                        {
                            title: 'У',
                            content: [
                                {
                                    title: 'Книга6',
                                    url: 'Книга6'
                                },
                                {
                                    title: 'Книга6',
                                    url: 'Книга6'
                                },
                            ]
                        }
                    ],
                    add: [
                        {
                            title: 'А',
                            content: [
                                {
                                    title: 'Книга11',
                                    url: 'Книга11'
                                },
                                {
                                    title: 'Книга11',
                                    url: 'Книга11'
                                },
                                {
                                    title: 'Книга11',
                                    url: 'Книга11'
                                },
                                {
                                    title: 'Книга11',
                                    url: 'Книга11'
                                },
                                {
                                    title: 'Книга11',
                                    url: 'Книга11'
                                },
                                {
                                    title: 'Книга11',
                                    url: 'Книга11'
                                },
                            ]
                        },
                        {
                            title: "В",
                            content: [
                                {
                                    title: 'Витебск',
                                    url: 'Книга22'
                                },
                                {
                                    title: 'Вильнюс',
                                    url: 'Книга22'
                                },
                                {
                                    title: 'Вилюй',
                                    url: 'Книга22'
                                },
                                {
                                    title: 'Выдропужск',
                                    url: 'Книга22'
                                },
                                {
                                    title: 'Вятка',
                                    url: 'Книга22'
                                },
                            ]
                        },
                        {
                            title: 'Д',
                            content: [
                                {
                                    title: 'Книга33',
                                    url: 'Книга33'
                                },
                                {
                                    title: 'Книга33',
                                    url: 'Книга33'
                                },
                                {
                                    title: 'Книга33',
                                    url: 'Книга33'
                                },
                                {
                                    title: 'Книга33',
                                    url: 'Книга33'
                                },
                            ]
                        },
                        {
                            title: 'К',
                            content: [
                                {
                                    title: 'Книга44',
                                    url: 'Книга44'
                                },
                                {
                                    title: 'Книга44',
                                    url: 'Книга44'
                                },
                                {
                                    title: 'Книга44',
                                    url: 'Книга44'
                                },
                                {
                                    title: 'Книга44',
                                    url: 'Книга44'
                                },
                            ]
                        },
                        {
                            title: 'О',
                            content: [
                                {
                                    title: 'Книга55',
                                    url: 'Книга55'
                                },
                                {
                                    title: 'Книга55',
                                    url: 'Книга55'
                                },
                                {
                                    title: 'Книга55',
                                    url: 'Книга55'
                                },
                            ]
                        },
                        {
                            title: 'Р',
                            content: [
                                {
                                    title: 'Книга66',
                                    url: 'Книга66'
                                },
                                {
                                    title: 'Книга66',
                                    url: 'Книга66'
                                },
                            ]
                        },
                        {
                            title: 'Т',
                            content: [
                                {
                                    title: 'Книга77',
                                    url: 'Книга77'
                                },
                                {
                                    title: 'Книга77',
                                    url: 'Книга77'
                                },
                            ]
                        },
                        {
                            title: 'Щ',
                            content: [
                                {
                                    title: 'Книга88',
                                    url: 'Книга88'
                                },
                            ]
                        },
                    ]
                }
            },
            {
                title: 'Авторы',
                text: 'Список тем для статей из категории Авторы.',
                action: {
                    edit: [
                        {
                            title: 'Б',
                            content: [
                                {
                                    title: 'Автор1',
                                    url: 'Автор1'
                                },
                                {
                                    title: 'Автор1',
                                    url: 'Автор1'
                                },
                                {
                                    title: 'Автор1',
                                    url: 'Автор1'
                                },
                                {
                                    title: 'Автор1',
                                    url: 'Автор1'
                                },
                                {
                                    title: 'Автор1',
                                    url: 'Автор1'
                                },
                                {
                                    title: 'Автор1',
                                    url: 'Автор1'
                                },
                            ]
                        },
                        {
                            title: "Г",
                            content: [
                                {
                                    title: 'Автор2',
                                    url: 'Автор2'
                                },
                                {
                                    title: 'Автор2',
                                    url: 'Автор2'
                                },
                                {
                                    title: 'Автор2',
                                    url: 'Автор2'
                                },
                                {
                                    title: 'Автор2',
                                    url: 'Автор2'
                                },
                                {
                                    title: 'Автор2',
                                    url: 'Автор2'
                                },
                            ]
                        },
                        {
                            title: 'E',
                            content: [
                                {
                                    title: 'Автор3',
                                    url: 'Автор3'
                                },
                                {
                                    title: 'Автор3',
                                    url: 'Автор3'
                                },
                                {
                                    title: 'Автор3',
                                    url: 'Автор3'
                                },
                                {
                                    title: 'Автор3',
                                    url: 'Автор3'
                                },
                            ]
                        },
                        {
                            title: 'П',
                            content: [
                                {
                                    title: 'Автор4',
                                    url: 'Автор4'
                                },
                                {
                                    title: 'Автор4',
                                    url: 'Автор4'
                                },
                                {
                                    title: 'Автор4',
                                    url: 'Автор4'
                                },
                                {
                                    title: 'Автор4',
                                    url: 'Автор4'
                                },
                            ]
                        },
                        {
                            title: 'C',
                            content: [
                                {
                                    title: 'Автор5',
                                    url: 'Автор5'
                                },
                                {
                                    title: 'Автор5',
                                    url: 'Автор5'
                                },
                                {
                                    title: 'Автор5',
                                    url: 'Автор5'
                                },
                            ]
                        },
                        {
                            title: 'У',
                            content: [
                                {
                                    title: 'Автор6',
                                    url: 'Автор6'
                                },
                                {
                                    title: 'Автор6',
                                    url: 'Автор6'
                                },
                            ]
                        }
                    ],
                    add: [
                        {
                            title: 'А',
                            content: [
                                {
                                    title: 'Автор11',
                                    url: 'Автор11'
                                },
                                {
                                    title: 'Автор11',
                                    url: 'Автор11'
                                },
                                {
                                    title: 'Автор11',
                                    url: 'Автор11'
                                },
                                {
                                    title: 'Автор11',
                                    url: 'Автор11'
                                },
                                {
                                    title: 'Автор11',
                                    url: 'Автор11'
                                },
                                {
                                    title: 'Автор11',
                                    url: 'Автор11'
                                },
                            ]
                        },
                        {
                            title: "В",
                            content: [
                                {
                                    title: 'Автор22',
                                    url: 'Автор22'
                                },
                                {
                                    title: 'Автор22',
                                    url: 'Автор22'
                                },
                                {
                                    title: 'Автор22',
                                    url: 'Автор22'
                                },
                                {
                                    title: 'Автор22',
                                    url: 'Автор22'
                                },
                                {
                                    title: 'Автор22',
                                    url: 'Автор22'
                                },
                            ]
                        },
                        {
                            title: 'Д',
                            content: [
                                {
                                    title: 'Автор33',
                                    url: 'Автор33'
                                },
                                {
                                    title: 'Автор33',
                                    url: 'Автор33'
                                },
                                {
                                    title: 'Автор33',
                                    url: 'Автор33'
                                },
                                {
                                    title: 'Автор33',
                                    url: 'Автор33'
                                },
                            ]
                        },
                        {
                            title: 'К',
                            content: [
                                {
                                    title: 'Автор44',
                                    url: 'Автор44'
                                },
                                {
                                    title: 'Автор44',
                                    url: 'Автор44'
                                },
                                {
                                    title: 'Автор44',
                                    url: 'Автор44'
                                },
                                {
                                    title: 'Автор44',
                                    url: 'Автор44'
                                },
                            ]
                        },
                        {
                            title: 'О',
                            content: [
                                {
                                    title: 'Автор55',
                                    url: 'Автор55'
                                },
                                {
                                    title: 'Автор55',
                                    url: 'Автор55'
                                },
                                {
                                    title: 'Автор55',
                                    url: 'Автор55'
                                },
                            ]
                        },
                    ]
                }
            },
        ]
    }
]

if(infoFromJson.length) {
    data = infoFromJson;
}
else {
    data = mokData;
}


//Сбор в два разных массива всех статей и всех урл к ним
let arrayTitle = [],
    arrayUrl = [];
data.forEach((item) => {
    item.glossary.forEach((jtem) => {
        for(let i in jtem.action) {
            jtem.action[i].forEach((ktem) => {
                ktem.content.forEach((otem) => {
                    arrayTitle.push(otem.title);
                    arrayUrl.push(otem.url)
                });
            });
        }
    })
})
//--------

//Получаем элемент по селектору
function getElement(selector) {
    return document.querySelector(selector);
}

//Получаем массив элементов по селектору
function getArray(selector) {
    return document.querySelectorAll(selector);
}

// Убираем scroll у body
function noScrollBody () {
    document.body.style.overflowY = 'hidden';
}

// Возвращает scroll у body
function yesScrollBody () {
    document.body.style.overflowY = 'scroll';
}

// Функция открытия модалки по кнопке вызова модалки
function openModal(modal, wrapperModal) {
    if (window.innerWidth > 1023) {
        modal.classList.toggle('active');
    }
    else {
        modal.classList.add('active');
        wrapperModal.style.bottom = `${-wrapperModal.offsetHeight}px`;
        wrapperModal.addEventListener('pointermove', (e) => {
            e.preventDefault();
            if(e.target.classList.contains('js-popup-links-wrapper') && e.height > 10){
                closeModal(modal, wrapperModal);
            }
        });
        setTimeout(() => {
            wrapperModal.style.bottom = '0px';
        }, 100)
    }
}

// Функция закрытия модалки по кнопке вызова модалки
function closeModal(modal, modalWrapper) {
    yesScrollBody ();
    if (modalWrapper.style.bottom) {
        modalWrapper.style.bottom = `${-modalWrapper.offsetHeight}px`;
        setTimeout(() => {
            modal.classList.remove('active');
            modalWrapper.removeAttribute('style');
        }, 300)
    }
    else {
        modal.classList.remove('active');
    }
}

window.addEventListener('load', () => {
    let
        elHtml = document.documentElement,
        elDate = getElement('.js-date'),
        arrayModals = getArray('[class *= "js-modal-popup"]'),
        arrayModalsCross = getArray('[class *= "js-modal-cross"]'),
        arrayButtonsCallModal = getArray('[class *= "js-modal-call"]'),
        arrButtonsSize = getArray('.js-buttons-size'),
        arrModalsWrapper = getArray('[class *= "js-modal-wrapper"]'),
        elSizeText = getElement('.js-size-text'),
        arrButtonsColor = getArray('.js-buttons-color'),
        arrButtonsFont = getArray('.js-buttons-font'),
        elBlocks = getElement('.js-blocks'),
        arrayBlocks = [],
        currentIndex = 0,
        elState1 = getElement('.js-state1'),
        elState2 = getElement('.js-state2'),
        elGlossary = getElement('.js-glossary'),
        elName = getElement('.js-glossary-name'),
        elSubName = getElement('.js-glossary-subject'),
        elSwitcher = getElement('.js-switcher'),
        elAdd = getElement('.js-add'),
        elEdit = getElement('.js-edit'),
        elMenu = getElement('.js-menu'),
        elBase = getElement('.js-base'),
        currentIndexGlossary = Number(elBase.dataset.indexGlossary),
        type,
        arrLists = [],
        elBurger = getElement('.js-burger'),
        elSidebar = getElement('.js-sidebar'),
        elButtonMore = getElement('.js-call-more'),
        elPopupMore = getElement('.js-popup-more'),
        elBurgerClose = getElement('.js-burger-close'),
        elButtonCallSearch = getElement('.js-call-search'),
        elForSearch = getElement('.js-for-search'),
        elSearch = getElement('.js-search'),
        elResultSearch = getElement('.js-header-search-result'),
        elResultSearchWrapper = getElement('.js-header-search-wrapper'),
        elResultSearchContent = getElement('.js-header-search-content'),
        elClearSearch = getElement('.js-header-search-clear'),
        elLayerSearch = getElement('.js-layer-search'),
        elInput = getElement('.js-input'),
        elButtonToState1 = getElement('.js-gotoState1');

    //Вывод текущей даты
    let dataDate = new Date();
    elDate.textContent = dataDate.getDate();

    //Открытие модалок
    arrayButtonsCallModal.forEach((item, index) => {
        item.addEventListener('click', () => {
            if(String(item.classList).indexOf('more')) {
                item.classList.toggle('active');
            }
            openModal(arrayModals[index], arrModalsWrapper[index])
        })
    })

    //Закрытие модалок по крестику
    arrayModalsCross.forEach((item, index) => {
        item.addEventListener('click', () => {
            closeModal(arrayModals[index], arrModalsWrapper[index]);
        })
    })

    //Закрытие модалок если нажали мимо модалки
    arrayModals.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            if(window.innerWidth > 1023) {
                if (!e.target.classList.contains('js-modal')) {
                    closeModal(arrayModals[index], arrModalsWrapper[index]);
                }
            }
            else {
                if (e.target.classList.contains('active') && (!e.target.classList.contains('more'))) {
                    closeModal(arrayModals[index], arrModalsWrapper[index]);
                }
            }
        })
    })

    /*Изменение размера текста*/
    let arrLabelSize = [];
    arrButtonsSize.forEach((item) => {
        arrLabelSize.push(item.parentElement);
    })
    arrButtonsSize.forEach((item) => {
        item.addEventListener('click', (e) => {
            elHtml.classList.remove('text-small', 'text-medium', 'text-big');
            for (let i of arrLabelSize) {
                i.classList.remove('active');
            }
            item.parentElement.classList.add('active');
            elSizeText.textContent = item.dataset.info;
            elHtml.classList.add(item.dataset.class);
            closeModal(e.target.parentNode.parentNode.parentNode.parentNode.parentNode, e.target.parentNode.parentNode.parentNode.parentNode);
        })
    })

    /*Нажатие на выбор цвета*/
    let arrLabelColor = [];
    arrButtonsColor.forEach((item) => {
        arrLabelColor.push(item.parentElement);
    })
    arrButtonsColor.forEach((item) => {
        item.addEventListener('click', (e) => {
            elHtml.classList.remove('dark-theme', 'sepia-theme', 'white-theme');
            for (let i of arrLabelColor) {
                i.classList.remove('active');
            }
            item.parentElement.classList.add('active');
            elHtml.classList.add(item.dataset.class);
            closeModal(e.target.parentNode.parentNode.parentNode.parentNode, e.target.parentNode.parentNode.parentNode);
        })
    })

    /*Нажатие на выбор типа шрифта*/
    let arrLabelFont = [];
    arrButtonsFont.forEach((item) => {
        arrLabelFont.push(item.parentElement);
    })
    arrButtonsFont.forEach((item) => {
        item.addEventListener('click', (e) => {
            elHtml.classList.remove('family-sans-serif', 'family-serif');
            for (let i of arrLabelFont) {
                i.classList.remove('active');
            }
            item.parentElement.classList.add('active');
            elHtml.classList.add(item.dataset.class);
            closeModal(e.target.parentNode.parentNode.parentNode.parentNode, e.target.parentNode.parentNode.parentNode);
        })
    })

    /*Нажатие на кнопку бургера*/
    elBurger.addEventListener('click', () => {
        if (!elBurger.classList.contains('active')) {
            //elBurger.classList.add('active');
            elSidebar.classList.add('active');
        }
        else {
            elBurger.classList.remove('active');
            elSidebar.classList.remove('active');
        }
    })

    //Закрытие бургера в мобилке
    elBurgerClose.addEventListener('click', () => {
        elSidebar.classList.remove('active');
    })

    //Нажатие на кнопку ЕЩЕ
    elButtonMore.addEventListener('click', () => {
        elButtonMore.classList.toggle('active');
        elPopupMore.classList.toggle('active');
    })

    //Переключение кнопок в переключателе
    for(let item of elSwitcher.querySelectorAll('div')) {
        item.addEventListener('click', function () {
            item.classList.add('active');
            elGlossary.textContent = '';
            if(this.classList.contains('js-add')) {
                elBase.dataset.type = 'add';
                elEdit.classList.remove('active');

            }
            if(this.classList.contains('js-edit')) {
                elBase.dataset.type = 'edit';
                elAdd.classList.remove('active');
            }
            type = elBase.dataset.type;
            createGlossary(currentIndex, currentIndexGlossary, type);
        });
    }

    // Создание блоков на главной
    function createSubjects() {
        elBlocks.textContent = '';
        data.forEach((item, index) => {
            let itemBlock;
            itemBlock = document.createElement('div');
            itemBlock.classList.add('blocks__item');
            itemBlock.classList.add('js-subject');
            itemBlock.addEventListener('click', createStartView);
            itemBlock.innerHTML = `<div class="blocks__item-img">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="38" viewBox="0 0 30 38" fill="none"><path xmlns="http://www.w3.org/2000/svg" d="M9 29H21M9 23H21M17.0008 1.00174C16.8097 1 16.5948 1 16.3494 1H7.40039C5.16018 1 4.03924 1 3.18359 1.43598C2.43095 1.81947 1.81947 2.43095 1.43597 3.18359C1 4.03924 1 5.16018 1 7.40039V30.6004C1 32.8406 1 33.9601 1.43598 34.8158C1.81947 35.5684 2.43095 36.181 3.18359 36.5645C4.03841 37 5.15801 37 7.39388 37L22.6062 37C24.842 37 25.96 37 26.8148 36.5645C27.5674 36.181 28.181 35.5684 28.5645 34.8158C29 33.961 29 32.843 29 30.6072V13.6514C29 13.406 28.9998 13.1911 28.998 13M17.0008 1.00174C17.5717 1.00695 17.9314 1.02813 18.2764 1.11094C18.6845 1.20893 19.0757 1.37053 19.4336 1.58984C19.8371 1.83713 20.1836 2.18363 20.875 2.875L27.126 9.12597C27.8178 9.81777 28.1617 10.1627 28.4091 10.5664C28.6284 10.9243 28.7907 11.3145 28.8887 11.7227C28.9715 12.0676 28.9928 12.4291 28.998 13M17.0008 1.00174L17 6.60042C17 8.84063 17 9.9603 17.436 10.8159C17.8195 11.5686 18.4309 12.181 19.1836 12.5645C20.0384 13 21.158 13 23.3938 13H28.998" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </div>
                                    <div class="blocks__item-title">${item.theme}</div>
                                   <div class="blocks__item-text js-text"></div>`;
            elBlocks.append(itemBlock);
            let arrText = getArray('.js-text');
            data[index].subThemes.forEach((itemText) => {
                let elSpan = document.createElement('SPAN');
                elSpan.textContent = String(itemText);
                arrText[index].append(elSpan);
            });
        })
    }
    createSubjects();

    // Функция создания правого меню
    function createMenu() {
        let elMenuItem;
        if(getArray('.js-menu-item').length) {
            getArray('.js-menu-item').forEach((item) => {
                item.remove();
            })
        }
        data.forEach((item, index) => {
            elMenuItem = document.createElement('DIV');
            elMenuItem.classList.add('menu__item');
            elMenuItem.classList.add('js-menu-item');
            elMenuItem.innerHTML = `<div class="menu__item-title">${item.theme}</div>
                               <div class="menu__item-list js-list"></div>`;
            elMenu.querySelector('.js-modal-wrapper-menu').append(elMenuItem);
            arrLists = getArray('.js-list');
            item.subThemes.forEach((itemList) => {
                let elList = document.createElement('SPAN'),
                    elB = document.createElement('B');
                elB.textContent = String(itemList);
                elList.append(elB);
                elList.addEventListener('click', function () {
                    let arrMenuList = getArray('.js-list > span');
                    arrMenuList.forEach((item) => {
                        item.classList.remove('active');
                    })
                    data.forEach((item, index) => {
                        if(this.parentElement.previousElementSibling.textContent === item.theme) {
                            currentIndex = index;
                        }
                    })
                    data[currentIndex].glossary.forEach((item,index) => {
                        if(item.title === this.textContent) {
                            currentIndexGlossary = index;
                        }
                    });
                    if(window.innerWidth < 1024) {
                        closeModal(arrayModals[arrayModals.length - 1], arrModalsWrapper[arrModalsWrapper.length - 1]);
                    }
                    this.classList.add("active");
                    elName.textContent = data[currentIndex].glossary[currentIndexGlossary].title;
                    elSubName.textContent = data[currentIndex].glossary[currentIndexGlossary].text;
                    createGlossary(currentIndex, currentIndexGlossary, type);
                });
                arrLists[index].append(elList);
            })
        })
    }

    // Функция создания глоссария
    function createGlossary(indexTheme, indexGlossary, typeAction) {
        elGlossary.textContent = '';
        data[indexTheme].glossary[indexGlossary].action[typeAction].forEach((item, index) => {
            let elItem = document.createElement('div');
            elItem.classList.add('glossary__item');
            elItem.innerHTML =`<div class="glossary__item-title">${item.title}</div>
                               <div class="glossary__list js-glossary-list"></div>`;
            elGlossary.append(elItem);
            let arrLinks = getArray('.js-glossary-list');
            item.content.forEach((itemLink) => {
                let elLink = document.createElement('A');
                let elB = document.createElement('B');
                elLink.setAttribute('href', `https://ru.ruwiki.ru/wiki/${itemLink.url}`);
                elB.textContent = itemLink.title;
                elLink.append(elB);
                arrLinks[index].append(elLink);
            });
        })
    }

    // Функция создания стартового вида второго экрана
    function createStartView() {
        // Получаем индекс блока куда нажали
        arrayBlocks = getArray('.js-subject');
        for(let i = 0; i < arrayBlocks.length; i++) {
            if(arrayBlocks[i] === this) {
                currentIndex = i;
            }
        }
        //---
        // Убрали первое состояние и показали второе
        elState1.classList.remove('active');
        elState2.classList.add('active');
        //---
        type = elBase.dataset.type;
        // При выборы любой темы по умолчанию показывам первую подтему со всеми данными
        createGlossary(currentIndex, currentIndexGlossary, type);
        //---
        elName.textContent = data[currentIndex].glossary[0].title;
        elSubName.textContent = data[currentIndex].glossary[0].text;
        //getElement('.glossary').style.width = `${elState2.offsetWidth - elMenu.offsetWidth - 32 - 15}px`;
        createMenu();
        //Выделение первого элемента из блока
        getArray('.js-list span').forEach((item) => {
            item.classList.remove('active');
        })
        let currentBlockMenu = getArray('.js-list')[currentIndex];
        currentBlockMenu.querySelectorAll('span')[0].classList.add('active');
        //----
        //Включена только первая кнопка в переключателе
        elAdd.classList.add('active');
        elEdit.classList.remove('active');
    }

    // Показать поиск в мобиле
    elButtonCallSearch.addEventListener('click', () => {
        elForSearch.classList.add('active');
    })
    //-----

    //Скрыть поле поиска
    elForSearch.addEventListener('click', (e) => {
        if(e.target === elForSearch) {
            elForSearch.classList.remove('active');
        }
    })
    //-----

    //Ввод данных в поле ввода
    let arrayValTitle = [],// массив значений названий статей
        arrayVatUrl = [], // массив занчений url-адресов статей
        matched; // Совпавшая подстрока
    elInput.addEventListener('input', () => {
        elSearch.classList.add('active');
        elLayerSearch.classList.add('active');
        noScrollBody();
        arrayValTitle = []; // обнуляем массив
        arrayVatUrl = [];
        // Если есть сопадения, то счетчик совпадний увеличиваем
        for(let i of arrayTitle) {
            if(i.toLowerCase().indexOf(elInput.value.toLowerCase()) === 0) {
                matched = i.substr(0, elInput.value.length).toLowerCase();
                break;
            }
        }
        //----
        //Собираем массив из совпадений по введенным значениям
        arrayTitle.forEach((item, index) => {
            if(item.toLowerCase().indexOf(matched) === 0) {
                arrayValTitle.push(item);
                arrayVatUrl.push(arrayUrl[index]);
            }
            if (!elInput.value) {
                arrayValTitle = [];
                arrayVatUrl = []
            }
        })
        //------
        //Отрисовываем выдачу поиска
        elResultSearchWrapper.textContent = '';
        if(window.innerWidth < 1024) {
            elResultSearch.style.maxHeight = `${window.innerHeight - 100}px`;// 100 - высота строки поиска
        }
        if(arrayValTitle.length) {
            elResultSearch.classList.add('active');
            elResultSearchContent.classList.add('active');
            arrayValTitle.forEach((item, index) => {
                let elLink = document.createElement("A");
                elLink.classList.add('header-search-result__item');
                elLink.textContent = item;
                elLink.setAttribute('href', arrayVatUrl[index]);
                elResultSearchWrapper.append(elLink);
            })
        }
        else {
            elResultSearch.classList.remove('active');
            elResultSearchContent.classList.remove('active');
        }
        //------
    })

    elClearSearch.addEventListener('click', clearSearch);
    elLayerSearch.addEventListener('click', clearSearch);
    function clearSearch () {
        yesScrollBody();
        elLayerSearch.classList.remove('active');
        elForSearch.classList.remove('active');
        elInput.value = '';
        arrayValTitle = [];
        arrayVatUrl = [];
        elLayerSearch.classList.remove('active');
        elSearch.classList.remove('active');
        elResultSearch.classList.remove('active');
        elResultSearchWrapper.textContent ='';
        elResultSearchContent.classList.remove('active');
        elResultSearch.style ='';

        /*arrResultSearch[indexButtonSearch].classList.remove('active');
        arrClearSearch[indexButtonSearch].classList.remove('active');
        if(arrResultItems.length) {
            for(let item of arrResultItems) {
                item.href = '';
                item.textContent = '';
            }
        }*/
    }

    //Переход в блок с темами
    elButtonToState1.addEventListener('click', () => {
        elState1.classList.add('active');
        elState2.classList.remove('active');
        closeModal(arrayModals[arrayModals.length - 1], arrModalsWrapper[arrModalsWrapper.length - 1]);
    })
})

