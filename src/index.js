module.exports = function toReadable (number) {
  const first = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
  const tens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  const toon = ['', 'thousand', 'million', 'billion', 'trillion'];
  let word = '';

  for (let i = 0; i < toon.length; i++) {
    let testNumber = number%(100*Math.pow(1000,i));
    if (Math.floor(testNumber/Math.pow(1000,i)) !== 0) {
      if (Math.floor(testNumber/Math.pow(1000,i)) < 20) {
        word = first[Math.floor(testNumber/Math.pow(1000,i))] + toon[i] + ' ' + word;
      } else {
        word = tens[Math.floor(testNumber/(10*Math.pow(1000,i)))] + ' ' + first[Math.floor(testNumber/Math.pow(1000,i))%10] + toon[i] + ' ' + word;
      }
    }

    testNumber = number%(Math.pow(1000,i+1));
    if (Math.floor(testNumber/(100*Math.pow(1000,i))) !== 0) word = first[Math.floor(testNumber/(100*Math.pow(1000,i)))] + 'hundred ' + word;
  }
    if (number == 0) {
    return 'zero';
  }
    return word.trimEnd();
}
