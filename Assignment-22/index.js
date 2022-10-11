const btn = document.querySelector(".ham");
const sidebar = document.querySelector(".sidebar-wrapper");
let a =0 ;
btn.addEventListener("click",function(){
    if(a==0){
        sidebar.classList.add('hide');
        btn.innerHTML = '=';
        a++;
    }else{
        sidebar.classList.remove('hide');
        btn.innerHTML = 'X';
        a--;  
    }
});
