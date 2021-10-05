const WeddingContext = {
    header: {
        husband: 'lucas',
        wife: 'Cami',
        date: '31/12/2021'
    },
    events: {
        sameDay: false,
        date: new Date(2021, 11, 31, 18, 0, 0),
        ceremony: {
            date: '31 de Diciembre de 2021',
            hours: '18:00',
            place: 'Zebra lago Eventos',
            ubication: 'Cañuelas, Bs As, Argentina',
            mapsLink: 'https://goo.gl/maps/aDLRvDAScRGWDkJR7'
        },
        party: {
            date: '30 de Diciembre de 2021',
            hours: '18:00',
            place: 'Zebra lago Eventos',
            ubication: 'Cañuelas, Bs As, Argentina',
            mapsLink: 'https://goo.gl/maps/aDLRvDAScRGWDkJR7'
        }
    },
    reservation: {
        message: "¡Esperamos que puedas acompañarnos!\nPor eso te pedimos que nos confirmes tu asistencia antes del 22/10/21\nDress code: ELEGANTE",
        link: 'https://forms.gle/bfsmuzVxT1zNYsSq6',
    },
    carousel: {
        hashtag: '#LucasyCami',
        hashtagLink: 'https://www.instagram.com/explore/tags/hastag'
    },
    musicQuiz: {
        formLink: 'https://forms.gle/QDoWA2u9Kpz63y1a7'
    },
    giftCard: {
        message: "Si deseas hacernos un regalo\nPodes colaborar con nuestra luna de miel...",
        showBank: true,
        name: 'Camila Belen',
        cbu: '0178952612318354563267',
        dni: 38928949,
        alias: 'para mancha cosa',
        bank: 'Banco Provincia de Buenos Aires'
    }
}

export default WeddingContext