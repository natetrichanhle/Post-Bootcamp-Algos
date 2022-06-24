// Iterative Solution
var inorderTraversal = function(root) {
    let callStack = [];
    let current = root;
    let result = [];
    
    while(current || callStack.length) {
        while(current) {
            callStack.push(current);
            current = current.left;
        }
        current = callStack.pop();
        result.push(current.val);
        current = current.right;
    }
    return result;
};

// Recursive Solution
var inorderTraversal = function(root) {
    if(!root) return [];
    
    const result = [];
    const inorder = (node) => {
        if(!node) return null;
        
        if(node.left) inorder(node.left);
        result.push(node.val);
        if(node.right) inorder(node.right)
    }
    inorder(root);
    return result;
};