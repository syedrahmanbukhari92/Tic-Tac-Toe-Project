let boxes=document.querySelectorAll(".boxes");
let playero=true;
let content=document.querySelector(".container");
let winnerPattern=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
]
let count=0;
let para=document.createElement("h1");
boxes.forEach((el)=>{
    el.addEventListener("click",function(){
        if(playero){
            el.innerHTML="O";
            el.style.cssText="color:#EF5A6F;";
            playero=false;
            count++;
        }
        else{
            el.innerHTML="X";
            playero=true;
            count++;
        }
        el.disabled=true;
        winner();
    });
});
const winner=function(){
    let val1,val2,val3;
    let hasWinner=false;
    for(pattern of winnerPattern){
        val1=boxes[pattern[0]].innerText;
        val2=boxes[pattern[1]].innerText;
        val3=boxes[pattern[2]].innerText;
        console.log("val1");
        console.log(val1);
        console.log("val2");
        console.log(val2);
        console.log("val2");
        console.log(val3);
        if(val1!=""&&val2!=""&&val3!=""){
            if(val1==val2&&val2==val3){
                display(val1);
                hasWinner=true;
                count=0;
                boxes.forEach((el)=>{
                    el.disabled=true;
                })
            }
        }
    }
    if(count == 9 && !hasWinner){
        para.innerText="OOPS! Game is DRAW!";
        para.style.cssText="margin-top:1rem;"
        content.appendChild(para);
    }
}
const display=function(winner){
    para.innerText=`Congratulation! ${winner} you are win`;
    para.style.cssText="font-size:30px; font-weight:10px; margin-top:2rem; color:white; text-shadow:2px 4px 12px gray;";
    content.appendChild(para);
}
let reset=document.createElement("button");
reset.innerText="reset";
reset.style.cssText="padding:0.5rem 1rem 0.5rem 1rem; margin-top:2rem; border-radius:16px; width:6rem; font-weight:bolder; background-color:#536493;border:none;box-shadow:2px 4px 12px black; color:white; margin-right:2rem; margin-left:2.5rem;";
content.appendChild(reset);
reset.addEventListener("click",function(){
    boxes.forEach((el)=>{
        el.innerText="";
        el.disabled=false;
        para.innerText="";

        })
})