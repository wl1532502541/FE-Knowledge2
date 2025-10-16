# React题目

## 问题1：React 中为什么要设计 Hook ，为了解决什么问题​

总的来说是以下三个原因：​

- Component 非 UI 逻辑复用困难。​
- 组件的生命周期函数不适合 side effect 逻辑的管理。​
- 不友好的 Class Component。​
​

## 问题2：组件的生命周期方法。​

React组件的生命周期可以分为三个阶段：挂载阶段、更新阶段和卸载阶段。​

- 挂载阶段包括constructor、render、componentDidMount等方法，用于初始化组件、渲染到真实DOM和处理副作用。​
- 更新阶段包括shouldComponentUpdate、render、componentDidUpdate等方法，用于控制组件的重新渲染和处理更新后的副作用。​
- 卸载阶段包括componentWillUnmount方法，用于清理组件产生的副作用和资源。

## 问题3：状态（state）和属性（props）​

- **状态（state）**: React组件的可变数据，用于存储组件内部的状态信息。状态可以通过setState方法进行更新，并且只能在组件内部访问和修改。​
- **属性（props）**: 是React组件的外部输入，用于传递数据和配置信息给组件。属性是不可变的，只能由父组件传递给子组件，子组件不能直接修改父组件传递的属性。

## 问题4：高阶组件（Higher-Order Components）​

高阶组件是一种函数，接受一个组件作为参数并返回一个新的组件。高阶组件可以用于封装通用的逻辑和行为，以便在多个组件中重复使用。它们可以用于实现组件的复用、逻辑的抽象和代码的组合。

## 问题5：受控组件 和 非受控组件​

- **受控组件**：是由React控制并管理其内部状态的组件。它的状态通常通过props传递给子组件，并通过事件处理程序进行更新。受控组件提供了更精确的控制和验证，但需要更多的代码来处理状态更新。​

- **非受控组件**：是由组件本身管理其内部状态的组件。它的状态通常通过ref从DOM中获取，并且不依赖于React来处理状态的更新。非受控组件通常在处理表单和第三方DOM集成时使用。

## 问题5：展示组件 (Presentational component) 和 容器组件 (Container component) 区别​

展示组件（Presentational component）：​

- 主要关注UI的呈现和展示，负责渲染和显示数据。​
- 通常是无状态的（stateless），接收来自容器组件的props，并根据props渲染UI。​
- 不关心数据的来源和逻辑处理，只负责展示和交互。​
- 通常是可复用的，可以在多个地方使用。​

容器组件（Container component）：​

- 主要关注数据的获取和逻辑处理，负责管理数据和状态。​
- 通常是有状态的（stateful），可以包含自己的state，并通过props将数据传递给展示组件。​
- 可以通过Redux或其他状态管理库来管理应用程序的状态。​
- 可以包含多个展示组件，负责协调它们之间的交互和数据流动。

## 问题6：类组件(Class component) 和 函数式组件(Functional component)  区别​

类组件（Class component）：​

- 通过继承React.Component类来定义组件。​
- 可以包含自己的状态（state）和生命周期方法（lifecycle methods）。​
- 可以使用this关键字来访问组件的状态和props。​
- 可以使用ref来访问DOM元素或子组件。​
- 可以使用setState方法来更新组件的状态，触发组件的重新渲染。​
- 通常用于复杂的组件，需要管理自己的状态并响应生命周期事件。​

函数式组件（Functional component）：​

- 通过函数来定义组件，接收props作为参数，返回JSX元素。​
- 没有自己的状态和生命周期方法。​
- 不能使用this关键字来访问组件的状态和props。​
- 通常用于简单的展示组件，只关注UI的呈现和展示，不需要管理状态和响应生命周期事件。

## 问题7：如何划分 技术组件 和 业务组件​

