## dom diff核心算法——最长递增子序列

 Vue 会把我们编写的组件转换成虚拟 DOM 树，并且将虚拟 DOM 树进行比较后再根据变化情况更新真实 DOM。比如原有列表为 [a, b, c, d, e, f] ，而新列表为 [a, d, b, c, e, f]， 这时会这样进行 diff：

- 去除相同前置和后置元素 ，此优化由 Neil Fraser 提出，可以比较容易实现而且带来带来比较明显的提升；

  比如针对上情况，去除相同的前置和后置元素后，真正需要处理的是 [ b, c, d] 和 [d, b, c] ，复杂性会大大降低。



- 最长递增子序列

  接着要将原数组中的[ b, c, d] 转化成 [d, b, c] 。Vue3 中对移动次数进行了进一步的优化。下面对这个算法进行介绍：

  - 首先遍历新列表，通过 key 去查找在原有列表中的位置，从而得到新列表在原有列表中位置所构成的数组。比如原数组中的[ b, c, d]， 新数组为 [d, b, c] ，得到的位置数组为 [3, 1, 2] ，现在的算法就是通过位置数组判断最小化移动次数；

  - 计算最长递增子序列

    最长递增子序列是经典的动态规划算法，不了解的可以前往 最长递增子序列 去补充一下前序知识。那么为什么最长递增子序列就可以保证移动次数最少呢？因为在位置数组中递增就能保证在旧数组中的相对位置的有序性，从而不需要移动，因此递增子序列的最长可以保证移动次数的最少

    对于前面的得到的位置数组[3, 1, 2]，得到最长递增子序列 [1, 2] ，在子序列内的元素不移动，不在此子序列的元素移动即可。对应的实际的节点即 d 节点移动至b, c前面即可。

vue3源码：👉 https://github.com/vuejs/core/blob/main/packages/runtime-core/src/renderer.ts#L2482 getSequence方法。

### 源码
```js
function getSequence(arr: number[]): number[] {
  const p = arr.slice()
  const result = [0]
  let i, j, u, v, c
  const len = arr.length
  for (i = 0; i < len; i++) {
    const arrI = arr[i]
    if (arrI !== 0) {
      j = result[result.length - 1]
      if (arr[j] < arrI) {
        p[i] = j
        result.push(i)
        continue
      }
      u = 0
      v = result.length - 1
      while (u < v) {
        c = (u + v) >> 1
        if (arr[result[c]] < arrI) {
          u = c + 1
        } else {
          v = c
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1]
        }
        result[u] = i
      }
    }
  }
  u = result.length
  v = result[u - 1]
  while (u-- > 0) {
    result[u] = v
    v = p[v]
  }
  return result
}
```

### 源码解读：

它结合了动态规划和二分查找的技巧，时间复杂度为 O(NlogN)。下面是对这段代码的逐行解析，帮助理解它是如何工作的：

1. 初始化和准备阶段：

     - const p = arr.slice()：创建一个数组 p，初始时是 arr 的一个副本。实际上，p 用于记录每个元素在 LIS 中前一个元素的索引，帮助我们最后重建序列。
     - const result = [0]：初始化结果数组 result，开始时只包含第一个元素的索引（假设第一个元素至少是一个长度为1的递增序列）。
2. 主循环：遍历输入数组 arr 的每个元素 arrI。

     - 如果 arrI 不等于 0（这里的检查似乎是特定场景的优化或条件，可能用于过滤掉某些特定值，不是LIS算法的标准部分），执行以下逻辑：
       - 检查当前元素是否可以直接添加到现有的 LIS 末尾，即判断当前元素是否大于 result 最后一个元素对应的 arr 中的值。
       - 如果是，更新 p[i]（表示 arr[i] 是在 LIS 中紧跟在 arr[j] 后面的元素），并将当前索引 i 添加到 result 中。
3. 二分查找：如果当前元素 arrI 不能直接加到 result 的末尾，使用二分查找在 result 中找到第一个不小于 arrI 的元素位置 u。这部分是为了找到 arrI 可以替换的位置，以保持 result 中的序列最长且尾部最小。

4. 更新 result 和 p：根据二分查找的结果更新 result 和 p。如果找到了一个合适的位置 u，并且 arrI 小于这个位置对应的 arr 中的值，就用 i 替换 result[u]，并且更新 p[i] 来记录这个元素在 LIS 中前一个元素的索引。

5. 重建 LIS：最后，使用 p 数组从后向前重建 LIS。u = result.length 是 LIS 的长度，v = result[u - 1] 是 LIS 最后一个元素的索引。然后逆序遍历 result，使用 p 数组回溯每个元素的前驱，重建整个序列。

通过这个过程，result 数组最终包含了最长递增子序列的索引，而不仅仅是长度。这个算法的巧妙之处在于它同时实现了查找 LIS 长度和重建 LIS 序列的功能。

注意
- 此代码的实现假设输入数组 arr 中的元素都是非零的，因为它使用了 if (arrI !== 0) 来进行判断。如果你的应用场景中 0 是有效数据，需要调整这个条件。
- 代码中的 p 数组用于记录在构建 LIS 过程中，每个元素在 LIS 中前一个元素的索引，这是重建 LIS 具体序列的关键。