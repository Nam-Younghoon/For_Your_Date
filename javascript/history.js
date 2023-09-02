const getHistory = () => {
    const localKeys = Object.keys(localStorage)

    const historyContainer = document.querySelector('#history');

    localKeys.forEach(item => {
        const json = localStorage.getItem(item)
        const value = JSON.parse(json)
        const historyItem = document.createElement('div')
        historyItem.innerText = value["date"]
        historyItem.className = "card"
        historyContainer.appendChild(historyItem)

        historyItem.addEventListener('click', (e) => {
            $('#history').fadeOut(500,() => {
                const $question = document.querySelector('.history-detail-question')

                const $answer = document.querySelector('.history-detail-answer')

                $question.innerText = value['question']

                $answer.innerText = value['answer']

                $('#history-detail').fadeIn(500)
            })

        })
    })    
}

const closeBtnTapped= () => {
    $('#close-btn').click(() => {
        $('#history-detail').fadeOut(500,() => {
            $('#history').fadeIn(500)
        })
    })
}

getHistory();
closeBtnTapped()