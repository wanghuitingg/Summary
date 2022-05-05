# JS面试题

## 一. js数据类型

### 1. 基本数据类型

- `String  Number  Boolean  Null  Undefined  Symbol`

### 2. 引用数据类型

- `Array  Object  （函数）`

### 3. 区别

- 存放地址
  - 内存有堆和栈两个空间，基本数据类型在栈内存中存放值，而引用数据类型在栈内存中存放地址，真正的数据存放在堆内存中（即引用地址不变，数据可变）

- 深拷贝&浅拷贝



## 二. 如何判断数据类型

![img](https://api2.mubu.com/v3/document_image/1651052942903733a.jpg)

### 1. typeof(返回的是字符串)

- 缺：对于`null，Array，Object`  typeof检测结果均为Object，不能进一步判断类型

### 2. instanceof

- 缺：无法区别Undefined和Null，基本数据类型如果不用new声明也检测不出

- 优：如果是new声明的类型，还能检测出多层继承关系

### 3. constructor

- 缺：constructor不能检测出Undefined和Null（因为Undefined和Null没有constructor），并且使用它是不安全的（constructor可以更改指向）

### 4. Object.prototype.toString.call

- 返回[Object  数据类型]

- 在任何值上调用 Object 原生的 toString() 方法，都会返回一个 `[object NativeConstructorName]` 格式的字符串

- 缺：但是它不能检测非原生构造函数的构造函数名。

### 5. Array.isArray

### 6.**(*面试题） 写一个方法判断数据类型**

![image-20220505155513709](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220505155513709.png)

- 标黄不写返回[Object Array]



## 三.null 和 undefined  的区别

### 1. 返回数据类型不同

- typeof null返回object

- typeof undefined返回undefined

### 2. 隐式类型转换

- `console.log( null * 5 )`
  - 返回  0，null被隐式转换为number类型，为0

- `console.log( undefined * 5 )`
  - 返回  NaN，undefined 不会被隐式转换



## 四. 类型转换

- `let a = "5"`

  - 显示转换
    - `console.log( Number.parseInt(a) )`

  - 隐式转换
    - `console.log( a * 1 ) / console.log( a - 0)`



## 五. 事件

### 1. 事件三要素

- 事件源，事件处理函数，事件对象

### 2. 事件机制![image-20220505160538022](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220505160538022.png)

- 事件捕获、事件冒泡、<u>事件阶段（事件的捕获  ->  (事件的目标阶段)  ->  事件冒泡）</u>

- 当同时触发，先捕获（从外到里）后冒泡（从里到外）

### 3. 事件委托

![image-20220505160909214](C:\Users\86137\AppData\Roaming\Typora\typora-user-images\image-20220505160909214.png)

- 事件委托也叫事件代理，是把原本需要绑定在子元素的响应事件委托给父元素，让父元素担当事件监听的职务。事件代理的原理是DOM元素的事件冒泡。

- 优点：

  - 可以解决新生成元素的绑定问题；

  - 节省内存占用，减少事件注册

- 局限：
  - focus、blur等事件本身没有事件冒泡机制，所以无法委托



## 六. 



