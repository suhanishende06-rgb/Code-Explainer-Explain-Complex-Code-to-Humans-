function explain() {
    let code = document.getElementById("code").value;
    let lines = code.split("\n");

    let output = "Code Explanation\n\n";
    let summary = "";
    let concepts = [];

    lines.forEach((line, index) => {
        let l = line.trim().toLowerCase();

        if (l.includes("for")) {
            output += "Line " + (index+1) + ": A loop is used to repeat a set of instructions multiple times.\n";
            concepts.push("Loop");
        }
        else if (l.includes("if")) {
            output += "Line " + (index+1) + ": A condition is checked using an if statement.\n";
            concepts.push("Condition");
        }
        else if (l.includes("else")) {
            output += "Line " + (index+1) + ": Else executes when condition is false.\n";
        }
        else if (l.includes("input")) {
            output += "Line " + (index+1) + ": User input is taken.\n";
            concepts.push("Input");
        }
        else if (l.includes("int")) {
            output += "Line " + (index+1) + ": Input is converted into integer.\n";
        }
        else if (l.includes("print")) {
            output += "Line " + (index+1) + ": Output is displayed.\n";
            concepts.push("Output");
        }
        else if (l.includes("=")) {
            output += "Line " + (index+1) + ": Value is assigned to a variable.\n";
            concepts.push("Variable");
        }
        else if (l !== "") {
            output += "Line " + (index+1) + ": General execution.\n";
        }
    });

    summary = "\nSummary:\nThis program uses " + [...new Set(concepts)].join(", ") + 
    " to perform operations step by step.";

    let header = "Program Overview:\nThis code is analyzed and explained automatically.\n\n";

    document.getElementById("output").innerText = header + output + summary;
}
