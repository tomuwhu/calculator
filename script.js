D = document
f = t => {
    s = t.innerHTML
    if (s == `=`) D.querySelectorAll("input")[0].value = eval(D.querySelectorAll("input")[0].value)
    else if (s == `c`) D.querySelectorAll("input")[0].value = ""
    else D.querySelectorAll("input")[0].value += t.innerHTML
}
D.addEventListener("DOMContentLoaded", () => {
    D.querySelectorAll("h1")[0].insertAdjacentHTML("afterend", `
        <table><tr><th colspan=4><input></th></tr>
            ${"123+|456-|789*|c0/=".split("|").map(v => 
            `<tr>${Array.from(v).map(q => `<td onclick="f(this)">${q}</td>`).join("")}</tr>`
        ).join("")}</table>
    `)
})