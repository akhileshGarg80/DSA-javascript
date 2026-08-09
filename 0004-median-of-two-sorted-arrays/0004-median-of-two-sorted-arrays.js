var findMedianSortedArrays = (nums1, nums2) => {
    let arr = [...nums1, ...nums2].sort((a, b) => a - b);
    let mid = Math.floor(arr.length / 2);
    return arr.length % 2 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
};