/**
 * Returns true if selected word in nodes equals one of the wordSolutions
 * @param {Document.node} nodes 
 * @param {string} wordSolutions 
 * @returns 
 */
function compareWords(nodes,wordSolutions){
  let selectedWord = '';
  let mistake = true;
  for (let node of nodes){
    selectedWord += node.innerHTML;
  }
  for (let word of wordSolutions){
    if (word == selectedWord){
      mistake = false;
    }
  }
  return mistake;
}
export{compareWords}