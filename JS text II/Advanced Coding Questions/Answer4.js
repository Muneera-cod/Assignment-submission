const isAvailable = (totalCopies, requestedCopies) => {

    if (Number(totalCopies) >= Number(requestedCopies)) {
        return true;  
    } else {
        return false; 
    }
};

let totalCopies=30;
let requestedCopies=10;
isAvailable(30,10)?console.log("Available"):console.log("Not Available")
