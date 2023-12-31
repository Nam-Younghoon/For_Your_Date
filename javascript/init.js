const chatUrl = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`
const tempUserForm = {}
const data = [
    {
        "role": "system",
        "content": "assistant는 친절하고 전문적인 데이트코스 계획가이다."
    },
    {
        "role": "user",
        "content": "서울 데이트코스 알려줘."
    },
    {
        "role": "assistant",
        "content": "서울에서의 데이트코스를 계획해 드릴게요! 1. 청계천과 남대문시장: 데이트를 시작하기에 좋은 장소로 청계천을 따라 산책하면서 낭만적인 분위기를 느낄 수 있고, 남대문시장에서는 다양한 음식과 소품들을 구경할 수 있습니다. 2. 북촌 한옥마을과 경복궁: 한국의 전통 문화와 아름다운 풍경을 경험할 수 있는 북촌 한옥마을에서 산책을 즐겨보세요. 이후에는 경복궁을 방문하여 서울의 역사를 느낄 수 있습니다. 3. 인사동과 명동: 인사동은 전통적인 한옥 거리로, 다양한 공예품과 전통 문화를 즐길 수 있습니다. 이후에는 명동으로 이동하여 쇼핑이나 맛집 탐방을 즐길 수 있습니다. 4. 홍대와 합정동: 젊은이들 사이에서 인기 있는 지역으로, 다양한 레스토랑, 카페, 예술 공간 등을 탐방하며 즐거운 시간을 보낼 수 있습니다. 5. 한강과 여의도: 한강을 따라 산책하면서 데이트를 즐기는 것도 좋은 선택입니다. 특히 여의도는 야경이 아름다워 사진 촬영 등 특별한 순간을 만들 수 있습니다. 이 외에도 서울에는 다양한 데이트 코스가 있으니, 파트너와 대화를 나누어 선호하는 취향에 맞는 장소를 선택하면 좋을 것 같아요."
    },
    {
        "role": "user",
        "content": "걸어서 데이트를 할 수 있게 각 추천 장소마다 3km 이내로 설정해서 다시 알려줘."
    },
    {
        "role": "assistant",
        "content": "각 추천 장소마다 3km 이내로 설정하여 조합하였으니 참고해주세요. 1. 명동 - 남대문 시장 - 덕수궁 - 명동에서 쇼핑이나 카페를 즐긴 뒤, 남대문 시장에서 현지의 다양한 먹거리와 소품을 구경합니다. 그 후 덕수궁으로 이동하여 아름다운 정원을 함께 산책할 수 있습니다. 2. 청계천 - 동대문 디자인 플라자(DDP) - 광장시장 - 청계천에서 연인과 함께 어울리며 천의 아름다운 풍경을 감상합니다. 이어서 DDP로 이동하여 다양한 전시물과 아트 굿즈를 즐길 수 있습니다. 마지막으로 광장시장에서 맛있는 길거리 음식을 함께 맛보세요. 3. 한강 공원 - 여의도 한강공원 - 선유도공원 - 한강을 따라 걷는 다양한 산책로에서 편안하게 이동할 수 있습니다. 여의도 한강공원에 도착하면 각종 먹거리와 놀이시설을 즐기세요. 마지막으로 선유도공원에서 일몰을 함께 감상할 수 있습니다. 4. 경리단길 - 서울 국립현대미술관 - 이태원 - 경리단길은 다양한 상점과 음식점이 있는 독특한 분위기의 거리입니다. 국립현대미술관에서 현대미술 작품을 감상한 뒤, 이태원으로 이동하여 다양한 레스토랑과 바에서 로맨틱한 저녁을 즐길 수 있습니다. 5. 종로 - 창덕궁 - 이화여자대학교 - 종로에서 한국 전통문화에 대해 배워보세요. 창덕궁에서 예쁜 정원과 한복 체험을 즐길 수 있습니다. 이화여자대학교(이대)에서는 아늑한 분위기의 카페나 음식점에서 휴식을 즐길 수 있습니다. 위의 코스들은 서울에서 걸어서 즐길 수 있는 다양한 데이트 장소를 포함하고 있습니다. 각 장소는 약간의 변동이 있을 수 있으니 사전에 확인해보시고 즐거운 데이트를 즐기시길 바랍니다."
    },
    {
        "role": "user",
        "content" : "오후 4시부터 오후 9시정도까지 데이트할 수 있게 야경이 예쁜 것도 섞어서 추천해줘"
    },
    {
        "role": "assistant",
        "content": "오후 4시부터 오후 9시까지 도보로 이동할 수 있는 서울 데이트 코스를 알려드리겠습니다. 각 장소 사이의 거리는 약 3km 이내로 설정하겠습니다. 1. 청계천 (출발점) - 오후 4시 서울의 상징적인 청계천에서 데이트를 시작해보는 것은 어떠신가요? 낭만적인 분위기와 함께 산책을 즐길 수 있고, 다양한 행사나 문화 공연도 진행되는 곳입니다. 2. 광화문 및 경복궁 - 오후 5시 청계천에서부터 광화문과 경복궁까지 약 2km정도의 거리입니다. 스타일리시한 광화문 거리에 위치한 다양한 카페와 레스토랑에서 식사를 즐기고, 경복궁에서 아름다운 조경과 역사적인 건물들을 구경할 수 있습니다. 3. 남산 - 오후 6시 경복궁에서 도보로 약 1km 거리에 있는 남산은 서울의 중심부에서도 자연을 느낄 수 있는 곳입니다. 남산 타워에서 서울의 야경을 감상하며 로맨틱한 분위기를 만끽할 수 있습니다. 4. 명동 - 오후 7시 남산에서 약 1.5km 정도 걸어서 명동에 도착합니다. 유명한 쇼핑거리로 유명하며 다양한 음식점과 상점이 즐비해있어 데이트 식사나 쇼핑을 즐길 수 있습니다. 또한, 밤에는 명동거리의 환상적인 야간 경치를 즐길 수 있습니다. 5. 한강공원 - 오후 8시 명동에서 약 2km 거리에 위치한 한강공원으로 이동합니다. 한강공원은 서울의 대표적인 데이트 장소로 유명하며 야간에는 한강의 감성적인 야경을 볼 수 있습니다. 함께 산책을 하거나 강가에서 편안한 시간을 보낼 수 있습니다. 6. 이태원 - 오후 9시 한강에서 약 2km 정도 걸어서 이태원에 도착합니다. 다양한 음식점과 바가 모인 이태원에서 맛있는 음식과 맥주를 즐길 수 있으며, 분위기 있는 클럽이나 바에서 마무리할 수도 있습니다. 이러한 서울 데이트 코스를 따라가면 오후 4시부터 오후 9시까지 약 3km 이내의 거리로 다양한 장소와 야경을 즐길 수 있을 것입니다. 즐겁고 로맨틱한 데이트 되시길 바랍니다!"
    },
    {
        "role" : "user",
        "content": "대중교통을 이용해서 데이트할 수 있게 추천해줘."
    },
    {
        "role" : "assistant",
        "content" : "이제부터 오후 4시부터 오후 9시까지의 데이트 코스를 안내해드리겠습니다. 1. 서울역: 오후 12시에 서울역을 만나서 출발합니다. 서울역은 역사적인 건물이기도 하고, 근처에는 쇼핑몰과 카페도 많아서 시작하는 장소로 좋습니다. 2. 덕수궁: 지하철 3호선을 이용해서 경복궁역에서 하차한 뒤 덕수궁으로 이동합니다. 가을에는 단풍이 아름답게 펼쳐지는 곳으로 유명하며, 조용한 분위기에서 데이트하기에 안성맞춤입니다. 3. 청계천: 덕수궁에서 산책하며 청계천으로 이동합니다. 걷다보면 다양한 거리음식과 예쁜 다리들을 만날 수 있습니다. 날씨가 좋다면 야외에서 피크닉을 즐길 수도 있습니다. 4. 인사동: 청계천에서 남으로 걸어가면 인사동에 도착합니다. 이곳은 전통적인 한옥 거리로 유명하며, 다양한 공예품과 전통음식을 즐길 수 있습니다. 또한 다양한 박물관과 갤러리가 있어서 문화적인 즐길거리도 많습니다. 5. 남영동 우리집: 서울역에서 버스를 타고 남영동에 위치한 '우리집'으로 이동합니다. 이 곳은 전통적인 한옥을 개조한 카페로, 이국적인 분위기에서 커피를 즐길 수 있습니다. 6. 마리나몰: 마지막으로 마리나몰로 이동합니다. 지하철 9호선을 이용해서 신논현역으로 이동한 뒤 도보로 이동할 수 있습니다. 이곳에서 저녁식사를 하거나 영화를 보며 데이트를 마무리할 수 있습니다. 이렇게 서울역에서 출발해서 덕수궁, 청계천, 인사동, 남영동 우리집, 마리나몰을 돌아 다니는 데이트 코스로 즐거운 시간을 보낼 수 있을 것입니다. 주의해야 할 점은 각 장소에 도착하는 시간을 고려하여 일정을 조절하는 것입니다."
    },
]

$(document).ready(function() {
    init();
    enterEvent();
    clickPlanBtn();
    clickBackBtn();
    recommandBtn();
    homeBtn();
    saveResult();
})

function init() {
    $('#main').show();
    $('#plan').hide();
    $('#loading').hide();
    $('#result').hide();
    $('#history').hide();
    $('#history-detail').hide();
}

function clickPlanBtn() {
    $('#plan-now').click(function() {
        $('#main').fadeOut(500, function() {
            $('#plan').fadeIn(500)
        })
    })

    $('#history-btn').click(() => {
        $('#main').fadeOut(500, function() {
            $('#history').fadeIn(500)
        })
    })
}

function clickBackBtn() {
    $('#back-button').click(function() {
        $('#plan').fadeOut(500, function() {
            $('#main').fadeIn(500, function() {
                initUserForm()
            });
        });
    })

    $('#history-back-button').click(function() {
        $('#history').fadeOut(500, function() {
            $('#main').fadeIn(500)
        });
    })
}

function enterEvent() {
    $('#plan').keyup(function(key) {
        if(key.keyCode === 13) {
            $('#recommand-now').click()        
        }
    })
}

function recommandBtn() {
    $('#recommand-now').click(function() {
        const userInput = getInputData()
        if(userInput !== null) {
            data.push({
                "role": "user",
                "content": userInput
            })

            $('#plan').fadeOut(500, async function() {
                $('#loading').fadeIn(500)
            
                const response = await fetch(chatUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data),
                    redirect: 'follow'
                })

                const json = await response.json()
                const answer = json.choices[0].message.content

                $('#gpt-answer').val(answer)
                $('#loading').fadeOut(500, () => {
                    $('#result').fadeIn(500)
                    cachingUserData(userInput, answer)
                })
            })
        }
    })
}

function homeBtn() {
    $('#home-btn').click(() => {
        $('#result').fadeOut(500, () => {
            $('#main').fadeIn(500, () => {
                initUserForm()
            })
        })
    })
}

function saveResult() {
    $('#result-save-btn').click(() => {
        const date = new Date();
        localStorage.setItem(date.toISOString(), JSON.stringify(tempUserForm))
        alert('저장이 완료되었습니다')
        $('#result').fadeOut(500, () => {
            $('#main').fadeIn(500, () => {
                initUserForm()
                refreshHistory()
            })
        })
    })
}