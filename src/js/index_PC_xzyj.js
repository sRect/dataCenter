function Xzyj(){this.daDingSum="--",this.daDingSut="--",this.qianYueSum="--",this.qianYueSut="--",this.huiKuanSum="--",this.huiKuanSut="--",this.faYongSum="--",this.faYongSut="--",this.tuiDingSum="--",this.tuiDingSut="--",this.tuiFangSum="--",this.tuiFangSut="--",this.baoBeiNum="--",this.laiFangNum="--",this.laiFangScale="--",this.quDaoCompanyNum="--",Object.defineProperty(this,"laiFangScale",{get:function(){return 0!=this.baoBeiNum&&"--"!=this.baoBeiNum&&0!=this.laiFangNum&&"--"!=this.laiFangNum?(this.baoBeiNum/this.laiFangNum).toFixed(2)+":1":"--"},set:function(e){laiFangScale=e}}),Object.defineProperty(this,"daDingSum",{get:function(){return 0==daDingSum?daDingSum=0:"--"==daDingSum?daDingSum="--":(daDingSum/1e4).toFixed(4)},set:function(e){daDingSum=e}}),Object.defineProperty(this,"qianYueSum",{get:function(){return 0==qianYueSum?qianYueSum=0:"--"==qianYueSum?qianYueSum="--":(qianYueSum/1e4).toFixed(4)},set:function(e){qianYueSum=e}}),Object.defineProperty(this,"huiKuanSum",{get:function(){return 0==huiKuanSum?huiKuanSum=0:"--"==huiKuanSum?huiKuanSum="--":(huiKuanSum/1e4).toFixed(4)},set:function(e){huiKuanSum=e}}),Object.defineProperty(this,"faYongSum",{get:function(){return 0==faYongSum?faYongSum=0:"--"==faYongSum?faYongSum="--":(faYongSum/1e4).toFixed(4)},set:function(e){faYongSum=e}}),Object.defineProperty(this,"tuiDingSum",{get:function(){return 0==tuiDingSum?tuiDingSum=0:"--"==tuiDingSum?tuiDingSum="--":(tuiDingSum/1e4).toFixed(4)},set:function(e){tuiDingSum=e}}),Object.defineProperty(this,"tuiFangSum",{get:function(){return 0==tuiFangSum?tuiFangSum=0:"--"==tuiFangSum?tuiFangSum="--":(tuiFangSum/1e4).toFixed(4)},set:function(e){tuiFangSum=e}}),Object.defineProperty(this,"huiKuanSut",{value:" --",writable:!1}),this.config={daDingSum:document.getElementById("daDingSumID"),daDingSut:document.getElementById("daDingSutID"),qianYueSum:document.getElementById("qianYueSumID"),qianYueSut:document.getElementById("qianYueSutID"),huiKuanSum:document.getElementById("huiKuanSumID"),huiKuanSut:document.getElementById("huiKuanSutID"),faYongSum:document.getElementById("faYongSumID"),faYongSut:document.getElementById("faYongSutID"),tuiDingSum:document.getElementById("tuiDingSumID"),tuiDingSut:document.getElementById("tuiDingSutID"),tuiFangSum:document.getElementById("tuiFangSumID"),tuiFangSut:document.getElementById("tuiFangSutID"),baoBeiNum:document.getElementById("baoBeiNumID"),laiFangNum:document.getElementById("laiFangNumID"),laiFangScale:document.getElementById("laiFangScaleID"),quDaoCompanyNum:document.getElementById("quDaoCompanyNumID")}}function sdtSub(){var e=$("#dataScreenFirsttime").val(),t=$("#dataScreenEndtime").val(),n=$("#myModal");return PropertyID=$(":selected","#propertyList").attr("data-property"),timeseleteNum=$(".optionList").children(".optionListActive").attr("infor"),e=e.split("/").join(""),t=t.split("/").join(""),""==e&&""==t?($my.messageInfo.html("日期选择不能为空").fadeIn("fast").delay("1000").fadeOut("slow"),!1):""==e?($my.messageInfo.html("开始日期不能为空").fadeIn("fast").delay("1000").fadeOut("slow"),!1):""==t?($my.messageInfo.html("结束日期不能为空").fadeIn("fast").delay("1000").fadeOut("slow"),!1):t<e?($my.messageInfo.html("结束日期不能小于开始日期").fadeIn("fast").delay("1000").fadeOut("slow"),!1):void $.ajax({url:getRoothPath+"/overview/addperformanceApp.json",data:{timeselete:timeseleteNum,PropertyID:PropertyID,firsttime:e,endtime:t},success:function(e){xzyj.bindGetJson(e),xzyj.bindDom()},complete:function(){n.modal("hide")}})}function getData(){if(timeseleteNum=$(".optionList").children(".optionListActive").attr("infor"),PropertyID=$(":selected","#propertyList").attr("data-property"),5!=timeseleteNum&&0!=timeseleteNum)$.ajax({url:getRoothPath+"/overview/addperformanceApp.json",data:{timeselete:timeseleteNum,PropertyID:PropertyID},success:function(e){console.log(e),xzyj.bindGetJson(e),xzyj.bindDom()}});else if(0!=timeseleteNum&&5==timeseleteNum){var e=$("#confirmBtnID");e.on("touchend",function(e){e.preventDefault(),xzyj.throttle(sdtSub,this)})}else if(0==timeseleteNum)return void $my.messageInfo.html("今日数据暂停查询").fadeIn("fast").delay("1000").fadeOut("slow")}Xzyj.prototype={getPropertyIDarr:function(){var e=window.location.search,t=sessionStorage.getItem("propertyIDarr");if("[object Null]"===Object.prototype.toString.call(t)||"[object Undefined]"===Object.prototype.toString.call(t)){if(e.indexOf("=")===-1)return void $my.messageInfo.html("url链接不符").fadeIn("fast").delay("1000").fadeOut("slow");if(e.indexOf("&")!==-1){var n=e.split("&"),i=[];if(Array.prototype.forEach.call(n,function(e){i.push(e.split("=")[1])}),""===i[0]||""===i[1])return void $my.messageInfo.html("楼盘参数丢失").fadeIn("fast").delay("1000").fadeOut("slow");$my.propertyIDarr=i[0],sessionStorage.setItem("propertyIDarr",i[0]);/^[0-9]*$/.test(i[1])?($my.id=i[1],sessionStorage.setItem("id",i[1])):($my.adminOrgName=decodeURI(i[1]),sessionStorage.setItem("adminOrgName",$my.adminOrgName))}else{var n=e.split("=");if(""===n[1])return void $my.messageInfo.html("楼盘参数丢失").fadeIn("fast").delay("1000").fadeOut("slow");$my.propertyIDarr=n[1],sessionStorage.setItem("propertyIDarr",n[1])}}else $my.propertyIDarr=t},getProperty:function(){$.ajax({url:getRoothPath+"/overview/getAllProperty.json",async:!1,data:{PropertyIDarr:$my.propertyIDarr},success:function(e){var t=e.AllProperty;if(0!=t.length){for(var n="",i=0;i<t.length;i++)n+="<option data-property="+t[i].ID+">"+t[i].PropertyName+"</option>";$my.propertyList.innerHTML=n}else $my.messageInfo.html("暂无楼盘信息").fadeIn("fast").delay("1000").fadeOut("slow")}})},bindDom:function(){this.config.daDingSum.innerHTML=this.daDingSum,this.config.daDingSut.innerHTML=this.daDingSut,this.config.qianYueSum.innerHTML=this.qianYueSum,this.config.qianYueSut.innerHTML=this.qianYueSut,this.config.huiKuanSum.innerHTML=this.huiKuanSum,this.config.huiKuanSut.innerHTML=this.huiKuanSut,this.config.faYongSum.innerHTML=this.faYongSum,this.config.faYongSut.innerHTML=this.faYongSut,this.config.tuiDingSum.innerHTML=this.tuiDingSum,this.config.tuiDingSut.innerHTML=this.tuiDingSut,this.config.tuiFangSum.innerHTML=this.tuiFangSum,this.config.tuiFangSut.innerHTML=this.tuiFangSut,this.config.baoBeiNum.innerHTML=this.baoBeiNum,this.config.laiFangNum.innerHTML=this.laiFangNum,this.config.laiFangScale.innerHTML=this.laiFangScale,this.config.quDaoCompanyNum.innerHTML=this.quDaoCompanyNum},bindEvents:function(){$("#footID").on("click",function(e){e.preventDefault(),window.location.href="list_PC_eachPerfor_anChang.html"})},bindDIYtime:function(){var e=new Date,t=new Date(e.getFullYear()-10,e.getMonth(),e.getDate()),n=new Date(e.getFullYear()+100,e.getMonth(),e.getDate());$(".data").mobiscroll().date({theme:"ios",lang:"zh",display:"bottom",min:t,max:n})},throttle:function(e,t){clearTimeout(e.tId),e.tId=setTimeout(function(){e.call(t)},500)},totalInfo:function(e){var e,t,n,i,a;i=document.getElementById("totalPerforID"),a=document.getElementById("totalNumID"),e=e.Addperformance[0],t=e.SaleHouse+e.ReserveHouse,n=parseFloat((e.SaleHouseTotal+e.ReserveSaleTotal).toFixed(0)).toLocaleString(),null!=t?(i.innerHTML=n,a.innerHTML=t):(i.innerHTML="--",a.innerHTML="--")},getLastNum:function(){var e=document.querySelector("#searchBox"),t=e.value,n=/^[0-9]{4}$/,i=$(":selected","#propertyList").attr("data-property");if(1!=n.test(t))return void $my.messageInfo.html("号码为四位非负整数").fadeIn("fast").delay("1000").fadeOut("slow");window.location.href="list_PC_baobeiList.html?PropertyID="+i+"&lastName="+t},bindGetJson:function(e){if(0!=e.Addperformance.length){var t=e.Addperformance[0];xzyj.daDingSum=null==t.ReserveSaleTotal?0:t.ReserveSaleTotal,xzyj.daDingSut=null==t.ReserveHouse?0:t.ReserveHouse,xzyj.qianYueSum=null==t.SaleHouseTotal?0:t.SaleHouseTotal,xzyj.qianYueSut=null==t.SaleHouse?0:t.SaleHouse,xzyj.huiKuanSum=null==t.PaymentHouseTotal?0:t.PaymentHouseTotal,xzyj.faYongSum=null==t.CommissionTotal?0:t.CommissionTotal,xzyj.faYongSut=null==t.CommissionHouse?0:t.CommissionHouse,xzyj.tuiDingSum=null==t.BackReserveMoney?0:t.BackReserveMoney,xzyj.tuiDingSut=null==t.BackReserveHouse?0:t.BackReserveHouse,xzyj.tuiFangSum=null==t.BackMoney?0:t.BackMoney,xzyj.tuiFangSut=null==t.BackHouse?0:t.BackHouse,xzyj.baoBeiNum=null==t.ReportCustomer?0:t.ReportCustomer,xzyj.laiFangNum=t.CustomerLook+t.AgencyCustomerLook,xzyj.quDaoCompanyNum=null==t.AddAgency?0:t.AddAgency}else xzyj.daDingSum="--",xzyj.daDingSut="--",xzyj.qianYueSum="--",xzyj.qianYueSut="--",xzyj.huiKuanSum="--",xzyj.huiKuanSut="--",xzyj.faYongSum="--",xzyj.faYongSut="--",xzyj.tuiDingSum="--",xzyj.tuiDingSut="--",xzyj.tuiFangSum="--",xzyj.tuiFangSut="--",xzyj.baoBeiNum="--",xzyj.laiFangNum="--",xzyj.laiFangScale="--",xzyj.quDaoCompanyNum="--",$my.messageInfo.html("暂无信息").fadeIn("fast").delay("1000").fadeOut("slow")}};var xzyj=new Xzyj;$(function(){window.$my={messageInfo:$(".messageInfo"),propertyList:document.querySelector("#propertyList")};var e,t,n=$(".optionList li"),i=document.querySelector("#baobeiConfirmID");e=$(".optionList").children(".optionListActive").attr("infor"),$.ajaxSetup({type:"POST",dataType:"json",error:function(){$my.messageInfo.html("服务错误").fadeIn("fast").delay("1000").fadeOut("slow")}}),xzyj.getPropertyIDarr(),xzyj.getProperty();var a=sessionStorage.getItem("PropertyID");null!=a&&"null"!=a&&$($my.propertyList).children("option[data-property="+a+"]").attr("selected","selected"),t=$(":selected","#propertyList").attr("data-property"),sessionStorage.setItem("PropertyID",t),$.ajax({url:getRoothPath+"/overview/addperformanceApp.json",data:{timeselete:e,PropertyID:t},success:function(e){xzyj.bindGetJson(e),xzyj.bindDom()}}),$.ajax({url:getRoothPath+"/overview/addperformanceApp.json",data:{timeselete:6,PropertyID:t},success:function(e){xzyj.totalInfo(e)}}),n.on("click",function(e){e.preventDefault(),$(this).addClass("optionListActive").siblings("li").removeClass("optionListActive"),xzyj.throttle(getData,this)}),$($my.propertyList).on("change",function(e){e.preventDefault(),t=$(":selected",this).attr("data-property"),sessionStorage.setItem("PropertyID",t),getData(),function(){$.ajax({url:getRoothPath+"/overview/addperformanceApp.json",data:{timeselete:6,PropertyID:t},success:function(e){xzyj.totalInfo(e)}})}()}),i.addEventListener("click",function(e){e.preventDefault(),xzyj.throttle(xzyj.getLastNum,this)},!1),xzyj.bindEvents(),xzyj.bindDIYtime()});