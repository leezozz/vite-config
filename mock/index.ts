// test.ts

import { MockMethod } from 'vite-plugin-mock'
import { mock, Random } from 'mockjs'

const data = mock(
  {
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|100': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      'name': Random.name()
    }]
  }
)

export default [
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 0,
        data
      }
    },
  },
] as MockMethod[]