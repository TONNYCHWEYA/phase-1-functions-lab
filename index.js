// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation)
{
  let noOfBlock;
 if(pickUpLocation>42){
   noOfBlock = pickUpLocation - 42;

 }else if(pickUpLocation < 42){
   noOfBlock = 42 - pickUpLocation;
 }
  return noOfBlock;
}
function distanceFromHqInFeet(pickUpLocation) {
  let noOfBlock = distanceFromHqInBlocks(pickUpLocation)
  return noOfBlock * 264;
  
}
function distanceTravelledInFeet(start, end){

if(end > start){
  return ((end - start) * 264);
}else if (end < start){
  return ((start - end) * 264);
}

}
function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination);
  let fare;
  if(distance <= 400){
   return fare = 0;
  }else if(distance >400 && distance <=2000){
    return fare = (distance -400) * 0.02
  }else if(distance >2000 && distance <=2500){
    return fare = 25
  }else if(distance >2500){
    return 'cannot travel that far'
  }
  }