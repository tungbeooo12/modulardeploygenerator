function permute(nums) {
  const result = [];
  backtrack([]);
  return result;
  function backtrack(permutation) {
    if (permutation.length === nums.length) {
      result.push([...permutation]);
      return;
    }
    for (const num of nums) {
      if (!permutation.includes(num)) {
        permutation.push(num);
        backtrack(permutation);
        permutation.pop();
      }
    }
  }
}
