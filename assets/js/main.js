var m_count = 1;
window.addEventListener("load", initevent);
function initevent() {
    document.querySelector("#menu").addEventListener("click", menu);
    document.querySelector("#video").addEventListener("click", video);
    document.querySelector("#close").addEventListener("click", close);
}
function menu() {
    if (m_count == 1) {
        document.querySelector("#menu-c").style.display = "initial";
        m_count = 0;
    }
    else {
        document.querySelector("#menu-c").style.display = "none";
        m_count = 1;
    }
}
function video(){
    document.querySelector("#video-c").classList.add("video-anim");
    document.querySelector("#mainvideo").style.display = "block";
}
function close(){
    document.querySelector("#video-c").classList.remove("video-anim");
    document.querySelector("#video-c").classList.remove("video-anim1");
    document.querySelector("#mainvideo").style.display = "none";
}