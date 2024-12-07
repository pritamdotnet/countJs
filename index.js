// function name(){
    
// };
// console.log(typeof name);

// class myClass  {
// }
// console.log(typeof myClass);

const myPromise = new Promise((res, rej) => {
    document.getElementById("myBtn").addEventListener("click", ()=>{
        //console.log(Promise.resolve("myPromise"));
        res("myValue");
        });
    document.getElementById("myBtn2").addEventListener("click", ()=>{
        rej("some thing wrong");
        });

});
myPromise.then(res => console.log(res)).catch(err => {console.log(err)});


