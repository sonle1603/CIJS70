const nameEle = document.getElementById('name');
const emailEle = document.getElementById('email');
const phoneEle = document.getElementById('phone');
const usernameEle = document.getElementById('username');
const passwordEle = document.getElementById('password');
const confirmpassEle = document.getElementById('confirm_password');

const btnRegister = document.getElementById('btn-register');
const inputEles = document.querySelectorAll('.input-row');

btnRegister.addEventListener('click', function () {
    Array.from(inputEles).map((ele) =>
        ele.classList.remove('success', 'error')
    );
    let isValid = checkValidate();

    if (isValid) {
        alert('Gửi đăng ký thành công');
    }
});

function checkValidate() {
    let nameValue = nameEle.value;
    let emailValue = emailEle.value;
    let phoneValue = phoneEle.value;
    let usernameValue = usernameEle.value;
    let passwordValue = passwordEle.value;
    let confirmpassValue = confirmpassEle.value;

    let isCheck = true;
    
    if (nameValue == '') {
        setError(nameEle, 'Tên không được để trống');
        isCheck = false;
    } else {
        setSuccess(nameEle);
    }
    
    if (emailValue == '') {
        setError(emailEle, 'Email không được để trống');
        isCheck = false;
    } else if (!isEmail(emailValue)) {
        setError(emailEle, 'Email không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(emailEle);
    }
    
    if (phoneValue == '') {
        setError(phoneEle, 'Số điện thoại không được để trống');
        isCheck = false;
    } else if (!isPhone(phoneValue)) {
        setError(phoneEle, 'Số điện thoại không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(phoneEle);
    }
    
    if (usernameValue == '') {
        setError(usernameEle, 'Tai khoan không được để trống');
        isCheck = false;
    } else if (!isusername(usernameValue)) {
        setError(usernameEle, 'Tai Khoan không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(usernameEle);
    }
    
    if (passwordValue == '') {
        setError(passwordEle, 'Mat khau không được để trống');
        isCheck = false;
    } else if (!isPassword(passwordValue)) {
        setError(passwordEle, 'Mat khau không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(passwordEle);
    }


    let isSame = false
    if (passwordValue ==confirmpassValue){
        let isSame = true
    }
    if (confirmpassValue == ''){
        setError(confirmpassEle, 'Hay dien lai mat khau 1 lan nua');
        isCheck = false;
    } else if (!isSame){
        setError(confirmpassEle, 'Khong trung khop');
        isCheck = false;
    } else {
        setSuccess(confirmpassEle);
    }
    
    
    return isCheck;
}
function isusername(usernameValue){
    return /^[A-Za-z ]+$/.test(nameValue)
}
function isEmail(emailValue) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isPhone(phoneValue){
    return /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(phoneValue)
}
function isPassword(passwordValue){
    return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(passwordValue)
}
function setSuccess(ele) {
    ele.parentNode.classList.add('success');
}

function setError(ele, message) {
    let parentEle = ele.parentNode;
    parentEle.classList.add('error');
    parentEle.querySelector('small').innerText = message;
}