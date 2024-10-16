function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6EuYWoOTzUQ":
        Script1();
        break;
      case "5r6YJ1TQDRz":
        Script2();
        break;
      case "69qdzxBESUy":
        Script3();
        break;
      case "5uscTkfXodI":
        Script4();
        break;
      case "6Sj3awST3c4":
        Script5();
        break;
      case "6jRAC4cDDry":
        Script6();
        break;
      case "5vjtjXX6pR1":
        Script7();
        break;
      case "5cifDef07dY":
        Script8();
        break;
      case "5gYeTB6cA0F":
        Script9();
        break;
      case "603PGiukR1s":
        Script10();
        break;
      case "6666vWQp86s":
        Script11();
        break;
      case "5yUC0Q987cj":
        Script12();
        break;
      case "6HgD1M1d2nn":
        Script13();
        break;
      case "5uk2UCrnIpq":
        Script14();
        break;
      case "66Dk7ugKaML":
        Script15();
        break;
      case "6Hj4pOxhVah":
        Script16();
        break;
      case "5hxoL2ovhxs":
        Script17();
        break;
      case "6PfVZTda63j":
        Script18();
        break;
      case "6G6iezMgo5E":
        Script19();
        break;
      case "5goSGvidD9x":
        Script20();
        break;
      case "5rfg2ESucig":
        Script21();
        break;
      case "5itduup69Fm":
        Script22();
        break;
      case "5ZdOWuAdEV9":
        Script23();
        break;
      case "6hQKXIETw3S":
        Script24();
        break;
      case "6NlOLHyVUe2":
        Script25();
        break;
      case "6GtzzHmBZHx":
        Script26();
        break;
      case "5hWRG0peLEI":
        Script27();
        break;
      case "66tjQqd2xn8":
        Script28();
        break;
      case "6Gz8h8GR2w3":
        Script29();
        break;
      case "6bhKkUcHra2":
        Script30();
        break;
      case "5rvBgwGSkMv":
        Script31();
        break;
      case "6B0wGHdgLAd":
        Script32();
        break;
      case "6ENqub0np7U":
        Script33();
        break;
      case "5nKyMBC9zrr":
        Script34();
        break;
      case "5xb32waSgIq":
        Script35();
        break;
      case "6DccqfP4jk4":
        Script36();
        break;
      case "6XuPK6yh1yH":
        Script37();
        break;
      case "6n5I7Mo4S6B":
        Script38();
        break;
      case "5fLmZz72Fcc":
        Script39();
        break;
      case "6ewX66PehUj":
        Script40();
        break;
      case "5p7APlEBWws":
        Script41();
        break;
      case "64WHLbKk9jw":
        Script42();
        break;
      case "6RRRlUpDIqQ":
        Script43();
        break;
      case "6cm3znOeWhm":
        Script44();
        break;
      case "6MCxyUyz3hS":
        Script45();
        break;
      case "6qOeaaeZVgD":
        Script46();
        break;
      case "5gq4Pnk1XzF":
        Script47();
        break;
      case "6PCaZLtrF0y":
        Script48();
        break;
      case "6kEOwLlqgb2":
        Script49();
        break;
      case "63YzzXZFYyE":
        Script50();
        break;
      case "5ni38COtxvO":
        Script51();
        break;
      case "65gW7MqQUgc":
        Script52();
        break;
      case "5qmcgErh8q1":
        Script53();
        break;
      case "6WPBbnHr9fV":
        Script54();
        break;
      case "5kXzo3jFD1H":
        Script55();
        break;
      case "6f9vmXGL9Cp":
        Script56();
        break;
      case "64p9RspMSqH":
        Script57();
        break;
      case "6RUqwPBDj0y":
        Script58();
        break;
      case "5oBQc5WXpAS":
        Script59();
        break;
      case "6Dw8HuVHLVx":
        Script60();
        break;
      case "6ANPgmCze46":
        Script61();
        break;
      case "6lt6hfEJxdq":
        Script62();
        break;
      case "5oXdN6c6PTI":
        Script63();
        break;
      case "5s6qHiHVbpL":
        Script64();
        break;
      case "6984ZQPUphH":
        Script65();
        break;
      case "6fYOE0cgxfZ":
        Script66();
        break;
      case "6aGZtmdZOoT":
        Script67();
        break;
      case "5WKSPrRBAv9":
        Script68();
        break;
      case "6Ln2UguI69S":
        Script69();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('5avIXOFE1rM');
