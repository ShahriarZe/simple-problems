//--------FIND LEAP YEAR in an ARRAY-----------

function findLeapYear(array) {
    let leapYear = [];
    for (i = 0; i < array.length; i++) {
        let years = array[i];
        if (years % 4 === 0) {
            leapYear.push(years);
        }
    }
    return leapYear;
}
let theArray = [2023, 2024, 2025, 2028, 2030, 2016, 2018, 2008, 2003]
let givenArray = findLeapYear(theArray);
console.log(givenArray);




//------------INCHES TO FEET------------------

function inchesToFeet(inches) {
    const feet = inches / 12;
    return feet;
}
const inches1 = 144;
const givenInches1 = inchesToFeet(inches1);
console.log(givenInches1);
const inches2 = 96;
const givenInches2 = inchesToFeet(inches2);
console.log(givenInches2);





// --------AVERAGE of EMELMENTS in ARRAY---------------

function avgOfElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        sum += element;
        avg = sum / arr.length
    }
    return avg;
}
let givenArray1 = [1, 2, 3, 4, 5, 6]
let array1 = avgOfElements(givenArray1);
console.log(array1);
let givenArray2 = [5, 10, 15, 20, 25, 30];
let array2 = avgOfElements(givenArray2);
console.log(array2);




// -----------SUM of THE ODD ELEMENTS of ARRAY--------------

function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sum += element;
    }
    return sum;
}
function sumOfOdd(arr) {
    let oddElem = [];
    for (let i = 0; i < arr.length; i++) {
        const element2 = arr[i];
        if (element2 % 2 !== 0) {
            oddElem.push(element2)
        }
    } return oddElem;
}
let arr1 = [5, 7, 9, 10, 11, 13];
let oddElements = sumOfOdd(arr1);
console.log(oddElements);
let givenArray3 = sumOfArray(oddElements);
console.log('Sum of Odd Elements:', givenArray3);




//----------------SUM of EVEN ELEMENTS-------------------

function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const sumOFelement = arr[i];
        sum += sumOFelement;
    }
    return sum;
}
function sumOfEven(arr) {
    let even = [];
    for (let i = 0; i < arr.length; i++) {
        const evenElement = arr[i];
        if (evenElement % 2 === 0) {
            even.push(evenElement)
        }
    }
    return even;
}
let arr2 = [2, 3, 4, 6, 8, 9, 12, 13, 14, 15]
let evenSum = sumOfEven(arr2);
console.log(evenSum);
let sumOfArray1 = sumOfArray(evenSum);
console.log('Sum of Even Elements:', sumOfArray1);
