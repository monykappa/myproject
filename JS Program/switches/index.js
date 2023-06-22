let grade = "20";

switch (true){
    case grade >= 90:
    console.log('You got A');
    console.log('You did Excellent');
    break;

    case  grade >= 80:
    console.log('You got B');
    console.log('You did great');
    break;

    case grade >= 70:
    console.log('You got C');
    console.log('You did good');
    break;

    case grade >= 60:
    console.log('You got D');
    console.log('You did okay');
    break;

    case grade >= 50:
    console.log('You got E');
    console.log('You almost fail mf');
    break;

    case grade <50 :
    console.log('You falied');
    break;

    default:
    console.log(grade, 'is not a letter grade!!');
}