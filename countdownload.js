//<![CDATA[
function generate() {
    var linkDL = document.getElementById("download"),
        btn = document.getElementById("btn"),
        direklink = document.getElementById("download").href,
        waktu = 15;
    var teks_waktu = document.createElement("span");
    linkDL.parentNode.replaceChild(teks_waktu, linkDL);
    var id;
    id = setInterval(function () {
        waktu--;
        if (waktu < 0) {
            teks_waktu.parentNode.replaceChild(linkDL, teks_waktu);
            clearInterval(id);
            window.location.replace(direklink);
            linkDL.style.display = "inline";
   
        } else {
            teks_waktu.innerHTML = "<i class='fa fa-clock-o' aria-hidden='true'/> " + "Please wait in" + "" + waktu.toString() + " second";
            btn.style.display = "none";
        }
    }, 1000);
}
//]]>
