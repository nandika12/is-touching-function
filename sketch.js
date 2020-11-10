var movingrect,fixedrect;
function setup(){
 createCanvas(600,600)
 movingrect= createSprite(200,100,50,60) 
 fixedrect=createSprite(200,100,50,60)
 movingrect.shapeColor='red'
 fixedrect.shapeColor='pink'
}
function draw(){
  background('green')
  movingrect.x=mouseX
  movingrect.y=mouseY
 console.log(movingrect.width/2+fixedrect.width/2)
console.log(movingrect.x-fixedrect.x)
if (movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
  fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&
  movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2&&
  fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
  movingrect.shapeColor='purple'
  fixedrect.shapeColor='black' 
}else{
  movingrect.shapeColor='red'
  fixedrect.shapeColor='pink'
}




drawSprites()
}




