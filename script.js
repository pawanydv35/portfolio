
const navBar = document.querySelector('.navbar-link');

console.log(navBar)

const navLinks = ["home", "skills", "contact", "aboutme","education"];

navLinks.forEach(link => {
    
    // Create anchor element.
     let a = document.createElement('a');
     let text = document.createTextNode(link)
     a.appendChild(text);

     if (link == "home"){
         a.href =  'index.html'
     }else{
        a.href = link + '.html'
     }

     // Append the anchor element to the body.
     navBar.appendChild(a);

});
