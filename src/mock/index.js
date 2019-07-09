const Mock = require("mockjs")


const data = Mock.mock({
    'code': 200,
    'errmesg': "",
    'data|20': [{
        "goodsId|+1": 1,
        "goodsTitle": "@cparagraph(1)",
        "goodsCenter": "@cparagraph()'",
        "goodsAuthor": "@ctitle(3, 5)",
    }]

})

// console.log(data)
// https://m.toutiao.com/
Mock.mock(/\/search\/searchDetail/, 'get', options => {
    console.log(options);
    return data;

})