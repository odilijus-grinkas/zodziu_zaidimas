function addWords(wordTable, wordArray) {
    let i = 0;
    for (let x of wordTable) {
      x.innerHTML = wordArray[i];
      i++;
    }
}
export{addWords}