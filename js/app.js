/* Your code */


const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        if (xhr.status === 200) {
            var text = JSON.parse(xhr.responseText);
            console.log(text);
            document.getElementById("nameTitle").innerHTML = "1. " + text[0].title + " :";
            document.getElementById("email").innerHTML = "2. " + text[1].title + " :";
            document.getElementById("phone").innerHTML = "3. " + text[2].title + " :";
            document.getElementById("rating").innerHTML = "4. " + text[3].title;
            document.getElementById("radio").innerHTML = "5. " + text[4].title;
            document.getElementById("checkbox").innerHTML = "6. " + text[5].title + " :";
            document.getElementById("comments").innerHTML = "7. " + text[6].title + " :";
        } else {
            console.log("There is nothing to survey");
        }
    }

}

xhr.open('get', '/questions', true);
xhr.send();

const xhr2 = new XMLHttpRequest();

xhr2.onreadystatechange = function () {
    if (xhr2.readyState == 4) {
        if (xhr2.status === 200) {
            var checkbox = JSON.parse(xhr2.responseText);
            document.getElementById("Reliable").innerHTML = checkbox[0].label;
            document.getElementById("Useful").innerHTML = checkbox[1].label;
            document.getElementById("Unique").innerHTML = checkbox[2].label;
            document.getElementById("Overpriced").innerHTML = checkbox[3].label;
            document.getElementById("Impractical").innerHTML = checkbox[4].label;
            document.getElementById("Ineffective").innerHTML = checkbox[5].label;
        }
    }
}

xhr2.open('get', '/options?question=6', true);
xhr2.send();

const xhr3 = new XMLHttpRequest();

xhr3.onreadystatechange = function () {
    if (xhr3.readyState == 4) {
        if (xhr3.status === 200) {
            var radio = JSON.parse(xhr3.responseText);
            document.getElementById("satisfied").innerHTML = radio[0].label;
            document.getElementById("someSatisfied").innerHTML = radio[1].label;
            document.getElementById("dissatisfied").innerHTML = radio[2].label;
            document.getElementById("someDissatisfied").innerHTML = radio[3].label;
            document.getElementById("noBoth").innerHTML = radio[4].label;
        }
    }
}

xhr3.open('get', '/options?question=5', true);
xhr3.send();

userdetails = () => {
    var Name = document.getElementById("name").value;
    var Email = document.getElementById("mailID").value;
    var phone = document.getElementById("contactNo").value;
    var comment = document.getElementById("textComment").value;
    data = [{
        name: Name,
        email: Email,
        phoneNumber: phone,
        comments: comment
    }]

    if (data[0].name === '' || data[0].email === "" || data[0].phoneNumber === "") {
        alert("Please fill the data in the form");
    } else {
        console.log(data);
        alert("The form data is submitted successfully!!");
        var frm = document.getElementsByName("form_name")[0];
        frm.reset();
    }
}
