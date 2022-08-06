function chatlink() {
    let phone = document.getElementById("phnum").value;
    let pass = valnum(phone);

    if (pass) {
        link = "http://wa.me/91" + phone;
        console.log(link);
        document.getElementById("chatbtn").setAttribute("href", link);
    }
}

function valnum(phone) {
    var regex = /[7-9]\d{9}/

    if (phone.trim() == "") {
        alert("Please enter a phone number");
        return false;
    }

    else if (!regex.test(phone)) {
        alert("Enter a valid phone number");
        return false;
    }

    else if (regex.test(phone)) {
        return true;
    }

    else{
        return false;
    }
}
