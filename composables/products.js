export function useProducts() {
    const salvation = {
        title: "Поводок с механизмом спасения",
        description: "Ваш питомец на надежном контроле. Специально разработанная запатентованная технология спасения " +
            "питомца сохранит ему жизнь в опасной ситуации",
        sizes: [
            {
                size: 's',
                colors: [
                    {color: 'black'},
                    {color: 'white'},
                    {color: 'green'},
                    {color: 'red'},
                ],
                price: 39,
                old_price: 50,
                currency: 'byn'
            },
            {
                size: 'm',
                colors: [
                    {color: 'black'},
                    {color: 'red'},
                ],
                price: 39,
                old_price: 50,
                currency: 'byn'
            },
            {
                size: 'l',
                colors: [
                    {colors: 'black'},
                    {colors: 'red'},
                ],
                price: 39,
                old_price: 50,
                currency: 'byn'
            },
        ],

    }


    const classic = {
        title: "Поводок классический",
        description: "Поводок, изготовленный из прочного нейлона, оснащенный удобным неповорачивающимся карабином, " +
            "пристегивающимся к ошейнику вашей собаки",
        sizes: [
            {
                size: 'm',
                colors: [
                    {color: 'black'},
                    {color: 'red'},
                ],
                price: 39,
                old_price: 50,
                currency: 'byn'
            }
        ]

    }

    return {
        salvation,
        classic
    }
}