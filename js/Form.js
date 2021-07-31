class Form{

    constructor(){}

    
    display(){

        this.reset=createButton("reset")
        this.reset.position(displayWidth - 100, 50)
        this.reset.mousePressed(()=>{
            database.ref('/').update({
                gameState:0,
                playerCount:0
            })
        })

       this.title = createElement('h2')
       this.title.html("CAR RACING GAME")
       this.title.position(130,100)

       this.title1 = createElement('h4')
       this.title1.html("Name")
       this.title1.position(100,280)
       
       this.input=createInput()
       this.input.position(150,300)

       this.button=createButton("PLAY")
       this.button.position(220,350)

       this.button.mousePressed( ()=>{
           this.input.hide()
           this.button.hide()
           this.title1.hide()

           player.name = this.input.value()
           this.greeting = createElement('h1')
           this.greeting.html("Hello     " + player.name)
           this.greeting.position(175,200)

           playerCount++
           player.updateCount(playerCount)

           player.index= playerCount
           player.update()
       })
    }


}