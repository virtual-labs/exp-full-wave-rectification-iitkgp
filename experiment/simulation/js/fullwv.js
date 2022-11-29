
//startn();
var canvas, ctx;
var flag;
var axes = {};
var vmaxs = 2; //in volt
var tmaxs = 0.001; //in sec
function startn() {
//    var bttn = document.getElementById("strt").value;
//    if (bttn == "Off") {
//        document.getElementById("strt").value = "On";
//
//        ctx.clearRect(0, 0, canvas.width, canvas.height);
//        document.getElementById("sncr").disabled = true;//input wave
//        document.getElementById("run").disabled = true;//output wave
//    }
//    else {
//        document.getElementById("strt").value = "Off";
//
//        document.getElementById("sncr").disabled = false;//input wave
//        document.getElementById("run").disabled = false;//output wave
//
//    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("peakslider").disabled = true;
    document.getElementById("fullps").disabled = true;
    document.getElementById("phs").disabled = true;
    document.getElementById("peakslider2").disabled = true;
    document.getElementById("flrcps").disabled = true;
//    document.getElementById("peakslider").value = "";
//    document.getElementById("fullps").value = "";
//    document.getElementById("phs").value = "";
//    document.getElementById("peakslider2").value = "";
//    document.getElementById("flrcps").value ="";
//    document.getElementById("vp").value = "";
//    document.getElementById("flps").value = "";
//    document.getElementById("phase").value = "";
//    document.getElementById("pksld").value = "";
//    document.getElementById("flrec").value = "";
}

function draw() {
    canvas = document.getElementById("mycanvas");

    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");

    // fill canvas
    ctx.fillStyle = "white";
//    document.getElementById("tym").style.display = "block";
//    document.getElementById("volt").style.display = "block";
    document.getElementById("peakslider").disabled = false;
    document.getElementById("fullps").disabled = false;
    document.getElementById("phs").disabled = false;
    document.getElementById("chhn1").disabled = false;
    document.getElementById("chhn2").disabled = false;
    document.getElementById("dual").disabled = false;
    document.getElementById("grnd").disabled = false;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx);
    drawAxis();
    sinecrv();
}

//---------------------------------channel 1-----------------------------------------------//
function sliderChange() {
    var slidr = document.getElementById("peakslider").value;
    document.getElementById("vp").value = slidr;
    //draw();
    if (flag == 1) {
        draw();
    }
    if (flag == 3) {
        drawn();
    }
    if (flag == 4) {
        drawg();
    }
}
function posichnge() {
    var psl = document.getElementById("fullps").value;
    document.getElementById("flps").value = psl;
    //draw();
    if (flag == 1) {
        draw();
    }
    if (flag == 3) {
        drawn();
    }
    if (flag == 4) {
        drawg();
    }
}
function phasesld() {
    var phsl = document.getElementById("phs").value;
    document.getElementById("phase").value = phsl;
    // draw();
    if (flag == 1) {
        draw();
    }
    if (flag == 3) {
        drawn();
    }
    if (flag == 4) {
        drawg();
    }
}

// -------------------------input sine curve--------------------------------------//
function sinecrv() {

    var vp = document.getElementById("peakslider").value;
    var pos1 = document.getElementById("fullps").value;
    var phase = document.getElementById("phase").value;
    // var fo=document.getElementById("freq").value;

    var x0 = 0, x1 = 30,
            y0 = 0, y1 = 240;
//---------------------------------------------------------Input Sinewave-------------------------------------------------------------------------------//
    flag = 1;
    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.font = "20px Georgia";
    ctx.fillStyle = "Black";
    ctx.fillText("Input wave:", 40, 20);
    ctx.strokeStyle = "black";
    for (x0 = 31; x0 < canvas.width; x0++) {
        y0 = vp * Math.sin(0.1 * x0 + phase * 3.1415 / 180) + 80;
        ctx.lineTo(x0, y0 + 10 + parseInt(pos1));
    }
    ctx.stroke();
}

function chnlo() {
    draw();
}

