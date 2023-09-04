function initUserForm() {
    $('#place-where').val('');
    $('#form-select-season option:eq(0)').prop('selected', true);
    $('#form-select-date-start option:eq(0)').prop('selected', true);
    $('#form-select-date-end option:eq(0)').prop('selected', true);
    $("input[name='transport'][value='walk']").prop("checked", true);

    for (let key in tempUserForm) {
        delete tempUserForm[key]
    }
}


function getInputData() {
    const place = $('#place-where').val()
    const weather = $('#form-select-season').val()
    const dateStart = $('#form-select-date-start').val()
    const dateEnd = $('#form-select-date-end').val()
    const transport = $("input[name='transport']:checked").val();

    const validation = validateInputData(place, weather, dateStart, dateEnd, transport)

    if(!validation) {
        return null;
    }

    const userRequirement = parseInputData(place, weather, dateStart, dateEnd, transport)
    tempUserForm.place = place
    
    return userRequirement
}

function validateInputData(place, weather, dateStart, dateEnd, transport) {
    if((place === undefined || place.length === 0 || place === null)) {
        alert('데이트 장소를 입력해주세요.\n ex)서울시')
        return false
    } else if (weather === '선택하세요') {
        alert('데이트 하는 계절을 선택해주세요')
        return false
    } else if (dateStart === '선택하세요') {
        alert('데이트 시작 시간을 선택해주세요')
        return false
    } else if (dateEnd === '선택하세요') {
        alert('데이트 종료 시간을 선택해주세요')
        return false
    } else {
        return true
    }
}

function parseInputData(place, weather, dateStart, dateEnd, transport) {
    const parseWeather = () => {
        if(weather === 'spring') {
            return '봄'
        } else if(weather === 'summer') {
            return '여름'
        } else if(weather === 'fall') {
            return '가을'
        } else {
            return '겨울'
        }
    }
    
    const parseTransport = () => {
        if(transport === 'walk') {
            return '걸어서'
        } else if(transport === 'public') {
            return '대중교통을 이용해서'
        } else {
            return '내 차를 타고'
        }
    }

    return `${place}에서 데이트를 할거야. 지금 계절은 ${parseWeather()}이고, 데이트는 ${dateStart}에 만나서 ${dateEnd}까지 할거야. ${parseTransport()} 이동할 건데 ${parseWeather()}에 맞게 데이트 코스를 계획해줘`
}

function cachingUserData(userInput, gptAnswer) {
    const date = new Date()
    const today = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`
    
    tempUserForm.date = today
    tempUserForm.question = userInput
    tempUserForm.answer = gptAnswer
    
    return
} 