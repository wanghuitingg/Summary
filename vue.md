- # vue.js的特点

  - 简洁：页面由  HTML模板+Json数据+Vue实例  组成

  - 数据驱动：自动计算属性和追踪依赖的模板表达式

  - 组件化：可复用、解耦的组件来构造页面

  - 轻量：代码量小，不依赖其他库

  - 快速：精确有效批量DOM更新

  - 模板友好：可通过npm，bower等多种方式安装

- 对MVVM的理解？

  - MVVM 即 Model-View-ViewModel模式（界面-数据模型-（沟通桥梁））

  - MVVM  将“数据模型数据双向绑定”作为核心思想，View和Model没有联系仅能通过ViewModel进行交互，（Model和ViewModel之间的交互是双向的），因此视图（View）的数据变化会同时修改数据源（Model），反之亦然。![img](https://api2.mubu.com/v3/document_image/16487944737017ee8.jpg)

  - MVC 是比较直观的架构模式：
    - 用户操作 -> View(负责接收用户的输入操作) -> Controller(业务逻辑处理) -> Model(数据持久化) -> View(将结果反馈给View)