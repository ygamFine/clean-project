<template>
    <header>
        <!-- 欢迎语 -->
        <div class="welcoming-wrap">
            <div class="welcoming">
                <div class="left">
                    山东省文物局欢迎您！
                </div>
                <ul class="right">

                    <li><a class="local-wel" href="jacascript::void(0);" @click="SetHome($event)">设为首页</a>|</li>
                    <li><a class="local-wel" href="jacascript::void(0);" @click="AddFavorite()">收藏本页</a>|</li>
                    <li><router-link class="local-wel" to="/web-site-map">网站地图</router-link></li>
                </ul>
            </div>
        </div>
        <!-- 欢迎页面 - svg -->
        <div class="welcoming-svg">
            <embed :src="svgURL" width="1010" height="200">
        </div>
        <!-- 导航 -->
        <div class="navigation-wrap">
            <ul class="navigation-list">
                <li v-for="item in navList">
                    <router-link class="nav-link" :to="item.path">
                        {{ item.name }}
                    </router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>

export default {
    data () {
        return {
            svgURL: 'src/public/img/banner.swf', // 欢迎宣传 swf URL 地址
            navList: [
              {
                name: '首页',
                path: '/'
              },
              {
                // name: '新闻中心',
                name: '新闻资讯',
                path: '/news-center'
              },
              {
                // name: '政务信息',
                name: '政务公开',
                path: '/government-info'
              },
              {
                // name: '政务大厅',
                name: '服务大厅',
                path: '/government-hall'
              },
              {
                name: '互动交流',
                path: '/interactive-communication'
              },
              {
                name: '热点专题',
                path: '/hot-topic'
              }
              // {
              //   name: '党建工作',
              //   path: '/party-building-work'
              // },
              // {
              //   name: '下载平台',
              //   path: '/downloading-platform'
              // },
              // {
              //   name: '资料信息',
              //   path: '/information-information'
              // }
            ],
        }
    },
    mounted() {

    },
    methods: {
        // 将当前网页设置为浏览器首页
        SetHome(e) {
          this.pl.setHomePage(e);
        },
        // 收藏当前页面
        AddFavorite() {
          this.pl.addFavorite()
        }
    }
}
</script>
<style>
    header{
        width: 100%;
        background-color: #abd2f9;
    }
    .welcoming,
    .welcoming-svg,
    .navigation-list{
        width: 1010px;
        margin: 0 auto;
    }
    /* 欢迎语 */
    .welcoming-wrap{
        width: 100%;
        height: 20px;
        line-height: 20px;
        background: #fff;
    }
    .welcoming{
      height: 100%;
    }
    .welcoming .left,
    .welcoming .right,
    .local-wel{
        display: inline-block;
        height: 20px;
        line-height: 20px;
    }
    .welcoming .left{
        font-size: 12px;
    }
    .welcoming .right{
        display: -webkit-box;   /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
        display: -moz-box;      /* 老版本语法: Firefox (buggy) */
        display: -ms-flexbox;   /* 混合版本语法: IE 10 */
        display: -webkit-flex;  /* 新版本语法: Chrome 21+ */
        display: flex;          /* 新版本语法: Opera 12.1, Firefox 22+ */
    }
    .local-wel{
        font-size: 12px;
        padding: 0 5px;
        color: #444;
    }
    .local-wel:hover{
        color: #4d88c7;
    }
    /* svg */
    .welcoming-svg{
      height: 200px;
    }
    /* 导航 */
    .navigation-wrap{
        width: 100%;
        height: 40px;
        background-color: #3083eb;
    }
    .navigation-list{
        height: 100%;
        display: -webkit-box;   /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
        display: -moz-box;      /* 老版本语法: Firefox (buggy) */
        display: -ms-flexbox;   /* 混合版本语法: IE 10 */
        display: -webkit-flex;  /* 新版本语法: Chrome 21+ */
        display: flex;          /* 新版本语法: Opera 12.1, Firefox 22+ */
        justify-content: space-evenly;
    }
    .nav-link{
        display: inline-block;
        width: 130px;
        height: 40px;
        line-height: 40px;
        font-size: 15px;
        color: #fff;
        font-weight: bold;
        text-align: center;
        border-radius: 3px;
    }
    .nav-link:hover{
        background-color: #234c94;
        color: #fff;
    }
</style>
