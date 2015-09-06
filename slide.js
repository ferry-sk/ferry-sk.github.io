

else {
        var tmp=document.getElementById('sh_front');
        tmp.style.opacity=op;
        tmp.style.filter='progid:DXImageTransform.Microsoft.Alpha(opacity='+
              Math.round(op*100)+')';
 
        setTimeout('fade()',50);
    }
}
 
function waiting() {
    fade();
