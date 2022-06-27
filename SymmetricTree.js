var isSymmetric = function(root) {
    // instatiate a variable res to equal to true to return either true or false;
    let res  = true;

    // recursive funtion helper that compares the mirror sides of node1 and node2
    function helper(node1, node2){
        // Base case: if there's no node on roots right or left it can still be symmetrical
        if(!node1 && !node2) {
            return;
        }
        // if 1 of them is valid and one of them is invalid then we know they're not symmetrical
        if(!node1 || !node2 || node1.val !== node2.val) {
            res = false;
            return; 
        }

        // recursive call that compares root's left and right
        helper(node1.left, node2.right);
        // recursive call that compares root's right and left
        helper(node1.right, node2.left);
    }

    // recursive call that inputs the root nodes
    helper(root, root)

    return res;
};