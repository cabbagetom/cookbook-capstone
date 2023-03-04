let bookmarkedRecipes = [];
let recipeName = "";


{
  // recipe toggle
    const imperialRecipe = document.querySelector('.imperial-recipe');
    const metricRecipe = document.querySelector('.metric-recipe');
    const imperialBtn = document.querySelector('#imperialBtn');
    const metricBtn = document.querySelector('#metricBtn');
    
    if (imperialBtn) {
      imperialBtn.addEventListener('click', function() {
        imperialRecipe.style.display = 'block';
        metricRecipe.style.display = 'none';
      });
    }
    
    if (metricBtn) {
      metricBtn.addEventListener('click', function() {
        imperialRecipe.style.display = 'none';
        metricRecipe.style.display = 'block';
      });
    }
}
    
//change colour of like button
 function colourLike() {
  if (document.getElementById("likeBtn").style.color != "red") {
    document.getElementById("likeBtn").style.color = "red";
  }
  else {document.getElementById("likeBtn").style.color = "#333";}
}


//comment box
function commentFeature(){
{
const commentSection = document.querySelector('.commentsection');
const commentBtn = document.querySelector('#commentBtn');
const pageBottom = document.querySelector('#commentSubmitBtn')

  if (document.getElementById("commentBtn").style.color != "green") {
    document.getElementById("commentBtn").style.color = "green";
    commentSection.style.display = 'block';
    setTimeout(function() {
      pageBottom.scrollIntoView();
    }, 0); // 1000 milliseconds = 1 second
  }
  else {document.getElementById("commentBtn").style.color = "#333";
  commentSection.style.display = 'none';
}


};
}

function Bookmark() {
  

  //Below we create the constructor function that will be used to create all recipe objects
  function recipeDetails(recipeName, imageLink, recipeLink) {
  this.recipeName = recipeName;
  this.imageLink = imageLink;
  this.recipeLink = recipeLink;
}
    //retrieve details

    recipeName = document.getElementById("recipeName").innerHTML;
    imgElement = document.querySelector('img');
    imageLink = imgElement.getAttribute('src');
    recipeLink = window.location.href;
  
    let newRecipe = new recipeDetails(
      recipeName, imageLink, recipeLink)
  
  
  //change colour of like button
  if (document.getElementById("bookmarkBtn").style.color != "blue") {
    document.getElementById("bookmarkBtn").style.color = "blue";
  
    //add to session storage
    if (sessionStorage.getItem("hasCodeRunBefore") === null) {
      bookmarkedRecipes.push(newRecipe);
      sessionStorage.setItem("bookmarks", JSON.stringify(bookmarkedRecipes));
      sessionStorage.setItem("hasCodeRunBefore", true);
   } else {
     bookmarkedRecipes = JSON.parse(sessionStorage.getItem("bookmarks"));//Get the array of book objects from sessionStorage and assign it to the array 'pers'
     bookmarkedRecipes.push(newRecipe);
     sessionStorage.setItem("bookmarks", JSON.stringify(bookmarkedRecipes));
     sessionStorage.setItem("hasCodeRunBefore", true);
     };
 
     //print sesson storage
     {
       bookmarkedRecipes = JSON.parse(sessionStorage.getItem("bookmarks"));//Get the array of book objects from sessionStorage and assign it to the array 'pers'
       console.table(bookmarkedRecipes);
       message = "Pages bookmarked: " + bookmarkedRecipes.length + "\nAccess bookmarks from Bookmarked Recipes tab"
       alert(message);
     }
  
  }
  
  else {document.getElementById("bookmarkBtn").style.color = "#333";
    bookmarkedRecipes = JSON.parse(sessionStorage.getItem("bookmarks"));//Get the array of book objects from sessionStorage and assign it to the array 'pers'
    bookmarkedRecipes.pop(newRecipe);
    sessionStorage.setItem("bookmarks", JSON.stringify(bookmarkedRecipes));
    sessionStorage.setItem("hasCodeRunBefore", true);
    };
  }


function BookmarkOutput() {

if (sessionStorage.getItem("hasCodeRunBefore") === null) {
  document.getElementById("nothingHere").innerHTML = "There is nothing here, please bookmark some pages"
}

else {
//parse bookmarked recipes
bookmarkedRecipes = JSON.parse(sessionStorage.getItem("bookmarks"))

// Get the body element to append the table to
const tableContainer = document.querySelector('#mainBody');

// Create the table element
const table = document.createElement('table');

// Create the table header row
const headerRow = document.createElement('tr');

// Add the recipe name header cell
const recipeNameHeader = document.createElement('th');
recipeNameHeader.textContent = '';
headerRow.appendChild(recipeNameHeader);

// Add the image header cell
const imageHeader = document.createElement('th');
imageHeader.textContent = '';
headerRow.appendChild(imageHeader);

// Add the recipe link header cell
const recipeLinkHeader = document.createElement('th');
recipeLinkHeader.textContent = '';
headerRow.appendChild(recipeLinkHeader);

// Append the header row to the table
table.appendChild(headerRow);

// Loop through each bookmarked recipe object in the array
for (let i = 0; i < bookmarkedRecipes.length; i++) {
  // Create a new row element
  const row = document.createElement('tr');

  // Create a recipe name cell
  const recipeNameCell = document.createElement('td');
  recipeNameCell.textContent = bookmarkedRecipes[i].recipeName;
  row.appendChild(recipeNameCell);

  // Create an image cell
  const imageCell = document.createElement('td');
  const image = document.createElement('img');
  image.id = 'thumbnail'; // Set the id attribute of the img element
  image.src = bookmarkedRecipes[i].imageLink;
  imageCell.appendChild(image);
  row.appendChild(imageCell);

  // Create a recipe link cell
  const recipeLinkCell = document.createElement('td');
  const recipeLink = document.createElement('a');
  recipeLink.href = bookmarkedRecipes[i].recipeLink;
  recipeLink.id = 'viewBtn'; // Set the id attribute of the link element
  recipeLink.textContent = 'View Recipe';
  recipeLinkCell.appendChild(recipeLink);
  row.appendChild(recipeLinkCell);

  // Append the row to the table
  table.appendChild(row);
}

// Append the table to the container
tableContainer.appendChild(table);

}
}