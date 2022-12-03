//                                    ......დავალება 1.......

//1)	დავწეროთ ფუნქცია რომელიც პარამეტრად მიიღებს ერთ ობიექტს და დააბრუნებს ამ ობიექტის კლონ ობიექტს.
// function clon (x){
//   x += 1;
//   return x;
// }
// let age = 20;   //20
// const newAge = clon (age); //21
// //შიდა x გაიზრდება ერთით და გახდება 21, მაგრამ age იგივე დარჩება (20-ის ტოლი), რადგან number პრიმიტიული ტიპისაა და კოპირდება. 
// //მაგრამ ობიექტი და მასივი არაპრიმიტიული ტიპებია და არ კოპირდებიან, რეფერენსი (მიმთითებელი) გადაეცემათ, სადაც ესა თუ ის ობიექტი ინახება. და უშუალოდ იმ ობიექტზე ხდება მოდიფიკაციები და ახალი არ იკლონება. მაგ:
// function changeName(param){
//   param.name = "Dato";
// }
// const obj = {name: "Giorgi"}
// changeName(obj);   // Dato 
// //changeName(obj)-ში გამოიტანა Dato და არა, Giorgi.
// //ამიტომ უნდა შევქმნათ დამატებითი ფუნქცია, რომელიც ობიექტს დაკლონავს და დააბრუნებს ახალ ობიექტს.
// const person = {     //აღერილია ობიექტი, რომელსაც ჩავაწოდებთ param პარამეტრს.
//   name: "Giorgi",
//   age: 25
// }
// function clonObj (param){
//   const newObj = {};      //ამ ცარიელ ობიექტში ციკლის საშულებით უნდა ჩავსეტოთ param პარამეტრის ფროფერთიები, რომელიც უკვე აღწერილი გვაქვს person ობიექტში.
//   for (let key in param){
//     newObj[key] = param[key]   //key ობიექტის ფროფერთია. For in ციკლით ცარიელი newObj-ის ფროფერთიები გაუტოლდა param პარამეტრის ფროფერთიებს, რომელსაც ქვემოთ გადავცემთ person-ის ფროფერთებს.
//   } 
//   return newObj;
// }
// let newObj = clonObj(person); //გადავეცით person-ის ფროფერთიები. newObj-ს ცარიელ ობიექტში უკვე ჩაისეტა person-ის ფროფერთიები. თუ ახალ newObj ობიექტზე განვახორციელებთ მოდიფიკაციას: შევცვლით სახელს და ასაკს, person ობიექტი უცვლელი დარჩება და შეიცვლება მხოლოდ ახალი ობიექტის ფროფერთიების მნიშვნელობები.
// newObj.name = "Kristine";  
// newObj.age = 35;
// console.log(newObj); // name: 'Kristine', age: 35


//                                      ......დავალება 2.......

//2)	დავწეროთ ფუნქცია რომელიც პარამეტრად მიიღებს ერთ array ს და დააბრუნებს ამ arrayს კლონს.
// let studentsAge = [20, 21, 22, 23];
// function clonArray (param){
//   newArray = [];
//   for (let i=0; i < param.length; i++){
//     newArray[i] = param[i];
//   }
//   return newArray;
// }
// clonArray(studentsAge);


//                                     ......დავალება 3.......

//3)	დავწეროთ ფუნქცია რომელსაც გადავცემთ array -ს , ფუნქციამ შიგნით უნდა მოძებნოს ამ array ში უდიდესი და უმცირესი რიცხვი და დაგვიბრუნოს ობიექტი შესაბამისი ქი : ველიუ წყვილით.
// const array = [1, 3, 5, -65, 12000, 5, 0, 2]; 
// function findMinAndMax (param){
//   let min = param[0];  //აღვწერეთ min ცვლადი. min-ს დეფოლთად მინავანიჭეთ param-ის პირველი მნიშვნელობა (მასივიდან ამოვიღეთ პირველი მნიშვნელობა)
//   let max = param[0];
//   for (let i = 1; i < param.length; i++){  //for ციკლით დავუვლით მასივის კოლექციას და ყოველ შემდეგ ელემენტს  ვადარებთ წინა ელემენტს. ციკლი დავიწყეთ 1-დან, რადგან შეედაროს მის წინა ელემენტს
//     min = min < param[i] ? min : param[i]; // როდესაც მინიმუმს ვეძებთ: 1>3? - არა, 1>5? - არა, 1>-65? - კი, -65 შეინახება ზემოთ გამოძახებულ min ცვლადში და გაგრძელდება შედარება. if-ის ვრცელი ჩანაწერი if (min < param[i]){min = min;} else {min = param[i]}
//     max = max > param[i] ? max : param[i];
//   }
//   const obj = {minNumber: min, maxNumber: max}
//   return obj;
// }
// findMinAndMax(array); // {minNumber: -65, maxNumber: 12000}


