let name = ("==========*Abdul Rauf*==========");
console.log("Name :-", name)

console.log("**********FUNCTIONS**********")

console.log("1.", "======Even Odd Finder======")
function evenodd(num){
    if(num%2==0){
        return "Even"
    }
    else{
        return "Odd"
    }
}
let num = prompt("Give The Value Of Num")
let ans000 = evenodd(num)
console.log(ans000)

console.log("2.", "====Positive & Negative Num Finder====")
function check(num) {
    if (num1 >= 0) {
        return "Positive"
    }
    else {
        return "Negative"
    }
}

let num1 = prompt("Enter a number")
let ans00 = check(num1)
console.log(ans00)

console.log("3.", "=====Pass / Fail Checke=====")
function result(marks) {
    if (marks >= 200) {
        return "Pass"
    }
    else {
        return "Fail"
    }
}

let marks = prompt("Enter your marks")
let ans0 = result(marks)
console.log(ans0)

console.log("4.", "====Age Checker====")
function agecheck(age) {
    if (age >= 18) {
        return "Adult"
    }
    else {
        return "Minor"
    }
}

let age = prompt("Enter your age")
let ans1 = agecheck(age)
console.log(ans1)

console.log("5.", "=====Greater Number Finder=====")
function greater(a, b) {
    if (a > b) {
        return "A is greater"
    }
    else {
        return "B is greater"
    }
}

let a = prompt("Enter first number")
let b = prompt("Enter second number")
let ans2 = greater(a, b)
console.log(ans2)

console.log("6.", "=====Divisibility Checker=====")
function divisible(numb) {
    if (numb % 5 == 0) {
        return "Divisible by 5"
    }
    else {
        return "Not divisible by 5"
    }
}

let numb = prompt("Enter a number")
let ans3 = divisible(numb)
console.log(ans3)

console.log("7.", "=====Voting Eligibility=====")
function vote(umar) {
    if (umar >= 18) {
        return "Eligible"
    }
    else {
        return "Not Eligible"
    }
}

let umar = prompt("Enter your age")
let ans4 = vote(umar)
console.log(ans4)

console.log("8.", "Temperature Checker")
function weather(temp) {
    if (temp >= 30) {
        return "Hot"
    }
    else {
        return "Cold"
    }
}

let temp = prompt("Enter temperature")
let ans5 = weather(temp)
console.log(ans5)

console.log("9.", "=====Login Checker=====")
function login(password) {
    if (password == "1234") {
        return "Login Successful"
    }
    else {
        return "Wrong Password"
    }
}

let password = prompt("Enter password")
let ans6 = login(password)
console.log(ans6)

console.log("10.", "=====Discount Checker=====")
function discount(amount) {
    if (amount >= 5000) {
        return "You got a discount"
    }
    else {
        return "No discount"
    }
}

let amount = prompt("Enter shopping amount")
let ans7 = discount(amount)
console.log(ans7)

console.log("**********ARRAYS**********")



// Ex1. Print All Students
console.log("========== Ex1. Print All Students ==========");

let Students0 = ["Rauf", "Ehsan", "Farhan", "Ismail"];

for (let i = 0; i < Students0.length; i++) {
    console.log(Students0[i]);
}


// Ex2. Skip Second Student
console.log("========== Ex2. Skip Second Student ==========");

let Students1 = ["Rauf", "Ehsan", "Farhan", "Ismail"];

for (let i = 0; i < Students1.length; i++) {
    if (i == 1) {
        continue;
    }
    console.log(Students1[i]);
}


// Ex3. Print Only Farhan
console.log("========== Ex3. Print Only Farhan ==========");

let Students2 = ["Rauf", "Ehsan", "Farhan", "Ismail"];

for (let i = 0; i < Students2.length; i++) {
    if (i == 2) {
        console.log(Students2[i]);
    }
}


// Ex4. Skip Rauf
console.log("========== Ex4. Skip Rauf ==========");

let Students3 = ["Rauf", "Ehsan", "Farhan", "Ismail"];

for (let i = 0; i < Students3.length; i++) {
    if (Students3[i] == "Rauf") {
        continue;
    }
    console.log(Students3[i]);
}


// Ex5. Find Ehsan
console.log("========== Ex5. Find Ehsan ==========");

let Students4 = ["Rauf", "Ehsan", "Farhan", "Ismail"];

for (let i = 0; i < Students4.length; i++) {
    if (Students4[i] == "Ehsan") {
        console.log("Student Found");
    }
}


// Ex6. Print First Two Students
console.log("========== Ex6. Print First Two Students ==========");

let Students5 = ["Rauf", "Ehsan", "Farhan", "Ismail"];

for (let i = 0; i < Students5.length; i++) {
    if (i < 2) {
        console.log(Students5[i]);
    }
}


// Ex7. Stop at Farhan
console.log("========== Ex7. Stop at Farhan ==========");

let Students6 = ["Rauf", "Ehsan", "Farhan", "Ismail"];

for (let i = 0; i < Students6.length; i++) {
    if (Students6[i] == "Farhan") {
        break;
    }
    console.log(Students6[i]);
}


// Ex8. Skip Ismail
console.log("========== Ex8. Skip Ismail ==========");

let Students7 = ["Rauf", "Ehsan", "Farhan", "Ismail"];

for (let i = 0; i < Students7.length; i++) {
    if (Students7[i] == "Ismail") {
        console.log("Skipped");
    }
    else {
        console.log(Students7[i]);
    }
}


// Ex9. Count Total Students
console.log("========== Ex9. Count Total Students ==========");

let Students8 = ["Rauf", "Ehsan", "Farhan", "Ismail"];

let count = 0;

for (let i = 0; i < Students8.length; i++) {
    count++;
}

console.log("Total Students:", count);


// Ex10. Print Students with Index
console.log("========== Ex10. Print Students with Index ==========");

let Students9 = ["Rauf", "Ehsan", "Farhan", "Ismail"];

for (let i = 0; i < Students9.length; i++) {
    console.log("Index:", i, "Student:", Students9[i]);
}

console.log("========== THE END ==========");
