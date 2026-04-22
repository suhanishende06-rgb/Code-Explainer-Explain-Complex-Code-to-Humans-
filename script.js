function explain() {
    let code = document.getElementById("code").value;
    let level = document.getElementById("level").value;
    let output = "";

    if (code.includes("for")) {
        output = level === "beginner"
            ? "This is a loop. It repeats code multiple times."
            : "For loop executes a block of code repeatedly based on condition.";
    } else if (code.includes("if")) {
        output = level === "beginner"
            ? "This checks a condition."
            : "If statement evaluates condition and executes accordingly.";
    } else if (code.includes("function")) {
        output = "Function is a reusable block of code.";
    } else {
        output = "Basic execution of code.";
    }

    document.getElementById("output").innerText = output;

    let li = document.createElement("li");
    li.innerText = code;
    document.getElementById("history").appendChild(li);

    localStorage.setItem("history", document.getElementById("history").innerHTML);
}

window.onload = function () {
    document.getElementById("history").innerHTML = localStorage.getItem("history") || "";
}

function clearText() {
    document.getElementById("code").value = "";
    document.getElementById("output").innerText = "";
}

function copyText() {
    navigator.clipboard.writeText(document.getElementById("output").innerText);
}

function download() {
    let text = document.getElementById("output").innerText;
    let blob = new Blob([text], { type: "text/plain" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "explanation.txt";
    a.click();
}

function toggleDark() {
    document.body.classList.toggle("dark");
}
