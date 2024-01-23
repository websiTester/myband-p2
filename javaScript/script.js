function openModel() {
    var modal = document.querySelector(".js-modal");
    modal.classList.add("open");
}

function closeModel() {
    var modal = document.querySelector(".js-modal");
    modal.classList.remove("open");
    var modalContainer = document.querySelector(".js-modal-container");
    modalContainer.addEventListener("click", function(e) {
        e.stopPropagation();
    })
    
}
var headerHeight = header.clientHeight; 
//Biến này sử dụng chung, lưu giá trị đầu tiên của header
function mobileMenu() {
    var header = document.getElementById("header");
    
    if(header.clientHeight===headerHeight) {
        header.style.height="auto";
    } else {
        header.style.height="50px";
    }
}


function menuBar() {
    var menuItems = document.querySelectorAll("#nav li a");
    for(var i=0;i<menuItems.length;i++) {
        var item = menuItems[i];
        if(i<4)
        item.onclick= function() {
            var header = document.getElementById("header");
            header.style.height="50px"; 
        } 
    }
}
