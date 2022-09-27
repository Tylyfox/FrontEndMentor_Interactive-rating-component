document.getElementById('number1').addEventListener('click', changeColor, true);
    document.getElementById('number2').addEventListener('click', changeColor, true);
    document.getElementById('number3').addEventListener('click', changeColor, true);
    document.getElementById('number4').addEventListener('click', changeColor, true);
    document.getElementById('number5').addEventListener('click', changeColor, true);
    document.getElementById('submit').addEventListener('click', appearPage, true);


    function changeColor() {
      const ratingNumber = 0;
      if (this.className === "numberValidate") {
        this.className = "number"
      } else if (document.getElementsByClassName("numberValidate")) {
        const numberValidate = document.getElementsByClassName("numberValidate");
        const map = Object.values(numberValidate).map((el) => {
          el.className = "number"
        })
        this.className = "numberValidate"
        const ratingNumber = this.textContent
      } else {
        this.className = 'numberValidate';
        const ratingNumber = this.textContent
      }
    }

    function appearPage() {
      let tab = document.getElementsByClassName('numberValidate');
      if (tab && !tab.length) {
        let modal = document.getElementById("myModal");
        let span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
      } else {
        let card1 = document.getElementById("card1");
        let card2 = document.getElementById("card2");
        let ratingNote = document.getElementsByClassName('numberValidate')[0].textContent
        console.log(ratingNote);
        card1.className = "remove";
        card2.className = "card"
        document.getElementsByClassName('ratingNote')[0].innerHTML = "You selected " + ratingNote + " out of 5"
      }

    }