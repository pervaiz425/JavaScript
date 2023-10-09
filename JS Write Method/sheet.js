function changetext() {
    document.getElementById('catch').innerHTML = '<h1>My name is Ahmad</h1>';
    document.getElementById('catch').style.backgroundColor = 'red';
}

console.log('Hello World');

const studentName = {
    firstName: "Asad",
    lastName: "Ali",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

console.log("I am Working");

// Open the document for writing
document.open();
//open() method opens a new browser window, or a new tab, depending on your browser settings and the parameter values
//and then by using write method we can write the content in the document and it will overrirde the previous content

// Write the new content
document.write(studentName.fullName());

// Close the document writing
document.close();
