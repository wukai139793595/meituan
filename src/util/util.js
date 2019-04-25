export function cutArr(arr, num, newArr) {
  if (arr.length <= num) {
    newArr.push(arr)
  } else {
    newArr.push(arr.splice(0, num));
    cutArr(arr, num, newArr)
  }
}

export function checkPhone(str) {
  if (/^1[34578]\d{9}$/.test(str.trim())) {
    return true
  } else {
    return false
  }
}

export function checkPassword(str) {
  if (/\w{4,16}/.test(str.trim())) {
    return true;
  } else {
    return false;
  }
}
