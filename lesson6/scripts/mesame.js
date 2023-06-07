function submitForEachExample() {
    let studentData = document.getElementById('studentData').value;
    studentData = studentData.split(', ');
    studentData.forEach(function(student) {
        if (parseInt(student) < 12) {
            document.getElementById('result').innerHTML += student + 'you must be minnimum 12 years old <br>';
        }

        else if (parseInt(student) > 12) {
            document.getElementById('result').innerHTML += student + 'You are okey <br>';
        }
    })

}

// 12 ze qvevit asaks ar akmayopilebs da 12 ze zevit asaks akmayopilebs.