- 业务组件：业务组件是与应用程序的业务逻辑紧密相关的组件。它们通常是可重用的，可以在应用程序的不同部分使用。这些组件通常包含与数据交互、状态管理和用户交互相关的代码。例如，登录表单、购物车组件和用户列表等都可以视为业务组件。​
- 技术组件：技术组件是与应用程序的技术实现相关的组件。它们通常是可重用的，用于处理特定的技术功能或实现通用的UI样式。这些组件通常包含与样式、路由、数据请求和状态管理无关的代码。例如，按钮组件、弹出框组件和表单验证组件等都可以视为技术组件。​
​
划分组件的指导原则：​

1. 单一职责原则：每个组件应该只关注一个特定的功能或任务。这样可以使组件更加可重用和可测试。​
2. 可组合性：组件应该是可组合的，可以与其他组件一起使用。这样可以构建更大的组件和应用程序。​
3. 数据流动：组件之间的数据流动应该是单向的，从父组件到子组件。可以更好地追踪数据的变化和调试问题。​
4. 分层架构：将组件按照层次结构进行组织，从而更好地分离业务逻辑和技术实现。​

## 问题8：什么是 React 中的上下文（Context）？它有什么作用？​

在 React 中，上下文（Context）是一种用于在组件树中共享数据的方法。它允许将数据在组件之间传递，而不需要通过显式地将 props 逐层传递下去。上下文提供了一种在组件之间共享数据的便捷方式。​

上下文由两个主要组件组成：​

- React.createContext：该函数用于创建上下文对象。它接受一个初始值作为参数，并返回一个上下文对象。例如：

```jsx
const MyContext = React.createContext();
```

- `Provider` 组件：该组件用于将数据传递给后代组件。通过 `Provider` 组件的 `value` 属性，可以将数据传递给下层组件。例如：

```jsx
<MyContext.Provider value={myData}>​
  {/* 后代组件 */}​
</MyContext.Provider>
```

- Consumer 组件或 useContext 钩子：后代组件可以使用 Consumer 组件或 useContext 钩子来访问上下文中的数据。​
- 使用 Consumer 组件：

```jsx
<MyContext.Consumer>​
  {value => (​
    // 使用上下文中的数据​
  )}​
</MyContext.Consumer>
```

- 使用 useContext 钩子：

```jsx
const value = useContext(MyContext);​
// 使用上下文中的数据
```

上下文的作用如下：​

- 数据共享：上下文允许在组件树中共享数据，而不需要通过逐层传递 props。这对于许多组件需要访问相同的数据的情况非常有用。​
- 简化组件之间的通信：上下文提供了一种简化组件之间通信的方式。数据可以直接在上下文中共享，而不需要将其传递给每个中间组件。​
- 跨层级访问数据：上下文允许在组件树的不同层级中访问共享的数据。这对于需要在深层嵌套的组件之间传递数据非常方便。​

需要注意的是，上下文不应被滥用。过多的使用上下文可能导致组件之间的耦合性增加，并使代码难以维护。因此，在使用上下文时需要谨慎评估是否真正需要共享数据，并确保上下文使用合理和适度。

## 问题9：React 是 mvvm 框架吗 ？​

- React 不是一个典型的 MVVM（Model-View-ViewModel）框架，它更倾向于是一个 V（View）层库。尽管 React 可以与其他库（如 Redux 或 MobX）结合使用以实现更丰富的架构，但它本身并没有提供严格的 ViewModel 层。​
- 在典型的 MVVM 模式中，ViewModel 作为连接视图（View）和数据模型（Model）的中间层，负责管理视图的状态和数据，并与数据模型进行交互。而 React 的设计理念更加集中在组件化的视图层，通过构建可重用的组件来管理 UI 状态。​
- React 强调单向数据流的概念，其中数据从父组件通过 props 传递给子组件，子组件通过回调函数将状态更改传递回父组件。这种单向数据流的模型有助于构建可预测和可维护的组件，但与典型的双向绑定的 MVVM 模式不同。​

## 问题10：React 如何实现 mvvm？​

在React中，你可以使用以下方法来实现类似MVVM的架构：​

