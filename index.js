function myEach(collection, callback) {
    for(const keyOrIndex in collection) {
        callback(collection[keyOrIndex]);
    }
    return collection;
}

function myMap(collection, callback) {
    const mappedArr = [];
      for(const keyOrIndex in collection) {
        mappedArr.push(callback(collection[keyOrIndex]));
      }
    return mappedArr;
}

function myReduce(collection, callback, acc) {
    let skipFirstIteration = false;
    
    if (acc === undefined) {
      acc = Object.values(collection)[0];
      skipFirstIteration = true;
    }
    
    for (const keyOrIndex in collection) {
      if (skipFirstIteration) {
        skipFirstIteration = false;
        continue;
      }

      acc = callback(acc, collection[keyOrIndex], collection);
    }

    return acc;
  }

function myFind(collection, callback) {
    for (const keyOrIndex in collection) {
        if (callback(collection[keyOrIndex])) {
            return collection[keyOrIndex];
        }
    }
}

function myFilter(collection, callback) {
    const filteredArr = [];
    for (const keyOrIndex in collection) {
        if (callback(collection[keyOrIndex])) {
            filteredArr.push(collection[keyOrIndex]);
        }
    }
    return filteredArr;
}

function mySize(collection) {
    return Object.keys(collection).length;
}

function myFirst(arr, num) {
    if(num === undefined) {
      return arr[0];
    }
  return arr.splice(0, 3);
}

function myLast(arr, num) {
    if(num === undefined) {
        return arr[arr.length - 1];
    }
    return arr.splice(-num);
}

function myKeys(obj) {
    return Object.keys(obj);
}

function myValues(obj) {
    return Object.values(obj);
}