const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const notMatch = document.getElementById("not-match");

function matchPassword() {
	if (password.value !== confirmPassword.value && confirmPassword.value !== "") {
		password.style.outline = "1px solid red";
		confirmPassword.style.outline = "1px solid red";
		notMatch.textContent = "*Password does not match*";
	} else if (password.value != "" && confirmPassword.value != "") {
		password.style.outline = "1px solid green";
		confirmPassword.style.outline = "1px solid green";
		notMatch.textContent = "";
	} else {
		notMatch.textContent = "";
		password.style.outline = "";
		confirmPassword.style.outline = "";
	}
}

setInterval(matchPassword, 300);
console.log("working");
