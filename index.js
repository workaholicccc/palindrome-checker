const input=document.getElementById("inp")
const button=document.getElementById("bt")

button.addEventListener("click",function(){
    const text=input.value //getting the value of the input text
    const cleanText=text.toLowerCase().replace(/[^a-z0-9]/g, '')  //cleaning the text
    const reverseText=cleanText.split('').reverse().join('')  //reversing the text

    if (cleanText==reverseText){  //comparing the value
        alert(`${text} is a Palindrome` )
    }
    else{
        alert(`${text} is not a Palindrome`)
    }
})