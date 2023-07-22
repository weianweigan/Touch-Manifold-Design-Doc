---
title: 用户手册
icon: markdown
order: 2
category:
  - Help
tag:
  - Help
---

## 3-5. 拉伸块
### 3-5-1. 功能描述
主要实现对已设计阀块尺寸的调整，包括该块尺寸调整所关联的孔腔深度尺寸的调整。
适用环境：零件环境；
### 3-5-2. 功能界面
![图片](/images/28450145.png)
### 3-5-3. 操作方法
1、TouchMDesign > 拉伸块，拉伸块对话框显示(如上图)
2、在“选择面”的选择框中，选择要拉伸的阀块表面；
![图片](/images/28450163.png)
3、“尺寸”中显示的是当前阀块所需面的拉伸长度，手动输入块所需的尺寸；
**尺寸值支持基本数学运算**
![图片](/images/28450193.png)
4、完成数据输入后，点击√；
5、阀块尺寸在所需面上自动修改，且所选面上的孔腔底孔深度也随之变化；
![图片](/images/28450204.png)

## 3-6. 分层
### 3-6-1. 功能描述
主要创建分层的参考线，作为孔腔定位的参考。
适用环境：零件环境；
### 3-6-2. 功能界面
![图片](/images/24947277.png)
### 3-6-3. 操作方法
1、TouchMDesign > 分层，弹出对应分层界面；
2、选择分层轮廓线的参考平面，如阀块的表面；
![图片](/images/24947326.png)
3、定义分层的层数，每层层高初始化将均匀分布；
![图片](/images/24947322.png)
4、修改调整各层的层高，以符合实际设计需要；
![图片](/images/24947325.png)

## 3-7. 底板孔
### 3-7-1. 功能描述
主要实现快速创建阀块底板安装孔。
适用环境：零件环境；
### 3-7-2. 功能界面
![图片](/images/28458436.png)
### 3-7-3. 操作方法
1、TouchMDesign > 底板孔，，弹出对应界面；
2、选择要创建底板孔的放置面，一般为阀块下表面；
3、选择底板孔的规格，该规格数据为孔腔库配置的标准螺栓孔数据，可修改；
4、选择安装孔的数量，有两种数量定义方式：
4.1 线性阵列的数量布局，可设置X、Y方向的安装孔数量，均布排列；
4.2 对角方位的数量布局，仅2个安装孔，可翻转对角开孔位置；
备注：底板安装孔样式默认数量为线性阵列2x2；
![图片](/images/28458463.png)
6、设置安装孔的到边距离值，默认值是根据配置表中定义的到边距离；
![图片](/images/28458469.png)
7、安装孔创建后的效果图
![图片](/images/28458401.png)

## 3-8. 吊环孔
### 3-8-1. 功能描述
主要实现快速创建吊环的安装孔。
适用环境：零件环境；
### 3-8-2. 功能界面
![图片](/images/28458426.png)
### 3-8-3. 操作方法
1、TouchMDesign > 吊环孔，弹出对应界面；
2、选择要创建吊环孔的放置面，一般为阀块上表面；
3、选择安装孔的规格，该规格数据为孔腔库配置的标准吊环孔数据，可修改；
4、选择安装孔的数量，有两种数量定义方式：
4.1 线性阵列的数量布局，可设置X、Y方向的安装孔数量，均布排列；
4.2 对角方位的数量布局，仅2个安装孔，可翻转对角开孔位置；
备注：吊环安装孔样式默认数量为对角开孔；
![图片](/images/28458477.png)
6、设置吊环孔的到边距离值，默认值是根据配置表中定义的到边距离；
![图片](/images/28458484.png)
7、吊环孔创建后的效果图
![图片](/images/24947454.png)

