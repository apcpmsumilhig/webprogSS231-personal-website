function myGit) {
    document.getElementById("demo").innerHTML="Paragraph changed.";
}

function myLinkedin() {
    const element = document.getElementsByTagName("p");

    
    document.getElementById("demo").innerHTML = '<br> The text in first paragraph (index 0) is: <br>' + element[0].innerHTML;

}