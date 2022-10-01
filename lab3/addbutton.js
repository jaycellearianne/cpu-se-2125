const loadList = () => {

    const add_btn = document.querySelector('#add-btn')
    const container_id = document.querySelector("#add-page-container")
    const student_list = document.querySelector("#student-list-container");
    const save_button = document.querySelector('#save_btn')
    const cancel_button = document.querySelector('#cancel_btn')
    const input_firstname = document.getElementById('Firstname')// get the value in the firstname
    const input_lastname = document.getElementById('Lastname') // geth the value in the lastname
    const people_list = document.querySelector('#column')


    add_btn.onclick = () => {
        container_id.style.display = "none";
        student_list.style.display = "block";
    }

    cancel_button.onclick = () => {
        student_list.style.display = "none";
        container_id.style.display = "block";
    }

    save_button.onclick = () => {
        const firstname_value = input_firstname.value;
        const lastname_value = input_lastname.value;

        student_list.style.display = "none"
        container_id.style.display = "block"
        people_list.innerHTML += "<li>" + firstname_value + " " + lastname_value + "</li>"
    }
}

window.onload = loadList;