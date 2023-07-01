D = document
f = t => {
    s = t.innerHTML
    ex = D.querySelectorAll("input")[0].value.replace(/√/gi,"Math.sqrt(")
    while (Array.from(ex).filter(v => v == "(").length > (Array.from(ex).filter(v => v == ")"))) ex += ")"
    if (s == `=`) D.querySelectorAll("input")[0].value = eval(ex)
    else if (s == `C`) D.querySelectorAll("input")[0].value = ""
    else D.querySelectorAll("input")[0].value += t.innerHTML
}
D.addEventListener("DOMContentLoaded", () => {
    D.querySelectorAll("h1")[0].insertAdjacentHTML("afterend", `
        <table><tr><th colspan=4><input></th></tr>
            ${"()√+|123-|456*|789/|C0.=".split("|").map(v => 
            `<tr>${Array.from(v).map(q => `<td onclick="f(this)">${q}</td>`).join("")}</tr>`
        ).join("")}</table>
    `)
})