var str = '';
str = str
if(moneyIn === '£5' || moneyIn === '£2'|| moneyIn === '£1'){
var newMon = parseInt(moneyIn[1]) * 100;
}
else if( moneyIn === '20p'|| moneyIn === '50p'){
newMon = parseInt(moneyIn);
console.log(newMon);
}
else {
return moneyIn;
}
var twenty = Math.floor(newMon/20);
var ten = (newMon - twenty20)/10;

for(var i = 0; i < twenty; i++){
str += '20p ';
}
for(var j = 0; j < ten; j++){
str += '10p ';
}
return str;
}