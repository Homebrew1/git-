// cavas
var mycanvas = document.querySelector('canvas')//实例
var ctx = mycanvas.getContext('2d')//?百宝箱
ctx.moveTo(100,100)
ctx.lineTo(300,100)
ctx.moveTo(100,200)
ctx.strokeStyle = "red"//此处修改颜色会被下方的颜色完全覆盖
ctx.lineTo(300.200)
ctx.moveTo(100,300)
ctx.lineTo(300,300)
ctx.strokeStyle = 'blue'//颜色
ctx.stroke()//描边
ctx.beginPath()//画平行线
