// Part 1: Variable declarations and conditionals
let siteTitle = document.title;
let navItems = document.querySelectorAll('#navmenu li');

if (siteTitle.includes("DOM")) {
  console.log("You're on a JavaScript DOM page!");
}

// Part 2: Custom functions

function changeBgAndTextColor(bgColor, textColor) {
  document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
    
      alert('Theme changed to Dark mode');

}


function showAlertOnHover() {
  const introImg = document.querySelector('.intro_img img');
  introImg.addEventListener('mouseover', () => {
    alert("This is our ShieldLog visual representation.");
  });
}


// Part 4: DOM interactions
document.body.style.fontFamily = 'Arial, sans-serif'; // Change font

document.getElementById("clr_change").onclick = function () {
  document.getElementById("myTable").style.backgroundColor = "grey";
};


showAlertOnHover(); // Call function

