const mock = require('mock-data');
const { string: rStr, integer: rInt, date: rDate } = mock;

console.log(rStr(4, 8, 'aA').generate());
console.log(rInt(-100, 100));
console.log(rDate(1993, 2018, false, 'YYYY-MM-dd'));