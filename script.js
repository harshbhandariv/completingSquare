const coeff_a = document.querySelector("#a");
const coeff_b = document.querySelector("#b");
const coeff_c = document.querySelector("#c");
const calculateButton = document.querySelector("#calculateButton");
const answer = document.querySelector("#answer");
const answerLabel = document.querySelector("#answerLabel");
const mathx = "<span class='x'></span>";
const square = "<sup>2</sup>";

function completeSquare() {
    let a = parseInt(coeff_a.value);
    let b = parseInt(coeff_b.value);
    let c = parseInt(coeff_c.value);
    if (isNaN(a) || isNaN(b) || isNaN(c)) return alert("Not a Proper Input!");
    if (a == 0) return alert("Not a Proper Input! coeffiecient of x^2 cannot be zero");
    // console.log(a, b, c);
    let b2a = getFraction(b, 2 * a);
    let acb2 = getFraction(4 * a * c - b * b, 4 * a);
    // console.log(b2a, acb2);
    let signB2a, signAcb2;
    signB2a = b2a[2] > 0 ? '+' : '-';
    signAcb2 = acb2[2] > 0 ? '+' : '-';
    if (Math.abs(b2a[1]) == 1) {
        b2a = Math.abs(b2a[0]);
    } else {
        b2a = fractionHTML(b2a);
    }
    if (Math.abs(acb2[1]) == 1) {
        acb2 = Math.abs(acb2[0]);
    } else {
        acb2 = fractionHTML(acb2);
    }
    answerLabel.classList.add("display");
    if (a == 1)
        answer.innerHTML = '';
    else if (a == -1)
        answer.innerHTML = '-';
    else
        answer.innerHTML = a;
    if (b2a != 0 || b2a)
        answer.innerHTML += '(' + mathx + signB2a + b2a + ')' + square;
    else
        answer.innerHTML += mathx + square;
    if (acb2 != 0 || acb2)
        answer.innerHTML += signAcb2 + acb2;
}

function getFraction(num, den) {
    const sign = num < 0 ^ den < 0 ? -1 : 1;
    num = Math.abs(num);
    den = Math.abs(den);
    const getGCD = GCD(num, den);
    return [num / getGCD, den / getGCD, sign];
}

function GCD(num, den) {
    if (num == 0) return den;
    return GCD(den % num, num);
}

function fractionHTML(n) {
    return "<div class='fraction'><div class='numerator'>" + n[0] + "</div><div class='denominator'>" + n[1] + "</div></div>"
}
calculateButton.addEventListener('click', completeSquare);
// console.log(coeff_a, coeff_b, coeff_c, calculateButton, answer);