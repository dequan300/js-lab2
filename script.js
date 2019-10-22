const randomDamage = () => {
    return Math.floor(Math.random() * 10 + 1);

}
const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * 2);
    return randNum === 0 ? opt1 : opt2;

    // ternary operator up above
    // if (ranNum === 0) {
    //     return opt1;
    // } else if (ranNum === 1) {
    //     return opt2;
    // }
}

function attackPlayer(health) {
    let damage = health;
    let finalDamage = damage - randomDamage();
    return finalDamage;
}

const logHealth = (player, health) => {
    console.log(`${player} health: ${health}`)
}

const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`)
}

const isDead = (health) => {
    return health <= 0 ? true : false;
}

function fight(player1, player2, player1Health, player2Health) {
    while (true) {
        let attacker = chooseOption(player1, player2);
        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);

            if (isDead(player2Health)) {
                logDeath(player1, player2);
                break;
            }
        } else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            if (isDead(player1Health)) {
                logDeath(player2, player1);
                break;
            }


        }



    }


}
fight("dequan", "laura", 100, 100);