const countVowel=(string)=>{
    let count=0;
    for(let i=0;i<string.length;i++){
        if(['a','e','i','o','u'].includes(string[i])){
            count=count+1
        }
       
    }
    console.log(count);
}
countVowel("boll")