class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class InorderTraversal {
    inorderTraversal(root) {
        const result = [];
        this.inorder(root, result);
        return result;
    }

    inorder(node, result) {
        if (!node) {
            return;
        }
        this.inorder(node.left, result);
        result.push(node.val);
        this.inorder(node.right, result);
    }
}

// Example usage:
// Example 1
const root1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
const inorderTraversal = new InorderTraversal();
console.log("Example 1:", inorderTraversal.inorderTraversal(root1)); // Output: [1, 3, 2]

// Example 2
const root2 = null;
console.log("Example 2:", inorderTraversal.inorderTraversal(root2)); // Output: []

// Example 3
const root3 = new TreeNode(1);
console.log("Example 3:", inorderTraversal.inorderTraversal(root3)); // Output: [1]
