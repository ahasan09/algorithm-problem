document.getElementById("findButton").onclick=function(){
    let typedText=document.getElementById("input").value;
   let anagrams = getAnagramsOf(typedText);
    
  console.log(anagrams);
 document.getElementById("output").innerHTML=anagrams
}

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

function getHashMap() {
    const anagrams = {};
    words.forEach((word)=>{
        const sortedWord = alphabetize(word);
        if (anagrams[sortedWord]) {
            return anagrams[sortedWord].push(word);
        }
        anagrams[sortedWord] = [word];
    })

    return anagrams;
}


function getAnagramsOf(typedText){
    let key=alphabetize(typedText); //aelst
let hashMap=getHashMap();
    return hashMap[key];
}

