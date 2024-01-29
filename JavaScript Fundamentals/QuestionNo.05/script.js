//Write A Function Named as calculateDiliveryTime
function calculateDiliveryTime(packageType) {
    
    let deliveryTime;

    switch (packageType.toLowerCase()) {
        case "standard":
            deliveryTime = "3-5 Day's !"
            break;
        case "express":
            deliveryTime = "1-2 Day's !"
            break;
        case "overnight":
            deliveryTime = "Next Day !"
            break;
        default:
            deliveryTime = "unkonown !"
            break;
    }
    return deliveryTime;
}

// Test the program with different package types
const packageType1 = "standard";
console.log(`Package Type: ${packageType1}, Delivery Time: ${calculateDiliveryTime(packageType1)}`);

const packageType2 = "express";
console.log(`Package Type: ${packageType2}, Delivery Time: ${calculateDiliveryTime(packageType2)}`);

const packageType3 = "overnight";
console.log(`Package Type: ${packageType3}, Delivery Time: ${calculateDiliveryTime(packageType3)}`);

//const packageType4 = "";