## 3-9. 文字
### 3-9-1. 功能描述
主要实现快速、连续的为每个孔腔定义文字。
适用环境：零件环境；
### 3-9-2. 功能界面
![图片](/images/24947475.png)
### 3-9-3. 操作方法
1、TouchMDesign > 文字，弹出对应界面；
2、选择要定义文字的孔腔（非必要操作，可以不选）；
3、选择文字的放置面，若选择了孔腔，则文字的放置面默认是孔腔的放置面，当然可以替换文字的放置面，若未选择孔腔，则文字的放置面由用户自行选择，文字位置将位于用户点击的位置创建；
4、选择或定义文字文本内容，若未选择孔腔，则默认的可选文字有：P\T\A\B\X\Y，若选择了孔腔，则文字文本内容自动显示为所选孔腔名称，当然可以自行编辑定义文字文本内容；
![图片](/images/24983678.png)
5、修改文字的文本格式，如：字体、字形、大小、效果；
![图片](/images/24983694.png)
6、修改文字自身放置角度，即文字位置不变，文字绕自身中心旋转的角度，可直接定义旋转角度值，也可以单击旋转按钮，每单击一次，角度值增加90°；
![图片](/images/24983703.png)
7、修改文字位置，有两种位置坐标定义方式：一是直角坐标，二是极坐标，默认勾选“极坐标”；
若未选择孔腔，则文字位置默认位于鼠标点击的位置，且坐标值是相对放置面原点的坐标；
若选择了孔腔，则文字位置默认位于相对于孔腔中心的X轴方向上，
![图片](/images/24983733.png)![图片](/images/24983732.png)
8、单击“重置”后，将重置当前文字定义界面，需要用户重新定义选择；
9、单击“应用”后，将所定义的文字在阀块表面创建生成文字特征；
![图片](/images/24983740.png)
**Tips：当前文字界面不自动关闭，可连续定义文字，单击“应用”即可生成文字。**

## 3-10. 编辑
### 3-10-1. 功能描述
主要实现对孔腔的尺寸进行编辑调整，包括可以对一组螺栓孔的尺寸一次性进行调整。
适用环境：零件环境；
### 3-10-2. 功能界面
![图片](/images/28458579.png)
### 3-10-3. 操作方法
1、TouchMDesign > 编辑，弹出对应界面；
2、选择要编辑其尺寸的孔腔；
3、根据所选孔腔类型不同，尺寸页显示的有所区别：若选择了螺栓孔，则默认修改该多孔中相同规格的螺栓孔尺寸，若选择的非螺栓孔，则仅对当前所选孔腔的尺寸进行修改；
![图片](/images/28458614.png)![图片](/images/28458617.png)
4、手动修改孔腔的尺寸后，点击√；
5、所选孔腔的尺寸将随之调整。

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

## 3-12. 斜孔
### 3-12-1. 功能描述
主要实现对已有孔腔进行底孔直径、深度的修改，以及孔腔倾斜角度的调整，可根据选择自动修改孔腔深度和角度。
适用环境：零件环境；
### 3-12-2. 功能界面
![图片](/images/28559527.png)
### 3-12-3. 操作方法
1、TouchMDesign > 斜孔，弹出如图所示的界面；
2、在“选择孔腔”选择框中，选择要倾角的孔腔，模型视图区域直接选择单个孔腔，选择后该孔腔将高亮且有角度旋转盘以及深度方向拉伸箭头；
![图片](/images/24984795.png)
3、可直接拖拽深度箭头的长度以调整孔腔深度，可直接拖拽旋转盘以调节孔腔的倾角角度；
4、在“拉伸到孔腔”选择框中，可直接设置孔腔末端拉伸到某一孔腔的中心处，或者倾角拉伸至某端口位置，具体方式如下：
4.1 仅选择“拉伸到孔腔”，未选择孔腔的端口号，则同拉伸孔腔功能，在选择孔腔的深度方向上，孔腔末端拉伸至参考孔腔的中心处
![图片](/images/28559578.png)
4.2 选择“拉伸到孔腔”后，且选择了端口号，则选择孔腔将以最小β角倾斜至“拉伸到孔腔”的端口中心处，“选择孔腔”的末端连接位置可在“拉伸到孔腔”的端口区间任意调整，默认为最短距离连接；
![图片](/images/28559604.png)
如上图所示，“选择孔腔”钻孔将以一定角度倾斜与“拉伸到孔腔”所选端口连接，且拉伸至端口中心处，另外“端口位置”可调整区间为0-30之间，钻孔的β角最小连接位置为端口深度在12.90mm处，即“选择孔腔”倾斜后垂直于“拉伸到孔腔”连接；
![图片](/images/24984876.png)
5、在“尺寸”界面中，可修改“选择孔腔”的末端直径及末端深度值，一般末端直径为当前选择孔腔的底孔直径值，末端深度默认为当前选择孔腔的底孔深度值，但由于“拉伸到孔腔”的选择与定义，将自动调整末端深度值；
![图片](/images/24984888.png)
6、在“角度”界面中，可修改“选择孔腔”的α、β角度值
![图片](/images/24984901.png)
α角——指在选择孔腔放置面上的旋转角度，默认为90°；
β角——指与选择孔腔放置面法向的夹角，默认为90°；
![图片](/images/24984913.png)
![图片](/images/24984911.png)
**Tips：斜孔功能，在小油道的连接与角度孔的定义上，使用较方便快捷。**

