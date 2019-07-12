var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        msg: 'Hello Vue!',
        rawHtml: '<span style="color:red">This should be red</span>',
        url: 'https://www.baidu.com',
        attribute: 'href',
        ok:false
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
        /*计算属性 computed， 缓存方法 methods
        computed: {
            // 计算属性的 getter
            reversedMessage: function () {
                // `this` 指向 vm 实例
                return this.message.split('').reverse().join('')
            }
        }*/
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
    el: '#app-7',
    data: {
        groceryList: [
            {id: 0, text: '学习Java 8'},
            {id: 1, text: '学习JOOQ'},
            {id: 2, text: '学习Vue'}
        ]
    }
})
var app8 = new Vue({
    el: '#app-8',
    data: {
        styleObject: {
            color: 'red',
            fontSize: '13px'
        }
    }
})

var app9 = new Vue({
    el: '#app-9',
    data: {
        isActive: true,
        hasError: true
    }
})

