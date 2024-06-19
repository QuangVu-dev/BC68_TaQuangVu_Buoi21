let arrNhanVien = [];
// Lấy dữ liệu từ form
function getValueForm() {
  let arrField = document.querySelectorAll("#formQLNV input, #formQLNV select");
  let nhanVien = new NhanVien();
  let isValid = true;
  for (let field of arrField) {
    let { value, id } = field;
    nhanVien[id] = value;
    let errorField =
      field.parentElement.parentElement.querySelector(".sp-thongbao");
    if (!checkEmptyValue(field.value.trim(), errorField)) {
      isValid = false;
    }
    let check = checkEmptyValue(value, errorField);
    isValid &= check;
    if (check && id == "tknv") {
      isValid &= checkMinMaxValue(value, errorField);
    }
    if (check && id == "email") {
      isValid &= checkEmailValue(value, errorField);
    }
    if (check && id == "name") {
      isValid &= checkNameValue(value, errorField);
    }
    if (check && id == "password") {
      isValid &= checkPasswordValue(value, errorField);
    }
    if (check && id == "datepicker") {
      isValid &= checkDatepickerValue(value, errorField);
    }
    if (check && id == "luongCB") {
      isValid &= checkSalaryValue(value, errorField);
    }
    if (check && id == "chucVu") {
      isValid &= checkPositionValue(value, errorField);
    }
    if (check && id == "gioLam") {
      isValid &= checkHoursValue(value, errorField);
    }
  }
  if (isValid) {
    return nhanVien;
  }
}
// Thêm nhân viên vào mảng, tạo sự kiện onsubmit và lấy dữ liệu từ input, select
document.getElementById("formQLNV").onsubmit = function (event) {
  event.preventDefault();
  let nhanVien = getValueForm();
  // Thêm nhân viên vào mảng
  arrNhanVien.push(nhanVien);

  // Chạy hàm hiển thị renderArrNhanVien để hiển thị dữ liệu
  renderArrNhanVien();
  saveLocalStorage();
  // // xoá toàn bộ dữ liệu đang có trong form
  document.getElementById("formQLNV").reset();
  console.log(arrNhanVien);
};

// Hiển thị dữ liệu sinh viên lên giao diện
function renderArrNhanVien(arr = arrNhanVien) {
  // tạo 1 vòng lặp duyệt các nhân viên có trong mảng
  let content = "";
  for (let nhanVien of arr) {
    let newArrNhanVien = new NhanVien();
    Object.assign(newArrNhanVien, nhanVien);
    let { tknv, name, email, datepicker, chucVu } = newArrNhanVien;
    content += `
    <tr>
    <td>${tknv}</td>
    <td>${name}</td>
    <td>${email}</td>
    <td>${datepicker}</td>
    <td>${chucVu}</td>
    <td>${newArrNhanVien.tinhTongLuong()}</td>
    <td>${newArrNhanVien.xacDinhLoaiNhanVien()}</td>
    <td>
      <button onclick="deleteNhanVien('${tknv}')" class="btn btn-danger">Xoá</button>
      <button onclick="getInfoNhanVien('${tknv}')" class="btn btn-warning">Sửa</button>
    </td>
    </tr>
    `;
  }
  // Thực hiện DOM tới thẻ Tbody và hiển thị dữ liệu
  document.getElementById("tableDanhSach").innerHTML = content;
}
getLocalStorage();

// Lưu trữ dữ liệu xuống localStorage
function saveLocalStorage(key = "arrNhanVien", value = arrNhanVien) {
  let stringJson = JSON.stringify(value);
  localStorage.setItem(key, stringJson);
}

// Lấy dữ liệu từ localStorage
function getLocalStorage(key = "arrNhanVien") {
  let arrLocal = localStorage.getItem(key);
  arrNhanVien = arrLocal ? JSON.parse(arrLocal) : [];
  renderArrNhanVien();
}

// Chức năng xoá 1 nhân viên khỏi mảng
function deleteNhanVien(tknv) {
  // console.log(tknv);
  let index = arrNhanVien.findIndex((item, index) => {
    return item !== null && item.tknv == tknv;
  });
  console.log(index);
  if (index != -1) {
    arrNhanVien.splice(index, 1);
    renderArrNhanVien();
    saveLocalStorage();
  }
}

// Chức năng lấy thông tin nhân viên
function getInfoNhanVien(tknv) {
  let nhanVien = arrNhanVien.find((item, index) => {
    return item !== null && item.tknv == tknv;
  });
  if (nhanVien) {
    let arrField = document.querySelectorAll(
      "#formQLNV input, #formQLNV select"
    );
    for (let field of arrField) {
      let id = field.id;
      field.value = nhanVien[id];
    }
    document.getElementById("tknv").readOnly = true;
  }
}

// Chức năng cập nhật thông tin nhân viên
function updateNhanVien() {
  let nhanVien = getValueForm();
  let index = arrNhanVien.findIndex((item, index) => {
    return item !== null && item.tknv == nhanVien.tknv;
  });
  if (index != -1) {
    arrNhanVien[index] = nhanVien;
    renderArrNhanVien();
    saveLocalStorage();
  }
}
document.getElementById("btnCapNhat").onclick = updateNhanVien;

// Chức năng tìm kiếm
function searchNhanVien(event) {
  let newKeyWord = removeVietnameseTones(
    event.target.value.toLowerCase().trim()
  );
  console.log("Keyword:", newKeyWord);
  let arrNhanVienFilter = arrNhanVien.filter((item, index) => {
    if (item && item.loaiNhanVien) {
      let newXepLoaiNhanVien = removeVietnameseTones(
        item.loaiNhanVien.toLowerCase().trim()
      );
      console.log("Xep loai nhan vien:", newXepLoaiNhanVien);
      return newXepLoaiNhanVien.includes(newKeyWord);
    }
    return false;
  });
  renderArrNhanVien(arrNhanVienFilter);
  console.log("Filtered array:", arrNhanVienFilter);
}

// oninput
document.getElementById("searchName").oninput = searchNhanVien;