## 3-13. 移动
### 3-13-1. 功能描述
主要实现选择已有孔腔进行移动调整，且可以选择附带孔腔随移动孔腔移动或调整深度以保持连接状态
适用环境：零件环境；
### 3-13-2. 功能界面
![图片](/images/24984959.png)
### 3-13-3. 操作方法
1、TouchMDesign >移动，将弹出如图所示的界面；
2、在“选择孔腔”的选择框中，选择要移动的孔腔，可多选，也适用于重新定义孔腔的定位参考；
3、在视图区域，直接拖动方向坐标系箭头调整孔腔位置，或者在“位置”页重新定义位置参考，操作方式同“插入孔腔”时的位置定义操作；
![图片](/images/24985038.png)
4、在“附带孔腔”的选择框中，选择与移动孔腔相连通的孔腔（可多选），以便在移动孔腔位置调整后，软件将自动修正吸附孔腔的位置和深度，以保持孔腔原先的连通状态；
![图片](/images/28559881.png)
5、打勾后，将自动调整移动孔腔和吸附孔腔的位置及吸附孔腔的深度
![图片](/images/24985059.png)
**Tips：吸附孔腔一般选择与移动孔腔相连通且有深度变化的孔腔，但可以将所有与移动孔腔相连通的孔腔定义为吸附孔腔；**

## 3-14. 对齐
### 3-14-1. 功能描述
主要实现选择已有孔腔与其它孔腔快速对齐的功能，对齐方式有3种：水平对齐、垂直对齐和完全对齐或同心；
适用环境：零件环境；
### 3-14-2. 功能界面
![图片](/images/24985183.png)
### 3-14-3. 操作方法
1、TouchMDesign >对齐，将弹出如图所示的界面；
2、在“选择孔腔”的选择框中，选择要移动对齐的孔腔；
3、在“对齐到孔腔”的选择框中，选择要对齐的参考孔腔；
4、软件将根据“选择孔腔”与“对齐到孔腔”之间的空间关系，自动推荐排列方式；
4.1 若两孔腔相互垂直，则只会存在一种对齐方式，水平对齐或者垂直对齐，软件将自动选择；
![图片](/images/24985195.png)
4.2 若两孔腔相互平行，则会存在3种对齐方式，水平对齐、垂直对齐和完全对齐，软件将默认选择完全对齐（同心）的方式；
![图片](/images/24985202.png)
5、对齐后连接孔腔，若勾选，则对齐后将自动拉伸“选择孔腔”的深度至“对齐到孔腔”的中心处，若未勾选，则仅将“选择孔腔”移动至“对齐到孔腔”的对齐位置，不改变“选择孔腔”的深度。

## 3-15. 旋转
### 3-15-1. 功能描述
主要针对多孔特征进行角度旋转的操作，默认90°；
适用环境：零件环境；
### 3-15-2. 功能界面
![图片](/images/24985853.png)
### 3-15-3. 操作方法
1、TouchMDesign >旋转，将弹出如图所示的界面；
2、在“旋转孔腔”的选择框中，选择要旋转角度的多孔特征，可多选；
3、在“角度”页中，设置要旋转的角度，默认旋转90°，可单击“+90°”按钮，则角度值增加90°，也可直接修改角度值；
![图片](/images/24985856.png)
**Tips：角度正值为逆时针旋转，负值为顺时针旋转。**

## 3-16. 快速旋转
### 3-16-1. 功能描述
主要针对多孔特征进行旋转角度的操作，但无界面，每单击一次逆时针旋转90°；
适用环境：零件环境；
### 3-16-2. 功能界面
无
### 3-16-3. 操作方法
1、在模型视图区域，选择一个要旋转的多孔特征；
2、TouchMDesign >单击“快速旋转”命令，每单击一次，被选择的多孔将逆时针旋转90°；
**Tips：选择要旋转的多孔特征后，可多次单击“快速旋转”命令旋转孔腔，每次旋转90°。**

