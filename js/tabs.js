export const tabs = {
    tabsContainer: document.getElementById('tabs'),
    indicatorTab: document.querySelector('.indicator'),
    initTabs() {
        const firstTab= this.tabsContainer.firstElementChild;
        this.setOffsetLeft(firstTab);   
        this.setActiveTab(firstTab);
        this.getPositonIndicatorTabs();
    },
    getPositonIndicatorTabs(){
        this.tabsContainer.addEventListener('click', (e)=>{
            const target = e.target;
            if (target.classList.contains('tab__link')) {
                e.preventDefault();
                const currentTab = target.parentElement;
                this.setOffsetLeft(currentTab);
                setTimeout(()=>  this.setActiveTab(currentTab), 400); 
            }
        });
    },
    setOffsetLeft(tab){
        const widthTab = tab.clientWidth;
        this.indicatorTab.style.width = `${widthTab - 25}px`;
        this.indicatorTab.style.left = `${tab.offsetLeft + (widthTab / 2)}px`;
    },
    setActiveTab(tab){
        Array.from(this.tabsContainer.children).forEach((tab)=>{
            tab.classList.remove('tab__item--active');
        });
        tab.classList.add('tab__item--active');
    }
}
