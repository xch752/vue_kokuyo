<template>
<el-container>
  <el-header>
  	<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="black" active-text-color="#747474">
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
		
	<!--<el-menu-item index="9" ><h1 >KOKUYO</h1></el-menu-item>-->
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
				  <el-breadcrumb-item>产品</el-breadcrumb-item>
					</el-breadcrumb>
	  		</div>
	  	</el-col>
		</el-row>
		
	
	<el-row>
		<el-col :span="18" :offset="3"><div class="line"></div></el-col>
	</el-row>
	
	<el-row>
	  <el-col :span="24"><div class="h2t"><h2>座椅</h2></div></el-col>
	</el-row>
	
	<el-row>
		<el-col :span="18" :offset="3"><div class="line"></div></el-col>
	</el-row>
	<el-row>
		<el-col :span="18" :offset="3"><div class="grid-content bg-purple"></div></el-col>
	</el-row>
	<el-row>
	  <el-col :span="2"><div class="product1"></div></el-col>
	  <el-col :span="5"><router-link to="/view"><div class="product1"><img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2017/06/ING--640x480.jpg" /></div></router-link></el-col>
	  <el-col :span="5"><router-link to="/view"><div class="product1"><img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2017/01/agata-640x480.jpg" /></div></router-link></el-col>
	  <el-col :span="5"><router-link to="/view"><div class="product1"><img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2017/01/caravel-1-640x480.jpg"/></div></router-link></el-col>
	  <el-col :span="5"><div class="product1"><h2></h2></div></el-col>
	  <el-col :span="2"><div class="product1"></div></el-col>
	</el-row>
	<el-row>
	  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="5"><div class="grid-content bg-purple-light"><p style="text-align: center;">员工椅</p></div></el-col>
	  <el-col :span="5"><div class="grid-content bg-purple"><p style="text-align: center;">管理职椅</p></div></el-col>
	  <el-col :span="5"><div class="grid-content bg-purple-light"><p style="text-align: center;">会议培训椅</p></div></el-col>
	  <el-col :span="5"><div class="grid-content bg-purple"><h2></h2></div></el-col>
	  <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
	</el-row>
	
	<el-row>
		<el-col :span="18" :offset="3"><div style="height: 50px;"></div></el-col>
	</el-row>
	
	<el-row>
		<el-col :span="18" :offset="3"><div class="line"></div></el-col>
	</el-row>
	
	<el-row>
	  <el-col :span="24"><div class="h2t"><h2>智能办公/会议桌</h2></div></el-col>
	</el-row>
	
	<el-row>
		<el-col :span="18" :offset="3"><div class="line"></div></el-col>
	</el-row>
	<el-row>
		<el-col :span="18" :offset="3"><div class="grid-content bg-purple"></div></el-col>
	</el-row>
	<el-row>
	  <el-col :span="2"><div class="product2"></div></el-col>
	  <el-col :span="5"><router-link to="/view"><div class="product2"><img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2017/06/%E6%99%BA%E8%83%BD%E5%8D%87%E9%99%8D%E6%A1%8C-640x480.gif" /></div></router-link></el-col>
	  <el-col :span="5"><router-link to="/view"><div class="product2"><img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2017/01/saibi-1-640x480.jpg" /></div></router-link></el-col>
	  <el-col :span="5"><router-link to="/view"><div class="product2"><img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2017/01/%E5%BD%A9%E7%BE%8ESAIBI-640x480.jpg"/></div></router-link></el-col>
	  <el-col :span="5"><router-link to="/view"><div class="product2"><img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2017/06/C-LINE-640x480.jpg"/></div></router-link></el-col>
	  <el-col :span="2"><div class="product2"></div></el-col>
	</el-row>
	<el-row>
	  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="5"><div class="grid-content bg-purple-light"><p style="text-align: center;">管理职工作位</p></div></el-col>
	  <el-col :span="5"><div class="grid-content bg-purple"><p style="text-align: center;">管理职椅</p></div></el-col>
	  <el-col :span="5"><div class="grid-content bg-purple-light"><p style="text-align: center;">会议桌</p></div></el-col>
	  <el-col :span="5"><div class="grid-content bg-purple"><p style="text-align: center;">长条桌</p></div></el-col>
	  <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
	</el-row>
	<el-row>
	  <el-col :span="2"><div class="product2"></div></el-col>
	  <el-col :span="5"><router-link to="/view"><div class="product2"><img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2017/06/C-LINE-640x480.jpg" height="188px" /></div></router-link></el-col>
	  <el-col :span="5"><div class="product2"></div></el-col>
	  <el-col :span="5"><div class="product2"></div></el-col>
	  <el-col :span="5"><div class="product2"></div></el-col>
	  <el-col :span="2"><div class="product2"></div></el-col>
	</el-row>
	<el-row>
	  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="5"><div class="grid-content bg-purple-light"><p style="text-align: center;">屏风工作位</p></div></el-col>
	  <el-col :span="5"><div class="grid-content bg-purple"><p style="text-align: center;"></p></div></el-col>
	  <el-col :span="5"><div class="grid-content bg-purple-light"><p style="text-align: center;"></p></div></el-col>
	  <el-col :span="5"><div class="grid-content bg-purple"><p style="text-align: center;"></p></div></el-col>
	  <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
	</el-row>
	
	<el-row>
		<el-col :span="18" :offset="3"><div class="line"></div></el-col>
	</el-row>
	
	<el-row>
	  <el-col :span="24"><div class="h2t"><h2>协作/休闲家具</h2></div></el-col>
	</el-row>
	
	<el-row>
		<el-col :span="18" :offset="3"><div class="line"></div></el-col>
	</el-row>
	
	<el-row>
	  <el-col :span="2"><div class="product2"></div></el-col>
	  <el-col :span="5"><router-link to="/view"><div class="product2"><img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2017/05/inframe-640x480.png" height="188px" /></div></router-link></el-col>
	  <el-col :span="5"><div class="product2"></div></el-col>
	  <el-col :span="5"><div class="product2"></div></el-col>
	  <el-col :span="5"><div class="product2"></div></el-col>
	  <el-col :span="2"><div class="product2"></div></el-col>
	</el-row>
	<el-row>
	  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="5"><div class="grid-content bg-purple-light"><p style="text-align: center;">休闲办公家具</p></div></el-col>
	  <el-col :span="5"><div class="grid-content bg-purple"><p style="text-align: center;"></p></div></el-col>
	  <el-col :span="5"><div class="grid-content bg-purple-light"><p style="text-align: center;"></p></div></el-col>
	  <el-col :span="5"><div class="grid-content bg-purple"><p style="text-align: center;"></p></div></el-col>
	  <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
	</el-row>
	
	<el-row>
		<el-col :span="18" :offset="3"><div class="line"></div></el-col>
	</el-row>
	
	<el-row>
	  <el-col :span="24"><div class="h2t"><h2>办公收纳</h2></div></el-col>
	</el-row>
	
	<el-row>
		<el-col :span="18" :offset="3"><div class="line"></div></el-col>
	</el-row>
	
	<el-row>
	  <el-col :span="2"><div class="product2"></div></el-col>
	  <el-col :span="5"><router-link to="/view"><div class="product2"><img src="https://www.kokuyo-furniture.cn/wp-content/uploads/2017/01/softorage-640x480.jpg" height="188px" /></div></router-link></el-col>
	  <el-col :span="5"><div class="product2"></div></el-col>
	  <el-col :span="5"><div class="product2"></div></el-col>
	  <el-col :span="5"><div class="product2"></div></el-col>
	  <el-col :span="2"><div class="product2"></div></el-col>
	</el-row>
	<el-row>
	  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="5"><div class="grid-content bg-purple-light"><p style="text-align: center;">办公收纳</p></div></el-col>
	  <el-col :span="5"><div class="grid-content bg-purple"><p style="text-align: center;"></p></div></el-col>
	  <el-col :span="5"><div class="grid-content bg-purple-light"><p style="text-align: center;"></p></div></el-col>
	  <el-col :span="5"><div class="grid-content bg-purple"><p style="text-align: center;"></p></div></el-col>
	  <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
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
    /*.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
    .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: white;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: white;
  }
   .carousel_image_type{
     width: 100%;
  }*/
  
  
h2{
	line-height: 50px;
}
p{
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
	font-size: 2.5vw;
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

.h2t{
	height: 20px;
}
.h2t h2{
	line-height: 0px;
}
.product1{
	height: 220px;
}
.product2{
	height: 188px;
}
.product1:hover,.product2:hover{
	opacity:.4;
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
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>