## 3-17. 删除孔腔
### 3-17-1. 功能描述
主要针对自定义孔腔特征的删除功能；
适用环境：零件环境；
### 3-17-2. 功能界面
![图片](/images/24985861.png)
![图片](/images/24985862.png)
### 3-17-3. 操作方法
**删除孔腔，有两种操作方式：**
1、TouchMDesign >单击“删除孔腔”命令后，在“选择孔腔”的选择框中，选择要被删除的孔腔，可多选；
也可以先选择要被删除的孔腔后，单击“删除孔腔”命令；
![图片](/images/24985866.png)
2、在模型视图区域，选择要被删除的孔腔特征，可在SW关联工具栏的快速菜单中选择“删除孔腔”命令；
![图片](/images/24985888.png)

## 3-18. 连接孔腔
### 3-18-1. 功能描述
主要实现快速所选孔腔移动后连接到另一个孔腔，包括终端到终端、终端到端口中心；
**备注：连接孔腔功能中，选择孔腔的位置和底孔深度都会自动调整，连接到孔腔的位置和深度都不变**
适用环境：零件环境；
### 3-18-2. 功能界面
![图片](/images/28651357.png)
### 3-18-3. 操作方法
1、TouchMDesign >连接孔腔，将弹出如图所示的界面；
2、在“选择孔腔”的选择框中，选择要连接的孔腔；
![图片](/images/28651395.png)
3、在“连接到孔腔”的选择框中，选择要被连接的孔腔；
![图片](/images/28651391.png)
4、在“选择端口”中，选择被连接孔腔的端口号，默认端口号为1或-1，对应“连接到孔腔”的底孔末端处，若选择了非1或-1，则将连接到孔腔对应端口的中心处(非末端处)；
4.1 选择端口1或-1，将移动“选择孔腔”至“连接到孔腔”的底孔末端处，并可以设置孔腔的“连接方式”以及“对齐方式”；
![图片](/images/28651423.png)
4.2 选择端口非1或-1，如2，将移动“选择孔腔”至“连接到孔腔”所选端口区域的中心处，并仅可设置孔腔的“对齐方式”；
![图片](/images/28651439.png)
5、连接方式的选择有3种：
5.1 “选择孔腔”末端过“连接到孔腔”，且至直径轮廓线处；
5.2  选择孔腔”与“连接到孔腔”末端正交，分别至各自中心处；
5.3  “连接到孔腔”末端过“选择孔腔”，且至直径轮廓线处；
![图片](/images/24986045.png)
6、对齐方式的选择有2种：
6.1  选择孔腔”与“连接到孔腔”的中心轴对齐；
6.2  选择孔腔”相对“连接到孔腔”的中心轴偏移一定距离，默认偏移距离为“连接到孔腔”所选端口的半径值；
可直接设置“中心偏移距离”值，可单击换向按钮，切换中心偏移的方向；
![图片](/images/24986055.png)

## 3-19. 交互拉伸
### 3-19-1. 功能描述
主要实现所选两个孔腔相互参考，底孔深度拉伸至各自的中心轴位置；
适用环境：零件环境；
**备注：交互拉伸功能中，所选两个孔腔的位置都不变，仅深度相互参考到孔腔中心**
### 3-19-2. 功能界面
![图片](/images/28651535.png)
### 3-19-3. 操作方法
1、TouchMDesign >交互拉伸，将弹出如图所示的界面；
2、在“选择孔腔1”的选择框中，选择要连接的孔腔；
3、在“选择孔腔2”的选择框中，选择要连接的孔腔；
4、连接方式的选择有3种：
4.1 “选择孔腔”末端过“连接到孔腔”，且至直径轮廓线处；
4.2  选择孔腔”与“连接到孔腔”末端正交，分别至各自中心处；
4.3  “连接到孔腔”末端过“选择孔腔”，且至直径轮廓线处；
![图片](/images/24986045.png)

