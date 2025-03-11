// 1. Difference(s) between == and ===?
// console.log("'==': Toán tử dùng để so sánh giá trị, tự động ép kiểu, nếu 2 giá trị có cùng một kiểu dữ kiệu thì "==" sẽ coi chúng bằng nhau vd: console.log(0 == "false") =>true");
// console.log("'===': Toán tử này dùng để so sánh chặt chẽ 2 kiểu dữ liệu, nó sẽ trả về false Nếu các giá trị được so sánh có kiểu khác nhau. vd: console.log(5 === "5")=>false)
// 2.1: Calculate BMI (Body Mass Index)
let height = 1.8;
let weight = 65;
let bmi = weight / (height * height);
console.log("BMI: ", bmi);
// 2.2: Calculate Simple Interest (principal * rate * time)
let principal = 299999;
let rate = 0.02;
let time = 2;
let interest = principal * rate * time;
console.log("Interest = ", interest);
// 2.3: Convert Currency (USD to local currency)
let exchangeRate = 23000;
let amountInUSD = 500;
let amountInVND = amountInUSD * exchangeRate;
console.log(`${amountInUSD} USD = ${amountInVND} VND`);
// 2.4: Calculate Time (hours:minutes:seconds)
let totalSeconds = 1000; //tong so giay mun chuyen
let hour = 3600;
let minute = 60;
let hours = (totalSeconds / hour);
let minutes = ((totalSeconds % hour) / minute);
let seconds = totalSeconds % minute;
console.log(hours + "h", minutes + "m", seconds + "s");
