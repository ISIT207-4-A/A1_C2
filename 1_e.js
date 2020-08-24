let array = ['abcdefghi', 'abctki', 'tb21eT', '871', 'T4285T', 'ptxtxtxtxXYZuy', 'ept223edt', 'ba329', 'trtedtcxyzu'];
let array_size_6 = array.filter(word => word.length == 6);
console.log(array_size_6);


var regex_i = /^t....t$/i;
var regex_ii = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{3,7})$/;
var regex_iii = /(tx){2,}xyz/i;
console.log(array.filter(val => regex_i.test(val)));
console.log(array.filter(val => regex_ii.test(val)));
console.log(array.filter(val => regex_iii.test(val)));
