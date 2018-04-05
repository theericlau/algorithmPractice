function oddNumbers(l, r) {
  let arr = [];
  for (let i = l; i <= r; i++) {
    if (i % 2) {
      arr.push(i);
    }
  }
  return arr;
}


function findNumber(arr, k) {
  if (arr.indexOf(k) >= 0) {
    return 'YES'
  } else {
    return 'NO'
  }
}


var factories = [

  {
    'factory name': 'c&h plush',
    'products': 'stuffed animals',
    'rating': 'B',
    'VIP': false,
    'monthly capacity': 100000,
    'total current orders': 10000,
    'days to deliver': 20,
    'shipping port': ['yantian']
  },
  {
    'factory name': 'Fox Con',
    'products': 'electronics',
    'rating': 'A',
    'VIP': true,
    'monthly capacity': 1000000,
    'total current orders': 1000000,
    'days to deliver': 10,
    'shipping port': ['yantian', 'shanghai', 'beijing']
  },
  {
    'factory name': 'SS clothing',
    'products': 'textiles',
    'rating': 'F',
    'VIP': true,
    'monthly capacity': 10000,
    'total current orders': 0,
    'days to deliver': 30,
    'shipping port': ['yantian']
  }

];

const getFactoryWithVIP = (array) => {
  return array.filter(each=> {
    return each.VIP && each['monthly capacity'] > 1000
  }).map((data) => data['factory name'])
}

console.log(getFactoryWithVIP(factories));