// 暴力挖坑法
// function sortArray(arr: Array<number>): Array<number> {
//   if (arr.length <= 1) return arr;

//   //选取基准
//   let l = 0;
//   let r = arr.length - 1;
//   let temp = arr[l];
//   arr[l] = Infinity;

//   while (l < r) {
//     if (arr[l] === Infinity) {
//       if (arr[r] >= temp) {
//         r--;
//       } else {
//         arr[l] = arr[r];
//         arr[r] = Infinity;
//         l++;
//       }
//     } else if (arr[r] === Infinity) {
//       if (arr[l] <= temp) {
//         l++;
//       } else {
//         arr[r] = arr[l];
//         arr[l] = Infinity;
//         r--;
//       }
//     }
//   }

//   arr[l] = temp;

//   return [
//     ...sortArray(arr.slice(0, l)),
//     arr[l],
//     ...sortArray(arr.slice(l + 1)),
//   ];
// }

//分治法
// function sortArray(arr: Array<number>): Array<number> {
//   if (arr.length < 1) return arr;

//   const temp = arr[0];
//   const left = arr.filter((num) => num < temp);
//   const right = arr.filter((num) => num > temp);

//   return [...sortArray(left), temp, ...sortArray(right)];
// }

//原地快排
function sortArray(arr: Array<number>): Array<number> {
  quickSort(arr, 0, arr.length - 1);
  return arr;
}

function quickSort(arr: number[], left: number, right: number) {
  if (left >= right) return;

  let l = left;
  let r = right;
  const pivot = arr[left];

  while (l < r) {
    while (arr[r] >= pivot && l < r) {
      r--;
    }
    arr[l] = arr[r];

    while (arr[l] <= pivot && l < r) {
      l++;
    }
    arr[r] = arr[l];
  }

  arr[l] = pivot;

  quickSort(arr, left, l - 1);
  quickSort(arr, l + 1, right);
}

console.log(sortArray([3, 1, 2, 5, 4]));
