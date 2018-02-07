/*
Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/
const check = [1, [2], [3, [[4]]]];

const flatten = array => {
  //check each index to see if it's an array
  return array.reduce((acc, current) => {
    if (Array.isArray(current)) {
      return acc.concat(flatten(current));
    }
    return acc.concat(current);
  }, []);
    //if it's an array
      //reduce it and recurse
  // return array
};

console.log(flatten(check));

/*

Write a function, `ninetyPercentTime` that takes in a time in seconds and returns a string that is 90% of the original time, rounded to the nearst whole number.

For example:

> console.log(ninetyPercentTime('67s'));

returns '60s'

*/
// const calculate = (number)=>{
//   return Math.floor(number * .9);
// }

// const ninetyPercentTime = (seconds) => {
//   //split seconds by the s
//   const secondsArr = seconds.split('s');
//   //the first index will be the number and we'll parseInt that string to be a number
//   const number = parseInt(secondsArr[0])
//   //use a helper function to calculate 90% of that number
//   const percentNumber = calculate(number);
//   //stringify number and add s
//   return `${percentNumber}s`;
// }

// console.log(ninetyPercentTime('67s'));


// var videoResponse = {
//   channel: 'hrstudent',
//   kind: 'youtube#videoListResponse',
//   etag: 'UCBpFjp2h75_b92t44sqraUcyu0/sDAlsG9NGKfr6v5AlPZKSEZdtqA',
//   videos: [
//     {
//       id: '4fFVQWXf0pW',
//       kind: 'youtube#video',
//       title: 'Why EOS is the cyptocurrency of the future',
//       length: '1224s',
//       viewCount: '2102',
//       likeCount: '1024',
//       dislikeCount: '2',
//       favoriteCount: '84',
//       commentCount: '12',
//       annotation: {}
//     },
//     {
//       id: '7lCDEYXw3mM',
//       kind: 'youtube#video',
//       title: 'Google I/O 101: Q&A On Using Google APIs',
//       length: '250s',
//       viewCount: '31057',
//       likeCount: '25',
//       dislikeCount: '0',
//       favoriteCount: '2',
//       commentCount: '12',
//       annotation: {}
//     },
//     {
//       id: '2fCFWPXd1kL',
//       kind: 'youtube#video',
//       title: 'Liverpool vs Manchester city 4-3 full extended highlights',
//       length: '616s',
//       viewCount: '304498',
//       likeCount: '2120',
//       dislikeCount: '81',
//       favoriteCount: '16',
//       commentCount: '149',
//       annotation: {}
//     }
//   ]
// };


// /*

// Write a function, `totalViews`, that calculates how many total views the channel has and displays it in a message. Use a higher order function (such as forEach, map, filter, reduce) in your solution.


// For example

// > console.log(totalViews(videoResponse));

// would return 'hrstudent has 337657 total views'


// Note: Make sure your message is identical in structure to the example output above.

// */

// // const totalViews = (videoResponse) => {
// //   let views = 0;
// //   videoResponse.videos.forEach(video => {
// //     views += parseInt(video.viewCount);
// //   })
// //   return `hrstudent has ${views} total views`;
// // }

// // const totalViews = (videoResponse) => {
// //   const views = videoResponse.videos.reduce((acc, curr) => {
// //     console.log('acc', acc);
// //     return acc + parseInt(curr.viewCount);
// //   }, 0)
// //   console.log(views);
// //   return `hrstudent has ${views} total views`;
// // }

// const totalViews = (videoResponse) => {
//   const views = videoResponse.videos.map(video => video.viewCount).reduce((acc, curr) => {
//     return acc + parseInt(curr);
//   }, 0);
//   console.log(views);
//   return `hrstudent has ${views} total views`;
// }

// console.log(totalViews(videoResponse));


// /* 'Write a function, `bulkAnnotator`, that updates all of the data structure's annotation keys with a new object. The new object has three keys, `position`, `note`, and `time`. The values for `position` and `note` are determined by separate string inputs and `time` is automatically set as a time that is 90% of the way through the video.

// Use a higher order function (such as forEach, map, filter, reduce) in your solution.

// For example,
// > bulkAnnotator(videoResponse, 'top-right', 'Like and subscribe!');

// */

// const bulkAnnotator = (response, position, note) => {
//   response.videos.forEach((video) => {
//     video.annotation = {
//       position: position,
//       note: note,
//       time: ninetyPercentTime(video.length),
//     }
//   })

//   return response;
// }

// // console.log(bulkAnnotator(videoResponse, 'top-right', 'Like and subscribe!').videos);


// /*

// Write a function, `sortByLikes`, that takes in the data structure and returns an array of video ids sorted highest to lowest based on the number of likes.

// For example,

// > console.log(sortByLikes(videoResponse));

// returns ['2fCFWPXd1kL', '4fFVQWXf0pW', '7lCDEYXw3mM']

// */

// var sortByLike = (response) => {
//   const videos = [];
//   response.videos.forEach((video) => {
//     videos.push({like: video.likeCount, id: video.id })
//   })
//   videos.sort((a,b) => {
//     if (parseInt(a.like) > parseInt(b.like)) {
//       return -1;
//     } else {
//       return 1;
//     }
//   })
//   for (let i = 0; i < videos.length; i++ ) {
//     videos[i] = videos[i].id;
//   }
//   console.log(videos);
// }
// // sortByLike(videoResponse);

// var sortByViews = (response) => {
//   const videos = [];
//   response.videos.forEach((video) => {
//     videos.push({ view: video.viewCount, id: video.id })
//   })
//   videos.sort((a, b) => {
//     if (parseInt(a.view) > parseInt(b.view)) {
//       return -1;
//     } else {
//       return 1;
//     }
//   })
//   for (let i = 0; i < videos.length; i++) {
//     videos[i] = videos[i].id;
//   }
//   console.log(videos);
// }
// // sortByViews(videoResponse);