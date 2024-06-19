// kiểm tra dữ liệu rỗng
function checkEmptyValue(value, errorField) {
  // thực hiện kiểm tra lỗi cho người dùng
  if (!value) {
    // TH mà bị lỗi
    errorField.innerHTML = "Vui lòng không bỏ trống trường này";
    return false;
  } else {
    // TH không bị lỗi
    errorField.innerHTML = "";
    return true;
  }
}
// Kiểm tra độ dài tài khoản
function checkMinMaxValue(value, errorField) {
  let regexTaiKhoan = /^\d{4,6}$/;
  let isValid = regexTaiKhoan.test(value);
  if (isValid) {
    // TH tk nằm trong khoảng 4-6 ký số
    errorField.innerHTML = "";
    return true;
  } else {
    errorField.innerHTML = "Tài khoản phải chứa 4 đến 6 ký số";
    return false;
  }
}
// Kiểm tra tên nhân viên phải là chữ
function checkNameValue(value, errorField) {
  let regexName = /^[A-Za-z\s]+$/;
  let isValid = regexName.test(value);
  if (isValid) {
    errorField.innerHTML = "";
    return true;
  } else {
    errorField.innerHTML = "Tên nhân viên phải là chữ";
    return false;
  }
}
// Kiểm tra định dạng email
function checkEmailValue(value, errorField) {
  let regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // abc@gmail.com

  // sử dụng chuỗi regex để kiểm tra value
  let isValid = regexEmail.test(value);
  if (isValid) {
    // TH email chuẩn định dạng
    errorField.innerHTML = "";
    return true;
  } else {
    errorField.innerHTML = "Vui lòng nhập đúng định dạng email";
    return false;
  }
}

// Kiểm tra mật khẩu
function checkPasswordValue(value, errorField) {
  let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,10}$/;
  let isValid = regexPassword.test(value);
  if (isValid) {
    errorField.innerHTML = "";
    return true;
  } else {
    errorField.innerHTML =
      "Mật khẩu phải chứa 6-10 ký tự, bao gồm ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt";
    return false;
  }
}

// Kiểm tra định dạng ngày
function checkDatepickerValue(value, errorField) {
  let regaxDatepicker = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
  let isValid = regaxDatepicker.test(value);
  if (isValid) {
    errorField.innerHTML = "";
    return true;
  } else {
    errorField.innerHTML = "Ngày làm không hợp lệ, định dạng mm/dd/yyyy";
    return false;
  }
}

// Kiểm tra định dạng lương
function checkSalaryValue(value, errorField) {
  if (isNaN(value) || value < 1000000 || value > 20000000) {
    errorField.innerHTML = "Lương cơ bản phải từ 1,000,000 - 20,000,000";
    return false;
  } else {
    errorField.innerHTML = "";
    return true;
  }
}

// Kiểm tra chức vụ
function checkPositionValue(value, errorField) {
  if (!value) {
    errorField.innerHTML = "Vui lòng chọn chức vụ hợp lệ";
    return false;
  } else {
    errorField.innerHTML = "";
    return true;
  }
}

// Kiểm tra giờ làm
function checkHoursValue(value, errorField) {
  if (isNaN(value) || value < 80 || value > 200) {
    errorField.innerHTML = "Số giờ làm phải từ 80 - 200 giờ";
    return false;
  } else {
    errorField.innerHTML = "";
    return true;
  }
}
