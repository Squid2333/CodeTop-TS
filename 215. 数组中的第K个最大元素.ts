// 暴力
// function findKthLargest(nums: number[], k: number): number {
//   return nums.sort((a, b) => b - a)[k - 1];
// }

// 快排
// function findKthLargest(nums: number[], k: number): number {
//   const quickSelect = (left: number, right: number): number => {
//     if (left >= right) return nums[left];

//     // ✅【关键修复】随机选基准！解决重复数/有序数组超时！
//     const randomIdx = Math.floor(Math.random() * (right - left + 1)) + left;
//     [nums[left], nums[randomIdx]] = [nums[randomIdx], nums[left]];

//     const pivot = nums[left];
//     let l = left;
//     let r = right;

//     while (l < r) {
//       while (l < r && nums[r] <= pivot) r--;
//       nums[l] = nums[r];

//       while (l < r && nums[l] >= pivot) l++;
//       nums[r] = nums[l];
//     }

//     nums[l] = pivot;

//     if (l === k - 1) return nums[l];
//     if (l < k - 1) return quickSelect(l + 1, right);
//     else return quickSelect(left, l - 1);
//   };

//   return quickSelect(0, nums.length - 1);
// }

// 三路快排
function findKthLargest(nums: number[], k: number): number {
  const quickSelect = (left: number, right: number): number => {
    if (left >= right) return nums[left];

    // ✅【关键修复】随机选基准！解决重复数/有序数组超时！
    const randomIdx = Math.floor(Math.random() * (right - left + 1)) + left;
    [nums[left], nums[randomIdx]] = [nums[randomIdx], nums[left]];

    const pivot = nums[left];
    let l = left;
    let r = right;
    let i = l + 1;
    while (i <= r) {
      if (nums[i] > pivot) {
        [nums[i], nums[l]] = [nums[l], nums[i]];
        l++;
        i++;
      } else if (nums[i] < pivot) {
        [nums[i], nums[r]] = [nums[r], nums[i]];
        r--;
      } else {
        i++;
      }
    }

    if (k - 1 >= l && k - 1 <= r) return pivot;
    if (k - 1 > r) return quickSelect(r + 1, right);
    else return quickSelect(left, l - 1);
  };

  return quickSelect(0, nums.length - 1);
}

console.log(findKthLargest([3, 6, 4, 3, 2, 1, 5, 9], 2));
