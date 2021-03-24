currentvalue = 0;
function setUp() {
document.getElementById("add_subtract").value = currentvalue;
}
function addOne() {
currentvalue++;
document.getElementById("add_subtract").value = currentvalue;
}
function subtractOne() {
currentvalue--;
document.getElementById("add_subtract").value = currentvalue;
}