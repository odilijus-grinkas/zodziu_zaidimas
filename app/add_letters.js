function addLetters(letterArray, letterTable) {
    let i = 0;
    for (let e of letterTable) {
        e.innerHTML = letterArray[i];
        i++;
    }
}
