const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  userScoreDisplay = document.getElementById("user-score"),
  compScoreDisplay = document.getElementById("comp-score"),
  drawCountDisplay = document.getElementById("draw-count"),
  optionImages = document.querySelectorAll(".option_image");
let userScore = 0;
let compScore = 0;
let drawCount = 0;
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");
    userResult.src = cpuResult.src = "images/rock.png";
    result.textContent = "Wait...";
    optionImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });
    gameContainer.classList.add("start");
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");
      let imageSrc = e.target.querySelector("img").src;
      userResult.src = imageSrc;
      let randomNumber = Math.floor(Math.random() * 3);
      let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
      cpuResult.src = cpuImages[randomNumber];
      let userValue = ["R", "P", "S"][index];
      let cpuValue = ["R", "P", "S"][randomNumber];
      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User",
      };
      let outcomeValue = outcomes[userValue + cpuValue];

      if (userValue === cpuValue) {
        result.textContent = "Match Draw";
        drawCount++;
      } else if (outcomeValue === "User") {
        result.textContent = "User Won!!";
        userScore++;
      } else {
        result.textContent = "Cpu Won!!";
        compScore++;
      }
      userScoreDisplay.textContent = userScore;
      compScoreDisplay.textContent = compScore;
      drawCountDisplay.textContent = `Draws: ${drawCount}`;
    }, 2000);
  });
});