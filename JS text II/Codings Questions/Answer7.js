let student={
    name:'John',
    age:14,
    grades:[
        50,40,60,90
    ]
}

const calculateAverage=(student)=>{
    let total=0
    for(let i=0;i<student.grades.length;i++){
        total+=student.grades[i];
    }
    let average=total / student.grades.length
    console.log("Average: ",average)
}
calculateAverage(student)