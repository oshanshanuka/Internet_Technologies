console.log("event Listeners Types file added");

box.addEventListener('click',function(){
    console.log('you click');
})
box.addEventListener('dbclick',function(){
    console.log('you double click');
})

//mouse downevent

box.addEventListener('mousedown',function(){
    console.log('Mouse pressed');
})

box.addEventListener('mouseup',function(){
    console.log('Mouse released');
})

box.addEventListener('mousemove',function(){
    console.log('Mouse moved');
})

box.addEventListener('mouseover',function(){
    console.log('Mouse over');
})

box.addEventListener('mouseout',function(){
    console.log('Mouse out');
})

