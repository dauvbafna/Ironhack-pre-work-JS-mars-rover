var rover = {
  direction : 'N',
  x : 0,
  y : 0,
}

var travelLog=[[rover.x,rover.y]]; // array to log coordinate sets for rover travel
var nextX=0; // temp var for boundary check
var nextY =0; // temp var for boundary check
var inputString = "rffrfflfrff";

function turnLeft(rover){
  switch(rover.direction){
    case 'N':
    rover.direction = 'W';
    break;

    case 'E':
    rover.direction = 'N';
    break;

    case 'S':
    rover.direction = 'E';
    break;

    case 'W':
    rover.direction = 'S';
    break;
  }

  console.log("turnLeft was called!");

}

function turnRight(rover){
  switch(rover.direction){
    case 'N':
    rover.direction = 'E';
    break;

    case 'E':
    rover.direction = 'S';
    break;

    case 'S':
    rover.direction = 'W';
    break;

    case 'W':
    rover.direction = 'N';
    break;
 }
 console.log("turnRight was called!");
}

function moveForward(rover){
  
  switch(rover.direction)
    {
      case 'N':
     nextY = rover.y-1;
      if(((nextY<=9) && (nextY>=0))&&((nextX<=9) && (nextX>=0)))
      {
       rover.y=nextY;
       travelLog.push([rover.x,rover.y]);
       
      }
      else{
    console.log("Rover going out of boundaries");
    }
      break;
        
      case 'E':
     nextX = rover.x+1;
      if(((nextY<=9) && (nextY>=0))&&((nextX<=9) && (nextX>=0)))
      {
        rover.x=nextX;
        travelLog.push(rover.x,rover.y);
       
      }
      else{
    console.log("Rover going out of boundaries");
    }
      break;
        
      case 'S':
     nextY = rover.y+1;
      if(((nextY<=9) && (nextY>=0))&&((nextX<=9) && (nextX>=0)))
      {
       rover.y=nextY;
       travelLog.push([rover.x,rover.y]);
       
      }
      else{
    console.log("Rover going out of boundaries");
    }
      break; 
      
      case 'W':
     nextX = rover.x-1;
      if(((nextY<=9) && (nextY>=0))&&((nextX<=9) && (nextX>=0)))
      {
        rover.x=nextX;
        travelLog.push([rover.x,rover.y]);
       
      }
      else{
    console.log("Rover going out of boundaries");
    }
      break;  
    }
  console.log("moveForward was called");
  console.log("The current coordinates are :["+rover.x+","+rover.y+"]");
}

function moveBackward(rover){
  
  switch(rover.direction)
    {
      case 'N':
     nextY = rover.y+1;
      if(((nextY<=9) && (nextY>=0))&&((nextX<=9) && (nextX>=0)))
      {
       rover.y=nextY;
       travelLog.push([rover.x,rover.y]);
       
      }
      else{
    console.log("Rover going out of boundaries");
    }
      break;
        
      case 'E':
     nextX = rover.x-1;
      if(((nextY<=9) && (nextY>=0))&&((nextX<=9) && (nextX>=0)))
      {
        rover.x=nextX;
        travelLog.push([rover.x,rover.y]);
       
      }
      else{
    console.log("Rover going out of boundaries");
    }
      break;
        
      case 'S':
     nextY = rover.y-1;
      if(((nextY<=9) && (nextY>=0))&&((nextX<=9) && (nextX>=0)))
      {
       rover.y=nextY;
       travelLog.push([rover.x,rover.y]);
       
      }
      else{
    console.log("Rover going out of boundaries");
    }
      break; 
      
      case 'W':
     nextX = rover.x+1;
      if(((nextY<=9) && (nextY>=0))&&((nextX<=9) && (nextX>=0)))
      {
        rover.x=nextX;
        travelLog.push([rover.x,rover.y]);
       
      }
      else{
    console.log("Rover going out of boundaries");
    }
      break;  
    }
  console.log("moveBackward was called");
  console.log("The current coordinates are :["+rover.x+","+rover.y+"]");
}

for (var i=0; i<inputString.length; i++)
{ 
  if((inputString[i] == 'f') || (inputString[i] == 'b') || (inputString[i] == 'r') || (inputString[i] == 'l'))
  {
  switch(inputString[i])
  {
    case 'f':
    moveForward(rover);
    break;

    case 'b':
    moveBackward(rover);
    break;

    case 'r':
    turnRight(rover);
    break;

    case 'l':
    turnLeft(rover);
    break;
  }
}
}
console.log("The travel log of the rover is:" + travelLog);
