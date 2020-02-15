function CardValidation() {
    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    if (!document.getElementById("txtCard").value.match(regex)) {
        alert("Card number is invalid!");
    }
    else {
        result = true;
    }
}
function ValidateSecurityCode() {
    var x = document.getElementById("txtCode").value;
    var regex = /[0-9]{8}/;
    if (!x.match(regex))
    { alert("Security code is invalid!"); }
    else {
        result = true;
    }
}
function ValidateExpiryMonth() {
    var x = document.getElementById("txtMonth").value;

    if (x == null) {
        alert("Expiry Month is invalid!");
    }
    else {
        result = true;
    }
}

function ValidateExpiryYear() {
    var y = document.getElementById("txtYear").value;
    if (y == null) {
        alert("Expiry Year is invalid!");
    }
    else {
        result = true;
    }
}

function ValidateName() {
    var x = document.getElementById("txtName").value;
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!x.match(regex)) alert("Name is Invalid");
    else
        result = true;
}

function ValidateAddress() {
    var x = document.getElementById("txtAddress").value;
    var regex = /^[a-zA-Z0-9\s,'-]*$/;
    if (!x.match(regex)) alert("Address is invalid!");
    else
        result = true;
}

function ValidatePhoneNo() {
    var x = document.getElementById("txtPhone").value;
    var regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (!x.match(regex)) alert("Phone number is invalid!");
    else
        result = true;
}


function ValidateFax() {
    var x = document.getElementById("txtFax").value;
    var regex = /^\+?[0-9]{6,}$/;
    if (!x.match(regex)) alert("Fax number is invalid!");
    else
        result = true;
}

function ValidateEmail() {
    var x = document.getElementById("txtEmail").value;
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!x.match(regex)) alert("Email is invalid!");
    else
        result = true;
}
function ValidatePincode() {
    var x = document.getElementById("txtPincode").value;
    var regex = /^\d{6}$/;
    if (!x.match(regex)) alert("Phone number is invalid!");
    else
        result = true;
}
function CancelOperation() {
    alert("Payment Cancelled");
}
function SubmitOperation() {
    if (result == true) {
        alert("submitted successfully...");
    }
    else {
        alert("Some fields are Invalid or Missing")
    }
}