## 3-20. 测量间隙
### 3-20-1. 功能描述
主要实现快速测量两个孔腔直接的最小间隙值；
适用环境：零件环境；
### 3-20-2. 功能界面
![图片](/images/24986065.png)
### 3-20-3. 操作方法
1、TouchMDesign >测量间隙，将弹出如图所示的界面；
2、在“选择孔腔”的选择框中，选择要测量的两个孔腔；
3、在“结果”栏中将显示最小距离值，且在模型视图区域也会标记出最小距离的位置和值；
**Tips：可连续选择测量，操作同SW自身的测量功能。**

## 3-21. 间隙检查
### 3-21-1. 功能描述
主要实现检查阀块中所有孔腔之间的间隙，并显示出不符合最小间隙值的位置；
适用环境：零件环境；
### 3-21-2. 功能界面
![图片](/images/24986242.png)
### 3-21-3. 操作方法
1、TouchMDesign >间隙检查，将弹出如图所示的界面；
2、在“最小间隙”栏中，设置最小间隙值；
备注：默认的最小间隙值，可在“设置”>“通用”页中预定义；
![图片](/images/28651626.png)
3、单击“检查”命令，软件将自动检查所有孔腔之间的距离，并将小于最小间隙值的结果列出来；
4、从结果列表中，可查看孔腔间的最小间隙值，也可从视图区域查看最小间隙的位置；
![图片](/images/28651636.png)

## 3-22. 连通性检查
### 3-22-1. 功能描述
主要实现检查阀块中所有孔腔之间的连通性，可检查出相互连通的油道，也可检查出未连通的端口和孔腔，并且可以直接定义连通孔腔的通道颜色；
适用环境：零件环境；
### 3-22-2. 功能界面
![图片](/images/28651663.png)
### 3-22-3. 操作方法
1、TouchMDesign >连通性检查，将弹出如图所示的界面；
2、单击“检查”命令，软件将自动检查所有孔腔的连通性，以及未连通的端口和孔腔；
3、在“通道”栏中，将显示所有相互连通的端口通道
备注：端口通道——指孔腔端口相互连通的；
4、选择“端口通道”节点后，模型视图区将高亮显示所选通道
5、可以单击通道后面的“颜色”定义按钮，将弹出颜色定义界面，选择颜色后，模型视图中对应的通道将被定义上对应的颜色；
备注：端口可用颜色的默认设置，在“设置”>“通道颜色"页定义默认的可选颜色。
![图片](/images/28651690.png)
6、可单击通道后面的“X”(取消)，可以清除所选通道的颜色；
7、在“未连通端口”栏，查看是否存在未连通的孔腔端口；
![图片](/images/28651698.png)
8、在“未连通孔腔”栏，查看是否存在未连通的孔腔，若无需该孔腔，则可压缩该孔腔；
![图片](/images/28651701.png)

## 3-23. 发布
### 3-23-1. 功能描述
主要实现阀块零件或装配体外发时，将自动隐藏内部油道的功能。
适用环境：零件环境、装配体环境；
### 3-23-2. 功能界面
![图片](/images/25007943.png)
![图片](/images/25007974.png)
### 3-23-3. 操作方法
1、TouchMDesign >发布，弹出如图所示界面；
2、设置阀块体的缩小量，即填充体偏移距离
备注：默认的缩小量，可在“设置”>“通用”页中预定义；
![图片](/images/25008009.png)
3、根据需要勾选“预览”，若勾选，则在模型视图区域可以显示填充体的大小；
4、单击“确定”后，软件将自动填充内部油道，并输出一个零件文件；
![图片](/images/25008060.png)
![图片](/images/25008050.png)

## 3-24. 工程图
### 3-24-1. 功能描述
主要实现阀块零件或装配体的快速出图。
适用环境：零件环境、装配体环境；
### 3-24-2. 功能界面
![图片](/images/25007737.png)
### 3-24-3. 操作方法
1、在零件环境或装配体环境，单击“工程图”命令；
2、若同目录下存在同名的工程图，则提示用户是否直接打开图纸；
![图片](/images/25007780.png)
3、若同目录下不存在同名的工程图，则弹出“创建工程图”界面；
![图片](/images/25007737.png)
4、选择出图的图纸模板，单击“确定”后，将自动输出图纸并标注尺寸
![图片](/images/25007882.png)
**Tips：可以双击选择工程图模板后自动出图**