- 使用状态管理库：React可以与状态管理库（如Redux、MobX、React Context等）结合使用，以实现集中化的状态管理。这些库可以帮助你在模型层和视图层之间进行数据传递和状态管理，从而实现MVVM的一部分。​
- 使用双向数据绑定库：有一些第三方库（如mobx-react-lite、reactive-react等）提供了双向数据绑定的能力，它们可以使React组件中的数据与视图保持同步。通过使用这些库，你可以更接近MVVM模式中的双向数据绑定概念。​
- 自定义视图模型：你可以在React中定义自己的视图模型类或对象，将数据逻辑和转换逻辑封装到这些视图模型中。通过将视图模型与React组件结合使用，你可以实现数据的映射和处理逻辑。​

需要注意的是，React本 身是一个非常灵活的库，你可以选择与其他库或模式结合使用，以满足你的应用程序需求。MVVM只是一种软件架构模式，具体的实现方式可以根据项目的特定要求和团队的偏好进行调整。

## 问题11：redux 主要解决什么问题 及 优缺点​

Redux 主要解决的问题是JavaScript应用中的状态管理。在大型的单页应用中，状态（state）会随着用户操作和数据变化而不断变化，这些状态分散在各个组件中，使得状态的管理变得复杂。Redux 提供了一个集中式的状态管理方案，使得状态的变化变得可预测和可控。​

优点：​

1. 状态管理集中化，使得状态的变化变得可预测和可控。​
2. Redux 的状态存储只读，只能通过派发（dispatch）动作（action）来改变，使状态的变化更加清晰和可追踪。
3. Redux 提供了中间件接口，可以方便的使用各种中间件来增强 Redux 的功能，如处理异步操作、打印日志等。​
4. Redux 有大量的社区支持和丰富的插件，可以方便的扩展其功能。​

缺点：
​

1. Redux 的使用有一定的学习成本，需要理解其工作原理和一些概念，如纯函数、动作、中间件等。​
2. 对于一些简单的应用，使用 Redux 可能会显得过于复杂，增加了开发的难度。​
3. Redux 的代码冗余度较高，需要编写大量的样板代码。

## 问题12：React 性能优化方案，所关联周期函数。​

1. 使用PureComponent或shouldComponentUpdate方法来避免不必要的重新渲染。可确定是否需要重新渲染。​

2. 使用React.memo()来缓存组件，避免不必要的重新渲染。React.memo()可以将组件的输入和输出缓存起来，避免相同的输入导致相同的输出。​

3. 使用React.lazy()和Suspense来延迟加载组件。可降低初始加载时间，并提高应用程序的性能。​

4. 使用shouldComponentUpdate或React.memo()来避免不必要的props更新，避免不必要的重新渲染。​

5. 使用React.useCallback()和React.useMemo()来缓存函数和计算结果，避免不必要的函数调用和计算。​

6. 使用React.Fragment来避免不必要的DOM节点。可减少DOM节点数量，提高应用程序的性能。​
​
`shouldComponentUpdate`方法和`React.memo()`与React性能优化的关联性较大。​

- shouldComponentUpdate方法可以帮助您确定是否需要重新渲染组件，从而避免不必要的渲染。​
- React.memo()可以将组件的输入和输出缓存起来，避免相同的输入导致相同输出，从而避免不必要的重新渲染。

## 问题13：虚拟 DOM 的意义​

1. 减少实际的DOM操作：通过比较新旧虚拟DOM树的差异，React可以确定需要更新的部分，并生成最小化的DOM操作序列。这样可以减少实际的DOM操作次数，提高性能。​
2. 批量更新：React会将所有需要更新的DOM操作批量执行，从而避免了频繁的DOM操作，提高了性能。​
3. 跨平台兼容性：虚拟DOM是一个轻量级的JavaScript对象，可以在不同的平台上运行，例如浏览器、移动设备和服务器。这使得React可以在多个环境中使用相同的代码和逻辑。​
4. 更好的开发体验：虚拟DOM使得开发者可以使用类似于HTML的标记语言来描述UI，而不需要直接操作DOM。这简化了开发过程，并提供了更好的开发体验。​

## 问题14：react DOM Diff 算法​

React的 虚拟 DOM diff算法是一种用于比较新旧虚拟DOM树的差异的算法，目标是找出需要更新的部分，并生成一个最小化的DOM操作序列：​

