<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AI恋爱顾问</title>
<style>
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:"Microsoft YaHei";
}
body{
background:#fff0f6;
height:100vh;
display:flex;
justify-content:center;
}
.app{
width:100%;
max-width:430px;
height:100vh;
background:white;
display:flex;
flex-direction:column;
}
/* 顶部 */
.header{
background:#ff6fa5;
color:white;
padding:20px;
text-align:center;
font-size:22px;
font-weight:bold;
}
/* 聊天区域 */
.chat{
flex:1;
padding:20px;
overflow-y:auto;
background:#fff8fb;
}
.message{
max-width:80%;
padding:14px;
border-radius:20px;
margin-bottom:15px;
line-height:1.5;
}
.ai{
background:#ffd6e8;
align-self:flex-start;
}
.user{
background:#ff6fa5;
color:white;
margin-left:auto;
}
/* 输入 */
.input-area{
display:flex;
padding:15px;
border-top:1px solid #eee;
}
input{
flex:1;
padding:15px;
border-radius:25px;
border:1px solid #ddd;
outline:none;
}
button{
margin-left:10px;
border:none;
background:#ff6fa5;
color:white;
width:60px;
border-radius:25px;
font-size:18px;
}
</style>
</head>
<body>
<div class="app">
<div class="header">
🤖 AI恋爱顾问 💕
</div>
<div class="chat" id="chat">
<div class="message ai">
你好呀～我是 Love Guide AI 💖
<br>
可以问我任何恋爱问题：
<br><br>
例如：
<br>
「他喜欢我吗？」
<br>
「怎么增加桃花运？」
<br>
「怎样追喜欢的人？」
</div>
</div>
<div class="input-area">
<input 
id="input"
placeholder="输入你的恋爱问题..."
>
<button onclick="send()">
发送
</button>
</div>
</div>
<script>
function send(){
let input=
document.getElementById("input");
let text=input.value.trim();
if(text==="") return;
let chat=
document.getElementById("chat");
// 用户消息
chat.innerHTML+=`
<div class="message user">
${text}
</div>
`;
input.value="";
// AI回复
setTimeout(()=>{
let answer=getAnswer(text);
chat.innerHTML+=`
<div class="message ai">
${answer}
</div>
`;
chat.scrollTop=
chat.scrollHeight;
},800);
}
function getAnswer(text){
if(
text.includes("喜欢")
||
text.includes("他")
){
return "想知道对方是否喜欢你，可以观察：他是否主动联系你、是否关心你的生活、是否愿意花时间陪你。不过真正的答案需要通过沟通确认 💕";
}
if(
text.includes("脱单")
||
text.includes("桃花")
){
return "提升桃花的小秘诀：扩大社交圈、培养兴趣、自信表达自己。吸引力来自你的状态，而不是强迫自己改变 🌸";
}
if(
text.includes("追")
){
return "追喜欢的人建议：先建立舒服的互动，不要太快投入。让对方感受到你的真诚和独特 ✨";
}
if(
text.includes("分手")
||
text.includes("复合")
){
return "感情出现问题时，先了解双方需求。如果还有感情，可以尝试坦诚沟通，而不是只靠等待 💗";
}
return "爱情没有固定答案～告诉我更多背景，例如你们认识多久、现在关系如何，我可以帮你分析 💖";
}
</script>
</body>
</html>