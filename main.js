let array = [0,0,0,0,0,0,0];
array_piece = 0;
let input;

for (let i = 0; i<7; i++) {
    input = prompt("Write Any Number ("+(7-array_piece)+" Left)")
    array[array_piece]=input
    array_piece=array_piece+1
}
alert("The First Number Was : " + array[0]);
alert("The Last Number Was : " + array[6]);
alert("The Length of Array is : " + array.length);
