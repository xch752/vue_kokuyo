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
				  <el-breadcrumb-item :to="{ path: '/case' }">项目案例</el-breadcrumb-item>
				  <el-breadcrumb-item>New Office Award-YASUJIMA</el-breadcrumb-item>
				</el-breadcrumb>
	  		</div>
	  	</el-col>
	</el-row>
  	
	
	<el-row>
	  	<el-col :span="10" offset="2"><div class="grid-content bg-purple"><h2 style="text-align: left;">New Office Award-YASUJIMA</h2></div></el-col>
	</el-row>
  	
  	<el-row>
		  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="20">
			  	<div class="grid-content bg-purple-light">
			  		<el-carousel :interval="3000"  indicator-position="" height="500px" type="" arrow="hover">
								<el-carousel-item>
								    <img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2018/09/L18010012_01.jpg" class="carousel_image_type"/>
								</el-carousel-item>
								<el-carousel-item>
								    <img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2018/09/L18010012_02.jpg" class="carousel_image_type"/>
								</el-carousel-item>
								<el-carousel-item>
								    <img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2018/09/L18010012_03.jpg" class="carousel_image_type"/>
								</el-carousel-item>
								<el-carousel-item>
								    <img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2018/09/L18010012_04.jpg" class="carousel_image_type"/>
								</el-carousel-item>
								<el-carousel-item>
								    <img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2018/09/L18010012_05.jpg" class="carousel_image_type"/>
								</el-carousel-item>
								<el-carousel-item>
								    <img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2018/09/L18010012_06.jpg" class="carousel_image_type"/>
								</el-carousel-item>
								<el-carousel-item>
								    <img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2018/09/L18010012_07.jpg" class="carousel_image_type"/>
								</el-carousel-item>
							</el-carousel>
			  	</div>
			  </el-col>
  		<el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
		</el-row>
  	
  	<el-row>
	  	<el-col :span="10" offset="4"><div style="height: 20px;"></div></el-col>
	</el-row>
	
		<el-row>
		  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="8"><div class="grid-content bg-purple"><h1>YASUJIMA</h1></div></el-col>
		  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
		</el-row>
		
		<el-row>
		  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="8"><div class="grid-content bg-purple"><p style="font-size: .9vw; line-height: 100%; text-align: center; font-weight: bold;">日本·石川県</p><p style="font-size: .9vw; line-height: 100%; text-align: center;">面积：4300m²   交货日期：2018.2
</p><p style="font-size: .9vw; line-height: 100%; text-align: center;">工厂与办公室的合建，旨在提高工作效率与业务拓展。</p><p style="font-size: .9vw; line-height: 100%; text-align: center;">我们设计了一个空间，各个部门与工厂之间可轻松的进行沟通与交流。</p><p style="font-size: .9vw; line-height: 100%; text-align: center;">此外我们专为设计师搭配了L型桌，即可集中精力办公又可与周围的人进行交流。</p></div></el-col>
		  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
		</el-row>
		
		<router-link to="/case">
			<el-button type="info" icon="el-icon-arrow-left" >返回案例</el-button>
		</router-link>
		
		
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