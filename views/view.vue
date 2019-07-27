<template>
<el-container>
  <el-header>
  	<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="black" active-text-color="#747474" font-family="bold" >
  	<el-menu-item index="1"><router-link to="/index">首页</router-link></el-menu-item>
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
  	<el-row>
	  	<el-col :span="10" offset="4"><div style="height: 20px;"></div></el-col>
		</el-row>
		
		<el-row>
	  	<el-col :span="10" offset="3">
	  		<div class="grid-content bg-purple" style="text-align: left;" > 
	  			<el-breadcrumb separator="/">
				  <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item :to="{ path: '/product' }">产品</el-breadcrumb-item>
				  <el-breadcrumb-item>Bezel</el-breadcrumb-item>
				</el-breadcrumb>
	  		</div>
	  	</el-col>
		</el-row>
  	
  	<el-row>
		  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="20">
			  	<div class="grid-content bg-purple-light">
			  		<el-carousel :interval="3000"  indicator-position="none" height="" type="card" arrow="hover">
								<el-carousel-item>
								    <img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2017/05/Image_1-3.jpg" class="carousel_image_type"/>
								</el-carousel-item>
								<el-carousel-item>
								    <img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2017/05/bezel-main2.jpg" class="carousel_image_type"/>
								</el-carousel-item>
								<el-carousel-item>
								    <img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2017/05/bezel-main.jpg" class="carousel_image_type"/>
								</el-carousel-item>
								
								<el-carousel-item>
								    <img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2017/05/Image_2-1.jpg" class="carousel_image_type"/>
								</el-carousel-item>
							</el-carousel>
			  	</div>
			  </el-col>
  		<el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
		</el-row>
  	
		<el-row>
		  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="8"><div class="grid-content bg-purple"><h1>Bezel</h1></div></el-col>
		  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
		</el-row>
		
		<el-row>
		  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="8"><div class="grid-content bg-purple"><p style="font-size: .9vw; line-height: 100%; text-align: center;">为了应对逐渐多样化的工作方式，</p><p style="font-size: .9vw; line-height: 100%; text-align: center;">一天中的坐姿也会有大幅度地变化。</p><p style="font-size: .9vw; line-height: 100%; text-align: center;">Bezel，无论是前倾或后仰，从工作到休息时的任何姿态，</p><p style="font-size: .9vw; line-height: 100%; text-align: center;">都能通过其先进的功能进行舒适撑托。</p></div></el-col>
		  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
		</el-row>
		
		<el-row>
		  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="20">
		  	<div class="grid-content bg-purple-light">
		  		<el-tabs v-model="activeName" @tab-click="handleClick" stretch="true"  >
				    <el-tab-pane label="功能特点" name="first">
				    	<el-row>
						  <el-col :span="6"><div class="grid-content bg-purple"><img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2016/12/-1-e1496200771838.png"/><p style="text-align: center;">减轻前倾姿态对腹部和腰部造成的负担</p><p style="text-align: center; font-size: .8vw; line-height: 100%;">座面前缘向下20mm前倾的同时,</p><p style="text-align: center; font-size: .8vw; line-height: 100%;">有效减轻前倾姿势时对腹部和腰部造成的压力。</p></div></el-col>
						  <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
						  <el-col :span="6"><div class="grid-content bg-purple"><img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2016/12/-1-e1496200872547.png" /><p style="text-align: center;">随着肘部的移动调整至最佳位置的扶手</p><p style="text-align: center; font-size: .8vw; line-height: 100%;">相较于以往扶手可动面积，整体的承托范围提高了40%。</p></div></el-col>
						  <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
						  <el-col :span="6"><div class="grid-content bg-purple"><img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2016/12/-1-e1496200872547.png" /><p style="text-align: center;">从休息到作业的各种姿态全面撑托</p><p style="text-align: center; font-size: .8vw; line-height: 100%;">头靠可在30度范围内实现自由调整，
完美撑托后倾时的作业姿态，使脖颈压力得以释放。</p></div></el-col>
						</el-row>
				    </el-tab-pane>
				    <el-tab-pane label="颜色&材质" name="second">	
				    	<p style="text-align: center; font-weight:bold">主体</p>
				    	<img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2016/12/bezel-colour-range.jpg"/>
				    	<p style="text-align: center; font-weight:bold">织布材质（靠背）</p>
				    	<img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2016/12/bezel-%E8%83%8C-e1496889984878.jpg" alt="" />
				    	<p style="text-align: center; font-weight:bold">织布材质（座面）</p>
				    	<img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2016/12/bezel-colour3.jpg" alt="" />
				    	<p style="text-align: center; font-weight:bold">材质（靠背）</p>
				    	<img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2016/12/bezel-colour3-1.jpg" alt="" />
				    	<p style="text-align: center; font-weight:bold">材质（座面）</p>
				    </el-tab-pane>
				    <el-tab-pane label="尺寸" name="third">
				    	<img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2016/12/bezel-dimension2-1.jpg" alt="" />
				    </el-tab-pane>
				</el-tabs>
		  	</div>
		  </el-col>
		  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
		</el-row>
		
		
		
	<el-row>
	  	<el-col :span="10" offset="4"><div class="grid-content bg-purple"><h2 style="text-align: left;"> </h2></div></el-col>
	</el-row>
  	
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



  
h2{
	font-size:2vw;
	line-height: 50px;
}
p{
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

.el-tabs{
	line-height: 20px;
}

</style>

<script>

export default {
    data() {
      return {
      	activeName: 'first',
        activeIndex: '2',
        activeIndex2: '1'
      };
    },
    methods: {
		handleClick(tab, event) {
        console.log(tab, event);
     },
      	handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      	handleChange(value) {
        console.log(value);
      }
    }
  }
</script>