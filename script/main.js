import defaultSet from "./defaultSet.js";
import elementdefault from "./elementdefault.js";
import event from "./event.js";
import monsterCreate from "./monsterCreate.js";

defaultSet.reset();
elementdefault.rootDefault();
elementdefault.rootBox();
elementdefault.rootBoxItem();
elementdefault.leftItem();
elementdefault.MonsterContainer();
elementdefault.rightItem();

monsterCreate(100);
event();
