let ROLES = {
    "Городничий": [],
    "Аммос Федорович": [],
    "Артемий Филиппович": [],
    "Лука Лукич": [],
};
let TEXT_LINES = "Городничий. Я пригласил вас, господа, с тем чтобы сообщить вам пренеприятное известие: к нам едет ревизор.\n" +
    "Аммос Федорович. Как ревизор?\n" +
    "Артемий Филиппович. Как ревизор?\n" +
    "Городничий. Ревизор из Петербурга, инкогнито. И еще с секретным предписаньем.\n" +
    "Аммос Федорович. Вот те на!\n" +
    "Артемий Филиппович. Вот не было заботы, так подай!\n" +
    "Лука Лукич. Господи Боже! еще и с секретным предписаньем!";

window.onload = () => {
    parse(ROLES, TEXT_LINES);
    display(ROLES);
}

function parse(roles, text) {
    let splicedLines = text.split('\n');

    let i = 1;
    for (const line in splicedLines) {
        for (const role in roles) {
            let roleString = role + '. ';

            if (splicedLines[line].includes(roleString)) {
                roles[role].push({
                    index: i,
                    line: splicedLines[line].replace(roleString, ''),
                })
            }
        }

        i++;
    }
}

function display(roles) {
    for (let role in roles) {
        let roleDiv = document.createElement('div');
        roleDiv.innerHTML = role + ': ';
        document.body.append(roleDiv);
        for (let i = 0; i < ROLES[role].length; i++) {
            let lineDiv = document.createElement('div');
            lineDiv.innerHTML = `${ROLES[role][i].index}) ${ROLES[role][i].line}`
            document.body.append(lineDiv);
        }
    }
}