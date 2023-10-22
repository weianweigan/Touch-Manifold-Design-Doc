import{_ as a,a as s}from"./24984888.aacf6429.js";import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as r,e as i}from"./app.069a49dc.js";const c="/images/28559527.png",n="/images/28559578.png",o="/images/28559604.png",_="/images/24984876.png",m="/images/24984901.png",h="/images/24984913.png",p="/images/24984911.png",d={},g=i('<h2 id="_3-12-斜孔" tabindex="-1"><a class="header-anchor" href="#_3-12-斜孔" aria-hidden="true">#</a> 3-12. 斜孔</h2><h3 id="_3-12-1-功能描述" tabindex="-1"><a class="header-anchor" href="#_3-12-1-功能描述" aria-hidden="true">#</a> 3-12-1. 功能描述</h3><p>主要实现对已有孔腔进行底孔直径、深度的修改，以及孔腔倾斜角度的调整，可根据选择自动修改孔腔深度和角度。 适用环境：零件环境；</p><h3 id="_3-12-2-功能界面" tabindex="-1"><a class="header-anchor" href="#_3-12-2-功能界面" aria-hidden="true">#</a> 3-12-2. 功能界面</h3><p><img src="'+c+'" alt="图片"></p><h3 id="_3-12-3-操作方法" tabindex="-1"><a class="header-anchor" href="#_3-12-3-操作方法" aria-hidden="true">#</a> 3-12-3. 操作方法</h3><p>1、TouchMDesign &gt; 斜孔，弹出如图所示的界面； 2、在“选择孔腔”选择框中，选择要倾角的孔腔，模型视图区域直接选择单个孔腔，选择后该孔腔将高亮且有角度旋转盘以及深度方向拉伸箭头； <img src="'+a+'" alt="图片"> 3、可直接拖拽深度箭头的长度以调整孔腔深度，可直接拖拽旋转盘以调节孔腔的倾角角度； 4、在“拉伸到孔腔”选择框中，可直接设置孔腔末端拉伸到某一孔腔的中心处，或者倾角拉伸至某端口位置，具体方式如下： 4.1 仅选择“拉伸到孔腔”，未选择孔腔的端口号，则同拉伸孔腔功能，在选择孔腔的深度方向上，孔腔末端拉伸至参考孔腔的中心处 <img src="'+n+'" alt="图片"> 4.2 选择“拉伸到孔腔”后，且选择了端口号，则选择孔腔将以最小β角倾斜至“拉伸到孔腔”的端口中心处，“选择孔腔”的末端连接位置可在“拉伸到孔腔”的端口区间任意调整，默认为最短距离连接； <img src="'+o+'" alt="图片"> 如上图所示，“选择孔腔”钻孔将以一定角度倾斜与“拉伸到孔腔”所选端口连接，且拉伸至端口中心处，另外“端口位置”可调整区间为0-30之间，钻孔的β角最小连接位置为端口深度在12.90mm处，即“选择孔腔”倾斜后垂直于“拉伸到孔腔”连接； <img src="'+_+'" alt="图片"> 5、在“尺寸”界面中，可修改“选择孔腔”的末端直径及末端深度值，一般末端直径为当前选择孔腔的底孔直径值，末端深度默认为当前选择孔腔的底孔深度值，但由于“拉伸到孔腔”的选择与定义，将自动调整末端深度值； <img src="'+s+'" alt="图片"> 6、在“角度”界面中，可修改“选择孔腔”的α、β角度值 <img src="'+m+'" alt="图片"> α角——指在选择孔腔放置面上的旋转角度，默认为90°； β角——指与选择孔腔放置面法向的夹角，默认为90°； <img src="'+h+'" alt="图片"><img src="'+p+'" alt="图片"><strong>Tips：斜孔功能，在小油道的连接与角度孔的定义上，使用较方便快捷。</strong></p>',7),l=[g];function f(u,x){return e(),r("div",null,l)}const y=t(d,[["render",f],["__file","leancavity.html.vue"]]);export{y as default};
