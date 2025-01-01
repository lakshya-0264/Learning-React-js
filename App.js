// App.js

// React is Javascript Library not framework as it can club with small portion of any app also.

/*
const heading = React.createElement("h1",{id: "heading"},"Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); 
*/


// console.log(heading); // Returns an object not the HTML tag h1
// createElement("Name of the Tag",{"Attributes"},children);
// children => "What Inside that Tag(For multiple Children, It can be an array)"
// React Element(Object) => root.render() => HTML(Browser Understands)
// root.render() => It will not append instead "REPLACE".

/* 

<div id="parent">
    <div id="child">
        <h1>I am h1 Tag.</h1>
        <h2>I am h2 Tag.</h2>
    </div>
</div> 

*/

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div",{id:"child"},[React.createElement("h1",{},"I am h1 Tag."),React.createElement("h2",{},"I am h2 Tag."),]));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