const duration = 3500;
const easing = 'ease-out';
const id = '6qlZ70mRSTa';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('5avIXOFE1rM');
const duration = 3500;
const easing = 'ease-out';
const id = '6RupPcR9e9o';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5avIXOFE1rM');
const duration = 3500;
const easing = 'ease-out';
const id = '6qlZ70mRSTa';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  player.once(() => {
const target = object('5r1Ef8CPMHu');
const duration = 2250;
const easing = 'ease-in';
const id = '5ixQf2rQ5R2';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  const target = object('5r1Ef8CPMHu');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6V3Yl0T3W00';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('5r1Ef8CPMHu');
const duration = 2250;
const easing = 'ease-in';
const id = '5ixQf2rQ5R2';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  player.once(() => {
const target = object('6Gol68zuktS');
const duration = 1500;
const easing = 'ease-in';
const id = '5ixQf2rQ5R2';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  const target = object('6Gol68zuktS');
const duration = 1500;
const easing = 'ease-in-out';
const id = '6V3Yl0T3W00';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('6Gol68zuktS');
const duration = 1500;
const easing = 'ease-in';
const id = '5ixQf2rQ5R2';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  player.once(() => {
const target = object('6TzqzFeXdIl');
const duration = 1500;
const easing = 'ease-in';
const id = '6EOqLynqr99';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script11 = function()
{
  const target = object('6TzqzFeXdIl');
const duration = 1500;
const easing = 'ease-in-out';
const id = '65aTqmTUJFg';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('6TzqzFeXdIl');
const duration = 1500;
const easing = 'ease-in';
const id = '6EOqLynqr99';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  player.once(() => {
const target = object('65MiP5tzGdp');
const duration = 1500;
const easing = 'ease-in';
const id = '69Cxud50HBh';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script14 = function()
{
  const target = object('65MiP5tzGdp');
const duration = 1500;
const easing = 'ease-in-out';
const id = '67VfZfYZZGp';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  const target = object('65MiP5tzGdp');
const duration = 1500;
const easing = 'ease-in';
const id = '69Cxud50HBh';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  player.once(() => {
const target = object('66mSDeTet3I');
const duration = 1500;
const easing = 'ease-in';
const id = '5dPhoaRMSeR';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script17 = function()
{
  const target = object('66mSDeTet3I');
const duration = 1500;
const easing = 'ease-in-out';
const id = '5eIc1ysnRBC';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script18 = function()
{
  const target = object('66mSDeTet3I');
const duration = 1500;
const easing = 'ease-in';
const id = '5dPhoaRMSeR';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script19 = function()
{
  const target = object('6BKRBnOumO5');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6gNpCUDnPga';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script20 = function()
{
  player.once(() => {
const target = object('6BKRBnOumO5');
const duration = 2250;
const easing = 'ease-in';
const id = '67BfrvDXScY';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script21 = function()
{
  const target = object('6BKRBnOumO5');
const duration = 2250;
const easing = 'ease-in';
const id = '67BfrvDXScY';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script22 = function()
{
  const target = object('5V8WeUMw2G5');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6V3Yl0T3W00';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  player.once(() => {
const target = object('5V8WeUMw2G5');
const duration = 2250;
const easing = 'ease-in';
const id = '5ixQf2rQ5R2';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script24 = function()
{
  const target = object('5V8WeUMw2G5');
const duration = 2250;
const easing = 'ease-in';
const id = '5ixQf2rQ5R2';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  player.once(() => {
const target = object('5nvAqXTLgg2');
const duration = 3500;
const easing = 'ease-out';
const id = '613TJdcaGRG';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script26 = function()
{
  const target = object('5nvAqXTLgg2');
const duration = 3500;
const easing = 'ease-out';
const id = '5p8TA87aQBv';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  const target = object('5nvAqXTLgg2');
const duration = 3500;
const easing = 'ease-out';
const id = '613TJdcaGRG';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script28 = function()
{
  player.once(() => {
const target = object('6XLVtYE53BB');
const duration = 2250;
const easing = 'ease-in';
const id = '6nAjUowmxmQ';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script29 = function()
{
  const target = object('6XLVtYE53BB');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6jNAWaDrOlv';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script30 = function()
{
  const target = object('6XLVtYE53BB');
const duration = 2250;
const easing = 'ease-in';
const id = '6nAjUowmxmQ';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script31 = function()
{
  player.once(() => {
const target = object('63iarPFLp1L');
const duration = 2250;
const easing = 'ease-in';
const id = '6YZF7BVvgeo';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script32 = function()
{
  const target = object('63iarPFLp1L');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6dtc5fFlzjM';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script33 = function()
{
  const target = object('63iarPFLp1L');
const duration = 2250;
const easing = 'ease-in';
const id = '6YZF7BVvgeo';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script34 = function()
{
  player.once(() => {
const target = object('5pTZ1XFmJHZ');
const duration = 2250;
const easing = 'ease-in';
const id = '6dRDQz4Zh4S';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script35 = function()
{
  const target = object('5pTZ1XFmJHZ');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6EHYbWtpItV';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script36 = function()
{
  const target = object('5pTZ1XFmJHZ');
const duration = 2250;
const easing = 'ease-in';
const id = '6dRDQz4Zh4S';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script37 = function()
{
  player.once(() => {
const target = object('6AA628Wv4mx');
const duration = 2250;
const easing = 'ease-in';
const id = '5d0xaXhCWzl';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script38 = function()
{
  const target = object('6AA628Wv4mx');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6jyubg7uBGk';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script39 = function()
{
  const target = object('6AA628Wv4mx');
const duration = 2250;
const easing = 'ease-in';
const id = '5d0xaXhCWzl';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script40 = function()
{
  const target = object('5hV9vXVgarJ');
const duration = 2500;
const easing = 'ease-in-out';
const id = '5mNO0lzUmOu';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script41 = function()
{
  player.once(() => {
const target = object('5hV9vXVgarJ');
const duration = 2250;
const easing = 'ease-in';
const id = '6eagv4NvCyi';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script42 = function()
{
  const target = object('5hV9vXVgarJ');
const duration = 2250;
const easing = 'ease-in';
const id = '6eagv4NvCyi';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script43 = function()
{
  const target = object('6VvsNtEBHBz');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6ekcaAyMKvZ';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script44 = function()
{
  player.once(() => {
const target = object('6VvsNtEBHBz');
const duration = 2250;
const easing = 'ease-in';
const id = '64ir8LPvvVd';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script45 = function()
{
  const target = object('6VvsNtEBHBz');
const duration = 2250;
const easing = 'ease-in';
const id = '64ir8LPvvVd';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script46 = function()
{
  player.once(() => {
const target = object('6qAHoX6JgBa');
const duration = 3500;
const easing = 'ease-out';
const id = '6LJNIZiMKjs';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script47 = function()
{
  const target = object('6qAHoX6JgBa');
const duration = 3500;
const easing = 'ease-out';
const id = '5gcFFU1jDow';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script48 = function()
{
  const target = object('6qAHoX6JgBa');
const duration = 3500;
const easing = 'ease-out';
const id = '6LJNIZiMKjs';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script49 = function()
{
  player.once(() => {
const target = object('6cew2woXiAi');
const duration = 2250;
const easing = 'ease-in';
const id = '6PxSZvCpYaN';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script50 = function()
{
  const target = object('6cew2woXiAi');
const duration = 2500;
const easing = 'ease-in-out';
const id = '66m7zc1cCv7';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script51 = function()
{
  const target = object('6cew2woXiAi');
const duration = 2250;
const easing = 'ease-in';
const id = '6PxSZvCpYaN';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script52 = function()
{
  player.once(() => {
const target = object('6VRxyfziA18');
const duration = 2250;
const easing = 'ease-in';
const id = '5iqjLy4lmW7';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script53 = function()
{
  const target = object('6VRxyfziA18');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6iMviZHNnUV';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script54 = function()
{
  const target = object('6VRxyfziA18');
const duration = 2250;
const easing = 'ease-in';
const id = '5iqjLy4lmW7';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script55 = function()
{
  const target = object('5hVZuFrGZvh');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6RLxYigptGq';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script56 = function()
{
  player.once(() => {
const target = object('5hVZuFrGZvh');
const duration = 2250;
const easing = 'ease-in';
const id = '60PBH2l8jXL';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script57 = function()
{
  const target = object('5hVZuFrGZvh');
const duration = 2250;
const easing = 'ease-in';
const id = '60PBH2l8jXL';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script58 = function()
{
  player.once(() => {
const target = object('5dNPnUOujsk');
const duration = 3500;
const easing = 'ease-out';
const id = '6PUXI4nBKfT';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script59 = function()
{
  const target = object('5dNPnUOujsk');
const duration = 3500;
const easing = 'ease-out';
const id = '6FwmM0UhIvm';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script60 = function()
{
  const target = object('5dNPnUOujsk');
const duration = 3500;
const easing = 'ease-out';
const id = '6PUXI4nBKfT';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script61 = function()
{
  player.once(() => {
const target = object('5ohvY3VrL0g');
const duration = 3500;
const easing = 'ease-out';
const id = '6CNit4pMwsh';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script62 = function()
{
  const target = object('5ohvY3VrL0g');
const duration = 3500;
const easing = 'ease-out';
const id = '6JpA0bBJDI0';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script63 = function()
{
  const target = object('5ohvY3VrL0g');
const duration = 3500;
const easing = 'ease-out';
const id = '6CNit4pMwsh';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script64 = function()
{
  player.once(() => {
const target = object('5efAnu3KvpK');
const duration = 2250;
const easing = 'ease-in';
const id = '5Vdqz6YhC3w';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script65 = function()
{
  const target = object('5efAnu3KvpK');
const duration = 2500;
const easing = 'ease-in-out';
const id = '68dwseNYjZq';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script66 = function()
{
  const target = object('5efAnu3KvpK');
const duration = 2250;
const easing = 'ease-in';
const id = '5Vdqz6YhC3w';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script67 = function()
{
  player.once(() => {
const target = object('63svEiZw7XJ');
const duration = 2250;
const easing = 'ease-in';
const id = '5zM9bV9YhGG';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script68 = function()
{
  const target = object('63svEiZw7XJ');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6PDibTB6tqg';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script69 = function()
{
  const target = object('63svEiZw7XJ');
const duration = 2250;
const easing = 'ease-in';
const id = '5zM9bV9YhGG';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
