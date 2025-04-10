var groceries = [
    { task: "Milk", done: true },
    { task: "Bread", done: false },
    { task: "Eggs", done: false }
];
function showGroceries() {
    var list = document.getElementById("foodList");
    if (!list)
        return;
    list.innerHTML = "";
    groceries.forEach(function (groceries, index) {
        var li = document.createElement("li");
        li.textContent = "".concat(groceries.task, " - ").concat(groceries.done ? "✅" : "❌");
        if (!groceries.done) {
            var button = document.createElement("button");
            button.textContent = "Mark Done";
            button.onclick = function () {
                groceries.done = true;
                showGroceries();
            };
            li.appendChild(button);
        }
        list.appendChild(li);
    });
}
showGroceries();
