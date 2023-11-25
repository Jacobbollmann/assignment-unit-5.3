console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line


//Create an empty array named `myCollection`.

const myCollection = [];

//Create a function named `addToCollection`

function addToCollection(collection, title, artist, yearPublished) {
  let album = {
    title : title,
    artist : artist, 
    yearPublished : yearPublished,
  };
  collection.push(album);
  
  return album;
};

//Use and Test the `addToCollection` function:

addToCollection (myCollection, 'Strange Desire', 'Bleachers', 2014);
addToCollection(myCollection, 'Stick Season', 'Noah Kahan', 2022);
addToCollection(myCollection, 'Sadnecessary', 'Milky Chance', 2013);
addToCollection(myCollection, 'Master of Puppets', 'Metallica', 1986);
addToCollection(myCollection, 'Some Days', 'Dennis Lloyd', 2021);
addToCollection(myCollection, 'The Sunny Album', 'Hippie Sabotage', 2014);

console.log('My albums:', myCollection);

//Create a function named `showCollection`. This function should:
//Take in a `collection` parameter. (This allows it to be reused to show any array of album objects.)
//Loop through the `collection` and `console.log` each album's information formatted **within a single string**, like: `TITLE by ARTIST, published in YEAR`.

function showCollection(collection) {
  for (let objectInfo of collection) {
    console.log(`${objectInfo.title} by ${objectInfo.artist}, published in ${objectInfo.yearPublished}`);
  }
}

//Test the `showCollection` function.

showCollection(myCollection);

// Add a function named `findByArtist`. 

function findByArtist(collection, artist) {
  artistMatch = [];
  for (let info of collection) {
    // console.log(info);
    if (artist.toLowerCase() === info.artist.toLowerCase()){
      artistMatch.push(info);
    } 
  }           
  return artistMatch;
}


console.log(findByArtist(myCollection, 'Milky Chance'));
console.log(findByArtist(myCollection, 'Justin Timerlake'));





// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
