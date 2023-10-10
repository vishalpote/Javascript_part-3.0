function anagram(x, y) {
    const str1 =x.replace(/ /g, '').toLowerCase();
    const str2 =x.replace(/ /g, '').toLowerCase();


    const charCount1={}
    const charCount2={}

if(str1.length!==str2.length)
{
    return false
}

for(let char of str1)
{
    charCount1[char]=(charCount1[char] || 0) + 1
}

for(let char of str1)
{
    charCount2[char]=(charCount2[char] || 0) + 1
}


for(let char in charCount1){
    
    if(charCount1[char]!=charCount2[char])
    {

        return false
    }
}
return true
}

var m=anagram("listen","silent")
console.log(m)