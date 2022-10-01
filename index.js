
  let video = JSON.parse(localStorage.getItem("video_data"))||[]

async function search(){
    let query = document.getElementById("query").value
  let data =  await getData(query)
  console.log(data)
  append(data)
}


async function getData(query ){

 const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyA9KM6IXxp9WSI5tVaEgdgcSTFqtAalAS0`
    let res = await fetch(url)
    let data = await res.json()
     return data.items
}

let append = (data)=>{
  let container = document.getElementById("container")
  container.innerHTML = null
    data.forEach((el) => {
        let div = document.createElement("div")
        div.onclick = ()=>{
          setLocalStorage(el)
        }
        let image = document.createElement("img")
          image.src = el.snippet.thumbnails.medium.url
        let title = document.createElement("h3")
        title.innerText = el.snippet.title
        div.append(image,title)
        container.append(div)
        
    });
}

function setLocalStorage(data){
    localStorage.setItem("video_data",JSON.stringify(data))
    window.location.href = "video.html"
    console.log(data)
}


getTrendingData()
 async function getTrendingData(){  
   const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=20&chart=mostPopular&regionCode=IN&key=AIzaSyA9KM6IXxp9WSI5tVaEgdgcSTFqtAalAS0`

  let res= await fetch(url)
  let data= await res.json()
  console.log(data)
  append1(data.items)
}

let append1 = (data)=>{
  let container = document.getElementById("container")
  container.innerHTML = null
    data.forEach((el) => {
        let div = document.createElement("div")
        div.onclick = ()=>{
          setLocalStorage(el)
        }
        let image = document.createElement("img")
          image.src = el.snippet.thumbnails.medium.url
        let title = document.createElement("h3")
        title.innerText = el.snippet.title
        div.append(image,title)
        container.append(div)
        
    });
}
