!function(){
  function writeCode(prefix, code, fn){
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id = setInterval(()=>{
      n += 1
      container.innerHTML = code.substring(0,n)
      styleTag.innerHTML = code.substring(0,n)
      container.scrollTop = container.scrollHeight
      if(n >= code.length){
        window.clearInterval(id)
        fn && fn.call()
      }
    },10)
  }
  let code = `
  /*
   * 首先，需要准备皮卡丘的皮
   */
  .preview{
    height: 100%;
    border: 1px solid green;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FEE433;
  }
  .wrapper{
    width: 100%;
    height: 165px;
    position: relative;
  }
  /*
   * 接下来，画皮卡丘的鼻子
   */
  .nose{
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 10px 12px;
    border-color: black transparent transparent;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 28px;
    margin-left: -12px;      
  }
  /*
   * 画皮卡丘的眼睛
   */
  .eye{
    width: 44px;
    height: 44px;
    background: #2E2E2E;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000000;
  }
  /*
   * 眼睛里面的珠子
   */
  .eye::before{
    content: '';
    display: block;
    width: 21px;
    height: 21px;
    background: white;
    border-radius: 50%;
    border: 2px solid #000000;
    position: absolute;
    left: 5px;
    top: -1px;
  }
  /*
   * 左眼在左边
   */
  .eye.left{
    right: 50%;
    margin-right: 66px;
  }
  /*
   * 右眼在右边
   */
  .eye.right{
    left: 50%;
    margin-left: 66px;
  }
  /*
   * 然后，画皮卡丘的脸
   */
  .face{
    width: 62px;
    height: 62px;
    background: #FC0D1C;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 77px;
  }
  /*
   * 将脸放到正确的位置
   */
  .face.left{
    right: 50%;
    margin-right: 93px;
  }
  .face.right{
    left: 50%;
    margin-left: 93px;
  }
  /*
   * 上嘴唇
   */
  .upperLip{
    height: 20px;
    width: 66px;
    border: 2px solid black;
    position: absolute;
    top: 44px;
    background: #FEE433;
  }
  .upperLip.left{
    border-radius: 50%/0 0 0 100%;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
    position: absolute;
    right: 50%;
  }
  .upperLip.right{
    border-radius: 50%/0 0 100% 0;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
    position: absolute;
    left: 50%;
  }
  /*
   * 下嘴唇
   */
  .lowerLip-wrapper{
    width: 200px;
    height: 114px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
  }
  .lowerLip{
    width: 200px;
    height: 1500px;
    background: #990513;
    border-radius: 100px/750px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
  }
  /*
   * 小舌头
   */
  .lowerLip::after{
    content: '';
    position: absolute;
    bottom: -8px;
    width: 100px;
    height: 100px;
    background: #FC4A62;
    left: 50%;
    margin-left: -50px;
    border-radius: 50%;
  }
  /*
   * 好了，这只皮卡丘送给你
   */`
  writeCode('', code)
}.call()