$(() => {
    let ctx = document.getElementById("mainCanvas").getContext('2d');
    let cimg = document.getElementById('cimg');
    let cimg2 = document.getElementById('cimg2');

    function draw(uri){
        $(cimg2).attr('src', uri);
        document.createElement('img')
        ctx.drawImage(cimg2, 0,0, 300, 300);
        ctx.globalAlpha = 0.3;
        ctx.drawImage(cimg, 0,0, 300, 300);
    }
    function clear(){
        ctx.clearRect(0,0, 300,300);
    }
    draw('https://catracalivre.com.br/wp-content/uploads/2019/08/bolsonaro-2-1.jpg');
})