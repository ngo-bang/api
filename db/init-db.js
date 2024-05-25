
db = db.getSiblingDB("VDT")
db.Student.drop()

db.Student.insertMany([
  {
    "_id": "1",
    "Họ và tên": "Lê Minh Việt Anh",
    "Năm": "Unknown",
    "Giới tính": "Nam",
    "Trường": "Đại học Bách Khoa Hà Nội",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "2",
    "Họ và tên": "Phạm Quang Bách",
    "Năm": "Unknown",
    "Giới tính": "Nam",
    "Trường": "VinUniversity",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "3",
    "Họ và tên": "Hoàng Bá Bảo",
    "Năm": "2004",
    "Giới tính": "Nam",
    "Trường": "Đại học Bách Khoa Hà Nội",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "4",
    "Họ và tên": "Phạm Minh Cường",
    "Năm": "Unknown",
    "Giới tính": "Nam",
    "Trường": "Đại học Công nghệ - Đại học Quốc gia Hà Nội",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "5",
    "Họ và tên": "Trương Văn Độ",
    "Năm": "2002",
    "Giới tính": "Nam",
    "Trường": "Đại học Công nghệ - Đại học Quốc gia Hà Nội",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "6",
    "Họ và tên": "Hoàng Việt Dũng",
    "Năm": "Unknown",
    "Giới tính": "Nam",
    "Trường": "ITMO University",
    "Quốc gia": "Nga"
  },
  {
    "_id": "7",
    "Họ và tên": "Bùi Hoàng Dũng",
    "Năm": "2002",
    "Giới tính": "Nam",
    "Trường": "Đại học Bách Khoa Hà Nội",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "8",
    "Họ và tên": "Bùi Trọng Dũng",
    "Năm": "2002",
    "Giới tính": "Nam",
    "Trường": "Đại học Bách Khoa Hà Nội",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "9",
    "Họ và tên": "Trần Thùy Dương",
    "Năm": "2003",
    "Giới tính": "Nữ",
    "Trường": "Đại học Công nghệ - Đại học Quốc gia Hà Nội",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "10",
    "Họ và tên": "Quach Dang Giang",
    "Năm": "2001",
    "Giới tính": "Nam",
    "Trường": "Đại học Công nghệ Thông tin – Đại học Quốc gia TP.HCM",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "11",
    "Họ và tên": "Nguyễn Thanh Hà",
    "Năm": "2003",
    "Giới tính": "Nam",
    "Trường": "Đại học Bách Khoa Hà Nội",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "12",
    "Họ và tên": "Nguyễn Thu Hà",
    "Năm": "2003",
    "Giới tính": "Nữ",
    "Trường": "Đại học Bách Khoa Hà Nội",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "13",
    "Họ và tên": "Cù Xuân Hải",
    "Năm": "Unknown",
    "Giới tính": "Nam",
    "Trường": "ITMO University",
    "Quốc gia": "Nga"
  },
  {
    "_id": "14",
    "Họ và tên": "Nguyễn Trung Hiếu",
    "Năm": "2003",
    "Giới tính": "Nam",
    "Trường": "Đại học Bách Khoa Hà Nội",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "15",
    "Họ và tên": "Đặng Việt Hoàng",
    "Năm": "2003",
    "Giới tính": "Nam",
    "Trường": "Đại học Bách Khoa Hà Nội",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "16",
    "Họ và tên": "Nguyễn Văn Hùng",
    "Năm": "2003",
    "Giới tính": "Nam",
    "Trường": "Đại học Bách Khoa Hà Nội",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "17",
    "Họ và tên": "Nguyễn Quốc Hưng",
    "Năm": "2002",
    "Giới tính": "Nam",
    "Trường": "Đại học Bách Khoa Hà Nội",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "18",
    "Họ và tên": "Lê Minh Hương",
    "Năm": "2001",
    "Giới tính": "Nữ",
    "Trường": "Đại học Công nghệ - Đại học Quốc gia Hà Nội",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "19",
    "Họ và tên": "Ngo Dang Huy",
    "Năm": "2003",
    "Giới tính": "Nam",
    "Trường": "Đại học Công nghệ - Đại học Quốc gia Hà Nội",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "20",
    "Họ và tên": "Trần Quang Huy",
    "Năm": "2002",
    "Giới tính": "Nam",
    "Trường": "Học viện Công Nghệ Bưu Chính Viễn Thông",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "21",
    "Họ và tên": "Trần Minh Huyền",
    "Năm": "Unknown",
    "Giới tính": "Nữ",
    "Trường": "Đại học Bách Khoa Hà Nội",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "22",
    "Họ và tên": "Nguyễn Đôn Thế Kiệt",
    "Năm": "2003",
    "Giới tính": "Nam",
    "Trường": "VinUniversity",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "23",
    "Họ và tên": "Lê Hoàng Trường",
    "Năm": "2002",
    "Giới tính": "Nam",
    "Trường": "ITMO University",
    "Quốc gia": "Nga"
  },
  {
    "_id": "24",
    "Họ và tên": "Đào Quang Lợi",
    "Năm": "2003",
    "Giới tính": "Nam",
    "Trường": "Đại học Bách Khoa Hà Nội",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "25",
    "Họ và tên": "Nguyễn Tiến Long",
    "Năm": "2000",
    "Giới tính": "Nam",
    "Trường": "ITMO University",
    "Quốc gia": "Nga"
  },
  {
    "_id": "26",
    "Họ và tên": "Nguyen Quang Long",
    "Năm": "2001",
    "Giới tính": "Nam",
    "Trường": "Đại học Bách Khoa Hà Nội",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "27",
    "Họ và tên": "Nguyễn Thị Ngọc Mai",
    "Năm": "2004",
    "Giới tính": "Nữ",
    "Trường": "Đại học Công nghệ - Đại học Quốc gia Hà Nội",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "28",
    "Họ và tên": "Đỗ Dương Mạnh",
    "Năm": "Unknown",
    "Giới tính": "Nam",
    "Trường": "ITMO University",
    "Quốc gia": "Nga"
  },
  {
    "_id": "29",
    "Họ và tên": "Nguyễn Ngọc Minh",
    "Năm": "Unknown",
    "Giới tính": "Nam",
    "Trường": "Học viện Công Nghệ Bưu Chính Viễn Thông",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "30",
    "Họ và tên": "Vũ Thế Nam",
    "Năm": "2001",
    "Giới tính": "Nam",
    "Trường": "Đại học Công nghệ - Đại học Quốc gia Hà Nội",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "31",
    "Họ và tên": "Ngô Công Bằng",
    "Năm": "2001",
    "Giới tính": "Nam",
    "Trường": "Học viện Công Nghệ Bưu Chính Viễn Thông",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "32",
    "Họ và tên": "Nguyễn Huy Thái",
    "Năm": "2003",
    "Giới tính": "Nam",
    "Trường": "Đại học Công nghệ - Đại học Quốc gia Hà Nội",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "33",
    "Họ và tên": "Phan Khôi Nguyên",
    "Năm": "2003",
    "Giới tính": "Nam",
    "Trường": "Đại học Bách Khoa Hà Nội",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "34",
    "Họ và tên": "Đinh Việt Quang",
    "Năm": "2003",
    "Giới tính": "Nam",
    "Trường": "Đại học Bách Khoa Hà Nội",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "35",
    "Họ và tên": "Nguyễn Chí Thành",
    "Năm": "2002",
    "Giới tính": "Nam",
    "Trường": "Đại học Bách Khoa Hà Nội",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "36",
    "Họ và tên": "Nguyễn Đình Tiến",
    "Năm": "2003",
    "Giới tính": "Nam",
    "Trường": "Đại học Bách Khoa Hà Nội",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "37",
    "Họ và tên": "Đỗ Thu Trang",
    "Năm": "2004",
    "Giới tính": "Nữ",
    "Trường": "Đại học Công nghệ - Đại học Quốc gia Hà Nội",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "38",
    "Họ và tên": "Nguyễn Thị Mỹ Tú",
    "Năm": "2000",
    "Giới tính": "Nữ",
    "Trường": "ITMO University",
    "Quốc gia": "Nga"
  },
  {
    "_id": "39",
    "Họ và tên": "Nguyễn Quang Tuấn",
    "Năm": "Unknown",
    "Giới tính": "Nam",
    "Trường": "ITMO University",
    "Quốc gia": "Nga"
  },
  {
    "_id": "40",
    "Họ và tên": "Hoàng Minh Tuấn",
    "Năm": "2003",
    "Giới tính": "Nam",
    "Trường": "Học viện Công Nghệ Bưu Chính Viễn Thông",
    "Quốc gia": "Việt Nam"
  },
  {
    "_id": "41",
    "Họ và tên": "Phạm Mạnh Tuấn",
    "Năm": "2001",
    "Giới tính": "Nam",
    "Trường": "ITMO University",
    "Quốc gia": "Nga"
  },
  {
    "_id": "42",
    "Họ và tên": "Bùi Hoàng Vinh",
    "Năm": "2002",
    "Giới tính": "Nam",
    "Trường": "Học viện Công Nghệ Bưu Chính Viễn Thông",
    "Quốc gia": "Việt Nam"
  }
])
