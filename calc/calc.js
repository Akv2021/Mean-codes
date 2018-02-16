class Calculator{

    operation(firstNo,secondNo,operator)
{
    var expression=firstNo + operator + secondNo;
    return eval(expression);
}
}