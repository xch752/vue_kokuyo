<template>
<el-container>
  <el-header>
  	<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="black" active-text-color="#747474" font-family="bold" >
  	<el-menu-item index="1">首页</el-menu-item>
  	<el-submenu index="2">
    <template slot="title"><router-link to="/product">产品</router-link></template>
		<el-submenu index="2-1">
      		<template slot="title">座椅</template>
	     		<el-menu-item index="2-1-1">所有办公座椅</el-menu-item>
	      		<el-menu-item index="2-1-2">员工椅</el-menu-item>
	      		<el-menu-item index="2-1-3">管理职椅</el-menu-item>
	      		<el-menu-item index="2-1-4">会议/培训椅</el-menu-item>
		</el-submenu>
		<el-submenu index="2-2">
      		<template slot="title">智能办公/会议桌</template>
	     		<el-menu-item index="2-2-1">所有办公/会议桌</el-menu-item>
	      		<el-menu-item index="2-2-2">智能升降桌</el-menu-item>
	      		<el-menu-item index="2-2-3">长条桌</el-menu-item>
	      		<el-menu-item index="2-2-4">屏风工作位</el-menu-item>
	      		<el-menu-item index="2-2-5">管理职工位</el-menu-item>
	      		<el-menu-item index="2-2-6">会议/培训桌</el-menu-item>
		</el-submenu>
		<el-submenu index="2-3">
      		<template slot="title">协作/休闲家具</template>
	     		<el-menu-item index="2-3-1">协作/休闲家具</el-menu-item>
		</el-submenu>
		<el-submenu index="2-4">
      		<template slot="title">储物柜</template>
	     		<el-menu-item index="2-4-1">办公收纳</el-menu-item>
		</el-submenu>
  	</el-submenu>
  	<el-menu-item index="3" ><router-link to="/case">项目案例</router-link></el-menu-item>
  	<el-menu-item index="4" >课题研究</el-menu-item>
  	<el-menu-item index="5" >关于我们</el-menu-item>
  	<el-menu-item index="6" >联系我们</el-menu-item>
  	<el-menu-item index="7" >校园招聘</el-menu-item>
  	<el-menu-item index="8"><el-input v-model="input"  size="small" placeholder="请输入内容"></el-input><i class="el-icon-search"></i></el-menu-item>
	<el-menu-item index="7" ></el-menu-item>
	<el-menu-item index="7" ></el-menu-item>
	<el-menu-item index="7" ></el-menu-item>
	<el-menu-item index="7" ></el-menu-item>
	<el-menu-item index="7" ></el-menu-item>
	<el-menu-item index="7" ></el-menu-item>
	<el-menu-item index="7" ></el-menu-item>
	<el-menu-item index="7" ></el-menu-item>
	<el-menu-item index="7" ><h1>KOKUYO</h1></el-menu-item>
  	</el-menu>

  </el-header>
  <el-main>
  	<!--<el-row>
		  <el-col :span="24">
		  	<div class="grid-content bg-purple-dark">-->
		  		
		  		<el-carousel :interval="3000"  height="400px" type="" arrow="hover">
					<el-carousel-item>
					    <img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2018/10/ING-2.jpg" class="carousel_image_type"/>
					</el-carousel-item>
					<el-carousel-item>
					    <img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2018/01/arch.jpg" class="carousel_image_type"/>
					</el-carousel-item>
					<el-carousel-item>
					    <img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2018/07/P70-1.jpg" class="carousel_image_type"/>
					</el-carousel-item>
					<el-carousel-item>
					    <img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2017/12/education-banner-1.jpg" class="carousel_image_type"/>
					</el-carousel-item>
					<el-carousel-item>
					    <img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2017/11/duora-banner-1.jpg" class="carousel_image_type"/>
					</el-carousel-item>
					<el-carousel-item>
					    <img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2017/06/Banner_interval-3.jpg" class="carousel_image_type"/>
					</el-carousel-item>
				</el-carousel>
