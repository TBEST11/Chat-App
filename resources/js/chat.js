import axios from "axios";

const messageElement=document.getElementById('messageOutput');
constuserMessageInput=document.getElementById('message');
const sendMessageForm=document.getElementById('chatForm');

let url= window.location;
let urlNew = new URL(url);
let userName = urlNew.searchParams.get('name');

sendMessageForm.addEventListener('submit', function(e){
    e.preventDefault();

    if(userMessageInput !=''){
        axios({
            method: 'post',
            url: '/sendMessage',
            data:{
                username: userName,
                message: userMessageInput.value
            }
        })
    }
    window.echo.channel('laravelchat').listen('.chatting', (res)=>{
        messageElement.innerHTML += '<div><strong>'+res.username+'</strong class="username"><span>'+res.message+'</span></div>'
   
    });
    userMessageInput.value='';

})