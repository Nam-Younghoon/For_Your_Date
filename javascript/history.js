const getHistory = () => {
    const localKeys = Object.keys(localStorage)

    const historyContainer = document.querySelector('#history');

    localKeys.forEach(item => {
        const json = localStorage.getItem(item)
        const value = JSON.parse(json)
        const historyItem = document.createElement('div')
        historyItem.innerText = value["date"] + " - " + value["place"]
        historyItem.className = "card history-title"
        historyContainer.appendChild(historyItem)

        historyItem.addEventListener('click', (e) => {
            $('#history').fadeOut(500,() => {
                const $question = document.querySelector('.history-detail-question')
                const $answer = document.querySelector('.history-detail-answer')

                $question.innerText = value['question']
                $answer.innerText = value['answer']

                $('#historyKey').val(item)
                $('#history-detail').fadeIn(500)
            })
        })


    })    
}

const refreshHistory = () => {
    document.querySelectorAll('.history-title').forEach(item => item.remove())
    getHistory()
}

const closeBtnTapped = () => {
    $('#close-btn').click(() => {
        $('#history-detail').fadeOut(500,() => {
            $('#history').fadeIn(500)
            $('#historyKey').val('')
        })
    })
}

const deleteBtnTapped = () => {
    $('#delete-btn').click(() => {
        const result = confirm('정말 삭제하시겠어요?')
        const historyKey = $('#historyKey').val()
        if(result) {
            localStorage.removeItem(historyKey)
            refreshHistory()
            $('#close-btn').trigger('click')
        } else {
            return
        }
    })
}

getHistory();
closeBtnTapped()
deleteBtnTapped()