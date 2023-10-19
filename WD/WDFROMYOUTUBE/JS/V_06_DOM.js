console.log("Hello Chrome bro! Let us start to know that How DOM work ?");

/*

// using DOM manipulation we can change whatever we have made in html, css file, that is known as manipulation.

// console.log(document.body);// this will give body tag and inner things as well.
// console.log(document.documentElement);// this will give html tag and inner things.

console.log(document.body.firstChild); // this will give that thing which come just after body tag that may be a space
// but if we want to access child as element of body, then we will use
console.log(document.body.firstElementChild);

// if we want to see everything in body tag, so we will write
console.log(document.body.childNodes);

// if we want only all children then we will do like this
console.log(document.body.children);
// so this will show every thing but not in the form of array, if we want to see it in array
// then we have to do it like this
const arr = document.body.children;
const newArr = Array.from(arr);
console.log(newArr);
// now we can iterate the newArr but not arr, because that was not array.
for(let i = 0; i < newArr.length; i++){
    console.log(newArr[i]);
}

// select tag by using ID
// we can use id's directly for accessing the related tag.
//console.log(first); // if we make a variable with same name then we can access like this.

// but what if we have already a variable with name as first, then it will show this not from html
const first = "Vikash";
console.log(first);
// so, in this case we will use
console.log(document.getElementById("first"));

// we can also access the tag via class name.
console.log(document.getElementsByClassName("okay"));
// this gives elements means multiple elements, so it returns collections of elements means in the form of array.
console.log(document.getElementsByClassName("okay")[0], document.getElementsByClassName("okay")[1]);
// this shows that, it returns an array.

// As we know that when we use input tag, in this we use name field.
console.log(document.getElementsByName("email")); // here is using elements, means it will return array.

// we can also take access using tag name.
console.log(document.getElementsByTagName("span"));  */


// Let us see some manipulation.

// for ex. if we want to give color in span tag, so we can do it using html or css, but we 
// have to do it using javaScript, Now
const thisOne = document.getElementsByTagName("span");
 console.log(thisOne);
 thisOne[0].textContent='hii'; 
 thisOne[0].innerText="Vikash Yadav"; // both are working for same thing.

 // now we can change tag as well.

 thisOne[0].innerHTML = `<span class = "myClass">Nice this is coming from js</span>`;

 //like this we can also write css from over here as well but in camalCase.

 thisOne[0].style.backgroundColor="red";
 thisOne[0].style.color='#fff'; // we can give hash value as well over here like this.
 thisOne[0].style.font=`100 1.5rem "Roboto"`;

 const btn = document.getElementById("btn");
 btn.style.backgroundColor='blue';
 btn.style.color='white';
 btn.style.border='none';
 btn.style.padding="2vmax 4vmax";
 btn.style.cursor='pointer';

 /* we can use querySelector

 const a = document.querySelector(".okay");
 a.innerText="Jai Ho"; */

 // we can also get attributes which are used in html tags.

 console.log(btn.getAttribute("id"));

 // like this we can set attribute as well.

 btn.setAttribute("class","thisIsFromJs");

 // We can make new element as well using Js

 const h2 = document.createElement("h2");
 // but for putting in body tag we have to use append
// document.body.append(h2); // at the end in body

// if we want to add text then we have to write it before appending it.

// h2.innerText="Vikash Yadav";
// or we can add this way as well

const text = document.createTextNode("Vikash Yadav");
h2.append(text);

document.body.prepend(h2); // this add at top in body

// Why are we doing this, we will use it in function, if someone will do this, then we will call that function.

function bringMe(){
    const heading = document.createElement("h1");
    heading.innerText="Now! let us start this.";
    document.body.prepend(heading);
}
// bringMe(); but we will call it at an specific time. for ex. if someone is clicking on button.

btn.onclick = bringMe; // we just have to give reference, if we use bringMe(), then 
// it will not wait to click the btn, it will be called already.
 

// also we can delete a element/tag from the html file as well.

function deleteTag(){
    const h1 = document.querySelector("h1");// so we can say that this selector is also used to access.
    
    if(h1 != null) // it will give null pointer exception, if all h2 has been deleted.
    h1.remove();

    console.log("click");
}
const del = document.querySelectorAll("button");// it will give all button

del[1].onclick= deleteTag; // it tells about second button, because querySelector is also used to return array.

