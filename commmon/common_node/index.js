let uniq = require("uniq");
let module1 = require("../../common_node/lib/node/module1");
let module2 = require("../../common_node/lib/node/module2");
let module3 = require("../../common_node/lib/node/module3");

module1.foo();
console.log(module1.mes);
module2();
module3.bar();
module3.foo();
let result = uniq(module3.arr);
console.log(result);
