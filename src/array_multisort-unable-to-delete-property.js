'use strict'
var array_multisort = require("locutus/php/array/array_multisort");
try {
    array_multisort(["productIds[]", "_"], 'SORT_ASC', ["productIds[]=977385529", "_=1502965788347"]);
} catch (e) {
    console.error(e, e.stack);
}
phantom.exit();