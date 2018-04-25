const responseString = '<h1><span class="t">Pen Teice</span></h1>';



/*
Create a method to parse out all the children elements inside the string given a tag
*/

const parseTagFromHTML = (targetTag, html) => {
  debugger;
  const beginTag = `<${targetTag}`;
  const endTag = `</${targetTag}`;
  let current = 0;
  let startIndex = 0;
  let endIndex;
  let result = [];
  for (let i = 0; i < html.length; i++) {
    let endIndex = i;
    if (html.slice(startIndex, endIndex).includes(beginTag)) {
      let beginning = searchBeginningTagIndex(html.slice(endIndex)) + i;
      let findClosing = searchClosingTagIndex(html.slice(beginning), endTag) + beginning;
      console.log(beginning);
      console.log(findClosing);
    }
  }
};

const searchClosingTagIndex = (html, endTag) => {
  let startIndex = 0;
  for (let i = 0; i < html.length; i++) {
    if (html.slice(startIndex, i).includes(endTag)) {
      return i - endTag.length;    //130
    }
  }
}

const searchBeginningTagIndex = (html) => {
  for (let i = 0; i < html.length; i++) {
    if (html[i] === '>') {
      return i + 1;
    }
  }
  return null;
}

console.log(parseTagFromHTML('h1', responseString));