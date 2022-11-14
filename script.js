let send =document.querySelector('.btn-send');
let inpname=document.querySelector('.name');
let inptext=document.querySelector('.message');
class Message {
    constructor(name,time,text) {
        this.name = name;
        this.time=time;
        this.text=text;
    }
    toString(name,time,text) {
        this.name = inpname;
        this.time= gettime();
        this.text=inptext;
    }
}
class Messenger {
    constructor(){
    }
    rename(name) {
        this.name = name;
    }
}
function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}
console.log(gettime());
let arrnames=[];
function addtoarr(){
   arrnames.push(inpname);
}
send.addEventListener('click',addtoarr())
  console.log(arrnames);