const app = Vue.createApp({
    //////////////////////////////// template: '<h1>Welcome learn vue 3</h1>'
    data() {
        return {
            url: 'http://www.toanchet.com',
            showbooks: true,
            books: [{
                    title: 'Name of the wind ',
                    author: 'patrick rothfuss',
                    img: 'assets/1.png',
                    isFav: true
                },
                {
                    title: 'The way of kings',
                    author: 'brandon sanderson',
                    img: 'assets/2.png',
                    isFav: false
                },
                {
                    title: 'The final emire ',
                    author: 'brandon sanderson',
                    img: 'assets/3.png',
                    isFav: true
                },
                {
                    title: 'Joincoder ',
                    author: 'Mr.joincoder',
                    img: 'assets/1.png',
                    isFav: false
                },
            ]
        }
    },
    methods: {
        changeTitle() {
            this.title = 'This title has been changed'
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        },
        changebooks(title) {
            this.title = title
        },
        toggleshowbooks() {
            this.showbooks = false
        },
        hideshow() {
            this.showbooks = !this.showbooks
        },
        handleEvent(ev) {
            console.log(ev, ev.type);
        }
    },
});
app.mount('#app');