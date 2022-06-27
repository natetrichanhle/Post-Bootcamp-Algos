var maxDepth = function(root) {
    // find the maxDepth of root.right & root.left
    // since the root is 1 depth higher than its children you have to add 1
    // need to find the maximum depth between the root.right & root.left
    // Base case: if no root return 0

    if(!root) return 0;
    return 1 + Math.max(maxDepth(root.right), maxDepth(root.left));
};