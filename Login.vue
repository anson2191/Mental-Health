<template>
	<div>
  		<!-- 720px/100vh -->
		<div id="layout_up">
			<div id="navbar">
				
				
				<div id="navbar_main">
					<img class="full_img" src="@/assets/pic/aura.png"/>
				</div>
				
				
					<button class="navbar_button" id="navbar_record">
						<img class="full_img" src="@/assets/pic/record.png"/>
					</button>
					
					<button class="navbar_button" id="navbar_user">
						<img class="full_img" src="@/assets/pic/user.png"/>
					</button>
				
			</div>
			
			<div id="famous_box">
				<img id="famous_box_border" class="full_img" src="@/assets/pic/border.png">
				<div id="famous_box_left">
					<div id="famous_box_pic">
						<img class="full_img" src="@/assets/pic/grass.png"/>
					</div>
				</div>
				
				<div id="famous_box_right">
					<p1>「任何人只要願意深入探索自己的心靈，便能發現那等待我們已久的共同寶藏。」</p1>
					<p1>--馬克．列維特</p1>
				</div>
			</div>
			
			<div id="remind">
				<p2 style="color: #C7C7C7">
					首先感謝你鼓起勇氣，願意嘗試和心理師談談你的煩惱，請你先閱讀以下注意事項，也幫助你對個人諮商有一些基本的了解。
				</p2>
			</div>
		</div>
		
		<div id="layout_down">
			<div id="content">
				<t1>個人諮商初談注意事項</t1>
				
				<t2>初談和續談是什麼？</t2>
				<blockquote>
					<div class="content_list">
						<li></li>
						<p3>個人諮商一次50分鐘···</p3>
					</div>
				</blockquote>
				
				<blockquote>
					<div class="content_list">
						<li></li>
						<p3>如有需要，心理師會和您討論後為您預約續談 若是不需要續談</p3>
					</div>
				</blockquote>
				
				<blockquote>
					<div class="content_list">
						<li></li>
						<p3>若是不需要續談，則會已結案處理，之後再有需要可以再次預約初談</p3>
					</div>
				</blockquote>
							
				<t2>保密原則的例外狀況</t2>
				<p3>基於法律要求、學校政策以及心理專業人員的專業倫理規範，在尊重生命與安全的前提下，需進行危機處理或通報，以便引進更多的資源協助解決你的困境。這樣的用意是為了保護你與他人的生命財產安全，最終讓自己有機會慢慢地回到軌道上。</p3>
				
				<t3>以下兩種類別的狀況發生時，心理師有通報的責任：</t3>
				<blockquote>
					<div class="content_list">
						<li></li>
						<p3>罹患嚴重精神疾病（精神衛生法）、家庭暴力（家庭暴力防治法）、一般性侵害（性侵害犯罪防治法）、校園性侵害/性騷擾/性霸凌（性別平等教育法）、兒少性剝削（兒童及少年性剝削防制條例），以及兒童及少年福利與權益保障法所規定之通報事項（含施用毒品）。</p3>
					</div>
				</blockquote>
				<blockquote>
					<div class="content_list">
						<li></li>
						<p3>來談者有危害自己或他人生命安全之緊急情況。</p3>
					</div>
				</blockquote>
				
			</div>
		</div>
		
		<div style="padding: 0 4vh;">
			<div id="accept_button" onclick="location.href='https://luffy.ee.ncku.edu.tw/~anson2191/project/reserve/start.html'">
				<!-- <img class="full_img" src="@/assets/pic/long_button.png"/> -->
				
				<font class="button_font">接受上述內容，預約初談</font>
				
			</div>
		</div>
		
		<div id="base"></div>
	</div>
</template>

<script>
</script>

<style rel="stylesheet" type="text/css">
/* @font-face{
	font-family: Taipei Sans TC Beta;
	src: url('./font/TaipeiSansTCBeta-Regular.ttf');
	
	font-weight: normal;
} */

/* @font-face{
	font-family: Taipei Sans TC Beta;
	src: url('./font/TaipeiSansTCBeta-Light.ttf');
	
	font-weight: 300;
} */

/* @font-face{
	font-family: Taipei Sans TC Beta;
	src: url('./font/TaipeiSansTCBeta-Bold.ttf');
	
	font-weight: bold;
} */

html{
	scroll-behavior: smooth;
}

body{
	border: 0;
	padding: 0;
	margin: 0;
	
	/*font-family: Taipei Sans TC Beta;*/
	
/* 	display: flex;
	flex-direction: column;
    align-items: center; */
}

