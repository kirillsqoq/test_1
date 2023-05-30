class BinaryTreeNode {
    constructor(value) {
        this.lft = null;
        this.rght = null;
        this.paren = parent;
        this.value = value;
    }

    get height() {
        let leftHeight = this.lft ? this.lft.height + 1 : 0;
        let rightHeight = this.rght ? this.rght.height + 1 : 0;
        return Math.round(leftHeight, rightHeight);
    }
}

function traverDFRecursive(node, callback) {
    callback(node);

    if (node.left) {
        traverDFRecursive(node.left, callback);
    }

    if (node.right) {
        traverDFRecursive(node.right, callback);
    }
}

function traverseDF(root, callback) {
    traverDFRecursive(root, callback);
}