1. 比较根节点：算法首先比较新旧虚拟DOM树的根节点。如果它们的类型不同，那么React会完全替换旧的DOM树。如果它们的类型相同，那么算法会继续比较它们的属性和子节点。​
2. 比较属性：算法会比较新旧虚拟DOM树的属性，判断是否有属性发生了变化。如果有属性发生了变化，React会更新对应的DOM节点上的属性。​
3. 比较子节点：算法会递归地比较新旧虚拟DOM树的子节点。如果子节点的数量不同，那么React会更新对应的DOM节点的子节点。如果子节点的数量相同，那么算法会继续比较它们的类型和内容。​
4. 递归比较：算法会递归地比较新旧虚拟DOM树的子节点。如果子节点的类型相同，那么算法会继续比较它们的属性和子节点。如果子节点的类型不同，那么React会完全替换旧的DOM节点。​
5. 生成DOM操作序列：通过比较新旧虚拟DOM树，算法会生成一个最小化的DOM操作序列，包括插入、更新和删除操作。React会将这些操作批量执行，从而减少实际的DOM操作次数。

## 问题15：关于 Fiber 架构​

- Fiber是React中一种新的架构，它用于实现增量式的、可中断的虚拟DOM diff过程。Fiber的目标是改进React的性能和用户体验，使得React应用程序更加流畅和响应。​

- 在React的旧版本中，虚拟DOM diff过程是一个递归的过程，它会一直执行直到完成，期间无法中断。这可能会导致长时间的JavaScript执行，从而阻塞主线程，造成页面的卡顿和不流畅的用户体验。​

- 为了解决这个问题，React引入了Fiber架构。Fiber将整个虚拟DOM diff过程分为多个小任务，每个任务称为一个Fiber节点。这些Fiber节点被组织成一个树状结构，称为Fiber树。​

- Fiber树可以被中断和恢复，这意味着在执行Fiber树的diff过程时，可以在任意时刻中断当前任务，并优先执行其他任务。这样可以使得应用程序更加灵活地响应用户的交互和其他优先级的任务，提高性能和响应性。​

- 通过Fiber架构，React可以根据任务的优先级动态地调整任务的执行顺序，从而更好地控制JavaScript的执行。这使得React应用程序可以在不阻塞主线程的情况下进行虚拟DOM diff，减少页面的卡顿和提高用户体验。​

- 总而言之，Fiber是React中一种新的架构，用于实现增量式的、可中断的虚拟DOM diff过程。它通过将diff过程分为多个小任务，并根据优先级动态地调整任务的执行顺序，提高React应用程序的性能和响应性。

## 问题16：关于 Flux​

一种架构思想，用于构建前端应用程序的数据流管理，解决传统MVC架构在复杂应用中数据流管理变得困难的问题。​

Flux架构的核心思想是单向数据流，划分为四个主要部分：​

1. View（视图）：负责展示用户界面，并将用户的操作转发给Action进行处理。​
2. Action（动作）：定义应用程序中可能发生的各种操作，例如点击按钮、输入文本等。当用户在View上执行操作时，View会触发相应的Action。​
3. Dispatcher（派发器）：负责接收Action并将其分发给注册的Store。​
4. Store（数据仓库）：存储应用程序的数据，并定义数据的更新逻辑。当Dispatcher将Action分发给Store时，Store会根据Action的类型更新数据，并触发事件通知View进行更新。​

Flux架构的关键是单向数据流，当用户在View上执行操作时，View会触发相应的Action，Action会通过Dispatcher被分发给Store，Store根据Action的类型更新数据，并触发事件通知View进行更新。这样，数据的流动是单向的，没有循环依赖和复杂的数据交互。通过这种单向数据流的方式，Flux架构使得应用程序的数据流管理更加清晰和可预测。避免了数据的混乱和不一致，使得应用程序的开发和维护更加简单和可靠。

## 问题17：React 项目脚手架​

