const dateStartSelectBox = () => {
    const dateArray = []

    for (let i=6; i<12; i++) {
        dateArray.push(`오전 ${i}시`)
    }
    dateArray.push('오후 12시');
    for(let i=1; i<12; i++) {
        dateArray.push(`오후 ${i}시`)
    }

    const selectBoxDateStart = document.querySelector('#form-select-date-start');

    const selectBoxDateEnd = document.querySelector('#form-select-date-end');
    
    dateArray.forEach((item) => {
        const optionsStart = document.createElement('option')
        optionsStart.innerText = item
        optionsStart.value = item

        const optionsEnd = document.createElement('option')
        optionsEnd.innerText = item
        optionsEnd.value = item
        
        selectBoxDateStart.appendChild(optionsStart)
        selectBoxDateEnd.appendChild(optionsEnd)
    });
    
}



dateStartSelectBox();