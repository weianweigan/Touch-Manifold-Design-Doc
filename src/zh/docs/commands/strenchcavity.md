---
title: 3.11 拉伸
icon: markdown
category:
  - Help
tag:
  - Help
---



## 3-11. 拉伸
### 3-11-1. 功能描述
主要实现对已有孔腔进行底孔直径、深度的修改，可拉伸孔腔的底孔深度至参考孔腔中心或过孔腔。
适用环境：零件环境；
### 3-11-2. 功能界面
![图片](/images/28559352.png)
### 3-11-3. 操作方法
1、TouchMDesign > 拉伸，弹出如图所示的界面；
2、在“选择孔腔”选择框中，选择要拉伸的孔腔，在模型视图区域直接选择单个孔腔，选择后该孔腔将高亮且有深度方向拉伸箭头；
![图片](/images/24984795.png)
3、可界面中直接修改孔腔底孔深度，也可直接拖拽深度箭头的长度以调整孔腔深度；
4、在“拉伸到孔腔”选择框中，可直接设置孔腔末端拉伸到某一孔腔的中心处或过中心处，具体方式如下：
    4.1 未选择“拉伸到孔腔”，则选择孔腔的尺寸直接在“尺寸”界面中修改其直径或深度即可；
    4.2 仅选择“拉伸到孔腔”且未勾选“拉伸过孔腔”，则在选择孔腔的深度方向上，孔腔末端拉伸至孔腔的中心处
![图片](/images/28559409.png)![图片](/images/24984836.png)
    4.3 选择“拉伸到孔腔”且勾选“拉伸过孔腔”，则在选择孔腔的深度方向上，孔腔末端拉伸过孔腔中心至孔腔轮廓边线上；
![图片](/images/28559446.png)![图片](/images/24984843.png)
5、在“尺寸”界面中，可修改“选择孔腔”的末端直径及末端深度值，一般末端直径为当前选择孔腔的底孔直径值，末端深度默认为当前选择孔腔的底孔深度值，但由于“拉伸到孔腔”的选择与定义，将自动调整末端深度值；
![图片](/images/24984888.png)