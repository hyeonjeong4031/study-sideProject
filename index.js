// navi scroll 구현

const aTag = document.querySelectorAll(".navi")
for(let i=0; i<aTag.length; i++){
    aTag[i].onclick= function(e){
        e.preventDefault();
        const target =document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            'behavior':"smooth",
            'top':target.offsetTop
        
        })
    }
}


// 탭버튼 구현


const tabButton = document.querySelectorAll('#tab-list li a')
const tabs = document.querySelectorAll('#tab-list li')
for(let i=0; i<tabButton.length; i++){
    tabButton[i].onclick=function(e){
        e.preventDefault();
    }
}
for(let i=0; i<tabs.length; i++){
    tabs[i].onclick =function(){
        let tabid = this.querySelector("a").getAttribute("href");
        console.log(this.classList);
        document.querySelectorAll("#tab-list li, #techList div" ).forEach(function(item){
            item.classList.remove("active")
        console.log(item);
    });
    document.querySelector(tabid).classList.add("active");
    this.classList.add("active")
    }
}

//탭버튼 정보
