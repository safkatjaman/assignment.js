/* Problem Number 1 
Converting Feet To Mile */

function feetToMile(feet){

    /* 1 mile = 5280 Feet */
    const mile = 5280;

    /* Checking first condition to convert feet into mile. If it is negative or zero it will go to the next codition */
    if(feet > 0){
        let convert = feet / mile;
        console.log(feet, `Feet: ${convert} mile.`);
    }

    /* Checking second condition whether it is zero or not  */
    else if(feet == 0){
        console.log(`Ow no! You are trying to put ${feet} right? I should remind you that 0 feet is 0 mile. :3`);
    }

    /* Checking third condition to know the number is positive or negative */
    else{
        console.log("Please Put a Positive Number to Convert. Negative numbers are not real you know right!");
    }
}
feetToMile(0);
feetToMile(4500);
feetToMile(-5280);

console.log(`\n`);

/* The end of Problem Number 1 */




/* Problem Number 2
To know How much wood will need to make chair, table and bed */

function woodCalculator(numberOfChair, numberOfTable, numberOfBed){
    /* 
    1 Chair = 1 CFT
    1 Table = 3 CFT
    1 Bed   = 5 CFT
    */

    const chair = 1;
    const table = 3;
    const bed = 5;

    /* Checking the numbers of wood customer needed */
    if(numberOfChair >= 0 && numberOfTable >= 0 && numberOfBed >= 0){
        let totalAmountOfWood = (chair * numberOfChair) + (table * numberOfTable) + (bed * numberOfBed);
        console.log(`${totalAmountOfWood} CFT will be needed to make you chair, table and bed.`);
    }

    /* Checking if it is negative number */
    else{
        console.log(`You have entered negative value and it doesn't work here.`);
        console.log(`You have wanted ${chair} chair/chairs.`);
        console.log(`You have wanted ${table} table/tables.`);
        console.log(`You have wanted ${bed} bed/beds.`);
    }
}
woodCalculator(4, 5, 6);

console.log(`\n`);

/* The end of Problem Number 2 */




/* Problem Number 3
Making a Brick Calculator to calculate the bricks to make a building
*/

function brickCalculator(numberOfFloors){
    
    /* 1 feet = 1000 bricks */

    if(numberOfFloors >= 1){
        const feet = 1000;
        var i, totalBricks = 0;

        for(i = 1; i <= numberOfFloors; i++){
            if(i <= 10){
                totalBricks = (15 * feet) + totalBricks;
            }
            else if(i <= 20){
                totalBricks = (12 * feet) + totalBricks;
            }
            else{
                totalBricks = (10 * feet) + totalBricks;
            }
        }
        console.log(`You need total of ${totalBricks} bricks to make your building.`);
    }
    else{
        console.log(`No! No! You just can't have a zero or negative floor in your builing :3.`)
    }

}

    brickCalculator(100);

    console.log(`\n`);

/* The end of Problem Number 3 */




/* Problem Number 4
Returning the Tiny name of my friend as output from the array.
*/

function tinyFriend(nameOfFriends){

    /* Checking whether the array is empty or not */
    if(nameOfFriends != null){

        var shortestName = nameOfFriends[0];

        for(var i = 0; i < nameOfFriends.length; i++){

            var longestName = nameOfFriends[i];

            /* Checking the length */
            if(longestName.length < shortestName.length){

                shortestName = longestName; /* Changing value */
            }
        }
        console.log(shortestName); /* Getting the shortest name */
    }
    else{
        console.log(`So you thinking you can get something from that empty array.`);  /* If false or the array is empty then show the message */
    }
}

/* Declaration of Array */
var friendsName = ['Siam', 'Docco', 'Jaber', 'Pasha', 'Badass', 'Kabila'];

/* Calling the function */
tinyFriend(friendsName);

/* The end of Problem 4 */