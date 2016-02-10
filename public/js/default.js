var menu;
var headerItem;

window.onload = function() {
    headerItem = document.querySelector(".headerItem");  
    menu = document.querySelector(".menu"); 
    
    headerItem.addEventListener("pointerdown", downHandler);
    headerItem.addEventListener("pointerup", upHandler);
    headerItem.addEventListener("pointerout", cancelHandler);
    headerItem.addEventListener("pointercancel", cancelHandler);
    headerItem.addEventListener("pointerover", downHandler);

    menu.addEventListener("pointerover", downHandler);
    menu.addEventListener("pointerout", cancelHandler);
};

function downHandler(eventObject) {
    menu.classList.add("shown");
}

function upHandler(eventObject) {
    if (eventObject.pointerType == "mouse") {
        menu.classList.remove("shown");
        alert("Header clicked");
    }
}

function cancelHandler(eventObject) {
    menu.classList.remove("shown");
}

