var hasPathSum = function(root, targetSum) {
    // subtract all the values of the path from the targetSum until you get to a leaf node

    // Base case: if root is null return false
    if (!root) return false;

    // initialize a global boolean variable
    let hasPath = false;

    // recursive depth first search
    const dfs = (node, sum) => {
        // When we are at a leaf node
        if (node.left === null && node.right === null) {
            if(sum === node.val) {
                hasPath = true;
            }
            return;
        }

        // if we're not at a leaf node search for the left and the right then subtract the value from the sum
        if(node.left) {
            dfs(node.left, sum - node.val);
        }
        if(node.right){
            dfs(node.right, sum - node.val);
        }
    }

    // recursive call inputting the root and targetSum 
    dfs(root, targetSum);

    return hasPath;
};