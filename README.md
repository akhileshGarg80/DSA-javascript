/**
 * O(n log n) time, O(n) space.
 */
function twoSumBinarySearch(nums, target) {
  const indexed = nums.map((v, i) => ({ v, i }));
  indexed.sort((a, b) => a.v - b.v);

  const binarySearch = (arr, val, start) => {
    let lo = start, hi = arr.length - 1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (arr[mid].v === val) return mid;
      arr[mid].v < val ? lo = mid + 1 : hi = mid - 1;
    }
    return -1;
  };

  for (let i = 0; i < indexed.length; i++) {
    const need = target - indexed[i].v;
    const j = binarySearch(indexed, need, i + 1);
    if (j !== -1) return [indexed[i].i, indexed[j].i];
  }
  return [];
}