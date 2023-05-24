const mark = {
    weight1: 78,
    height1: 1.69,
    weight2: 95,
    height2: 1.88
}
const john = {
    weight1:92,
    height1: 1.95,
    weight2:85,
    height2: 1.76
}

const mark1BMI = mark.weight1 / (mark.height1*mark.height1)
const mark2BMI = mark.weight2 / (mark.height2*mark.height2)
const john1BMI = john.weight1 / (john.height1*john.height1)
const john2BMI = john.weight2 / (john.height2*john.height2)

let markHigherBMI

//with data 1:
markHigherBMI = mark1BMI > john1BMI;
if (markHigherBMI) {
    console.log(`Mark's MBI (${mark1BMI}) is higher than John's BMI (${john1BMI})`)
} else {
    console.log(`John's MBI (${john1BMI}) is higher than Mark's BMI (${mark1BMI})`)
}
//with data 2:
markHigherBMI = mark2BMI > john2BMI;
if (markHigherBMI) {
    console.log(`Mark's MBI (${mark2BMI}) is higher than John's BMI (${john2BMI})`)
} else {
    console.log(`John's MBI (${john2BMI}) is higher than Mark's BMI (${mark2BMI})`)
}