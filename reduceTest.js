const list = [
    {
        task: "Get bread",
        isCompleted: false
    },
    {
        task: "Get eggs",
        isCompleted: true
    },
    {
        task: "Get milk",
        isCompleted: false
    },
    {
        task: "Get job",
        isCompleted: true
    },
    {
        task: "Get cash",
        isCompleted: true
    },
]


countOfRemainingItems = () => {
    list.reduce((accumulator, currentValue) => {
        if (currentValue.isCompleted === false) {
            accumulator++
        }
        return accumulator
    }, 0)
}

console.log(countOfRemainingItems())   //   returns