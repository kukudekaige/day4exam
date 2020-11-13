const Mock = require("mockjs")

const data = Mock.mock({
    "list|8": [
        {
            "url": "@image(50x50,@color)",
            "title": "@ctitle(4)",
            "dest": "@cword(8,12)"
        }
    ]
})


module.exports = data