//-----------------------------------------For Channel 2-----------------------------------------------------------------------------------//
function drwn() {
    canvas = document.getElementById("mycanvas");

    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    document.getElementById("chhn2").disabled = false;
    document.getElementById("dual").disabled = false;
    document.getElementById("grnd").disabled = false;
    document.getElementById("peakslider").disabled = true;
    document.getElementById("fullps").disabled = true;
    document.getElementById("phs").disabled = true;
    document.getElementById("peakslider2").disabled = false;
    document.getElementById("flrcps").disabled = false;

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx);
    drawAxis();
    sinc();
}

//--------------------------------Channel 2--------------------------------------------------//
function slidrchng() {
    var pch2 = document.getElementById("peakslider2").value;
    document.getElementById("pksld").value = pch2;
    //chnlt();
    //drwn();
    if (flag == 2) {
        drwn();
    }
    if (flag == 3) {
        drawn();
    }
    if (flag == 4) {
        drawg();
    }
}
function poschg() {
    var post = document.getElementById("flrcps").value;
    document.getElementById("flrec").value = post;
    // chnlt();
    //drwn();
    if (flag == 2) {
        drwn();
    }
    if (flag == 3) {
        drawn();
    }
    if (flag == 4) {
        drawg();
    }
}

//-------------------------------- output sine curve--------------------------------------//
function sinc() {

    var vps = document.getElementById("peakslider2").value;
    var pos2 = document.getElementById("flrcps").value;

    // var fo=document.getElementById("freq").value;

    var x0 = 0, x1 = 30,
            y0 = 0, y1 = 240;
    flag = 2;
    ctx.beginPath();
    ctx.lineWidth = 1.5;
    //ctx.moveTo(x1, y1);
    ctx.font = "20px Georgia";
    ctx.fillStyle = "Black";
    ctx.fillText("Output wave:", 40, 160);
    ctx.strokeStyle = "black";


    for (z = 0; z <= canvas.width; z += 31.5) {

        for (x0 = 32; x0 < 63; x0++) {
            y0 = vps * Math.sin(0.1 * x0) + 140;
            ctx.lineTo(x0 + z, y0 + 100 + parseInt(pos2)); //1st +v sine curve
        }
    }
    ctx.stroke();
}

function chnlt() {
    drwn();
}

//----------------------------------------------------- For Both Channel ---------------------------------------------------------------------------------//
function drawn() {
    canvas = document.getElementById("mycanvas");

    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    document.getElementById("peakslider").disabled = false;
    document.getElementById("fullps").disabled = false;
    document.getElementById("phs").disabled = false;
    document.getElementById("peakslider2").disabled = false;
    document.getElementById("flrcps").disabled = false;
    drawGrid(ctx);
    drawAxis();
    sinwvb();
}

function sinwvb() {

    var vp = document.getElementById("peakslider").value;
    var pos1 = document.getElementById("fullps").value;
    var phase = document.getElementById("phase").value;
    // var fo=document.getElementById("freq").value;

    var x0 = 0, x1 = 30,
            y0 = 0, y1 = 240;
    flag = 3;
//---------------------------------------------------------Input Sinewave-------------------------------------------------------------------------------//

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.font = "20px Georgia";
    ctx.fillStyle = "Black";
    ctx.fillText("Input wave:", 40, 20);
    ctx.strokeStyle = "black";
    for (x0 = 31; x0 < canvas.width; x0++) {
        y0 = vp * Math.sin(0.1 * x0 + phase * 3.1415 / 180) + 80;
        ctx.lineTo(x0, y0 + 10 + parseInt(pos1));
    }
    ctx.stroke();
//---------------------------------------------------------Output Fullwave Rectifier--------------------------------------------------------------------//
    var vps = document.getElementById("peakslider2").value;
    var pos2 = document.getElementById("flrcps").value;
    // var fo=document.getElementById("freq").value;

    var x0 = 0, x1 = 30,
            y0 = 0, y1 = 240;

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    //ctx.moveTo(x1, y1);
    ctx.font = "20px Georgia";
    ctx.fillStyle = "Black";
    ctx.fillText("Output wave:", 40, 160);
    ctx.strokeStyle = "black";

    for (z = 0; z <= canvas.width; z += 31.5) {

        for (x0 = 32; x0 < 63; x0++) {
            y0 = vps * Math.sin(0.1 * x0) + 140;
            ctx.lineTo(x0 + z, y0 + 100 + parseInt(pos2)); //1st +v sine curve
        }
    }
    ctx.stroke();
}

