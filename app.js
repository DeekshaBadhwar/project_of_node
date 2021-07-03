const _=require('lodash')
const items=[1,[2,[3,[4]]]]
const newItem=_.flattenDeep(items)
console.log(newItem)





















// const http =require("http")
// const server = http.createServer((req,res)=>{
//     if (req.url === '/about')
//     {
//         res.end("hello /")
//     }

//     if (req.url === '/')
//     {
//         res.end("hello/about")
//     }
//     res.end(
//     "<h1>oops !</h1>"
//     )
// })
// server.listen(5000)
// console.log("server is running")




