function board_generation(){
    let table = "<table>";
    const col = ["x1", "x2", "x3", "x4", "x5", "x6", "x7", "x8", "x9", "x10"];
    const row = ["y1", "y2", "y3", "y4", "y5", "y6", "y7", "y8", "y9", "y10"];
for(let i = 1; i <= 10; i++){
    if(i % 10 === 0){
        table += "<tr>";
    }
for(let j = 1; j <= 10; j++){
    table += "<td class=\"window" + " " + row[j-1] + " " + col[i-1] + "\">" + "</td>";
    if(j % 10 === 0){
        table += "</tr>";
    }
}
}
table += "</table>";
return table;
}
export {board_generation}