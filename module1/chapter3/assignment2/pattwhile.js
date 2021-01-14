/* pattern using while loop
1
11
1111
11111
111111
1111111 */

counter = 0;
string = '';

while (counter < 7){
    string += '1';
    counter++;
    if(counter == 3)
        continue;
    console.log(string)   
}