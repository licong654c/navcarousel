	//全局变量	
	var 
		main=document.getElementsByClassName('main'),
		banner=document.getElementsByClassName('banner'),                            
		bannerTerms=document.getElementsByClassName('banner-terms'),   //ByClassName取出来的是数组，一定要加[]
		section=document.getElementsByTagName('section'),
		dot=document.getElementsByClassName('dot'),
		button1=document.getElementsByClassName('button1'),
		button2=document.getElementsByClassName('button2'),
		nav=document.getElementsByClassName('nav'),
		innerBox=document.getElementsByClassName('inner-box'),
		subMenu=document.getElementById('sub-menu'),
		timer=null,
		index=0;


function slideImg(){
	//鼠标划过时，停止轮播
	banner[0].onmouseover=function(){
		if(timer){
		clearInterval(timer);                //clearTimeout和clearInterval原来可以互用
		}
	}
	//鼠标离开时，开始轮播
	banner[0].onmouseout=function(){
		timer=setInterval(function(){
			index++;
			if(index>2){
				index=0;
			}
			changeImg();
		},2000)
	}
	banner[0].onmouseout();                                      //执行onmouseout()方法

	//点击圆点时，切换图片
	for(var i=0;i<dot.length;i++){
		dot[i].name=i;
		dot[i].onclick=function(){
	   		index=this.name;
			changeImg();
		}
	}
	//前后箭头，切换图片
	button1[0].onclick=function(){
		clearInterval(timer);
		index--;
		if(index<0){
			index=2;
		}
		changeImg();
	}

	button2[0].onclick=function(){
		clearInterval(timer);
		index++;
		if(index>2){
			index=0;
		}
		changeImg();
	}

	// 展开、收回二级菜单
	for(var i=0;i<nav.length;i++){
		nav[i].setAttribute("num",i);
		nav[i].onmouseover=function(){
		    idx=this.getAttribute("num");
		    for(var j=0;j<innerBox.length;j++){
		    	innerBox[j].style.display="none";
		    	nav[j].style.backgroundColor = "";
		    }
			subMenu.style.display="block";
			innerBox[idx].style.display="block";
			nav[idx].style.backgroundColor = "rgba(0,0,0,.2)"
		}

		nav[i].onmouseout=function(){
			subMenu.style.display="none";
			nav[idx].style.backgroundColor = "";
		}

		subMenu.onmouseover=function(){
			this.style.display="block";
		}

		subMenu.onmouseout=function(){
			this.style.display="none";
		}
	}




	//changeImage
	function changeImg(){
		for(var i=0;i<bannerTerms.length;i++){
			bannerTerms[i].style.display="none";
			dot[i].setAttribute("id","");
		}
		bannerTerms[index].style.display="block";
		dot[index].setAttribute("id","active");
	}
}
slideImg();