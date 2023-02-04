let x = document.querySelector("#formElem")
let uniqIdData = [
    {
        id: 1,
        uId: 1245,
    },
    {
        id: 2,
        uId: 5555,
    },
    {
        id: 3,
        uId: 1111,
    },
    {
        id: 4,
        uId: 2222,
    },
]
x.onsubmit = (e) => {
    e.preventDefault(); //gortcoxuyan kangkam reshi kang
    let info = {}
    let y = new FormData(x)
    for (let [key, value] of y) {
        info[key] = value
    }

    validate.call(info)
}

function validate() {
let i=1
    for (const argumentsKey in this) {
        if (this[argumentsKey].length > 2) {

            success(argumentsKey)
        } else {
            errors("warning", argumentsKey)
            i=0

        }

    }
    if(i===1){
        action(this['uniqueId'],this)
    }

}

function errors(msg, key) {
    let myerrors = document.querySelector(`.errors-${key}`)
    if (msg === 'warning2') {
        myerrors.innerHTML = '<i class="fa fa-warning" style="font-size:24px;color:red"></i>'
    } else {
        myerrors.innerHTML = `<i class="fa  fa-${msg}"></i>`
    }

}

function success(key) {
    let myerrors = document.querySelector(`.errors-${key}`)
    myerrors.innerHTML = '<i class="fa fa-check"></i>'

}

function action(arg,info) {

    let uids = uniqIdData.find(res => res.uId === +arg)
    if (uids) {
        success('uniqueId')
        let lg=localStorage.getItem('user')
        if(lg){
            let a=JSON.parse(lg)
            localStorage.setItem('user',JSON.stringify([...a,info]))
        }else{
            localStorage.setItem('user',JSON.stringify([info]))
        }
    } else {
        errors("warning2", 'uniqueId')
    }
}