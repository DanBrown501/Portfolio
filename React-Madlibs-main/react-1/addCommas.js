function addCommas(number) {
    // check for correct input
    if(typeof number !== "number"){
        return console.log("invalid input");
    }
    // turn number to array of chars
    let num = Array.from(number.toString());
    //set aside space for decimals and formatting
    let formatting = [];
    let dec = [];
    // check input for development
    console.log(typeof num);
    console.log(num);
    //check for negative number and remove non number char from array
    let negative = false;
    if(num[0] === "-"){
        negative = true;
        num = num.slice(1);
        console.log(num);

    }
    // check for decimals and ignore when adding commas
    const decimal = num.indexOf(".");
    if(decimal !== -1){
        dec = num.splice(decimal);
        num = num.slice(0, decimal);
        console.log(num);

    }
    //reverse the string for consistent start
    num = num.reverse();
    // splice a comma after every third number
    let count = 1;
    for(let i = 0; i < num.length; i++){
        if( count % 4 === 0){
            if( i !== 0){
                num.splice(i,0,",")
                console.log(i,num);
            }
        }
        count++;
    }
    // un reverse num string
    num = num.reverse();
    console.log(num);

    // add decimal 
    num.push(...dec)
    console.log(num);

    // check if negative
    if(negative){
        num.splice(0,0,"-");
    }
    return(num.join(""));
}

module.exports = addCommas;