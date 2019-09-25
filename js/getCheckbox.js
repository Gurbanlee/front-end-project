function getCreateAnAccount() {
    var checkBox = document.querySelector('#createanaccount');
    var checkBoxText = document.querySelector('#checkBoxText');

    if (checkBox.checked == true) {
        checkBoxText.style.display = 'block';
    } else {
        checkBoxText.style.display = 'none';
    }
}

function getShipToDifferentAddress() {
    var checkBox = document.querySelector('#shipToDifferentAddress');
    var checkBoxText = document.querySelector('#shipToDifferentAddressText');

    if (checkBox.checked == true) {
        checkBoxText.style.display = 'block';
    } else {
        checkBoxText.style.display = 'none';
    }
}