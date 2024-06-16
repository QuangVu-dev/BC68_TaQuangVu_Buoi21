let arrNhanVien = [];

// Lấy dữ liệu từ form
function getValueForm() {
  let arrField = document.querySelectorAll("#formQLNV input, #formQLNV select");
  let nhanVien = new NhanVien();
  for (let field of arrField) {
    let { value, id } = field;
    nhanVien[id] = value;
  }
}

// tự động hiển thị dữ liệu mới, lưu trữ xuống localstorage và reset form
// function renderSaveReset() {
//   renderArrNhanVien();
//   saveLocalStorage();
//   // xử lí reset form
//   document.getElementById("formQLNV").reset();
// }

// Thêm nhân viên vào mảng
document.getElementById("modal-footer").onsubmit = function (event) {
  event.preventDefault();
  alert("hello");
  let tknv = document.getElementById("tknv").value;
  let nhanVien = getValueForm();
  if (!nhanVien) {
    return;
  }
  arrNhanVien.push();
  renderSaveReset();
};

//   Hiện thị dữ liệu nhân viên lên table
function renderArrNhanVien(arr = arrNhanVien) {
  // B1 Tạo một vòng lặp duyệt các nhân viên có trong mảng
  let content = "";
  for (let nhanVien of arr) {
    // console.log(nhanVien);
    // khởi tạo một đối tượng từ lớp đối tượng nhân viên
    let newArrNhanVien = new NhanVien();
    Object.assign(newArrNhanVien, nhanVien);
    // console.log(newArrNhanVien);
    let { tknv, hoTen, email, datepicker, chucVu } = newArrNhanVien;

    content += `
      <tr>
        <td>${tknv}</td>
        <td>${hoTen}</td>
        <td>${email}</td>
        <td>${datepicker}</td>
        <td>${chucVu}</td>
        <td>${newArrNhanVien.tinhTongLuong()}</td>
        <td>${newArrNhanVien.loaiNhanVien()}</td>
        <td>
          <button onclick="deleteNhanVien('${tknv}')" class="btn btn-danger">Xoá</button>
          <button onclick="getInfoNhanVien('${tknv}')" class="btn btn-warning">Sửa</button>
        </td>
      </tr>
      `;
  }
  console.log(content);
  // Thực hiện DOM tới tbody và hiển thị dữ liệu
  document.getElementById("tableDanhSach").innerHTML = content;
}

// getLocalStorage();

// // Lưu trữ dữ liệu xuống local storage
// function saveLocalStorage(key = "arrNhanVien", value = arrNhanVien) {
//   // lưu trữ mảng arrNhanVien xuống local storage
//   let stringJson = JSON.stringify(value);
//   localStorage.setItem(key, stringJson);
// }

// // Lấy dữ liệu từ local storage
// function getLocalStorage(key = "arrNhanVien") {
//   // lấy dữ liệu từ local storage lên
//   let arrLocal = localStorage.getItem(key);
//   // arrSinhVien = arrLocal ? JSON.parse(arrLocal) : [];
//   if (arrLocal) {
//     arrNhanVien = JSON.parse(arrLocal);
//     renderArrNhanVien();
//   }
// }
