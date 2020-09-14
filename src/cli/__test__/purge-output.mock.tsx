import * as React from 'react'

const s = '中文'
const s2 = `中文`
const s3 = '中文'
const s5 = 'english'
const s6 = 'eng 中间有中文 lish'
const s7 = `中文${interpolated}`
// @a18n-ignore
const s8 = '忽略我'
const s9 = 'plaintext'
// 跨行的中文不应该匹配
const s10 = 'plaintext'
/**
 * 注释里的 '中文' 是 `不能`碰的
 */
// '行注释中的中文'
/** '这种注释' */
const s13 = true ? `星期${interpolated}` : `周${interpolated}`
const s14 = `星期`
const s15 = (
  <div>
    我喜欢
    <input type="text" placeholder='这样子' />
  </div>
)

// 保留ts类型标注
const s16 = null as any

// decorator语法
@connect()
class SomeComponent extends React.Component {
  doStuff = () => {}
  render() {
    return <div />
  }
}

// object key : don't wrap
// object value : do wrap
const s17 = {
  中文: 3,
  中文2: '中文3',
}

// tsLiteral: don't touch
export type s18 = 'YYYY年MM月DD日' | 'YYYY年MM月DD日 hh:mm'

// nullish coalescing语法
const temp = s3 ?? s10

// optional chaining语法
const temp2 = (s3 as any)?.y?.z