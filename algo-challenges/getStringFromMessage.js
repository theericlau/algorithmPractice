/* Given a message seaparate the message into chunks of 160 length

*/

var message = `Feel free to send a pull request to add more strings, or additional sections. However, please do not send pull requests with very-long strings (255+ characters), as that makes the list much more difficult to view.

Likewise, please do not send pull requests which compromise manual usability of the file.This includes the EICAR test string, which can cause the file to be flagged by antivirus scanners, and files which alter the encoding of blns.txt.Also, do not send a null character(U + 0000) string, as it changes the file format on GitHub to binary and renders it unreadable in pull requests.Finally, when adding or removing a string please update all files when you perform a pull request.`

var messageParse = (message, length) => {
  let array = [];
  let string = '';
  let recurse = (message) => {
    if (string.length === length) {
      console.log('string');
      array.push(string);
      string = '';
    }
    // for (let i = 0; i < message.length; i++) {
    string = string.concat(message[0]);
    message = message.slice(1);
    if (message) {
      recurse(message);
    }
  }
  recurse(message);
  return array;
}

var messageParseSplit = (message, length) => {
  let array = [];
  let multiple = 0;
  let totalSplit = Math.ceil(message.length / length);
  for (let i = 0; i < totalSplit; i++) {
    array.push(message.substring(multiple, multiple + length));
    multiple += length;
  }
  return array;
}

console.log(messageParseSplit(message, 160));




// console.log(messageParse(message, 150));