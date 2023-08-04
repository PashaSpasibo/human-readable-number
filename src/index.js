module.exports = function toReadable (number) {
  let numbers = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
   'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  let tenNumbers = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    
  if (number === 0) { return 'zero'}
  else if (number<20) {return numbers[number]}
  else {
    let n = number.toString();
    let result = [];

    if(n.length==3){
      result.push(`${numbers[n[0]]} hundred`);
    }
    if (n[n.length-2]!=='0'){
      if (n[n.length-2]=='1'){
        result.push(numbers[n.slice(n.length-2, n.length)])
        return result.join(' ')
      }
      else {
        result.push(tenNumbers[n[n.length-2]])
      }
    }
    if(n[n.length-1]!=='0'){
      result.push(numbers[n[n.length-1]])
      }
      
    return result.join(' ')
  }
}