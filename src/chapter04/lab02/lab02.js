console.log("Lab 02")



const tinhTrungBinh = (toan, van, anh) => {
    return (toan + van + anh) / 3
}

const xepLoai = (diemTB) => {
    if (diemTB >= 9) {
        return ("Xuất Sắc")
    }
    else if (diemTB >= 8 && diemTB < 9) {
        return ("Giỏi")
    }
    else if (diemTB >= 6.5 && diemTB < 8) {
        return ("Khá")
    }
    else {
        return ("Trung Bình")
    }
}


const diemToan = 9;
const diemVan = 5;
const diemAnh = 1;
const diemTrungBinh = tinhTrungBinh(diemToan, diemVan, diemAnh)



console.log(`
Điểm Trung Bình: ${diemTrungBinh}
Xếp Loại: ${xepLoai(diemTrungBinh)}
    `)