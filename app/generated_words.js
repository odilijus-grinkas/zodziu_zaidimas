function zodziuLentele(num) {
    let words = document.querySelector('.lentele');
    let given_words = document.createElement('div')
    given_words.classList.add('given_words')
    let header = document.createTextNode("Given words:");
    given_words.appendChild(header)
    for (let i = 0; i < num; i++) {
        let div = document.createElement('div');
        div.classList.add('given_word');
        given_words.appendChild(div);
        words.appendChild(given_words)
    }
}
  export{zodziuLentele}

 