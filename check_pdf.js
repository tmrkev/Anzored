const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('s:\\Users\\Asus\\Documents\\GitHub\\arabic-learning-app\\data\\books\\medina\\1611134869_medinskiy_kurs_1_tom (1).pdf');

pdf(dataBuffer).then(function(data) {
    const text = data.text;
    
    // Find all occurrences of "الدرس" and "تمرين"
    const lines = text.split('\n');
    let lessonCount = 0;
    let exerciseCount = 0;
    let results = [];

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        if (line.includes('الدَّرْسُ') || line.includes('الدرس')) {
            results.push(`Lesson match: ${line}`);
            lessonCount++;
        }
        if (line.includes('تَمْرِينٌ') || line.includes('تمرين')) {
            results.push(`Exercise match: ${line}`);
            exerciseCount++;
        }
    }

    console.log(`Total lessons found: ${lessonCount}`);
    console.log(`Total exercises found: ${exerciseCount}`);
    
    fs.writeFileSync('pdf_results.txt', results.join('\n'));
    console.log('Results written to pdf_results.txt');
}).catch(function(error) {
    console.error(error);
});
