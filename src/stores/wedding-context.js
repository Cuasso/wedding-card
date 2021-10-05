const WeddingContext = {
    header: {
        husband: 'Fiore',
        wife: 'Fabi',
        date: '20/11/2021'
    },
    events: {
        sameDay: false,
        date: new Date(2021, 10, 20, 20, 0, 0),
        party: {
            date: '20 de Noviembre de 2021',
            hours: '21:00',
            place: 'Golf Club Eventos',
            ubication: 'Camino de Cintura 9051, Bs As, Argentina',
            mapsLink: 'https://goo.gl/maps/ks9SCRXobyhBTYr78'
        },
        ceremony: {
            date: '20 de Noviembre de 2021',
            hours: '20:00',
            place: 'Golf Club Eventos',
            ubication: 'Camino de Cintura 9051, Bs As, Argentina',
            mapsLink: 'https://goo.gl/maps/ks9SCRXobyhBTYr78'
        }
    },
    reservation: {
        message: "¡Esperamos que puedas acompañarnos!\nPor eso te pedimos que nos confirmes tu asistencia antes del 22/10/21\nDress code: ELEGANTE",
        link: 'https://forms.gle/GqcVqNiWU2KLGBxE9',
    },
    carousel: {
        hashtag: '#FioreyFabi',
        hashtagLink: 'https://www.instagram.com/explore/tags/FioreyFabi'
    },
    musicQuiz: {
        formLink: 'https://forms.gle/4FM7JdQzdNGciu2aA'
    },
    giftCard: {
        message: "Si deseas hacernos un regalo, podes colaborar con nuestra luna de miel...\n En el salón habrá un cofre donde podrás depositar un sobre.",
        showBank: false,
        bankData: {
            name: '',
            cbu: '',
            dni: 0,
            alias: '',
            bank: ''
        }
    }
}

export default WeddingContext