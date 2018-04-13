// const test = (a,b) => {
// // debugger;
//   return a+b;

// }
// test(1,2);


function foo1()
{
  return {
    bar: "hello"
  };
}

function foo2()
{
  return(
    {
      bar: "hello"
    }
  )
}


class GuitarAmp {
  constructor({ cabinet = 'spruce', distortion = '1', volume = '0' } = {}) {
    Object.assign(this, {
      cabinet, distortion, volume
    });
    console.log(this.props);
  }

  fight(num) {
    return num +2;
  }
}

class BassAmp extends GuitarAmp {
  constructor(options = {}) {
    super(options);
    this.lowCut = options.lowCut;
  }
}

class ChannelStrip extends BassAmp {
  constructor(options = {}) {
    super(options);
    this.inputLevel = options.inputLevel;
  }
}

var hi = new GuitarAmp('hello');
console.log(hi);

console.log(hi.fight(2))