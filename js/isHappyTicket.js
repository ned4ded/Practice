/* Счастливым билетом называют такой билет с шестизначным номером, где сумма первых трех цифр равна сумме последних трех.
Например, билет с номером 385916 - счастливый, так как 3 + 8 + 5 = 9 + 1 + 6 */

var text = "blah blah bgah Peka\
blah blah Keka blah Geka Lena";

var myName = "Geka";

var hits =[];

for (i = 0; i < text.length; i++) {
    if (text[i] === myName[0]) {
      var j = i;
      nameComparison = (n) => {
        var textName = text[j] + nameComparison(j+1);
        return textName;
      };
      hits.push(nameComparison(text[j]));
    }
};

if (hits.length === 0) {
    console.log("Your name wasn't found!");
}
else {
    console.log(hits);
}
