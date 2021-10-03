const tweet = document.querySelector('button')
const textTweet = document.querySelector('textarea')
const feed = document.querySelector('.conteudoPrincipal__listaTweets')

tweet.addEventListener('click', (event)=>{
    event.preventDefault()
    let texto = textTweet.value
    criarTweet(texto)
})

function criarTweet(texto){
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    
    const tweet = {
        nome:"Daniel",
        foto:"./assets/img/ProfilePic.png",
        usuario: "@danielkenzie",
        horario: `${hora}:${minutos}`,
        texto
    }

    listarTweet(tweet)
}

function listarTweet(tweet){

    const { nome, foto, usuario, horario, texto } = tweet
    
    let li = document.createElement("li")
    li.classList.add("conteudoPrincipal__tweet")
    
    let img = document.createElement("img")
    img.src = foto
    img.classList.add("tweet__img")

    let div = document.createElement("div")
    div.classList.add("tweet__conteudo")

    let h2 = document.createElement("h2")
    h2.innerText = nome

    let p = document.createElement("p")
    p.innerText = texto

    let span = document.createElement("span")
    span.innerText = ` ${usuario} ${horario}` 

    div.appendChild(h2)
    div.appendChild(span)
    div.appendChild(p)

    li.appendChild(img)
    li.appendChild(div)

    feed.appendChild(li)
    textTweet.value = ""

}
