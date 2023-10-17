// javascript news API

function getNews(e){

    // e.preventDefault()

    const apiKey = 'fcb24c7f9d2343b081364a7f64b5cce8'
    const sources= 'bbc-news'
    let url = `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${apiKey}`
         //    https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=fcb24c7f9d2343b081364a7f64b5cce8

    fetch(url).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data)

    })
}

getNews();
