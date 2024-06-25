class NhanVien {
  constructor() {
    this.tknv = "";
    this.name = "";
    this.email = "";
    this.password = "";
    this.datepicker = "";
    this.luongCB = "";
    this.chucVu = "";
    this.gioLam = "";
  }

  tinhTongLuong() {
    switch (this.chucVu) {
      case "Sếp":
        return this.luongCB * 3;
      case "Trưởng phòng":
        return this.luongCB * 2;
      case "Nhân viên":
        return this.luongCB * 1;
      case "":
        return this.luongCB * 0;
    }
  }

  xacDinhLoaiNhanVien() {
    if (this.gioLam >= 192) {
      return "Xuất sắc";
    } else if (this.gioLam >= 176) {
      return "Giỏi";
    } else if (this.gioLam >= 160) {
      return "Khá";
    } else {
      return "Trung bình";
    }
  }
}
