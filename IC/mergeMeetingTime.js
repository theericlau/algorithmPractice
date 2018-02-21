function mergeTimeSlots(timeSlots) {
  timeSlots = timeSlots.sort(); //Implement comparator
  const results = [timeSlots[0]];

  for (let i = 1; i < timeSlots.length; i += 1) {

    if (timeSlots[i].startTime <= results[results.length - 1].endTime) {
      results[results.length - 1].endTime = Math.max(timeSlots[i].endTime, results[results.length - 1].endTime);
    } else {
      results.push(timeSlots[i]);
    }
  }
  return results;
}

function mergeTimeSlotsInPlace(timeSlots) {
  timeSlots = timeSlots.sort(function (a, b) {
    return a.startTime - b.startTime;
  });

  let mergedSlot = 0;
  let currentSlot = 1;

  for (currentSlot; currentSlot < timeSlots.length; currentSlot += 1) {
    if (timeSlots[currentSlot].startTime <= timeSlots[mergedSlot].endTime) {
      timeSlots[mergedSlot].endTime = Math.max(timeSlots[currentSlot].endTime, timeSlots[mergedSlot].endTime)
    } else {
      mergedSlot += 1;
      timeSlots[mergedSlot] = timeSlots[currentSlot];
    }
  }
  timeSlots.length = mergedSlot + 1;
  return timeSlots;
}

function quickSort() {

}

console.log(mergeTimeSlotsInPlace([
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
]), 'should return [{startTime: 0, endTime: 1}, {startTime: 3, endTime: 8}, {startTime: 9, endTime: 12}]')

