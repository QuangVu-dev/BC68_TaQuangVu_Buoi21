class NhanVien {
  constructor() {
    this.tknv = "";
    this.hoTen = "";
    this.email = "";
    this.password = "";
    this.datepicker = "";
    this.luongCB = "";
    this.chucVu = "";
    this.gioLam = "";
    this.tongLuong = this.tinhTongLuong();
    this.loaiNhanVien = this.xacDinhLoaiNhanVien();
  }
  tinhTongLuong() {
    let heSo;
    if (this.chucVu === "Giám đốc") {
      heSo = 3;
    } else if (this.chucVu === "Trưởng Phòng") {
      heSo = 2;
    } else {
      heSo = 1;
    }
    return this.luongCB * heSo;
  }

  xacDinhLoaiNhanVien() {
    if (this.gioLam >= 192) {
      return "Xuất sắc";
    } else if (this.gioLam >= 176) {
      return "Giỏi";
    } else if (this.gioLam >= 160) {
      return "Khá";
    } else {
      return "Trung Bình";
    }
  }
}