<!--		  	</div>
		  </el-col>
	</el-row>-->
   <el-row>
   	<el-col :span="4" offset="7"><div class="grid-content bg-purple" style="text-align: left;height: 0px;" ></div></el-col>
	  <el-col :span="4" offset="16"><div class="grid-content bg-purple"><h2>产品/ Products</h2></div></el-col>
	</el-row>
	
	
	
	<el-row>
		<el-col :span="13" :offset="7"><div class="line"></div></el-col>
	</el-row>
	
	<el-row>
		<el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
		<el-col :span="10"><div class="grid-content bg-purple-light"><p><i class="el-icon-user-solid"></i>作为办公家具供应商，我们力求提供安全、美观且实用的办公家具以辅助员工工作。我们始终坚持“people+design”的设计开发理念，致力于研发、生产出具有良好品质的办公家具系列。</p></div></el-col>
		<el-col :span="3"><div class="grid-content bg-purple" style="height: 0px;line-height: 68px; text-align: right;" ><router-link to="/product"><el-button type="info" icon="el-icon-arrow-right" >查看更多</el-button></router-link></div></el-col>
	</el-row>

	
	
	<el-row>
		<el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
		<el-col :span="10"><div class="grid-content bg-purple"><img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2016/11/ARCH.jpg" /></div></el-col>
		<el-col :span="10"><div class="grid-content bg-purple-light"><img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2016/11/ING7.jpg"  /></div></el-col>
		<el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
	</el-row>
	
	<el-row>
	  <el-col :span="10" offset="4"><div class="grid-content bg-purple"><h2 style="text-align: left;">案例/ Case Study</h2></div></el-col>
	</el-row>
	
	<el-row>
		<el-col :span="13" :offset="4"><div class="line"></div></el-col>
	</el-row>
	
	<el-row>
		<el-col :span="3" offset="4"><div class="grid-content bg-purple" style="height: 0px;line-height: 68px; text-align: left;" ><router-link to="/case"><el-button type="info" icon="el-icon-arrow-right" >查看更多</el-button></router-link></div></el-col>
		<el-col :span="10"><div class="grid-content bg-purple-light"><p><i class="el-icon-user-solid"></i>国誉家具作为人性化的高品质办公家具与专业的办公环境整体解决方案供应商，为客户提供从空间规划、办公家具配送、安装及售后服务于一体的整体服务。以办公空间为主，协助客户进行酒店、商业、医院和文化设施等空间构筑，每年经手的项目数超过1000个。</p></div></el-col>
		<el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
	</el-row>
	<img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2016/11/case-study.jpg"/>
	
	
	
	<el-row>
	  <el-col :span="8" offset="12"><div class="grid-content bg-purple"><h2 style="text-align: right;">工作研究/ Research</h2></div></el-col>
	</el-row>
	
	<el-row>
		<el-col :span="13" :offset="7"><div class="line"></div></el-col>
	</el-row>
	
	<el-row>
		<el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
		<el-col :span="10"><div class="grid-content bg-purple-light"><p><i class="el-icon-user-solid"></i>国誉不仅是日本排名第一的办公家具制造与销售商，更致力于通过详实、丰富、有趣的实际案例与实践地分析与研究，与大家分享全球先进的办公环境与工作理念。</p></div></el-col>
		<el-col :span="3"><div class="grid-content bg-purple" style="height: 0px;line-height: 68px; text-align: right;" ><router-link to="/product"><el-button type="info" icon="el-icon-arrow-right" >查看更多</el-button></router-link></div></el-col>
	</el-row>
	<img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2016/11/for-web_2.jpg"/>
	
	
	
	<el-row>
	  <el-col :span="8" offset="4"><div class="grid-content bg-purple"><h2 style="text-align: left;">
走进国誉 / KOKUYO</h2></div></el-col>
	</el-row>
	<el-row>
		<el-col :span="13" :offset="4"><div class="line"></div></el-col>
	</el-row>
	<el-row>
		<el-col :span="3" offset="4"><div class="grid-content bg-purple" style="height: 0px;line-height: 68px; text-align: left;" ><router-link to="/product"><el-button type="info" icon="el-icon-arrow-right" >查看更多</el-button></router-link></div></el-col>
		<el-col :span="10"><div class="grid-content bg-purple-light"><p><i class="el-icon-user-solid"></i>国誉家具从现状调查开始，推进复合企业战略及工作模式、设施特征的空间规划，提供项目综合支持，为客户提供办公家具、公共家具、商业设施等综合空间的整体解决方案，与客户共同“创造空间价值”，通过产品和服务造福社会。</p></div></el-col>
		<el-col :span="7"><div class="grid-content bg-purple"></div></el-col>
	</el-row>
	<img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2016/11/about-KOKUYO.jpg"/>
</el-main>
<div class=foot>
	<el-row>
		<el-col :span="7"><div class="footer_thank">
			<span>T</span>HANKS
		</div></el-col>
	  	<el-col :span="10"><div class="footer_copy">
			<span>Copyright © 2018.Company name All rights reserved.</span>
		</div></el-col>
	  	<el-col :span="7"><div class="foot_3"></div></el-col>
	</el-row>
</div>
<!--<div class="footer_thank">
			<span>T</span>HANKS
		</div>
		<div class="footer_mail">
			<span>1628265481@qq.com</span>
		</div>
		<div class="footer_copy">
			<span>Copyright © 2018.Company name All rights reserved.</span>
		</div>-->
<!--  <el-footer></el-footer>-->
</el-container>


</template>
<style>
  .el-header, .el-footer {
  	box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 200px;
    padding: 0;
  }
  .el-footer{
  	height: 0px;
  }
  
  .el-aside {
    background-color: #white;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #white;
    color: #333;
    text-align: center;
    line-height: 160px;
    border-bottom: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }
  
  body > .el-container {
    margin-bottom: 0px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  
    .el-row {

    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: white;
  }
  .bg-purple {
    background: white;
  }
  .bg-purple-light {
    background: white;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 0px 0;
    background-color: white;
  }

   .carousel_image_type{
     width: 100%;
  }
  
  
h2{
	font-size:2vw;
	line-height: 50px;
}
p{
	font-family: "微软雅黑";
	font-size:1vw;
	line-height: 20px;
	text-align: left;
}
.line{
	background-color: black;
	height: 2px;
}
.footer_thank{
			font-family: bold;
			margin-left: 50px;
			font-size: 20px;
}
.footer_thank span{
			font-size: 40px;
}
.footer_copy{
			padding-top: 10px;
			text-align: center;
			font-size: 20px;
}	
.foot{
	background-color: black;
	color: white;
	}	
h1{
	font-size: 30px;
	font-family: bold;
	line-height: 20px;

}
p{
	font-family:  "bodoni mt";
}
a {
  text-decoration: none;
}
 
.router-link-active {
  text-decoration: none;
}
img{
	display: inline-block;
  height: auto;
  max-width: 100%;
}
</style>

<script>

export default {
    data() {
      return {
      	banner1:'./images/banner1.jpg',
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>