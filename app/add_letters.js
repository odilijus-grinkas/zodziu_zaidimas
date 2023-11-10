function addLetters(letterArray, wordTable) {
    let i = 0;
    for (let e of wordTable) {
        e.innerHTML = letterArray[i];
        i++;
    }
}
