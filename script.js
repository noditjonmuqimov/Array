// var name = prompt("Ismingizni kiriting")
// console.log(" SIzning ismingiz " + name);
// var age = +prompt(" Yoshingiz nechida? ")
// console.log(' Siz ' + age + " yoshdasiz ");
// var misol = +prompt(' Misol 1: 6 + 3=? ')
// if (misol == 9) {
//     alert(" Misol 1: sizning javobingiz to'g'ri " + misol)
// } else {
//     alert(" Misol 1: sizning javobingiz noto'g'ri " + misol + " To'g'ri javob:" + (6 + 3))
// }
// var misol = +prompt('Misol 2: 20 - 5 =? ')
// if (misol == 15) {
//     alert(" Misol 2: sizning javobingiz to'g'ri " + misol);
// } else {
//     alert(" Misol 2: sizning javobingiz noto'g'ri " + misol + " To'g'ri javob " + (20 - 5));
// }
// var misol = +prompt('Misol 3: 15 * 2 =? ')
// if (misol == 30) {
//    alert("Misol 3: sizning javobingiz to'g'ri " + misol);
// } else {
//     alert(" Misol 3: sizning javobingiz noto'g'ri " + misol + " To'g'ri javob " + (15 * 2));
// }
// var misol = +prompt('Misol 1: 8 / 4 =? ')
// if (misol == 2) {
//     alert(" Misol 4: sizning javobingiz to'g'ri " + misol);
// } else {
//     alert(" Misol 4: sizning javobingiz noto'g'ri " + misol + " To'g'ri javob " + (8 / 4));
// }
// var misol = +prompt('Misol 5: 10 % 3 =? ')
// if (misol == 1) {
//     alert(" Misol 5: sizning javobingiz to'g'ri " + misol);
// }else{
//     alert(" Misol 5: sizning javobingiz noto'g'ri " + misol + " To'g'ri javob " + (10%3));
// }
// var end = alert('Kodlarga kirib javoblarni taqqoslang')
// console.log('end');

// let box = 1
// for (let i = 1; i <5; i++) {
//     box = box * i    
// }
// console.log(box);

// var age = +prompt("Yoshingiz nechida")
// if(age >=59 && age < 150){
//    alert("Pensiyaga chiqqansiz, agar tirik bo`lsangiz")
// }else if(age >= 50 && age < 58){
//     alert("Pensiya yoshiga oz qolibdi")
// }else if (age >= 18 && age < 49){
//     alert("Hali yoshsiz , ishlashiz kerak")
// }else if (age >= 0 && age <17 ){
//     alert("Yoshingiz yetmaydi")
// }else{
//     alert("Nimadir xato")
// }

// var son = +prompt("Son kiriting Biz uni toq yoki juftligini aniqlaymiz")
// if (son%2==0){
//     alert("siz juft son kiritdingiz " + son)
// }else if (son%2==1){
//     alert("siz toq son kiritdingiz " +son)
// }else{
//     alert("son kiriting harf emas")
// }

var son = +prompt("Son kiriting Biz uni toq yoki juftligini aniqlaymiz")
while(isNaN(son)){
    alert("Son kiriting harf emas " )
}
 if (son%2==0){
     alert("siz juft son kiritdingiz " + son)
 }else if (son%2==1){
    alert("siz toq son kiritdingiz " +son)
 }while(isNaN(son)){
    alert("Son kiriting harf emas " )
}