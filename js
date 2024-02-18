const { Client } = require("discord.js");

const bot = new Client({ intents: ["Guilds"] });
console.log("Connexion au bot...");
bot.login("")
    .then(() => console.log("Connecté au bot !"))
    .catch((error) => console.log("Impossible de se connecter au bot - " + error));

bot.on("ready", async () => {

    await bot.application.commands.set([
        {
            name: "paul",
            description: "victor"
        }
    ]);

    console.log("Oregua est un bot crée par Pyyvyy.");
    console.log("Oregua semble être prêt à passer à l'action...");
});

bot.on("interactionCreate", (interaction) => {

    if (!interaction.isCommand()) return;

    if (interaction.commandName === "paul")
        interaction.reply("victor");
});
