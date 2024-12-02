// This code snippet is used to update the user's order for Donuts.
// The order is represented by a JavaScript Object with several properties.
// Can you implement the functions so that when the User selects the
// + button, the quantity increases by 1 and
// The - button, the quantity decreases by one
// The reset button, the quantity is reset to 0
//Also, give the Donut Shop the option to remove a donut type from inventory when they sell out for the day
//This happens when they click the 'Remove from Menu' button

//represents a customer's donut order
const donutOrder = {
  glazed: 0,
  chocolate: 0,
  bearClaw: 0,
  eclair: 0,
};

//executed when the user clicks the '+' button
function addOne(donutType) {}
//executed when the user clicks the '-' button
function removeOne(donutType) {}
//executed when the user clicks the 'Reset' button
function reset(donutType) {}

//executed when the user clicks the 'Remove From Menu' button
function removeFromMenu(donutType) {}

//********************************** Don't touch the below :-) */
function render() {
  let oldMenu = document.getElementById("menu");
  oldMenu?.remove();

  let menu = document.createElement("ul");
  menu.id = "menu";
  for (const donutType in donutOrder) {
    if (donutOrder.hasOwnProperty(donutType)) {
      const li = document.createElement("li");
      const type = document.createElement("h1");
      type.textContent = `${donutType}: ${donutOrder[donutType]}`;
      li.appendChild(type);
      let addButton = document.createElement("button");
      addButton.textContent = "+";
      addButton.onclick = function () {
        addOne(`${donutType}`);
        render();
      };
      li.appendChild(addButton);
      let removeButton = document.createElement("button");
      removeButton.textContent = "-";
      removeButton.onclick = function () {
        removeOne(`${donutType}`);
        render();
      };
      li.appendChild(removeButton);
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Reset";
      deleteButton.onclick = function () {
        reset(`${donutType}`);
        render();
      };
      li.appendChild(deleteButton);
      let removeDonutTypeButton = document.createElement("button");
      removeDonutTypeButton.textContent = "Remove From Menu";
      removeDonutTypeButton.onclick = function () {
        removeFromMenu(`${donutType}`);
        render();
      };
      li.appendChild(removeDonutTypeButton);
      menu.appendChild(li);
    }
    document.body.appendChild(menu);
  }
}

render();
