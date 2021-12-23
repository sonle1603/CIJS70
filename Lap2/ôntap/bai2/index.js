let item = document.getElementById('div');
item.addEventListener("mouseover",()=>{
  item.setAttribute("style", "background-color:blue;")
})

item.addEventListener("mouseout",()=>{
    item.setAttribute("style", "background-color: '';" )
})
