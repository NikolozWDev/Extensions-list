// return json data
const loadData = async () => {
    let localData = localStorage.getItem('myData')
    if(localData) {
        return JSON.parse(localData)
    } else {
        const response = await fetch('/data/data.json');
        const data = await response.json();
        return data;
    }
}


// DOM variables
const boxContainer = document.querySelector('#box-container');
const dlMode = document.querySelector('#mode');
const dlImg = document.querySelector('#dl-img');
const htmlElement = document.documentElement;


// attach click to row data
function attachClick(myData) {
    const clElement = document.querySelectorAll('.cl-element')
    clElement.forEach((element, index) => {
        element.addEventListener('click', () => {
            if(myData[index].isActive) {
                myData[index].isActive = false
                element.classList.remove('actived')
            } else {
                myData[index].isActive = true
                element.classList.add('actived')
            }
            localStorage.setItem('myData', JSON.stringify(myData))
        })
    })
}


// working with data and manipulate HTML with DOM
const renderBoxes = async () => {

    const myData = await loadData();

    const btnGen = document.querySelectorAll('.btn-gen');
    btnGen[0].addEventListener('click', () => {
    btnGen[0].classList.add('btn-actived')
    btnGen[1].classList.remove('btn-actived')
    btnGen[2].classList.remove('btn-actived')
    let result = ``
    let i = 0;
    while(i < myData.length) {

        result += `
                <div class="flex flex-col gap-[20px] p-[18px] bg-white dark:bg-dneu8 border-[1px] border-lneu3 dark:border-dneu7 rounded-[14px] shadow-sm">
                <div class="flex flex-row justify-start items-start gap-[14px]">
                    <img src="${myData[i].logo}">
                    <div class="flex flex-col justify-center items-start gap-[4px]">
                        <p class="text-[20px] dark:text-white font-bold">${myData[i].name}</p>
                        <p class="text-[12xp] dark:text-stone-400">${myData[i].description}</p>
                    </div>
                </div>

                <div class="flex flex-row justify-between items-center">
                    <button class="dark:bg-dneu8 border-[1px] dark:border-dneu7 text-[14px] dark:text-white rounded-[16px] py-[6px] px-[14px] tracking-[1.2px]
                    hover:opacity-[0.7] transition-all duration-[0.2s] cursor-pointer">View</button>
                    <div class="cl-element cursor-pointer w-[38px] h-[20px] bg-stone-400 dark:bg-stone-600 rounded-[20px] border-[1px] border-stone-500
                    dark:border-stone-700 ${myData[i].isActive ? 'actived' : ''}
                    flex flex-row justify-start items-center"><div class="w-[16px] h-[16px] bg-white rounded-[50%]"></div></div>
                </div>
            </div>
        `

        i++
    };
    boxContainer.innerHTML = result;
    attachClick(myData)
    })
    btnGen[1].addEventListener('click', () => {
    btnGen[0].classList.remove('btn-actived')
    btnGen[1].classList.add('btn-actived')
    btnGen[2].classList.remove('btn-actived')
    let result = ``
    let i = 0;
    while(i < myData.length) {
        if(myData[i].isActive) {
            result += `
                <div class="flex flex-col gap-[20px] p-[18px] bg-white dark:bg-dneu8 border-[1px] border-lneu3 dark:border-dneu7 rounded-[14px] shadow-sm">
                <div class="flex flex-row justify-start items-start gap-[14px]">
                    <img src="${myData[i].logo}">
                    <div class="flex flex-col justify-center items-start gap-[4px]">
                        <p class="text-[20px] dark:text-white font-bold">${myData[i].name}</p>
                        <p class="text-[12xp] dark:text-stone-400">${myData[i].description}</p>
                    </div>
                </div>

                <div class="flex flex-row justify-between items-center">
                    <button class="dark:bg-dneu8 border-[1px] dark:border-dneu7 text-[14px] dark:text-white rounded-[16px] py-[6px] px-[14px] tracking-[1.2px]
                    hover:opacity-[0.7] transition-all duration-[0.2s] cursor-pointer">View</button>
                    <div class="cl-element cursor-pointer w-[38px] h-[20px] bg-stone-400 dark:bg-stone-600 rounded-[20px] border-[1px] border-stone-500
                    dark:border-stone-700 ${myData[i].isActive ? 'actived' : ''}
                    flex flex-row justify-start items-center"><div class="w-[16px] h-[16px] bg-white rounded-[50%]"></div></div>
                </div>
            </div>
        `
        }

        i++
    };
    boxContainer.innerHTML = result;
    attachClick(myData)
    })
    btnGen[2].addEventListener('click', () => {
    btnGen[0].classList.remove('btn-actived')
    btnGen[1].classList.remove('btn-actived')
    btnGen[2].classList.add('btn-actived')
    let result = ``
    let i = 0;
    while(i < myData.length) {
        if(!(myData[i].isActive)) {
                    result += `
                <div class="flex flex-col gap-[20px] p-[18px] bg-white dark:bg-dneu8 border-[1px] border-lneu3 dark:border-dneu7 rounded-[14px] shadow-sm">
                <div class="flex flex-row justify-start items-start gap-[14px]">
                    <img src="${myData[i].logo}">
                    <div class="flex flex-col justify-center items-start gap-[4px]">
                        <p class="text-[20px] dark:text-white font-bold">${myData[i].name}</p>
                        <p class="text-[12xp] dark:text-stone-400">${myData[i].description}</p>
                    </div>
                </div>

                <div class="flex flex-row justify-between items-center">
                    <button class="dark:bg-dneu8 border-[1px] dark:border-dneu7 text-[14px] dark:text-white rounded-[16px] py-[6px] px-[14px] tracking-[1.2px]
                    hover:opacity-[0.7] transition-all duration-[0.2s] cursor-pointer">View</button>
                    <div class="cl-element cursor-pointer w-[38px] h-[20px] bg-stone-400 dark:bg-stone-600 rounded-[20px] border-[1px] border-stone-500
                    dark:border-stone-700 ${myData[i].isActive ? 'actived' : ''}
                    flex flex-row justify-start items-center"><div class="w-[16px] h-[16px] bg-white rounded-[50%]"></div></div>
                </div>
            </div>
        `   
        }

        i++
    };
    boxContainer.innerHTML = result;
    attachClick(myData)
    })

    btnGen[0].click()
};


// dark mode
const initTheme = () => {

    const savedTheme = localStorage.getItem('theme')
    if(savedTheme == 'sun') {
        dlImg.src = '/src/assets/images/icon-moon.svg'
        htmlElement.classList.remove('dark')
        htmlElement.classList.add('sun')
    } else if(savedTheme == 'dark') {
        dlImg.src = '/src/assets/images/icon-sun.svg'
        htmlElement.classList.remove('sun')
        htmlElement.classList.add('dark')
    }

    
    dlMode.addEventListener('click', () => {
        if(dlImg.src.includes('sun') && htmlElement.classList.contains('dark')) {
            dlImg.src = '/src/assets/images/icon-moon.svg'
            htmlElement.classList.remove('dark')
            htmlElement.classList.add('sun')
            localStorage.setItem('theme', 'sun')
        } else if(dlImg.src.includes('moon') && htmlElement.classList.contains('sun')) {
            dlImg.src = '/src/assets/images/icon-sun.svg'
            htmlElement.classList.remove('sun')
            htmlElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        }
    })

}

// start
document.addEventListener('DOMContentLoaded', () => {
    renderBoxes();
    initTheme();
});