function bthd() {
    drawn();
}

//------------------------------------------------------- For Ground-----------------------------------------------------------------------------------//
function drawg() {
    canvas = document.getElementById("mycanvas");

    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    document.getElementById("peakslider").disabled = false;
    document.getElementById("fullps").disabled = false;
    document.getElementById("phs").disabled = false;
    document.getElementById("peakslider2").disabled = false;
    document.getElementById("flrcps").disabled = false;
    drawGrid(ctx);
    drawAxis();
    singr();
}

function singr() {
    var vp = 0;
    var pos1 = document.getElementById("fullps").value;
    var phase = document.getElementById("phase").value;
    // var fo=document.getElementById("freq").value;

    var x0 = 0, x1 = 30,
            y0 = 0, y1 = 240;
    flag = 4;
//---------------------------------------------------------Input Sinewave-------------------------------------------------------------------------------//

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.font = "20px Georgia";
    ctx.fillStyle = "Black";
    ctx.fillText("Input wave:", 40, 20);
    ctx.strokeStyle = "black";
    for (x0 = 31; x0 < canvas.width; x0++) {
        y0 = vp * Math.sin(0.1 * x0 + phase * 3.1415 / 180) + 80;
        ctx.lineTo(x0, y0 + 10 + parseInt(pos1));
    }
    ctx.stroke();
//---------------------------------------------------------Output Fullwave Rectifier--------------------------------------------------------------------//
    var vps = 0;
    var pos2 = document.getElementById("flrcps").value;
    // var fo=document.getElementById("freq").value;

    var x0 = 0, x1 = 30,
            y0 = 0, y1 = 240;

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    //ctx.moveTo(x1, y1);
    ctx.font = "20px Georgia";
    ctx.fillStyle = "Black";
    ctx.fillText("Output wave:", 40, 160);
    ctx.strokeStyle = "black";

    for (z = 0; z <= canvas.width; z += 31.5) {

        for (x0 = 32; x0 < 63; x0++) {
            y0 = vps * Math.sin(0.1 * x0) + 140;
            ctx.lineTo(x0 + z, y0 + 100 + parseInt(pos2)); //1st +v sine curve
        }

    }
    ctx.stroke();
}

function grnd() {
    drawg();
}

  
//---------------------------------------------------------Drawing Axis----------------------------------------------------------------------------------//          
function drawAxis() {

    axes.x0 = .5 + .5 * canvas.width;
    // alert(axes.x0 );
    axes.y0 = .5 + .5 * canvas.height;
    // alert( axes.y0 );
    // axes.scale = 50;
    axes.xscale = (canvas.width) / (2 * tmaxs); 	// x pix per s
    axes.yscale = (canvas.height) / (4 * vmaxs);    // y pix per V
    axes.N = 101;
    //alert(axes.xscale );
//alert(axes.yscale );
//alert(axes.N );

    axes.doNegativeX = true;
    ctx.lineWidth = 0.5;
    ctx.lineWidth = ticklinewidth;
    ctx.strokeStyle = tickcolor;

    drawHorizontalAxis();
    drawVerticalAxis();
    drawVerticalAxisTicks();
    drawHorizontalAxisTicks();
    //  label();

}

function drawGrid(ctx) {

    var w = ctx.canvas.width;
    var h = ctx.canvas.height;
    for (var x = 0; x < w; x += 43.5) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
    }

    for (var y = 0; y < h; y += 44) {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
    }
    ctx.strokeStyle = "Gainsboro";
    ctx.stroke();
}

