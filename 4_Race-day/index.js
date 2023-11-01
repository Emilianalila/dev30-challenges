let raceNumber = Math.floor(Math.random() * 1000);

let earlyRunner = true;
let ageRunner = 89;

//control flow
if(ageRunner >= 18 && earlyRunner === true){
  raceNumber += 1000;
  console.log(raceNumber)
}
 
if(ageRunner >= 18 && earlyRunner === true){ 
  console.log(`For you, who registered early, will race at 9:30am and your Race Nunber is: ${raceNumber}.`)
 }else if (ageRunner >= 18 && earlyRunner === false){// can I use !?
  console.log(`For you, who registered late, will race at 11:00am and your Race Nunber is: ${raceNumber}.`)
 }else{
  console.log(`You will race at 12:30 p.m and your Race Nunber is: ${raceNumber}.`)
}