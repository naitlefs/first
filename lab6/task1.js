function generate() {
    let name, activity, friend, gift;

    name = document.getElementById('name').value;
    activity = document.getElementById('activity').value;
    friend = document.getElementById('friend').value;
    gift = document.getElementById('gift').value;

    let header = `${name} и ${gift}`;
    let mainText = `В одном лесу жила маленькая ${name}, которая очень любила ${activity} чудесные песни. 
                У нее так хорошо получалось, что весь лес собирался послушать ее! От сороки она узнала, что у людей
                принято дарить ${gift} любимым исполнителям. А ${gift} она любила так же сильно, как и ${activity}.
                Долго грустила пташка. Но однажды, после очередного импровизированного концерта, ${friend} подлетел к 
                ${name} и подарил ей... ${gift}! Уж он то был истинным джентельменом! ${name} была невероятно счастлива!!!`;

    let newWin = window.open("about:blank", "hello", "width=600,height=300");
    newWin.document.write(`
    <div style="border: 3px solid; padding: 5px">
        <h1>${header}</h1>
        <hr>
        <div>
        ${mainText}
        </div>
        <p><button onclick="window.close()">Закрыть</button>    
    </div>
    `);
}