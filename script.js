const concat = (a,b) => a + ' ' + b;

const firstName = 'Clement';
const surname = 'venot';
const identity = concat(firstName,surname);

console.log(identity);



var IdForDoubleButtonMenuLeft = 0;
function openCloseLeftBar() {
    if (IdForDoubleButtonMenuLeft % 2 == 0) {
        document.querySelector("#menuSomeTop").className = "openBarLeft";
    } else {
        document.querySelector("#menuSomeTop").className = "closeBarLeft";
    }
    IdForDoubleButtonMenuLeft += 1;
}
