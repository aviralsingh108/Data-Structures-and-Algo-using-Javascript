// Binary Search Tree

class Node{
    constructor(data, left= null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST{
    constructor(){
        this.root = null;
    }
    add(data){
        const node = this.root
        if(node == null){
            this.root = new Node(data)
            return;
        }
        else{
            const searchTree = function(node){
                if(data<node.data){
                    if(node.left == null){
                        node.left = new Node(data)
                    }
                    else if(node.data !== null){
                        return searchTree(node.left)
                    }
                } 
                else if(data>node.data){
                    if(node.right == null){
                         node.right = new Node(data)
                    }
                    else if( node.right !== null){
                        return searchTree(node.right)
                    }
                }
                else {
                    return null;
                }
            }
        }
        return searchTree(node)
    }
}