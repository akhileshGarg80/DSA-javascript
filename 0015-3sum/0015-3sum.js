var threeSum = function(nums) {
    nums.sort((a,b) => a-b);
    let res = [];

    for(let i=0; i<nums.length-2; i++) {
        if(i && nums[i] == nums[i-1]) continue;
        let l=i+1, r=nums.length-1;

        while(l<r) {
            let s=nums[i]+nums[l]+nums[r];

            if(s==0) {
                res.push([nums[i],nums[l],nums[r]]);
                while(l<r && nums[l]==nums[l+1]) l++;
                while(l<r && nums[r]==nums[r-1]) r--;
                l++; r--;
            }
            s<0 ? l++ : s>0 ? r-- : 0;
        }
    }
    return res;
};