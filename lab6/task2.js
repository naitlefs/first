window.onload = () => {
    document.getElementById("submit").addEventListener("click", function (event) {
        event.preventDefault();

        let painters = document.querySelector('.select').options;
        let painter = painters[painters.selectedIndex].text;
        let painterImg = painters[painters.selectedIndex].value;
        let text = document.querySelector('.text').value;
        let background = document.querySelector('.radio:checked').value;
        let dekor = document.getElementsByName('dekor[]');

        let styles = 'font-size: 30px;';
        for (let i = 0; i < dekor.length; i++) {
            if (dekor[i].checked) {
                switch (dekor[i].value) {
                    case 'italic':
                        styles += 'font-style: italic;'
                        break;
                    case 'bold':
                        styles += 'font-weight: bold;'
                        break;
                    case 'underscore':
                        styles += 'text-decoration: underline;'
                        break;
                }
            }
        }

        let newWin = window.open("about:blank", "hello", "width=600, height=600px");
        newWin.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <style>
                body {
                    border: 3px solid;
                    padding: 5px;
                    background-image: url(${background}.jpeg);
                }
            </style>
        </head>
        <body>
            <p style="${styles}">${painter}</p>
            <img src="${painterImg}.jpg" width="200px" alt="">
            <p style="${styles}">${text}</p>
            <button onclick="window.close()">Закрыть</button>
        </body>
        </html>
        `);
    });
}