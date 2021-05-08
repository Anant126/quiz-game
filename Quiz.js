class Quiz{
    constructor(){}

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState: state
          });
    }
    async start(){
        if(gameState===0){
            contestant=new Contestant();
            var contestantCountRef=await database.ref('ContestantCount').once('value');
            if(contestantCountRef.exists()){
                contestantCount=contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question()
            question.display();
        }
    }

    play(){
        question.hide();
        background("violet");
        textSize(30);
        text("RESULT OF THE EXTREME HARD QUIZ" , 340 , 50);
        Contestant.getContestantInfo();
        if(allPlayers !== undefined){
            var display_Answers = 240;
            textSize(21);
            text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230);
            for(var plr in allContestants){

                var correctAns = "2";
        if (correctAns === allContestants[plr].answer)
          fill("Green")
        else
          fill("red");

        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
        }  
    }
    }
}