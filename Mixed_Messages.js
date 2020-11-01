let randomNumber = (num) => 
{
    return Math.floor(Math.random()*num);
}

const deathAllocate = 
{
    speciesType:['Human','Animal','Bird','Insect','Fish','Reptile'],
    specificType:['Male','Female'],
    superPower:['fly higher!','see in dark!','breathe in water!','be flexible as rubber!','hunt any animal!','can play Piano!','have invisible power!','run faster!'],
}

let finalChoice = [];
console.log('===========================');
console.log('   WELCOME TO THE MATRIX');
console.log('===========================');

console.log('In this game, matrix will show what being you have been in your previous birth!');

console.log('\n');
console.log('Getting logs...');
console.log('\n');
console.log('Initiating Server...');
console.log('.');
console.log('.');
console.log('.');
console.log('.');
console.log('.');
console.log('\n');

console.log('During Previous Birth You are a .....');
console.log('\n');

for(let i in deathAllocate)
{
    let optionSelect = randomNumber(deathAllocate[i].length);

    switch(i)
    {
        case 'speciesType':
            finalChoice.push('SPECIES: You are '+deathAllocate[i][optionSelect]);
        break;
        case 'specificType':
            finalChoice.push('GENDER: You are '+deathAllocate[i][optionSelect]);
        break;
        case 'superPower':
            finalChoice.push('SUPER-POWER: You can '+deathAllocate[i][optionSelect]);
        break;
        default:
            finalChoice.push('=============');
            finalChoice.push('YOU ARE A GOD');
            finalChoice.push('=============');

    }
}

let asciiFormat = (format) =>
{
    console.log('==========================');
    console.log('Loading Interface...');
    console.log('Matrix Says...');
    
    console.log('\n');
    
    console.log(' /\\/\\/\\/\\/\\/\\/\\/\\');
    console.log(' |              |');
    console.log('|   ===     ===  |');
    console.log('|   0        0   |');
    console.log('|        |       |');
    console.log('|        <       |');
    console.log(' |              |');
    console.log('  |   ------   |');
    console.log('   \\          /');
    console.log('     \\\/\\/\\/\\/   ');
    console.log('\n');
    
    const formatted = finalChoice.join('\n');
    console.log(formatted);
    console.log('========================');
    console.log('\n');
    console.log('========================');
    console.log('Thank You For contacting Matrix.');
    console.log('Exiting Matrix');
    console.log('========================');
}

asciiFormat(finalChoice);