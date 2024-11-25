let diem = 90
function xephang(x) {
    switch(true) {
        case 90<=x<=100: return "Hạng A+"
        case x>=80: return "Hạng A"
        case x>=70: return "Hạng B"
        case x>=60: return "Hạng C"
        case x<60: return "Hạng D"
    }
}
console.log(xephang(diem))