button{
	border: none;
    outline: none;
    background: none;
    padding: 0;
    border-radius: 1vw;
    cursor: pointer;
}

blockquote{
	margin-block: 0;
}

.button_font{
	/*font-family: Taipei Sans TC Beta;*/
	font-size: 2.22vh;
	font-weight: normal;
	color: #FFFFFF;
}

.full_img{
	height: 100%;
}

.full_width_img{
	width: 100%;
}

#layout_up{
	display: flex;
	flex-direction: column;
    align-items: center;
}

#navbar{
	width: 100vw;
	height: 6.94vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	z-index: 10;
	
	background: #FFFFFF;
	box-shadow: 0 0.28vh 1.39vh rgba(118, 156, 145, 0.25);
}

#navbar_main{
	width: 11.39vh;
	height: 2.54vh;
	
    /* position: relative;
    left: 38.93vw; */
}

#navbar_side{
	display: flex;
    justify-content: space-around;
    width: 15vw;
}

.navbar_button{
	width: 3.89vh;
	height: 3.89vh;
}

#navbar_record{
	right: 15vw;
    top: 1.5vh;
    position: absolute;
}

#navbar_user{
	right: 5vw;
    top: 1.5vh;
    position: absolute;
}

#famous_box{
	/* width: 85%;
	max-width: 45.14vh; */
	width: 45.14vh;
	max-width: 80%;
	height: 20.83vh;
	position: relative;
	top: 11vh;
	
	display: flex;
	flex-direction: row;
	
	/* background: #FFFFFF;

	box-shadow: 2px 2px 10px rgba(204, 204, 204, 0.75);
	border-radius: 10px;
	border-style: solid;
	
	background-image: 
    linear-gradient(
      180deg, 
      #96FBC4 33.15%, #20E2D7 127.81%
    ); */
	
	/* background-image:
	linear-gradient(white, white),
	radial-gradient(
      180deg, 
      #96FBC4 33.15%, #20E2D7 127.81%
    );
	background-origin: border-box;
	background-clip: content-box, border-box; */
	
	/* -webkit-mask:
		linear-gradient(#fff 0 0) padding-box, 
		linear-gradient(#fff 0 0);
	-webkit-mask-composite: destination-out;
	mask-composite: exclude; */
}

#famous_box_border{
	width: 100%;
	position: absolute;
	z-index: -1;
}

#famous_box_left{
	width: 40%;
	height: 100%;
}

#famous_box_right{
	width: 60%;
	height: 100%;
	
	display: flex;
	flex-direction: column;
    justify-content: center;
    align-items: flex-end;
	
	/*font-family: Taipei Sans TC Beta;*/
	font-weight: 400;
	color: #5C5C5C;
}

#famous_box_pic{
	height: 47%;
    padding: 31% 0 30% 27%;
}

p1{
	font-size: 1.4vh;
    padding: 0 20% 0 0;
	line-height: 2.5vh;
}

#remind{
	padding: 0 6vh;
    position: relative;
    top: 12vh;
}

p2{
	font-size: 1.4vh;
	line-height: 2.5vh;
}

#layout_down{
	position: relative;
    top: 14vh;
    padding: 0 4vh;
}

#content{
	display: flex;
    flex-direction: column;
	align-items: flex-start;
	
	color: #5C5C5C;
}

t1{
	/*font-family: Taipei Sans TC Beta;*/
	font-size: 2.6vh;
	font-style: normal;
	font-weight: 400;
	line-height: 4.72vh;

	color: #20E2D7;
}

t2{
	font-size: 1.8vh;
	font-weight: 400;
	line-height: 5vh;
}

t3{
	font-size: 1.4vh;
	font-weight: 400;
	line-height: 5vh;
}

.content_list{
	display: flex;
    align-items: baseline;
}

li{
	font-size: 1.4vh;
	line-height: 2.5vh;
}

p3{
	font-size: 1.4vh;
	font-weight: 300;
	line-height: 2.5vh;
	display: flex;
}

#accept_button{
	position: relative;
    top: 15vh;
    display: flex;
	flex-direction: row;
	align-items: center;
    justify-content: center;
	
	/* background-image: url('@/assets/pic/long_button.png');
	background-size: contain;
	background-position-x:center;
	background-repeat: no-repeat; */
	
	background: #20E2D7;
	box-shadow: 0 0.55vh 2.36vh -0.14vh rgba(107, 182, 177, 0.51);
	border-radius: 4.5vh;
	
	height: 6vh;
    
	cursor: pointer;
}

#base{
	position: relative;
    top: 15vh;
    height: 3vh;
}
</style>
