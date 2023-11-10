let table = "<table>";
    for(let i = 1; i <= 10; i++){
        if(i % 10 === 0){
            table += "<tr>";
        }
    for(let j = 1; j <= 10; j++){
        table += "<td class=\"window\"></td>";
        if(j % 10 === 0){
            table += "</tr>";
        }
    }
    }
    table += "</table>"
    document.getElementById("lentele").innerHTML = table;
function test(){
    document.getElementById("lentele").innerHTML = table; 
}
export{table,test}