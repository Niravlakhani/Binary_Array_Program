console.log("Hello");
console.log("Binary Array Program");

let a = [0,1,0,0,1,1,0,1,1,1,0,0,1];
let max = 0;
let maxindex = 0;

for(let i = 0; i < a.length; i++){

    if(a[i] == 0){
        let count = 0;
        for(let j = i + 1; j < a.length && a[j] == 1; j++){
            count++;
        }
        for(let j = i -1; j > 0 && a[j] == 1; j--){
            count++;
        }
        count++;
        if(count > max){
            max = count;
            maxindex = i;
        }
        console.log("i" , i);
        console.log("Count" , count);
        a[i] = 0;
    }

}

console.log("Max" , max);
console.log("MaxIndex" , maxindex);
