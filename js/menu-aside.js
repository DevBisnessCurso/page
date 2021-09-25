const navigation = qS('.content-navigations-aside')
const show = qS('.button-menu')
const showdropdown = qS('.menu-aside')
const icondropdown = qS('.icon-dropdown-menu')
const closeAutoMenu = qS('.menu-aside')

navigation.addEventListener('click', e => {
    if(e.target.tagName === "DIV" && e.target.classList.contains('content-navigations-aside')) {
        navigation.classList.toggle('aside-open')
    }
})
show.addEventListener('click', () => {
        navigation.classList.toggle('aside-open')
})

showdropdown.addEventListener('click', e => {
    if(e.target.tagName === "SPAN" && e.target.classList.contains('menu-link-aside')) {
        e.target.parentNode.children[1].classList.toggle('show-subemnuaside')
        e.target.children[0].classList.toggle('icon-dropdown-rotate')
    }
})

let  mediaqueryAside = window.matchMedia("(max-width: 640px)");
mediaqueryAside.addListener(EventoMediaQueryList => {
    closeAutoMenu.addEventListener('click', e => {
        if(e.target.classList.contains('submenu-link-aside') && e.target.tagName === "A"){
            navigation.classList.toggle('aside-open')
        }
    })
});