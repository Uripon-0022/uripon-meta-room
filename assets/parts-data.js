// 共通ボディに、顔・髪つきキャラクター／トップス／ボトムスを重ねる統一規格素材。
// すべて36x60・4方向x3コマへ抽出時点で正規化済みなので、ランタイム補正は不要。
window.PARTS_DATA = {
  frameW: 36, frameH: 60, framesPerAnim: 3,
  uiFrameW: 72, uiFrameH: 120,
  dirOrder: ["right", "up", "left", "down"],
  defaultBody: 'base',
  defaultHairColor: 'brown',
  bodies: [{ id: 'base' }],
  hairs: [
    { id: 'bob_brown' }, { id: 'long_wavy_brown' }, { id: 'short_brown' },
    { id: 'odango_brown' }, { id: 'asym_brown' }, { id: 'spiky_black' }, { id: 'short_black' },
  ],
  hairColors: [
    { id: 'brown', label: 'ブラウン', color: '#91522d' },
    { id: 'black', label: 'ブラック', color: '#302b30' },
    { id: 'blonde', label: 'ブロンド', color: '#daaa46' },
    { id: 'pink', label: 'ピンク', color: '#f590a4' },
    { id: 'blue', label: 'ブルー', color: '#487ab6' },
  ],
  accessories: [
    { id: 'none', label: 'なし' },
    { id: 'yellow_bow', label: '黄色リボン' },
    { id: 'flower', label: 'お花' },
    { id: 'pearl', label: '淡い飾り' },
    { id: 'rainbow_star', label: '虹色スター' },
    { id: 'pink_blue_bow', label: 'ピンク青リボン' },
    { id: 'skull_bow', label: 'ドクロリボン' },
    { id: 'bunny_hood', label: '白うさぎのかぶりもの', fullHead: true },
    { id: 'cat_hood', label: '黒ねこのかぶりもの', fullHead: true },
  ],
  // 36x60フレーム内のアクセサリー中心座標。downは画面上の左右、sideは見えている側だけを使う。
  accessoryAnchors: {
    bob_brown:       { down: { left: [8, 17], right: [28, 17] }, left: [11, 17], right: [24, 17] },
    long_wavy_brown: { down: { left: [6, 16], right: [29, 16] }, left: [10, 16], right: [26, 16] },
    short_brown:     { down: { left: [8, 16], right: [26, 16] }, left: [11, 16], right: [23, 16] },
    odango_brown:    { down: { left: [6, 14], right: [30, 14] }, left: [11, 14], right: [25, 14] },
    asym_brown:      { down: { left: [7, 17], right: [25, 17] }, left: [10, 17], right: [21, 17] },
    spiky_black:     { down: { left: [9, 15], right: [27, 15] }, left: [12, 15], right: [23, 15] },
    short_black:     { down: { left: [9, 19], right: [26, 19] }, left: [14, 19], right: [22, 19] },
  },
  tops: [
    { id: 'yellow' }, { id: 'pink' }, { id: 'cardigan' }, { id: 'punk' },
    { id: 'idol' }, { id: 'navy' }, { id: 'bunny', label: '白うさぎ' }, { id: 'cat', label: '黒ねこ' },
  ],
  bottoms: [
    { id: 'yellow' }, { id: 'pink' }, { id: 'cardigan' }, { id: 'punk' },
    { id: 'idol' }, { id: 'navy' }, { id: 'bunny', label: '白うさぎ' }, { id: 'cat', label: '黒ねこ' },
  ],
};