var axismargin = 30,
        axisorigin = {x: 0, y: 310 - 10},
axistop = axismargin - 30,
        axisright = 520,
        horzntickspcng = 30,
        vrtcltickspcng = 30,
        axiswidth = axisright,
        axisheight = axisorigin.y,
        numofvrtcltick = axisheight / vrtcltickspcng,
        numofhorzntick = axiswidth / horzntickspcng,
        tickwidth = 10,
        ticklinewidth = 0.5,
        tickcolor = 'black',
        axislinewidth = 1.0,
        axiscolor = 'lightgray';

//------------------------------------------------------Horizontal Axis----------------------------------------------------------------------------------//
function drawHorizontalAxis() {
//    ctx.beginPath();
//    ctx.moveTo(axisorigin.x, axisorigin.y-130);
//    ctx.lineTo(axisright, axisorigin.y-130);
//    ctx.stroke();
    var y0 = axes.y0, w = ctx.canvas.width;

//
    ctx.beginPath();
    ctx.strokeStyle = "rgb(128,128,128)";
    ctx.moveTo(0, y0);
    ctx.lineTo(w, y0);  // X axis
    ctx.stroke();
}
////------------------------------------------------------Vertical Axis------------------------------------------------------------------------------------//          
function drawVerticalAxis() {
//    ctx.beginPath();
//    ctx.moveTo(axisorigin.x+270, axisorigin.y+100);
//    ctx.lineTo(axisorigin.x+270, axistop);
//    ctx.stroke();
    var x0 = axes.x0, h = ctx.canvas.height;
    ctx.beginPath();
    ctx.strokeStyle = "rgb(128,128,128)";
    ctx.moveTo(x0, 0);
    ctx.lineTo(x0, h);  // Y axis
    ctx.stroke();
}
//-------------------------------------------------------Vertical Ticks--------------------------------------------------------------------------------//         
function drawVerticalAxisTicks() {
    var deltaX;

    for (var i = 1; i < numofvrtcltick; ++i) {
        ctx.beginPath();

        if (i % 5 === 0)
            deltaX = tickwidth / 2;
        else
            deltaX = tickwidth / 2;

        ctx.moveTo(axisorigin.x += 180 - deltaX,
                axisorigin.y + 120 - i * vrtcltickspcng);

        ctx.lineTo(axisorigin.x + 180 + deltaX,
                axisorigin.y + 120 - i * vrtcltickspcng);
        ctx.stroke();

    }
}
//-------------------------------------------------------Horizontal Ticks----------------------------------------------------------------------------------//     
function drawHorizontalAxisTicks() {
    var deltaY;

    for (var i = 1; i < numofhorzntick; ++i) {
        ctx.beginPath();

        if (i % 5 === 0)
            deltaY = tickwidth / 2;
        else
            deltaY = tickwidth / 2;

        ctx.moveTo(axisorigin.x + i * horzntickspcng,
                axisorigin.y - 30 - deltaY);

        ctx.lineTo(axisorigin.x + i * horzntickspcng,
                axisorigin.y - 30 + deltaY);

        ctx.stroke();
    }
}
////-------------------------------------------------------Horizontal and Vertical Ticks label------------------------------------------------------------//
//function label() {
//    var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
//            gap = 30,
//            x = 0,
//            j = 0,
//            i = 0;
//    // draw the xtexts
//    ctx.font = "11px Courier New";
//    ctx.fillStyle = "Black";
//    for (i = 0; i < num.length; i++) {
//        ctx.fillText(num[i], x + 28, 320);
//        x += 30;
//    }
//    //draw ytexts
//    var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
//    var y = 0;
//    ctx.font = "11px Courier New";
//    ctx.fillStyle = "Black";
//    for (j = 8; j >= 1; j--) {
//        ctx.fillText(num[j], 15, y + 60);
//        y += 31;
//    }
//}


//---------------------------------Print------------------------------------------------//

function printf() {
    window.print();
}


