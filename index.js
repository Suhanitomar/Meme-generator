var image= document.querySelector("img")
    var title= document.querySelector("#title")
    var author=document.querySelector("#author")

async function meme(){
    const api=`https://meme-api.com/gimme/wholesomememes`
    const data= await fetch(api).then(response=>response.json())
    if(data.cod=="400"){
        console.log("error")
        return
    }
    title.innerHTML=data.title
    image.src=data.url
    author.innerHTML="Written By "+data.author
    }
    document.querySelector("button").addEventListener("click",()=>{
        meme()
    })