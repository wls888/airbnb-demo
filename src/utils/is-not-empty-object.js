export function isNotEmptyObject(obj){
  return Boolean(Object.keys(obj??{}).length>0)
}