- **Create React App**：Create React App是官方推荐的React项目脚手架，它基于Webpack和Babel，可以快速创建React应用程序的基本结构和配置文件。Create React App提供了一套简单易用的命令行工具，可以快速创建、运行和打包React应用程序。​
- **Next.js**：Next.js是一个基于React的轻量级服务器端渲染框架，它提供了一套简单易用的API和命令行工具，可以快速创建具有服务器端渲染功能的React应用程序。Next.js还提供了一些高级特性，例如自动代码分割、静态文件服务、CSS模块化等。​
- **Gatsby**：Gatsby是一个基于React的静态站点生成器，它可以快速创建高性能、可靠的静态网站。Gatsby使用React和GraphQL构建静态网站，可以通过插件和主题扩展功能。​
- **React Boilerplate**：React Boilerplate是一个React项目脚手架，它提供了一套完整的React应用程序开发框架，包括基本结构、配置文件、测试、代码分割、性能优化等功能。React Boilerplate还提供了一些常用的React库和工具，例如Redux、React Router、Webpack等。

## 问题18:React 组件可请求数据生命周期钩子​

- componentDidMount：组件挂载后立即调用，在此方法中可以发起请求，并更新组件的状态或props。​
- componentDidUpdate：组件更新后立即调用，在此方法中可以根据props或state的变化发起请求，

## 问题19：refs 的作用​

在React中，refs（引用）是用于访问组件或DOM元素的方法。​

1. 访问组件实例：通过refs，可以获取到组件的实例，从而可以直接调用组件的方法或访问组件的属性。这在某些情况下非常有用，例如需要手动触发组件的某个方法或获取组件的状态。​
2.访问DOM元素：通过refs，可以获取到React组件中的DOM元素，从而可以直接操作DOM，例如改变样式、获取输入框的值等。这在需要直接操作DOM的场景下非常有用，但在React中应该尽量避免直接操作DOM，而是通过状态和属性来控制组件的渲染。

## 问题20：key 在渲染列表时的作用​

**1. 识别每个列表项的唯一性**：key属性用于帮助React区分列表中的每个元素。React使用key属性来跟踪列表中的每个元素，以便在进行列表更新时能够准确地识别每个元素。如果没有指定key属性或key属性不唯一，React可能会出现警告或产生不正确的渲染结果。​

**2. 提高列表更新的性能**：key属性可以帮助React在进行列表更新时，识别出哪些元素是新添加的、哪些元素是已存在的、哪些元素是已删除的。通过key属性，React可以更加高效地进行DOM操作，减少不必要的重渲染。​

**3. 保持元素的稳定性**：key属性可以帮助React保持元素的稳定性。当列表中的元素顺序发生变化时，如果每个元素都有一个稳定的key属性，React可以更准确地识别出哪些元素是移动的，哪些元素是新增的，哪些元素是删除的，从而只进行必要的DOM操作，提高性能。

## 问题21：如何使用 useState Hook 来管理状态

```js

import React, { useState } from 'react';​
​
function MyComponent() {​
  const [count, setCount] = useState(0);​
​
  return (​
    <div>​
      <p>Count: {count}</p>​
      <button onClick={() => setCount(count + 1)}>Increment</button>​
    </div>​
  );​
}
```

## 问题22：如何使用 useEffect Hook 执行副作用操作

```js
import React, { useState, useEffect } from 'react';​
​
function MyComponent() {​
  const [data, setData] = useState(null);​
​
  useEffect(() => {​
    // 在组件渲染后执行副作用操作​
    fetchData();​
  }, []);​
​
  const fetchData = async () => {​
    const response = await fetch('https://api.example.com/data');​
    const data = await response.json();​
    setData(data);​
  };​
​
  return <div>Data: {data}</div>;​
}
```

## 问题23：如何使用自定义Hook来共享逻辑

```js
import React, { useState, useEffect } from 'react';​
​
function useFetchData(url) {​
  const [data, setData] = useState(null);​
​
  useEffect(() => {​
    fetchData();​
  }, [url]);​
​
  const fetchData = async () => {​
    const response = await fetch(url);​
    const data = await response.json();​
    setData(data);​
  };​
​
  return data;​
}​
​
function MyComponent() {​
  const data = useFetchData('https://api.example.com/data');​
​
  return <div>Data: {data}</div>;​
}
```