//                                     ......დავალება 4.......

//4)	დავწეროთ ფუნქცია რომელიც array ში მოძებნის მინ და მაქს რიცხვებს და დაგვიბრუნებს, ოღონდ ამჯერად გამოვიყენოთ JS ში ჩაშენებული ობიექტი Math.Min და Math.max
// const numbersArray = [5, 8, 0, 10, 7];
// function findMinAndMax (numbArray){
//   let min = Math.min.apply(Math, numbArray);
//   let max = Math.max.apply(Math, numbArray);
  
//   let obj = {minNumber: min, maxNumber: max};
//   return obj;
// }
// findMinAndMax (numbersArray);



//                                     ......დავალება 5.......
//5)	შევქმნათ ფუნქცია, ოღონდ ამჯერად Arrow function expression-ი. რომელიც დაელოდება ორ პარამეტრს, start და end. ფუნქციის შესრულების მერე უნდა დაგვიბრუნდეს ახალი array რომელშიც იქნება start იდან end-ამდე რიცხვები, ასეთი: [start, start+1,start+2,start,+3, ..... end]
// let startEnd = (start, end) => {   
//   let newArray = [];
// }



//                                     ......დავალება 6.......
//6)	დავწეროთ ფუნქცია რომელსაც გადავცემთ array ს და index ს. ფუნქციამ უნდა შეძლოს ამ მასივში გადმოცემულ index ის პოზიციაზე რა itemიც იქნება წაშალოს და დაგვიბრუნოს ახალი array.

//7)	დავწეროთ დავწეროთ ფუნქცია რომელიც დაელოდება ერთ პარამეტრს array ს , ფუნქციის დანიშნულება გადმოცემული array შეატრიალოს და დაგვიბრუნოს. ანუ თუ გადავცემთ [1,2,3,4] დაგვბრუნოს [4,3,2,1]


//                                     ......დავალება 8.......
//8)	დავწეროთ ფუნქცია რომელსაც გადავცემთ ერთ პარამეტრს წამების რაოდენობას, რიცხვს. ფუნქციამ უნდა შეძლოს გადმოცემული წამების რაოდნება რამდენი საათია, რამდენი წუთია და რამდენი წამია გამოთვალოს, შექმნას ახალი ობიექტი {hour:x, minutes:z,seconds:y} და დაგვიბრუნოს. მაგალითად გადავეცი 5123123, უნდა დააბრუნოს ეს რიცხვი რადენი საათია, წუთია და წამია.
// const seconds = 75200;
// function convert (s) {
//   const secondsInHours = 3600;
//   const secondsInMinutes = 60;

//   const hour = Math.floor(s / secondsInHours);
//   const minutes = Math.floor((s - (hour * secondsInHours)) / secondsInMinutes);
//   const second = (s - (hour * secondsInHours)) % secondsInMinutes;

//   const date = {hour: hour, minutes: minutes, seconds: second}
//   return date;
// }
// convert (seconds);


//9)	დავწეროთ ფუნქცია რომელსაც გადავცემთ რიცხვების ერეის, ფუნქციამ უნდა მოძებნოს ამ ერეიში უნიკალური წევრები და დაგვიბრუნოს უკამ. მაგ: გადავეცით [1,1,3,45,3,5,5] უნდა დაგვიბრნოს
