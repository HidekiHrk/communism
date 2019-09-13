$(() => {
    let mc = document.getElementById("mainCanvas");
    let ctx = mc.getContext('2d');
    let cimg = document.getElementById('cimg');
    let cimg2 = new Image;
    let dbutton = document.getElementById('dbutton');
    $(cimg2).on('load', () => {
        ctx.globalAlpha = 1;
        ctx.drawImage(cimg2, 0,0, 300, 300);
        ctx.globalAlpha = 0.5;
        ctx.drawImage(cimg, 0,0, 300, 300);
    });
    function draw(uri){
        cimg2.crossOrigin = "anonymous";
        $(cimg2).attr('src', uri);
    }
    function clear(){
        ctx.clearRect(0,0, 300,300);
    }
    $('#tbutton').click(() => {
        clear();
        draw($('#urlinput').val());
    })
    $('#dbutton').click(() => {
        dbutton.setAttribute('href', mc.toDataURL('image/png'));
    })
    $('#rbutton').click(clear);
})