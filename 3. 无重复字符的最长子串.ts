// 暴力枚举（超时）
// function lengthOfLongestSubstring(s: string): number {
//   const unrepeatClips = new Set();
//   let maxLength = 0;
//   for (let i = 0; i < s.length; i++) {
//     let clip = s[i];
//     if (!unrepeatClips.has(clip)) {
//       unrepeatClips.add(clip.split("").sort().join(""));
//       if (maxLength < 1) maxLength = 1;
//     }
//   }
//   for (let i = 0; i < s.length - 1; i++) {
//     for (let j = i + 1; j <= s.length; j++) {
//       let clipLength = j - i;
//       let clip = s.slice(i, i + clipLength);
//       let clipSet = new Set(clip.split(""));
//       if (!unrepeatClips.has(clip) && clipSet.size === clip.length) {
//         unrepeatClips.add(clip.split("").sort().join(""));
//         if (maxLength < clipLength) maxLength = clipLength;
//       }
//     }
//     console.log(unrepeatClips);
//   }
//   console.log(maxLength);
//   return maxLength;
// }

// 滑动窗口
function lengthOfLongestSubstring(s: string): number {
  const unrepeat = new Set();
  let left = 0;
  let right = left;
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    let curLength = 0;
    while (unrepeat.has(s[i])) {
      unrepeat.delete(s[left]);
      left++;
    }
    if (!unrepeat.has(s[i])) {
      unrepeat.add(s[i]);
      curLength = right - left + 1;
      right++;
    }

    if (curLength > maxLength) {
      maxLength = curLength;
    }
    console.log(unrepeat);
    console.log(maxLength);
  }
  return maxLength;
}

lengthOfLongestSubstring("aab");
