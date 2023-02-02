// 1-vazifa

// 1
// 1-7 gacha butun son berilgan kiritilgan songa mos ravishda hafta kunini so'zlarda ifodolovchi dastur tuzing

// let day = 5
// switch(day){
//     case 1:
//         console.log('dush');
//         break;
//         case 2:
//             console.log('sesh');
//             break;
//             case 3:
//                 console.log('chor');
//                 break;
//                 case 4:
//                     console.log('paysh');
//                     break;
//                     case 5:
//                         console.log('Juma');
//                         break;
//                         case 6:
//                             console.log('shamb');
//                             break;
//                             case 7:
//                                 console.log('yaksh');
                
// }



// 2
// K butun son berilgan Baho natijalarini chiqaruvchi dastur tuzing. 1-yomon, 2-qoniqarsiz, 3-qoniqarli, 4-yaxshi, 5 - alo

// let baho = 3;

// switch(baho){
//     case 5:
//         console.log('alo');
//         break;
//         case 4:
//             console.log('yaxshi');
//             break;
//             case 3:
//                 console.log('qoniqarli');
//                 break;
//                 case 2:
//                     console.log('qoniqarsiz');
//                     break;
//                     case 1:
//                         console.log('yomon');
// }



// 3
// Oy raqami berilgan Kiritilgan oy qaysi faslga tegishli ekanin chiqaruvchi dastur tuzing. M - s 2 - qish

// let oy = 4

// switch(oy){
//     case 12:
//         console.log('dekabr');
//         break;
//         case 1:
//             console.log('yanvar');
//             break;
//             case 2:
//                 console.log('fevral');
//                 break;
//                 case 3:
//                     console.log('mart');
//                     break;
//                     case 4:
//                         console.log('aprel');
//                         break;
//                         case 5:
//                             console.log('may');
//                             break;
//                             case 6:
//                                 console.log('iyun');
//                                 break;
//                                 case 7:
//                                     console.log('iyul');
//                                     break;
//                                     case 8:
//                                         console.log('avgust');
//                                         break;
//                                         case 9:
//                                             console.log('sentyabr');
//                                             break;
//                                             case 10:
//                                                 console.log('oktyabr');
//                                                 break;
//                                                 case 11:
//                                                     console.log('noyabr');
// }




// 4
// Oy raqami berilgan shu oyda nechta kun borligin aniqlovchi dastur tuzing

// let oy = 4

// switch(oy){
//     case 12:
//         console.log(31);
//         break;
//     case 1:
//         console.log(31);
//         break;
//     case 2:
//         console.log(28);
//         break;
//     case 3:
//         console.log(31);
//         break;
//     case 4:
//         console.log(30);
//         break;
//     case 5:
//         console.log(31);
//         break;
//     case 6:
//         console.log(30);
//         break;
//     case 7:
//         console.log(31);
//         break;
//     case 8:
//         console.log(31);
//         break;
//     case 9:
//         console.log(30);
//         break;
//     case 10:
//         console.log(31);
//         break;
//     case 11:
//         console.log(30);
//         break;
// }



// 5
// a, b sonlar berilgan c amal ham berilgan a va b sonlar ustida amal bajaruvchi dastur tuzing





// 6
// Bahoga qarab stependiyani aniqlovchi dastur tuzing

// let baho = 5;

// switch(baho){
//     case 5:
//         console.log(550+'ming');
//         break;
//     case 4:
//         console.log(450+'ming');
//         break;
//     case 3:
//         console.log(0+'ming');
// }


// 2-vaifa
// ternary operation

// 1
// Telefon nomer kodi orqali qaysi kompaniya ekanligini tekshiring


// let code = 90
// let checkCompany = code === 99 ? 'uzmobile' : code === 90 ? 'beeline': code === 97 ? 'mobiuz': code === 94 ? 'usell' : 'code notogri berilgan!!'


// console.log(checkCompany);



// 2
// Butun son berilgan agar son musbat bo'lsa unda sonni bittaga oshiring aks xolda 1taga kamaytiring

// let son = 10

// let sonPlus = son > 0 ? son + 1 : son < 0 ? son - 1 : 'jsnjnx'

// console.log(sonPlus);










// // 3
// // Butun son berilgan agar son musbat bo'lsa sonni 3 ga oshiring manfiy bo'lsa unda 2ga kamaytiring

// let son = 30

// let sonPlus = son > 0 ? son + 3 : son < 0 ? son - 2 : 'jsnjnx'

// console.log(sonPlus);


// 4
// Ikkita butun son berilgan kattasin aniqlovchi dastur tuzing

// let a = 60
// let b = 105

// let checkNum = a < b && b > a ? b : a

// console.log(checkNum);


// 5
// 3 ta butun son berilgan eng kattasini aniqlovchi dastur tuzing

// let a = 1000
// let b = 400
// let c = 200

// let checkNum = a > b && b > c ? a : a < b && b > c ? b : a < b && b < c && c > a ? c: a > b && b > c ? a : a > b && b < c ? c : 'nomalum son'

// console.log(checkNum);

// 6
// 3 ta son berilgan eng kichikin aniqlovchi dastur tuzing

// let a = 140
// let b = 130
// let c = 200

// let checkNumTop = a < b && b < c ? a : a > b && b < c ? b : a > b && b > c ? c : a < b && b > c ? a : a < b && b > c ? a : 'nomalum son'
// console.log(checkNumTop);


// 7
// Jinsga qarab log chiqivchi dastur tuzing!

// let gender = 'women'

// let checkGender = gender === 'male' ? 'male-img' : gender === 'women' ? 'women-img' : 'nomalum'
// console.log(checkGender);



// 8
// Bahoga qarab stependiyani aniqlovchi dastur tuzing

// let baho = 4

// let checkMany = baho === 5 ? '500ming' : baho === 4 ? '400ming' : baho === 3 ? '0ming' : "nomalum" 

// console.log(checkMany);


// 9
// Butun son berilgan shu songa qarab toq musbat, toq manfiy, juft musbat, juft manfiy deb chiqaruvchi dastur tuzing

// let num = 22

// let logDeterminetion = num % 2 != 0 && num > 0 ? 'toq musbat' : num % 2 != 0 && num > 0 ? "toq manfiy" : num % 2 == 0 && num > 0 ? 'juft musbat' : num % 2 == 0 && num < 0 ? "juft manfiy" : "nomalum son"
// console.log(logDeterminetion);



// 10
// Yilga qarab yoshin aniqlovchi dastur tuzing

// let yil = 1975
// let minusyil = 2023 - yil
// let res = minusyil
// console.log(minusyil);









