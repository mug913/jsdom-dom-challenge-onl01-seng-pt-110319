var countInterval;

document.addEventListener("DOMContentLoaded", () => {

const count = document.getElementById('counter');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const pause = document.getElementById('pause');
const heart = document.getElementById('heart');
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('list');
let likeArray = [];

pause.addEventListener("click",pauseClock);
addEventListeners();
startClock()


function addCount(){
    const count = document.getElementById('counter');
    countVal = parseInt(count.innerText, 10) 
    countVal = countVal + 1;
    count.innerText = String(countVal)
    console.log(countVal)
}

function minusCount(){
    const count = document.getElementById('counter');
    countVal = parseInt(count.innerText, 10) 
    countVal = countVal - 1;
    count.innerText = String(countVal)
    console.log(countVal)
    }

function startClock(){
   countInterval = window.setInterval(addCount, 600);
}

 function pauseClock(){
    if(pause.innerText == "resume"){
        pause.innerText = "pause";
        addEventListeners();
        startClock()   
    }
    else{   
    clearInterval(countInterval);
    removeEventListeners()
    pause.innerText = "resume";
    }
}

    function addLike(){
        let likedNumber = parseInt(count.innerText, 10);
        likeArray.push(likedNumber);
        let countArray = [];
        const newLike = document.createElement("li");
        newLike.id = String(likedNumber);
        for (let i=0; i< likeArray.length; i++){
            if (likeArray[i] == likedNumber){
                countArray.push(likedNumber);
            }
        }
        if (countArray.length != 1){
        newLike.innerText = "number: " + likedNumber + " number of likes: " + countArray.length;
        document.querySelector('.likes').replaceChild(newLike, document.getElementById(likedNumber));
        }
        else {
            newLike.innerText = "number: " + likedNumber + " number of likes: " + countArray.length;
            document.querySelector('.likes').appendChild(newLike); 
        }

    }

    function newComment(){
        event.preventDefault();
        const newComment = document.createElement("li");
        newComment.innerText = commentInput.value;
        commentList.appendChild(newComment);
    }

    function addEventListeners(){
        plus.addEventListener("click", addCount );
        minus.addEventListener("click", minusCount );
        heart.addEventListener("click", addLike );
        commentForm.addEventListener("submit", newComment);
    }

    function removeEventListeners(){
        plus.removeEventListener("click", addCount );
        minus.removeEventListener("click", minusCount );
        heart.removeEventListener("click", addLike );
        
    }
 
});