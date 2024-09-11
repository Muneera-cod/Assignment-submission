const isAnagram=(string1,string2)=>{
    if(string1.length!==string2.length){
      return false;    
    }
     let sortedstr1=string1.split('').sort().join('');
     let sortedstr2=string2.split('').sort().join('');
      return sortedstr1===sortedstr2;
     }

     
isAnagram("hello","lolhe")?console.log("Anagram"):console.log("Not Anagram")

