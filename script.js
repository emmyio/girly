const users = [
  { id: "325815288211963906", usernameId: "emmy-username", avatarId: "emmy-avatar", statusDotId: "emmy-status-dot" },
  { id: "773076782214938634", usernameId: "mikai-username", avatarId: "mikai-avatar", statusDotId: "mikai-status-dot" },
  { id: "1297502058450259981", usernameId: "tristen-username", avatarId: "tristen-avatar", statusDotId: "tristen-status-dot" },
  { id: "748674766663319592", usernameId: "jayden-username", avatarId: "jayden-avatar", statusDotId: "jayden-status-dot" },
  { id: "395754091646812161", usernameId: "rayan-username", avatarId: "rayan-avatar", statusDotId: "rayan-status-dot" },
  { id: "1318334211211395204", usernameId: "kush-username", avatarId: "kush-avatar", statusDotId: "kush-status-dot" },
  { id: "1318334211211395204", usernameId: "jas-username", avatarId: "jas-avatar", statusDotId: "jas-status-dot" },
  { id: "1198518954113642548", usernameId: "harper-username", avatarId: "harper-avatar", statusDotId: "harper-status-dot" }
];

users.forEach(user => {
  fetch(`https://api.lanyard.rest/v1/users/${user.id}`)
    .then(res => res.json())
    .then(data => {
      const u = data.data.discord_user;
      const status = data.data.discord_status;
      const avatar = `https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.png?size=128`;

      document.getElementById(user.avatarId).src = avatar;
      document.getElementById(user.usernameId).textContent = "@" + u.username.toLowerCase();

      const dot = document.getElementById(user.statusDotId);
      if (status === "online") dot.style.backgroundColor = "#3ba55d";
      else if (status === "idle") dot.style.backgroundColor = "#faa61a";
      else if (status === "dnd") dot.style.backgroundColor = "#ed4245";
      else dot.style.backgroundColor = "#747f8d";
    });
});
