const codes = {
  202: '用户名已被注册',
  210: '用户名和密码不匹配',
  211: '找不到用户',
  217: '无效的用户名',
  218: '无效的密码',
  unKnown: '请求失败，请稍后再试'
}


export default function({code}){
  return codes[code] || codes.unKnown
}