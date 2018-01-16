import 'whatwg-fetch';

export default function checkNetwork(){
  const randomNum = Math.round(Math.random() * 10000);
  return fetch("/blank.png?rand="+randomNum,{
    method: "HEAD"
  }).then(r=>{ return true; }).catch(err=>{
    return false;
  })
}
