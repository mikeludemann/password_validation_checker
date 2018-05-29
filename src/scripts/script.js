var passwordValidator = document.getElementById("password"),
    letter = document.getElementById("letter"),
    capital = document.getElementById("capital"),
    number = document.getElementById("number"),
    special_character = document.getElementById("special_character"),
    length = document.getElementById("length");

passwordValidator.onfocus = function () {

    document.getElementById("validatorCheck").style.display = "block";

}

passwordValidator.onblur = function () {

    document.getElementById("validatorCheck").style.display = "none";

}

passwordValidator.onkeyup = function () {

    var lowerCaseLetters = /[a-z]/g;

    if (passwordValidator.value.match(lowerCaseLetters)) {

        letter.classList.remove("invalid");
        letter.classList.add("valid");

    } else {

        letter.classList.remove("valid");
        letter.classList.add("invalid");

    }

    var upperCaseLetters = /[A-Z]/g;

    if (passwordValidator.value.match(upperCaseLetters)) {

        capital.classList.remove("invalid");
        capital.classList.add("valid");

    } else {

        capital.classList.remove("valid");
        capital.classList.add("invalid");

    }

    var numbers = /[0-9]/g;

    if (passwordValidator.value.match(numbers)) {

        number.classList.remove("invalid");
        number.classList.add("valid");

    } else {

        number.classList.remove("valid");
        number.classList.add("invalid");

    }

    var specialCharacters = /[\!\"\§\$\%\&\/\|\(\)\=\?\´\`\*\+\-\_\#\.\:\,\;\@\~\€\^\°\<\>\\\']/g;

    if (passwordValidator.value.match(specialCharacters)) {

        special_character.classList.remove("invalid");
        special_character.classList.add("valid");

    } else {

        special_character.classList.remove("valid");
        special_character.classList.add("invalid");

    }

    if (passwordValidator.value.length >= 8) {

        length.classList.remove("invalid");
        length.classList.add("valid");

    } else {

        length.classList.remove("valid");
        length.classList.add("invalid");

    }

}