---

title: Sublime—text 4的设置备份
date: 2022-02-21
cover: https://kilzo.coding.net/p/Kilzo/d/Blog-data/git/raw/master/Picture-md/picture_10_.webp
categories:
 - Sublime-text 4
tags:
 - Sublime-text 4
---

# Sublime-text 4的设置备份

:::tip

这里只详细写如何配置，方便以后重装的时候快速配置。简要写写配置过程中遇到的问题。

:::

## 下载破解和安装简中

[Sublime Text - Text Editing, Done Right](https://www.sublimetext.com/)

找到该版本`4126`:安装

:::danger

因为每个版本解析出来的码可能不一样，所以指定4126版本安装再更新。

::: 

接着安装完成后(`路径随你设置`)，使用接下来的设置去破解lisences。

### 破解lisences

1、打开浏览器进入网站https://hexed.it

2、打开`sublime text 4`安装目录选择文件`sublime_text.exe`

3、搜索`80 78 05 00 0f 94 c1`更改为`c6 40 05 01 48 85 c9`(第一个匹配到的)

4、保存文件命名为`sublime_text.exe`并替换原文件

:::tip

替换前建议备份,记得关闭`sublime`进行替换。

:::

[破解原文链接](https://blog.csdn.net/sinat_34706139/article/details/121912429)

之后打开文件就已经注册完毕可以使用了。

### 安装简中

首先安装`Package Control`,键盘按下` ctrl + shift + p `,在中央弹出的框中输入`Install Package Control`,并点击。

安装后成功后会出现

![Sublime Text怎么设置成中文简体](https://atts.w3cschool.cn/attachments/image/20200904/1599212780590399.jpg)

然后在点击顶部窗口的`Preferences`下的`Package Control`.

在弹出的搜索框中搜索`Chinese`点击下方列表中的`ChineseLocaloztions`.

安装完成后会自动转化为中文。建议重新打开`Sublime Text`.

---

## 配置C++环境(2种)

前置任务，使用`TDM-GCC环境`.[Download | tdm-gcc (jmeubank.github.io)](https://jmeubank.github.io/tdm-gcc/download/)这个安装时候一直next就好。不用多余设置。

[Sublime C/C++配置指南 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/77666245)

或者是`MinGW`，安装方法很多，自行百度。推荐安装`CodeBrock..`叫什么来着。这个自带`MinGW`.安装完之后还有各种设置，自行百度。

### 第一种

这里我采用的是`TDM-GCC`的设置。

在顶部菜单栏种`工具-编译系统-新建编译系统`，将以下代码替换

```Json
{
	"path": "C:\\TDM-GCC-64\\bin",
	"cmd": "g++ $file -o $file_base_name.exe",
	"file_regex": "^(..[^:]*):([0-9]+):?([0-9]+)?:? (.*)$",
	"working_dir": "$file_path",
	"selector": "source.c, source.c++",
	"shell": true,
	"variants":
    [
        {
            "name": "Powder-AC",
            "cmd": "g++ -Wall -O3 -std=c++11 ${file} -o ${file_path}/${file_base_name}&&{file_path}/${file_base_name} & pause",
        },
        {
        	"name": "Powder AC",
        	"cmd": "g++ -Wall -std=c++11 \"${file}\" -o \"${file_base_name}\" && start cmd /c \"\"${file_path}/${file_base_name}\" & pause\""
        },

    ]
}
```

保存,命名你自己定，然后在`工具-编译系统`中选择你刚才命名的名字。

此时，c++程序就能够运行了。不过弹出窗口输入输出慢很多，所以才有接下来的第二种。

> 吐槽一下，国人写的博客文章我没有见到任何一个用这种方法的。基本都是弹窗。
>
> 第二种是我通过外国网站搜集的。其中的艰辛我也不说了。

### 第二种

[How to Run C/C++ in Sublime Text? | by Habib Rahman | Geek Culture | Medium](https://medium.com/geekculture/how-to-run-c-c-in-sublime-text-c31eca47f26c)

通过`Sublime`分出3个窗口分别是代码窗口，输入窗口，输出窗口。

按下`Alt + ctrl + 3`分出三个窗口，然后在代码文件所在的目录中创建`in.txt`作为输入窗口,`out.txt`作为输出窗口。

在另外两个窗口中分别打开这两个文件。以后就可以在`in.txt`中输入，而`out.txt`作为输出显示。

完全不用在代码中写读取文件，写入文件的代码。十分方便，也避免了无法在`Sublime`自带的终端中无法输入的情况。

:::warning

Terminal 插件我也找过，只找到了在下方显示，没有找到像`vscode`的`code-runner`那样方便的插件和集成。

:::

:::danger

每次创建的代码文件旁边都要有`in.txt`,`out.txt`，通一目录下可以共用。

:::

还是于上一种一样的添加方式。

在顶部菜单栏种`工具-编译系统-新建编译系统`，将以下代码替换

```Json
{
    "cmd": ["g++.exe", "-std=c++17", "${file}",
            "-o", "${file_base_name}.exe",
            "&&", "${file_base_name}.exe<in.txt>out.txt"],
    "shell":true,
    "working_dir":"$file_path",
    "selector":"source.cpp"
}
```

保存,命名你自己定，然后在`工具-编译系统`中选择你刚才命名的名字。

参考：[Setting up Sublime Text for C++ Competitive Programming Environment - GeeksforGeeks](https://www.geeksforgeeks.org/setting-up-sublime-text-for-cpp-competitive-programming-environment/)

---

至此,两种方式的完成了。当你要调用不同的操作时，请重新选择对应的名称。

## 插件设置

### 设置前先自定义主题

[Apple Pips (dark) • TmTheme Editor ](http://tmtheme-editor.herokuapp.com/#!/editor/theme)

这是个在线自定义网站，定义完成后将他放在与上一步中保存的地方。你可以通过再次新建编译系统找到。

然后在`sublime`首选项中配置方案和主题中找到。

### 配置插件

通过`preference-->Package Control`的窗口小字`install package`

然后搜索插件安装。

#### ConvertToUTF8

功能：文件转码成utf-8
简介：通过本插件，您可以编辑并保存目前编码不被 Sublime Text 支持的文件，特别是中日韩用户使用的 GB2312，GBK，BIG5，EUC-KR，EUC-JP ，ANSI等。ConvertToUTF8 同时支持 Sublime Text 2 和 3。
使用：安装插件后自动转换为utf-8格式

---

#### DocBlockr

功能：生成优美注释
简介：标准的注释，包括函数名、参数、返回值等，并以多行显示，手动写比较麻烦
使用：输入/*、/**然后回车，还有很多用法，
请参照https://sublime.wbond.net/packages/DocBlockr

---

#### Bracket Highlighter

功能：代码匹配
简介：可匹配[], (), {}, “”, ”, `<tag></tag>`，高亮标记，便于查看起始和结束标记
使用：点击对应代码即可

通过`package-setting->Bracket Highlighter->bracket setting`

在右边替换为如下代码

```Json
{
    // 这个是在成对的括号左侧显示一条竖线，表明开闭括号的范围与位置，如果不需要把true改为false
    "content_highlight_bar": true,
    // 下面不同括号的显示方式，默认是下划线，这里改成了高亮
    "bracket_styles": {
        "default": {
            "icon": "dot",
            "color": "region.yellowish brackethighlighter.default",
            "style": "highlight"
        },
        "unmatched": {
            "icon": "question",
            "color": "region.redish",
            "style": "outline"
        },
        "curly": {
            "icon": "curly_bracket",
            "color": "region.purplish"
            // "style": "underline"
        },
        "round": {
            "icon": "round_bracket",
            "color": "region.yellowish"
            // "style": "underline"
        },
        "square": {
            "icon": "square_bracket",
            "color": "region.bluish"
            // "style": "underline"
        },
        "angle": {
            "icon": "angle_bracket",
            "color": "region.orangish"
            // "style": "underline"
        },
        "tag": {
            "icon": "tag",
            "color": "region.orangish"
            // "style": "underline"
        },
        "c_define": {
            "icon": "hash",
            "color": "region.yellowish"
            // "style": "underline"
        },
        "single_quote": {
            "icon": "single_quote",
            "color": "region.greenish"
            // "style": "underline"
        },
        "double_quote": {
            "icon": "double_quote",
            "color": "region.greenish"
            // "style": "underline"
        },
        "regex": {
            "icon": "star",
            "color": "region.greenish"
            // "style": "underline"
        }
    },
    // 忽视限制因素，但是当代码较多的时候可能会影响性能
    "ignore_threshold": true,
}
```



---

#### SublimeLinter

SublimeLinter是少数几个能在sublime text 3工作的代码检查插件，SublimeLinter支持JavaScript、CSS、HTML、Java、PHP、Python、Ruby等十多种开发语言，但前提是需要配置相应语言的环境，要检查JavaScript代码需要安装node.js，检查PHP代码需要安装PHP并配置环境等。SublimeLinter可以及时提示编写代码中存在的不规范和错误的写法，并培养我们良好的编码习惯和风格。

---

#### Terminals

[为Sublime Text添加命令行cmd并设置为底部面板 | 张立志中文博客 (aspirantzhang.com)](https://www.aspirantzhang.com/learning/sublime-text-cmd.html)

如上所做就行了。

还有一些自行百度选择有用的。

## 完

