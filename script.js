let machines = {
    tractor: "Available",
    plough: "Available",
    harvester: "Available"
};

function hireMachine(machine) {
    if (machines[machine] === "Available") {
        machines[machine] = "Hired";
        document.getElementById(machine + "-status").innerText = "Hired";
        alert(machine + " has been hired.");
    } else {
        alert(machine + " is already hired.");
    }
}

function returnMachine(machine) {
    if (machines[machine] === "Hired") {
        machines[machine] = "Available";
        document.getElementById(machine + "-status").innerText = "Available";
        alert(machine + " has been returned.");
    } else {
        alert(machine + " is already available.");
    }
}

document.getElementById("hireForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Customer details submitted successfully!");
});
