/*
Path sathe work karvuu hoi to path module no upyog karvo pade. 

dirname():- Kaya folder ma file chhe te batave chhe. badha sub folders na name batavse
aa file mate dirname() return kare che D:/TEC
basename():- File nu full name batave chhe.
aa file mate basename() return kare che abcd.html
extname():- File nu extension batave chhe.
aa file mate extname() return kare che .html
parse():- akhi directory ne parse karva mate upyog thay chhe. te directory ni information object ma return kare chhe.
aa file mate parse() return kare che {
  root: 'D:/',
  dir: 'D:/TEC',
    base: 'abcd.html',
    ext: '.html',
    name: 'abcd'
}

Extension check karva mate parse() no upyog kari ne extension check kari sakay chhe.
*/

var pm = require('path');
path = pm.dirname("D:/TEC/abcd.html");
console.log(path)
path1 = pm.basename("D:/TEC/abcd.html");
console.log(path1)
extension = pm.extname("D:/TEC/abcd.html");
console.log(extension)
path2 = pm.parse("D:/TEC/abcd.html");
console.log(path2)

if(path2.ext == ".html"){
    console.log("allow")
}
else{
    console.log("not allow")
}