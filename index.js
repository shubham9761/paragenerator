let inputElement= document.getElementById('words');
const container = document.querySelector(".container");
const generateWord = ()=>{
    let letters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let word="";
    let wordlength = (Math.random()*10).toFixed(0);
    for(let i=0;i<wordlength;i++){
       word+= letters[Math.floor(Math.random()*26)];
       word= word.toLowerCase();
    }
    console.log("jai Shri ram");
    return word;
};

const generatePara = () => {
    let para= document.createElement("p");
    let data=" ";
    let numOfWords= Number(inputElement.value);
    console.log(numOfWords);
    for(let i=0;i<numOfWords;i++){
        data+= generateWord();
        data+=" ";
    }
    para.innerText= data;
    para.setAttribute("class","paras");
    container.append(para);

}


