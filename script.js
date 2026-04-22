function explain() {
    let code = document.getElementById("code").value;
    let lines = code.split("\n");

    let output = "Program Overview:\nThis code is automatically analyzed.\n\n";
    let concepts = [];

    lines.forEach((line, index) => {
        let l = line.trim().toLowerCase();

        if (l.includes("for")) {
            output += "Line " + (index+1) + ": Loop is used to repeat code multiple times.\n";
            concepts.push("Loop");
        }
        else if (l.includes("if")) {
            output += "Line " + (index+1) + ": Condition is checked using if statement.\n";
            concepts.push("Condition");
        }
        else if (l.includes("else")) {
            output += "Line " + (index+1) + ": Else block runs when condition is false.\n";
        }
        else if (l.includes("input")) {
            output += "Line " + (index+1) + ": User input is taken.\n";
            concepts.push("Input");
        }
        else if (l.includes("int")) {
            output += "Line " + (index+1) + ": Converts value into integer.\n";
        }
        else if (l.includes("print")) {
            output += "Line " + (index+1) + ": Output is displayed.\n";
            concepts.push("Output");
        }
        else if (l.includes("=")) {
            output += "Line " + (index+1) + ": Variable assignment is performed.\n";
            concepts.push("Variable");
        }
        else if (l !== "") {
            output += "Line " + (index+1) + ": General execution step.\n";
        }
    });

    output += "\nSummary:\nThis program uses " + [...new Set(concepts)].join(", ") + 
              " to perform its operations.";

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
