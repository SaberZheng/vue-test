var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        msg: 'Hello Vue!',
        rawHtml:'<span style="color:red">This should be red</span>'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于 ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue(
    {
        el: '#app-4',
        data: {
            todos: [
                {text: '学习Java 8'},
                {text: '学习JOOQ'},
                {text: '学习Vue'}
            ]

        }
    }
)

var app5 = new Vue(
    {
        el: '#app-5',
        data: {
            message: 'Hello Vue!'
        },
        methods: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('');
            }
        }
    }
)

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: "#app-7",
    data: {
        groceryList: [
            {id: 0, text: '学习Java 8'},
            {id: 1,text: '学习JOOQ'},
            {id: 2,text: '学习Vue'}
        ]
    }
})

