/**
 * O(n) time, O(MAX) space (bit‑set)
 */
function twoSumBitSet(nums, target, MAX = 1_000_000) {
  const seen = new Uint8Array(MAX + 1); // 0/1 flags
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement >= 0 && complement <= MAX && seen[complement]) {
      // Need a second pass to fetch the stored index.
      const j = nums.findIndex((v, idx) => idx !== i && v === complement);
      return [j, i];
    }
    if (nums[i] >= 0 && nums[i] <= MAX) seen[nums[i]] = 1;
  }
  return [];
}