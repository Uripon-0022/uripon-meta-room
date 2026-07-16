// うりぽん号メタ部屋 Firebase接続設定
// ※これはクライアント公開前提のキー（秘密情報ではない）。書き込み制御はrules.jsonのセキュリティルールで行う
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAJaGgnVY6MWHx_zqkvvB4sC_x5oqrFllo",
  authDomain: "uripon-meta-room.firebaseapp.com",
  databaseURL: "https://uripon-meta-room-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "uripon-meta-room",
  storageBucket: "uripon-meta-room.firebasestorage.app",
  messagingSenderId: "304607530637",
  appId: "1:304607530637:web:8aa1f106f2963e0a70dcc4"
};

// Discordボイスチャンネルへのリンク（うりぽん号のボイスchの招待/チャンネルURLに差し替える）
window.DISCORD_VOICE_URL = "";

// Discord通知用Webhook URL（作業開始・帰宅・画面共有をお知らせするチャンネルのWebhook）
// ※このURLを知っている人は誰でもそのチャンネルに投稿できる。荒らされたらDiscord側でウェブフックを削除→再作成して差し替える
window.DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1519932832531611849/f9eYVXQN0gN93SdbZWrMbIxpNgaxLiaMb-fUbXMS8RDcK0Ftl9HhcU-SArk_0VeYpT3-";
