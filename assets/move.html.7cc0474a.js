import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as r,e as t}from"./app.8231be09.js";const s="/images/24984959.png",i="/images/24985038.png",n="/images/28559881.png",o="/images/24985059.png",c={},_=t('<h2 id="_3-13-移动" tabindex="-1"><a class="header-anchor" href="#_3-13-移动" aria-hidden="true">#</a> 3-13. 移动</h2><h3 id="_3-13-1-功能描述" tabindex="-1"><a class="header-anchor" href="#_3-13-1-功能描述" aria-hidden="true">#</a> 3-13-1. 功能描述</h3><p>主要实现选择已有孔腔进行移动调整，且可以选择附带孔腔随移动孔腔移动或调整深度以保持连接状态 适用环境：零件环境；</p><h3 id="_3-13-2-功能界面" tabindex="-1"><a class="header-anchor" href="#_3-13-2-功能界面" aria-hidden="true">#</a> 3-13-2. 功能界面</h3><p><img src="'+s+'" alt="图片"></p><h3 id="_3-13-3-操作方法" tabindex="-1"><a class="header-anchor" href="#_3-13-3-操作方法" aria-hidden="true">#</a> 3-13-3. 操作方法</h3><p>1、TouchMDesign &gt;移动，将弹出如图所示的界面； 2、在“选择孔腔”的选择框中，选择要移动的孔腔，可多选，也适用于重新定义孔腔的定位参考； 3、在视图区域，直接拖动方向坐标系箭头调整孔腔位置，或者在“位置”页重新定义位置参考，操作方式同“插入孔腔”时的位置定义操作； <img src="'+i+'" alt="图片"> 4、在“附带孔腔”的选择框中，选择与移动孔腔相连通的孔腔（可多选），以便在移动孔腔位置调整后，软件将自动修正吸附孔腔的位置和深度，以保持孔腔原先的连通状态； <img src="'+n+'" alt="图片"> 5、打勾后，将自动调整移动孔腔和吸附孔腔的位置及吸附孔腔的深度 <img src="'+o+'" alt="图片"><strong>Tips：吸附孔腔一般选择与移动孔腔相连通且有深度变化的孔腔，但可以将所有与移动孔腔相连通的孔腔定义为吸附孔腔；</strong></p>',7),h=[_];function d(m,p){return a(),r("div",null,h)}const f=e(c,[["render",d],["__file","move.html.vue"]]);export{f as default};