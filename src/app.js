const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]



const [work,play,study,excercise,social,care] = [...data]

/// Daily
document.querySelector(".daily").addEventListener('click',function(){
    /// current
    document.querySelector(".current-work").textContent = `${work.timeframes.daily.current}hrs`
    document.querySelector(".current-play").textContent = `${play.timeframes.daily.current}hrs`
    document.querySelector(".current-study").textContent = `${study.timeframes.daily.current}hrs`
    document.querySelector(".current-exe").textContent = `${excercise.timeframes.daily.current}hrs`
    document.querySelector(".current-social").textContent = `${social.timeframes.daily.current}hrs`
    document.querySelector(".current-self").textContent = `${care.timeframes.daily.current}hrs`
    /// previous
    document.querySelector(".previous-work").textContent = `Last Week - ${work.timeframes.daily.previous}hrs`
    document.querySelector(".previous-play").textContent = `Last Week - ${play.timeframes.daily.previous}hrs`
    document.querySelector(".previous-study").textContent = `Last Week - ${study.timeframes.daily.previous}hrs`
    document.querySelector(".previous-exe").textContent = `Last Week - ${excercise.timeframes.daily.previous}hrs`
    document.querySelector(".previous-social").textContent = `Last Week - ${social.timeframes.daily.previous}hrs`
    document.querySelector(".previous-self").textContent = `Last Week - ${care.timeframes.daily.previous}hrs`
})

/// Weekly

document.querySelector(".weekly").addEventListener('click',function(){
    /// current
    document.querySelector(".current-work").textContent = `${work.timeframes.weekly.current}hrs`
    document.querySelector(".current-play").textContent = `${play.timeframes.weekly.current}hrs`
    document.querySelector(".current-study").textContent = `${study.timeframes.weekly.current}hrs`
    document.querySelector(".current-exe").textContent = `${excercise.timeframes.weekly.current}hrs`
    document.querySelector(".current-social").textContent = `${social.timeframes.weekly.current}hrs`
    document.querySelector(".current-self").textContent = `${care.timeframes.weekly.current}hrs`

    /// previous
    document.querySelector(".previous-work").textContent = `Last Week - ${work.timeframes.weekly.previous}hrs`
    document.querySelector(".previous-play").textContent = `Last Week - ${play.timeframes.weekly.previous}hrs`
    document.querySelector(".previous-study").textContent = `Last Week - ${study.timeframes.weekly.previous}hrs`
    document.querySelector(".previous-exe").textContent = `Last Week - ${excercise.timeframes.weekly.previous}hrs`
    document.querySelector(".previous-social").textContent = `Last Week - ${social.timeframes.weekly.previous}hrs`
    document.querySelector(".previous-self").textContent = `Last Week - ${care.timeframes.weekly.previous}hrs`
})

/// Monthly

document.querySelector(".monthly").addEventListener('click',function(){
    /// current
    document.querySelector(".current-work").textContent = `${work.timeframes.monthly.current}hrs`
    document.querySelector(".current-play").textContent = `${play.timeframes.monthly.current}hrs`
    document.querySelector(".current-study").textContent = `${study.timeframes.monthly.current}hrs`
    document.querySelector(".current-exe").textContent = `${excercise.timeframes.monthly.current}hrs`
    document.querySelector(".current-social").textContent = `${social.timeframes.monthly.current}hrs`
    document.querySelector(".current-self").textContent = `${care.timeframes.monthly.current}hrs`

    /// previous

    document.querySelector(".previous-work").textContent = `Last Week - ${work.timeframes.monthly.previous}hrs`
    document.querySelector(".previous-play").textContent = `Last Week - ${play.timeframes.monthly.previous}hrs`
    document.querySelector(".previous-study").textContent = `Last Week - ${study.timeframes.monthly.previous}hrs`
    document.querySelector(".previous-exe").textContent = `Last Week - ${excercise.timeframes.monthly.previous}hrs`
    document.querySelector(".previous-social").textContent = `Last Week - ${social.timeframes.monthly.previous}hrs`
    document.querySelector(".previous-self").textContent = `Last Week - ${care.timeframes.monthly.previous}hrs`
})