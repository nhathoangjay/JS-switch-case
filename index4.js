let genre = "HK"
let age = 17
function phim(genre,age) {
    switch(genre) {
        case "HD" : 
            if(age>=16) {
                return "đủ tuổi"
            }
            else return "ko đủ tuổi"
        case "KD" : 
            if(age>=18) {
                return "đủ tuổi"
            }
            else return "ko đủ tuổi"
        case "HK" : 
        case "HH" : return "ko giới hạn lứa tuổi"
    }
        
    
}
console.log(phim(genre,age))