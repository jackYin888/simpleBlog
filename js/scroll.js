// linkTo(链接 id,跳转id)
var linkTo=function(fromLinkId,toEleId){
	
	document.getElementById(fromLinkId).onclick=function(e){
		//取消默认行为
		e.preventDefault(); 
		//scrollIntoView()滚动到顶部对齐
		document.getElementById(toEleId).scrollIntoView();
	}
}
var oLink=document.getElementById('nav_bar').getElementsByTagName('a');

for(var i=0,j=oLink.length;i<j;i++){
	linkTo(oLink[i].id,oLink[i].id.toLowerCase().substring(2));
	console.log(oLink[i].id.toLowerCase().substring(2));
}
//获取音乐容器
var oAudio=document.getElementById('aMusic');
//控制播放
document.getElementById('musicControl').onclick=function(){
	var that=this;
	if(oAudio.paused)
	{
		that.style.color='#09FF26';
		oAudio.play();
	}
	else{
		that.style.color='';
		oAudio.pause();
	}
};