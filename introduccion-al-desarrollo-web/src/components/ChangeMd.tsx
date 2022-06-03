import "../styles/ChangeMd.css";
import routes from "../steps/stepsRouting.json";
import { Link } from "react-router-dom";

const ChangeMd = () => {

  const emojis = "😀 😃 😄 😁 😆 😅 😂 🤣 😇 😉 😊 🙂 🙃 ☺ 😋 😌 😍 🥰 😘 😗 😙 😚 🥲 🤪 😜 😝 😛 🤑 😎 🤓 🥸 🧐 🤠 🥳 🤡 😏 😶 😐 😑 😒 🙄 🤨 🤔 🤫 🤭 🤗 🤥 😳 😞 😟 😤 😠 😡 🤬 😔 😕 🙁 ☹ 😬 🥺 😣 😖 😫 😩 🥱 😪 😮‍💨 😮 😱 😨 😰 😥 😓 😯 😦 😧 😢 😭 🤤 🤩 😵 😵‍💫 🥴 😲 🤯 🤐 😷 🤕 🤒 🤮 🤢 🤧 🥵 🥶 😶‍🌫️ 😴 💤 😈 👿 👹 👺 💩 👻 💀 ☠ 👽 🤖"

  return (
    <div className="changemd-component-container">
      {routes.map((route, i) => {
        let randomEmoji = emojis.split(" ")[Math.floor(Math.random()*emojis.split(" ").length)];
        return (
          <Link to={route.path} key={i}>
            <p>{(i+1).toString() + " " + randomEmoji + " " +route.title}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default ChangeMd;