## 3-22. 定义约束
### 3-22-1. 功能描述
主要为装配元件定义配合基准，以便装配时自动配合约束；
适用环境：零件环境、装配体环境；
### 3-22-2. 功能界面
![图片](/images/25008132.png)
### 3-22-3. 操作方法
1、打开一个装配元件（零件或装配体）后，单击“定义约束”命令，将弹出如图所示界面；
2、在模型视图区域，分别选择安装面、中心轴、定位轴（可选）的参考面；
安装面——指与阀块表面重合配合的平面，必选；
中心轴——指与单孔或多孔中的第一个孔同心配合的柱面，必选；
定位轴——指与多孔中的第二个孔同心配合的柱面，多孔必选，单孔不选；
**Tips：定义约束时，特别是多孔孔腔，需要参照对应孔腔的顺序定义**
## 3-23. 定义装配
### 3-23-1. 功能描述
主要实现为阀块快速装配元件；
适用环境：零件环境、装配体环境；
### 3-23-2. 功能界面
![图片](/images/25008433.png)
### 3-23-3. 操作方法
1、单击“定义装配”命令后，若同目录下存在同名装配体，则提示是否打开，若无，则提示将创建一个新装配体文件，包括阀块零件，并弹出“定义装配”界面；
2、在装配列表中，选择某一孔腔后，软件将根据后台配置，在零部件列表中显示与所选孔腔对应的元件模型；
**当多个孔腔将装配同一个模型文件时，可多选孔腔**
![图片](/images/25025880.png)
3、依次选择孔腔对应的模型文件，若选择孔腔后，零部件列表未显示，则说明该孔腔未配置对应的模型，可以通过单击零部件列表页的“元件库”自行从本地电脑中选择要装配的模型文件；
**备注：无需为每个孔腔定义装配元件，可根据实际需求选择装配，即软件只装配已定义装配元件的**
![图片](/images/25026015.png)
4、单击“检查基准”命令，软件将自动检查模型是否已定义了装配基准，即零部件的“定义约束”；
若未找到对应模型文件或者有对应模型文件但未定义约束的，则基准单元格显示“-”；
若有对应模型文件且已定义约束的，则基准单元格显示“+”；
**备注：检查基准无法检查出元件装配基准是否正确，只能检查是否有定义了装配基准**
![图片](/images/25026062.png)
5、装配元件定义完成后，单击“装配”命令，软件将自动装配元件；
若未装配该孔腔元件，则状态单元格显示“×”；
若已装配该孔腔元件，则状态单元格显示“√”；
**备注：装配状态只是判断当前装配体中是否已插入该装配元件**
![图片](/images/25026120.png)
## 3-24. 孔腔标注
### 3-24-1. 功能描述
主要实现在阀块工程图中，为单个孔腔创建孔腔标注代号的功能，适用于已出图后新增的孔腔标注；
适用环境：工程图环境；
### 3-24-2. 功能界面
无界面，操作方式同SW的孔标注功能；
### 3-24-3. 操作方法
1、单击菜单栏中的“孔腔标注”命令，此时该命令处于选中状态，即灰底凹陷状态；
![图片](/images/25026449.png)
2、在工程图视图上选择某孔腔的圆弧，软件将自动获取该孔腔的数据，并自动标注孔腔代号；
3、再次单击“孔腔标注”命令，将退出标注状态，或者直接按键盘Esc键退出命令；
## 3-25. 加工表
### 3-25-1. 功能描述
主要实现在阀块工程图中，输出阀块的加工表单；
适用环境：工程图环境；
### 3-25-2. 功能界面
无界面，操作方式同SW的孔标注功能；
### 3-25-3. 操作方法
1、单击菜单栏中的“孔腔标注”命令，软件将自动输出加工表；
2、每个视图孔腔附近会自动标注上孔号，以便与加工表对应识别；
![图片](/images/25026987.png)
3、将加工表拖拽至合适的位置，若表格数据过多，可通过SW自身表格的功能进行分割；
![图片](/images/25026950.png)
## 3-26. 设置
### 3-26-1. 功能描述
主要实现对阀块软件的基本设置内容，可以设置：模板位置（SW模板、孔腔库、零部件库）、零件与工程图的单位精度（位置、深度）、间隙检查的最小壁厚默认值、发布阀块的缩包深度默认值，以及插入孔腔时是否显示螺栓孔尺寸等等；
适用环境：零件环境、装配体环境、工程图环境；
### 3-25-2. 功能界面
![图片](/images/25027025.png)
### 3-25-3. 操作方法

