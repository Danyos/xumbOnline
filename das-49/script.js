let info = {
    main: {
        name: "join",
        surname: "Heicopters",
        email: "jonhelpers@mail.ru",
        phone: "095256559865",
        address: "yerevan",
        linkedin: "http://www.linkedin.com",
        portfolio: "http://www.",
        avatar: "http://avatars.githubusercontent.com/u/",
    },
    experience: [
        {
            id: 1,
            title: "Web development company",
            company: "Flydigital armenian",
            location: "Armenia yerevan",
            from: "2020",
            to: "2022",
        },
        {
            id: 2,
            title: "Web development company",
            company: "Danisoft armenian",
            location: "Armenia yerevan",
            from: "2018",
            to: null,
        }
    ],
    education: [
        {
            id: 1,
            school: "119 school",
            degree: "junior",
            from: "2003",
            to: "2017"
        },
        {
            id: 2,
            school: "Atom planet",
            degree: "junior",
            from: "2015",
            to: "2016"
        }
    ],
    interest: "No interesting",
    skills: [
        {
            id: 1,
            name: "Html5",
            level: "secondary",
        }, {
            id: 2,
            name: "Css3",
            level: "middle",
        },
        {}
    ],
    languages: [
        {
            id: 1,
            name: "English",
            level: "middle",
        },
        {
            id: 2,
            name: "Spanish",
            level: "middle",
        }, {
            id: 3,
            name: "French",
            level: "middle",
        },
    ],
    additional: "lorem ipsum dolor sit amet, consectetur adipisicing elit"
}
let result ={
    current:0,
    worning:0
}
let vicablerys=['orange', 'purple','apples', 'mango', 'pumpkin', 'milk','ipsum','red', 'green','yellow','pink']
for (let i=0; i<vicablerys.length; i++) {
    let id=Math.floor(Math.random()*vicablerys.length)
    let current=prompt(randomWord(vicablerys[id]))
    if (current===vicablerys[id]){
        result.current++
    }else{
        result.worning++
    }
    vicablerys.splice(id, 1)
    i--
    console.log(vicablerys)
}
function randomWord(word) {
    word=word.split('')
    let result=''
    for (let i=0; i<word.length; i++) {
        let index=Math.floor(Math.random()*word.length)
        result+=word[index]
        word.splice(index,1)
        i--
    }

    return result

}
console.log(result)