class Node{
    constructor(data){
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

class BST{
    constructor(head){
        this.head = null;
    }

add(data){
    let newnode = new Node(data)
    if(this.head==null){
        this.head = newnode;
    }
    else{
        this.insertNode(this.head,newnode)  
    }
}
insertNode(node,newnode){
    if(newnode.data<node.data){
        if(node.left==null){
            node.left = newnode;
        }
        else{
            this.insertNode(node.left,newnode)
        }
        }
        else if(newnode.data>node.data){
            if(node.right==null){
                node.right = newnode;
            }
            else{
                this.insertNode(node.right,newnode)
            }
        }
}

// display(){
//         let temp = this.head;
//         do{
//             console.log(temp.data);
//             temp = temp.right;
//         }while(temp.right!=null);

//         console.log(temp.data); //to print last element 
//     }
// Performs preorder traversal of a tree
// Performs inorder traversal of a tree
inorder(node)
{
	if(node !== null)
	{
		this.inorder(node.left);
		console.log(node.data);
		this.inorder(node.right);
	}
}

preorder(node)
{
	if(node !== null)
	{
		console.log(node.data);
		this.preorder(node.left);
		this.preorder(node.right);
	}
}

postorder(node)
{
	if(node !== null)
	{
		this.postorder(node.left);
		this.postorder(node.right);
		console.log(node.data);
	}
}



}

let bst = new BST()
bst.add(20);
bst.add(5);
bst.add(1)
bst.add(3);
bst.add(10)
console.log("Preorder")
bst.preorder(bst.head)
console.log("Postorder");
bst.postorder(bst.head)
console.log("Inorder")
bst.inorder(bst.head)
