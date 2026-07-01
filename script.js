//its better to min manbulating dom
//all html ui with <>
//using space when u min the screen
 // it will make the list in lines
 //thats if u only only used ui but we won't
 //ul_el.innerHTML +="<li>"+myleads[i]+"</li>"; easier way
 //yeah every one in aline cause thats li u cant change it
 //create ele,set text content.append
 // harder way
 // const li = document.createElement('li')
 // li.textContent =myleads[i];
 // ul_el.append(li);
//local storage only strings /clear function
let myleads=[];
const ul_el=document.getElementById("ul-el");
const input_el=document.getElementById("input-el");
const input_btn=document.getElementById("input-btn");
//localStorage.setItem("myleads",JSON.stringify(input_el));
const save =document.getElementById("save");
save.addEventListener("click",()=>{
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
myleads.push(tabs[0].url)
localStorage.setItem("myleads",JSON.stringify(myleads))
renderleads()
})

})


let leadsfromlocalstorage =JSON.parse(localStorage.getItem("myleads"));
if(leadsfromlocalstorage)
{
    myleads =leadsfromlocalstorage
    renderleads();
}
input_btn.addEventListener("click",()=>
{
    //u cant just use textcontent instead of value 
    // (cause u dont even have it in input html)
   
    myleads.push(input_el.value);
    localStorage.setItem("myleads",JSON.stringify(myleads));
    renderleads();
    input_el.value="";
    console.log(localStorage.getItem("myleads"));
})
function renderleads()
{
//perfect no (+) no ""&& ''
ul_el.innerHTML = "";
for(let i=0;i<myleads.length;i++){
let listitems = `
    <li>
        <a href="${myleads[i]}" target="_blank">
            ${myleads[i]}
        </a>
    </li>
`;
ul_el.innerHTML+=listitems;}}
const dele =document.getElementById("dele");
dele.addEventListener("dblclick",()=>{
    localStorage.clear();
    myleads=[]
    renderleads()
})