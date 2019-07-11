module.exports = {
    title: '浪子',
    description: '浪子的天下',
    themeConfig:{
        sidebar:[
            {
                title:'入门',
                collapsable:false,
                children:[
                    '/install/',
                    '/get_started/'
                ]
            },{
                title:'组件',
                collapsable:false,
                children:[
                    '/components/button.md'
                ]
            }
           
        ],
        nav:[
            {text:'主页',link:'/'},
            {text:'文档',link:'/guide/'}
        ]
  }
}