//Task 1

 //createCharacter will receive input parameters in the following order:
 //string, string (if there is no second parameter default to null), integer (or string integers such as "1") array (if there is no third parameter default to [0,0,0])
 //initialSkills array is ordered fishingSkill, miningSkill, and farmingSkill
function createCharacter(charName, catName = null, initialSkills = [0,0,0]) {


    function levelUp(skill) //levelUp will receive a non-empty String input parameter
    {
        if (typeof(this[skill])==='number' && this[skill] < 10) //if the input parameter is a valid identifier for an integer property of the object and that property is less than 10
        {
            this[skill] += 1;
        }
    }

   function grabItems(...items) //grabItems will receive any number of non-empty strings and put them in an array
    {
        (this.inventory).push(...items) //Add each individual element of the items array to the character's invetory
    }

   function dropItem(item) //dropItem will receive a single non-empty string that may or may not be in the character's inventory
   {
        if ((this.inventory).indexOf(item)!==-1) //if the item does exist in the character's inventory (the index is not returned as -1)
        {
            (this.inventory).splice((this.inventory).indexOf(item),1) //remove the item at that index
        }
   }

 
    let character = {                 
        characterName: charName, //comes from charName directly
        //initialSkills = [fisihingSkills, miningSkills, farmingSkills]
        fishingSkill: Number(initialSkills[0]) <=10 ? Number(initialSkills[0]) : 10, //if intialSkill[0] is greater than 10, set it to 10. If not, set it to the first element of initialSkills
        miningSkill: Number(initialSkills[1]) <=10 ? Number(initialSkills[1]) : 10, //if intialSkill[1] is greater than 10, set it to 10. If not, set it to the second element of initialSkills
        farmingSkill: Number(initialSkills[2]) <=10 ? Number(initialSkills[2]) : 10, //if intialSkill[2] is greater than 10, set it to 10. If not, set it to the third element of initialSkills
        inventory: [],
        levelUp, 
        grabItems,
        dropItem
    };

    if (!(catName===null)) //if catName is not defaulted to null
    {
        character.catName = catName;
    }

   
    return character;                   
}


function describeCharacter(character) { //describeCharacter will receive an object that was created from createCharacter

    let total = character.fishingSkill + character.miningSkill + character.farmingSkill;
    let description = character.characterName;

    if (total < 10) {
        description += " is just starting out";
    } else {
        description += " is a skilled adventurer";
    }

    if ("catName" in character) //if catName is a property contained in the character object
    {
        description += ` and has a cat ${character.catName}.`;
    }

    else //if catName isn't a property contained in the character object
    {
       description += ".";
    }

    console.log(description);

    //Leave this for the autograder!
    return description;                 
}

// A few examples are shown below of the calling the function k
let player = createCharacter("New Player", null)
player.levelUp("farmingSkill")
console.log(player.farmingSkill) //should print 1
player.grabItems("Apple", "Peach") 
player.dropItem("Peach")
console.log(...player.inventory) //should print Apple
describeCharacter(player) //should print "New Player is just starting out." */



