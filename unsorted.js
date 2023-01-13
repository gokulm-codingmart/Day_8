//const readline = require('readline-sync')
// creation of node part

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

//linked list

class linkedList{
    constructor(){
        this.head = null;
    }

// Adding element to the end

add(head){

    let node = new Node(head); //creating instance of node box.

    let temp; //for storing head part if not null

    if(this.head==null){
        this.head = node;
    }
    else{
        temp = this.head;
        //Iterating to the end to add .
        while(temp.next){ 
            temp = temp.next;
        }
        temp.next = node 
    }
}
print(){
    let temp  = this.head;
    while(temp.next!=null){
        console.log(temp.data)
        temp = temp.next
    }
   console.log(temp.data)
}

// deleteDuplicates() {
//     if(this.head==null){
//         console.log("No elements to remove in node");
//     }
//     else{
//     let temp = this.head;
//     do{
//         if(temp.data == temp.next.data){
//             temp.next = temp.next.next;
//         }
//         else{
//             temp = temp.next
//         }
//     }while(temp.next!=null)
// }
// }
unRemoveDup(){
    if(this.head==null){
        console.log("No elements to remove");
    }
    else{
        let p1=null;
        let p2=null;
        p1 = this.head;
        let dup = null;
        while(p1!=null && p1.next!=null){

            p2 = p1;

            while(p2.next!=null){
                if(p1.data==p2.next.data){
                    dup = p2.next;
                    p2.next = p2.next.next;
                }
                else{
                    p2 = p2.next;
                }
            }
            p1 = p1.next;
        }

    }
}
};

let ll = new linkedList(); // Instance of new object
ll.add(1)
ll.add(1)
ll.add(1)
ll.add(2)
ll.add(3)
ll.add(4)
ll.add(45)
ll.add(88)
ll.add(45)
ll.add(88)
ll.add(45)
// ll.deleteDuplicates()
ll.unRemoveDup()
ll.print()
