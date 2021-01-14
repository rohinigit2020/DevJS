counter = 0;
string = '';

do{
    string += '1';
    counter++;
    if(counter == 3)
        continue;
    console.log(string)   
}while (counter < 7)