/* */ 
'use strict';
var classof = require("./$.classof"),
    test = {};
test[require("./$.wks")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  require("./$.redef")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}
