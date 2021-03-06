## 关键字：JDK，JRE，JVM
##### 摘要：JDK是 Java 语言的软件开发工具包(SDK)。在JDK的安装目录下有一个jre目录，里面有两个文件夹bin和lib，在这里可以认为bin里的就是jvm，lib中则是jvm工作所需要的类库，而jvm和 lib合起来就称为jre。

### 一、JDK
> JDK(Java Development Kit) 是整个JAVA的核心，包括了Java运行环境（Java Runtime Envirnment），一堆Java工具（javac/java/jdb等）和Java基础的类库（即Java API 包括rt.jar）。

> JDK是java开发工具包，基本上每个学java的人都会先在机器 上装一个JDK，那他都包含哪几部分呢？在目录下面有 六个文件夹、一个src类库源码压缩包、和其他几个声明文件。其中，真正在运行java时起作用的 是以下四个文件夹：bin、include、lib、 jre。有这样一个关系，JDK包含JRE，而JRE包 含JVM。

- bin:最主要的是编译器(javac.exe)
- include:java和JVM交互用的头文件
- lib：类库
- jre:java运行环境
**（注意：这里的bin、lib文件夹和jre里的bin、lib是 不同的）**

**总的来说JDK是用于java程序的开发,而jre则是只能运行class而没有编译的功能。**

### 二、JRE

> JRE（Java Runtime Environment，Java运行环境），包含JVM标准实现及Java核心类库。JRE是Java运行环境，并不是一个开发环境，所以没有包含任何开发工具（如编译器和调试器）
JRE是指java运行环境。光有JVM还不能成class的 执行，因为在解释class的时候JVM需要调用解释所需要的类库lib。 （jre里有运行.class的java.exe）

> JRE （ Java Runtime Environment ），是运行 Java 程序必不可少的（除非用其他一些编译环境编译成.exe可执行文件……），JRE的 地位就象一台PC机一样，我们写好的Win64应用程序需要操作系统帮 我们运行，同样的，我们编写的Java程序也必须要JRE才能运行。

### 三、JVM

> JVM（Java Virtual Machine），即java虚拟机, java运行时的环境，JVM是一种用于计算设备的规范，它是一个虚构出来的计算机，是通过在实际的计算机上仿真模拟各种计算机功能来实现的。针对java用户，也就是拥有可运行的.class文件包（jar或者war）的用户。里面主要包含了jvm和java运行时基本类库（rt.jar）。rt.jar可以简单粗暴地理解为：它就是java源码编译成的jar包。Java虚拟机在执行字节码时，把字节码解释成具体平台上的机器指令执行。这就是Java的能够“一次编译，到处运行”的原因。

### 四、JDK、JRE、JVM三者的联系与区别

1. 三者联系：
> JVM不能单独搞定class的执行，解释class的时候JVM需要调用解释所需要的类库lib。在JDK下面的的jre目录里面有两个文件夹bin和lib,在这里可以认为bin里的就是jvm，lib中则是jvm工作所需要的类库，而jvm和 lib和起来就称为jre。JVM+Lib=JRE。总体来说就是，我们利用JDK（调用JAVA API）开发了属于我们自己的JAVA程序后，通过JDK中的编译程序（javac）将我们的文本java文件编译成JAVA字节码，在JRE上运行这些JAVA字节码，JVM解析这些字节码，映射到CPU指令集或OS的系统调用。

2. 三者区别：
- a.JDK和JRE区别：在bin文件夹下会发现，JDK有javac.exe而JRE里面没有，javac指令是用来将java文件编译成class文件的，这是开发者需要的，而用户（只需要运行的人）是不需要的。JDK还有jar.exe, javadoc.exe等等用于开发的可执行指令文件。这也证实了一个是开发环境，一个是运行环境。
- b.JRE和JVM区别：JVM并不代表就可以执行class了，JVM执行.class还需要JRE下的lib类库的支持，尤其是rt.jar。