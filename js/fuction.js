
/***
 * 此函数用于翻动效果
 * @start 动画效果开始时的样式
 * @end 动画结束时的样式
 * @display 动画的位移
 */
function func(start,end,display){
    
    $(start).animate({
        top: display,
        opacity: '0'
    },1000)
    $(end).animate({
        top: display,
        opacity: '1'
    },1000)
}
