let firstName = document.querySelector('#first-name').value;
let lastName = document.querySelector(`#last-name`).value;


if (firstName.length + lastName.length <= 2){
    console.log('incomplete First Name!')
function createErrorItem(name, idName) {
    let error = document.querySelector(`#errors`)
    let li = document.createElement('li');
    li.textContent = name;
    error.appendChild(li);
};


let lastName = document.querySelector(`#last-name`);
lastName.addEventListener('change', function (event) {
            let firstName = document.querySelector(`#first-name`).value;
            let last = document.querySelector("#last-name").value;
            if (firstName.length + last.length <= 2){
                console.log('Incomplete Name');
                createErrorItem(`incomplete First Name!`);
            };
        }
);

let areaNumbers = document.querySelector(`#phone-area-code`).value;
let middleNumbers = document.querySelector(`#phone-prefix`).value;
let thirdNumber = document.querySelector(`#phone-line-number`).value;


if (areaNumbers.length + middleNumbers.length + thirdNumbers.length != 10 ){
    console.log('Incomplete number!')
};
let thirdNumbers = document.querySelector(`#phone-line-number`);
thirdNumbers.addEventListener('change', function (event)
 { 
        let areaNumbers = document.querySelector(`#phone-area-code`).value;
e
        let middleNumbers = document.querySelector(`#phone-prefix`).value;

        let thirdNumbers = document.querySelector(`#phone-line-number`).value;


        if (areatNumbers.length + middleNumbers.length + thirdNumbers.length != 10 ){
            console.log('Incomplete Number!');
            createErrorItem(`Invalid Phone Number`);
        }
});

let courseSelect = document.querySelector(`#course-select`).value;

if (courseSelect.value = `Select One`) {
    
    console.log('Select an option!');
};

let submit = document.querySelector('#application-form');
submit.addEventListener('submit', function (event) {
    console.log('Submitting')


    let courseSelect = document.querySelector(`#course-select`);

    let selectedtext = courseSelect.options[courseSelect.selectedIndex].text;
    if (selectedtext === "Select One") 

    {
       console.log('Select an option!');


        createErrorItem(`Please Select a Course`);
        event.preventDefault()
    }
    let pastExperience = document.querySelector(`#past-experience`).value;

    if (pastExperience.length <= 50 ){
        console.log('Please give us more details )');
        createErrorItem(`Please give us more Information`);
        event.preventDefault()
    };
});
// Past experience should be at least 50 characters
let pastExperience = document.querySelector(`#past-experience`).value;

if (pastExperience <= 50 ){
    console.log('Please give us more details :)')
} }
