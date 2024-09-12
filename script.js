const concat = (a,b) => a + ' ' + b;

const firstName = 'Clement';
const surname = 'venot';
const identity = concat(firstName,surname);

console.log(identity);

var IdForDoubleButtonMenuLeft = 0;

function openCloseLeftBar() {
    if (IdForDoubleButtonMenuLeft % 2 == 0) {
        document.getElementById("menuSomeTop").className="closeBarLeft";
    } else {
        document.getElementById("menuSomeTop").className="openBarLeft";
    }
    IdForDoubleButtonMenuLeft += 1;
}
