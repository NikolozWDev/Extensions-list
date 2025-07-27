// return json data
const loadData = async () => {
    let localData = localStorage.getItem('myData')
    if(localData) {
        return JSON.parse(localData)
    } else {
        const response = await fetch('data/data.json');
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
function attachClick(displayedData, allData) {
    const clElement = document.querySelectorAll('.cl-element')
    clElement.forEach((element, index) => {
        element.addEventListener('click', () => {
            const actualIndex = allData.findIndex(obj => obj.name === displayedData[index].name);

            if(allData[actualIndex].isActive) {
                allData[actualIndex].isActive = false;
                element.classList.remove('actived');
            } else {
                allData[actualIndex].isActive = true;
                element.classList.add('actived');
            }

            localStorage.setItem('myData', JSON.stringify(allData));
        })
    })
}


// generating HTML
function renderCards(displayedData, allData) {
    result = ''
    displayedData.forEach(item => {
        result += `
            <div class="all flex flex-col gap-[40px] p-[18px] bg-white dark:bg-dneu8 border-[1px] border-lneu3 dark:border-dneu7 rounded-[14px] shadow-sm">
                <div class="flex flex-row justify-start items-start gap-[14px]">
                    <img src="${item.logo.slice(12)}">
                    <div class="flex flex-col justify-center items-start gap-[4px]">
                        <p class="text-[20px] dark:text-white font-bold">${item.name}</p>
                        <p class="text-[16px] h-[50px] dark:text-stone-400">${item.description}</p>
                    </div>
                </div>

                <div class="flex flex-row justify-between items-center">
                    <a href='https://github.com/NikolozWDev' target='_blank'><button class="btn-remove dark:bg-dneu8 border-[1px] dark:border-dneu7 text-[14px] dark:text-white rounded-[16px] py-[6px] px-[14px]
                    hover:opacity-[0.7] transition-all duration-[0.2s] cursor-pointer">Github</button></a>
                    <div class="cl-element cursor-pointer w-[38px] h-[20px] bg-stone-400 dark:bg-stone-600 rounded-[20px] border-[1px] border-stone-500
                    dark:border-stone-700 ${item.isActive ? 'actived' : ''}
                    flex flex-row justify-start items-center"><div class="w-[16px] h-[16px] bg-white rounded-[50%]"></div></div>
                </div>
            </div>
        `
    })
    if(result === '') {
        boxContainer.innerHTML = `
        <div class='flex flex-row justify-center items-center px-[6px] py-[6px] bg-red-500 rounded-[20px]'>
        <p class='text-white font-bold text-[16px]'>There are not any box</p>
        </div>
        `
    } else {
        boxContainer.innerHTML = result
    }
    attachClick(displayedData, allData)
}


// working with data and manipulate HTML with DOM
const renderBoxes = async () => {
    const myData = await loadData();

    const btnGen = document.querySelectorAll('.btn-gen');

    btnGen[0].addEventListener('click', () => {
        btnGen[0].classList.add('btn-actived')
        btnGen[1].classList.remove('btn-actived')
        btnGen[2].classList.remove('btn-actived')

        let displayedData = [...myData];

        renderCards(displayedData, myData)
    })

    btnGen[1].addEventListener('click', () => {
        btnGen[0].classList.remove('btn-actived')
        btnGen[1].classList.add('btn-actived')
        btnGen[2].classList.remove('btn-actived')

        let displayedData = myData.filter(item => item.isActive)

        renderCards(displayedData, myData)
    })

    btnGen[2].addEventListener('click', () => {
        btnGen[0].classList.remove('btn-actived')
        btnGen[1].classList.remove('btn-actived')
        btnGen[2].classList.add('btn-actived')

        let displayedData = myData.filter(item => !item.isActive)

        renderCards(displayedData, myData)
    })

    btnGen[0].click();
}


// dark mode
const initTheme = () => {

    const savedTheme = localStorage.getItem('theme')
    if(savedTheme == 'sun') {
        dlImg.src = 'images/icon-moon.svg'
        htmlElement.classList.remove('dark')
        htmlElement.classList.add('sun')
    } else if(savedTheme == 'dark') {
        dlImg.src = 'images/icon-sun.svg'
        htmlElement.classList.remove('sun')
        htmlElement.classList.add('dark')
    }

    
    dlMode.addEventListener('click', () => {
        if(dlImg.src.includes('sun') && htmlElement.classList.contains('dark')) {
            dlImg.src = 'images/icon-moon.svg'
            htmlElement.classList.remove('dark')
            htmlElement.classList.add('sun')
            localStorage.setItem('theme', 'sun')
        } else if(dlImg.src.includes('moon') && htmlElement.classList.contains('sun')) {
            dlImg.src = 'images/icon-sun.svg'
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