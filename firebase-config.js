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

// Discordボイスチャンネルへのリンク（うりぽん号のボイスch）
window.DISCORD_VOICE_URL = "https://discord.com/channels/1427549476062625905/1527009272041443441";

// Discord通知用Webhook URL（作業開始・帰宅をお知らせするチャンネルのWebhook）
// ※このURLを知っている人は誰でもそのチャンネルに投稿できる。荒らされたらDiscord側でウェブフックを削除→再作成して差し替える
// 信頼できるメンバー限定の運用として、クライアントから直接通知する
// ※URLが知られた場合はDiscord側でWebhookを削除し、再発行して差し替える
window.DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1529458007770136689/8naQeL4VbOdLMSK1Jgx9RuJ_6M0F82xKuJj5CurYBHt4zNz9e13rJGiyR3snXCKVqjsv";
