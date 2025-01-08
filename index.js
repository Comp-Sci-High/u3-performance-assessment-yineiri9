// Good luck!
const express = require('express');
const { request } = require('http');
const app = express()


let lakers={

    "teamPhoto": "https://www.latimes.com/includes/projects/img/lakers/season_photos/season_2003_2004.jpg",
    "teamInfo": {
      "name": "Los Angeles Lakers",
      "favoritePlayer": "LeBron James",
      "descriptionAboutPlayer": "LeBron James is regarded as one of the greatest basketball players of all time, known for his versatility, leadership, and basketball IQ. He's played for the Lakers since 2018 and has led them to an NBA Championship in 2020.",
      "isBestPlayer": true,
      "playersOnTheTeam": [
        {
          "firstName": "LeBron",
          "lastName": "James",
          "photoUrl": "https://cdn.nba.com/logos/nba/1610612747/2013/primary_LG.png",
          "startYear": 2018,
          "funFact": "LeBron James has been to the NBA Finals 10 times and has won 4 NBA championships."
        },
        {
          "firstName": "Anthony",
          "lastName": "Davis",
          "photoUrl": "https://cdn.nba.com/logos/nba/1610612747/2013/primary_LG.png",
          "startYear": 2019,
          "funFact": "Anthony Davis was named NBA Finals MVP in 2020 and is one of the league’s best defenders, particularly known for his shot-blocking."
        },
        {
          "firstName": "Russell",
          "lastName": "Westbrook",
          "photoUrl": "https://cdn.nba.com/logos/nba/1610612747/2013/primary_LG.png",
          "startYear": 2021,
          "funFact": "Russell Westbrook won the 2017 NBA MVP and is famous for his relentless energy, triple-doubles, and high-octane playstyle."
        },
        {
          "firstName": "Carmelo",
          "lastName": "Anthony",
          "photoUrl": "https://cdn.nba.com/logos/nba/1610612747/2013/primary_LG.png",
          "startYear": 2021,
          "funFact": "Carmelo Anthony is a 10-time NBA All-Star and is one of the league's all-time leading scorers, having joined the Lakers in 2021 to chase an NBA championship."
        }
      ]
    }
  };
  
  app.use((request,response,next)=>{
    console.log(request.method + '/' + request.url)
    next()
    })

    app.get("/",(request,response)=>{
        response.send("WELCOME TO MY PAGEEEEEEEEEEEE")
        })

app.get("/basketball/players",(request,response)=>{
    response.json(lakers.teamInfo.playersOnTheTeam)
})

app.get("best/player/lebron",(request,response)=>{
    response.json(lakers.teamInfo.playersOnTheTeam[0])
})











app.listen(3000, () => {
    console.log("Server running")
})