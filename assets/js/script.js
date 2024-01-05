// console.log("hello world");//works!
const submit = document.querySelector(".submit"); //when user clicks
const error = document.querySelector(".error");
const form = document.querySelector("form"); //its a tag in html
const input = document.querySelector("input");
const label = document.querySelector("label");
let errors = [];

form.addEventListener("submit", validate);
submit.addEventListener("click", validate);

//const validate = () +> {}
function validate(e) {
    e.preventDefault() //no re-load on page

    const email = input.value; //takes value of user input.
    input.value = '';
    console.log(email); //shows the value of user input

    if (!isEmail(email)) {
        error.style.display = "block";
        label.style.display = "block";
    } else {
        error.style.display = "none"
        label.style.display = "none"
    }

    function isEmail(input) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
    }

    // if (!errors.length > 0) {
    //     error.innerText = 'Thanks'
    // }
}