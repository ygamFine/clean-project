<template>
    <footer>
        <div class="friendship-link">
            <p class="friendship-link-title">
                <b>友情链接</b>
            </p>
            <ul class="friendship-link-img">
              <li>
                  <a href="#">
                      <img src="src/public/img/201508261422247612.png" alt="中户人民共和国文化部">
                  </a>
              </li>
              <li>
                  <a href="#">
                      <img src="src/public/img/201508261422247612.png" title="中户人民共和国文化部">
                  </a>
              </li>
              <li>
                  <a href="#">
                      <img src="src/public/img/201508261422247612.png" title="中户人民共和国文化部">
                  </a>
              </li>
              <li>
                  <a href="#">
                      <img src="src/public/img/201508261422247612.png" title="中户人民共和国文化部">
                  </a>
              </li>
              <li>
                  <a href="#">
                      <img src="src/public/img/201508261422247612.png" title="中户人民共和国文化部">
                  </a>
              </li>
              <li>
                  <a href="#">
                      <img src="src/public/img/201508261422247612.png" title="中户人民共和国文化部">
                  </a>
              </li>
            </ul>
            <ul class="friendship-link-select">
                <li v-for="(items,index) in friendshipLinkData.list">
                  <!-- {{items}} -->
                    <select class="select-link" name="" >
                        <option value="" v-for="item in items">{{item.name}}</option>
                    </select>
                </li>
            </ul>
        </div>
        <ul class="bcr-information">
            <li>地址：济南市经十一路12号 邮编：250014 电话：0531-68609890 传真：0531-82611500 </li>
            <li>Copyright Reserved 2014-2016 版权所有 © 山东文物局 鲁ICP备08110365号 </li>
            <li>技术支持：济南奥维信息科技有限公司</li>
            <li>网站标识码 3700000055</li>
            <li class="keep-on-record"><img src="src/public/img/beian.png" title="" />鲁公网安备号 37010202001034</li>
            <li>
                <a href="http://bszs.conac.cn/sitename?method=show&id=52DA585B34976190E053022819AC4148" target="_Blank"><img src="http://dcs.conac.cn/image/red.png" /></a>
                <a href="http://121.43.68.40/exposure/jiucuo.html?site_code=3700000055&url=http%3A%2F%2Fwww.sdww.gov.cn%2Frdzt.html" target="_Blank"><img src="http://121.43.68.40/exposure/images/jiucuo.png?v=3700000055" /></a>
            </li>
        </ul>
    </footer>
</template>

<script>

export default {
    props: ['friendshipLinkData'],
    data () {
        return {

        }
    }
}
</script>
<style>
    footer{
        width: 100%;
    }
    /* 友情链接 */
    .friendship-link{
        width: 1010px;
        margin: 0 auto;
        padding-bottom: 10px;
        border-bottom: 3px solid #3083eb;
    }
    .friendship-link-title{
        width: 100%;
        height: 30px;
        border-bottom: 2px solid #C0C0C0;
        margin-bottom: 5px;
        position: relative;
    }
    .friendship-link-title b{
        display: inline-block;
        height: 100%;
        font-size: 15px;
        position: absolute;
        top: 2px;
        z-index: 1;
        border-bottom: 2px solid #3083eb;
    }
    .friendship-link-img,
    .friendship-link-select{
        padding: 5px 0;
        display: -webkit-box;   /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
        display: -moz-box;      /* 老版本语法: Firefox (buggy) */
        display: -ms-flexbox;   /* 混合版本语法: IE 10 */
        display: -webkit-flex;  /* 新版本语法: Chrome 21+ */
        display: flex;          /* 新版本语法: Opera 12.1, Firefox 22+ */
        justify-content: space-around;
    }
    .select-link{
        width: 170px;
        font-size: 12px;
    }

    /* 文物局信息 */
    .bcr-information{
        width: 1010px;
        margin: 20px auto;
    }
    .bcr-information li{
        text-align: center;
        font-size: 12px;
        color: #454545;
        padding: 5px 0;
    }
    .keep-on-record{
        margin: 10px 0;
        display: -webkit-box;   /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
        display: -moz-box;      /* 老版本语法: Firefox (buggy) */
        display: -ms-flexbox;   /* 混合版本语法: IE 10 */
        display: -webkit-flex;  /* 新版本语法: Chrome 21+ */
        display: flex;          /* 新版本语法: Opera 12.1, Firefox 22+ */
        align-items: center;
        justify-content: center;
    }
    .keep-on-record img{
        margin-right: 5px;
    }
</style>
