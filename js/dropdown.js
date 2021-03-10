export default function openDropdownMenu(idButton, menu,classMenu){
    const button = document.getElementById(idButton.trim());
    const menuElement = document.getElementById(menu.trim());
    document.addEventListener('click', ()=> menuElement.classList.remove(classMenu));
    button.addEventListener('click', (e)=> {
        menuElement.classList.toggle(classMenu.trim());
        e.stopPropagation();
    });
}