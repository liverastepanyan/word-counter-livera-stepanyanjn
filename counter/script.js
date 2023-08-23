let text = document.querySelector('input')
let sentences = document.querySelector('.sentences')
let words = document.querySelector('.words')
let letters = document.querySelector('.letters')
let lscore = 0
let wscore = 0
let sscore = 0
text.addEventListener('input',()=>{
    lscore=0
    for (let i = 0; i < text.value.length; i++) {
    if (text.value[i].toUpperCase()!==text.value[i].toLowerCase()) {
    lscore++
    }
}
    letters.innerHTML= 'Letters: ' + lscore
})
text.addEventListener('input',()=>{
    wscore = 0
    for (let i = 0; i < text.value.length; i++) {
    if (text.value[i]===' ' && text.value[i-1]!== ' '&& text.value[i-1]!== '.' && text.value[i-1] ||text.value[i]==='.' && text.value[i-1]!== '.'&& text.value[i-1]!== ' '&& text.value[i-1] ) {
    wscore++
    }
}
    words.innerHTML='Words: '+wscore
})
text.addEventListener('input',()=>{
    sscore = 0
    for (let i = 0; i < text.value.length; i++) {
    if (text.value[i]==='.' && text.value[i-1]!=='.' && text.value[i-1]!==' ' && text.value[i-1] || text.value[i]==='!' && text.value[i-1]!=='!'&& text.value[i-1]!==' ' || text.value[i]==='?' && text.value[i-1]!=='?'&& text.value[i-1]!==' '){
    sscore++
    }
}
    sentences.innerHTML='Sentences: '+sscore
})

