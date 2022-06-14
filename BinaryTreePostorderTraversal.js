// ITERATIVE SOLUTION
var postorderTraversal = function(root) {
    if(!root) {
        return [];
    }

    const result = [];
    const stack = [root];

    while(stack.length) {
        let node = stack.pop();

        result.unshift(node.val);

        if (node.left) {
            stack.push(node.left);
        }
        if (node.right) {
            stack.push(node.right);
        }
    }
    return result;
}


// RECURSIVE SOLUTION
var postorderTraversal = function(root) {
    if(!root) return [];
    
    const result = [];
    const postorder = (node) => {
        if(!node) return null;
        
        if(node.left) postorder(node.left);
        if(node.right) postorder(node.right)
        result.push(node.val);
    }
    postorder(root);
    return result;
};