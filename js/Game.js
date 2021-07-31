class Game{

    constructor(){}


    getState(){
       database.ref('gameState').on("value", (data)=>{
           gameState=data.val()
       })
    }



    update( state){
       database.ref('/').update({
           gameState:state
       })
    }



    
    async start(){

        player = new Player()

        form= new Form()
        form.display()
        
        var countRef = await database.ref('playerCount' ).once("value")
        if(countRef.exists() ){
        player.getCount()

        car1 = createSprite(200,300)

        car2 = createSprite(400,300)

        car3 = createSprite(600,300)

        car4 = createSprite(800,300)

        car1.addImage(car1Img)
        car2.addImage(car2Img)
        car3.addImage(car3Img)
        car4.addImage(car4Img)
        cars=[car1, car2, car3, car4]
    }}

    play(){

        image(trackImg, 0, -height*4, width, height*5)

        if(player.distance > 3500){
            gameState=2
            player.rank++
            player.updateRank()
            myRank=player.rank
          }
        
        form.greeting.hide()
        textSize(20)
        fill("blue")
        stroke("red")
        strokeWeight(1)
        text("Game Started!",200,200)

        player.getInfoPlayer()
        player.getRank()
        console.log(allPlayers)

        if(keyIsDown(UP_ARROW)){
            player.distance+=5
            player.update()
        }

        if(allPlayers !== undefined){
        var index = 0
        var x = 400

 
        for( var plr in allPlayers){

            cars[index].x= x
            cars[index].y= height- allPlayers[plr].distance

            if(plr === "player " + player.index){
                text(player.name, cars[index].x,cars[index].y-75)
                camera.position.x= width/2
                camera.position.y= cars[index].y
            } else{
                text(allPlayers[plr].name, cars[index].x,cars[index].y-75)
                cars[index].shapeColor="black"
            }

        //text( allPlayers[plr].name + " ; " + allPlayers[plr].distance,200,newY)
        //newY+=50
        drawSprites()
        x+=200
        index++
        }
    }

    }

    end(){

        alert("Game Over, Your rank is:" + myRank)
    }
    
}