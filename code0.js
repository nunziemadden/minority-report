gdjs.Scene_321Code = {};
gdjs.Scene_321Code.GDCharacterObjects1= [];
gdjs.Scene_321Code.GDCharacterObjects2= [];
gdjs.Scene_321Code.GDCharacterObjects3= [];
gdjs.Scene_321Code.GDBoundariesObjects1= [];
gdjs.Scene_321Code.GDBoundariesObjects2= [];
gdjs.Scene_321Code.GDBoundariesObjects3= [];
gdjs.Scene_321Code.GDPlayButtonObjects1= [];
gdjs.Scene_321Code.GDPlayButtonObjects2= [];
gdjs.Scene_321Code.GDPlayButtonObjects3= [];
gdjs.Scene_321Code.GDStopButtonObjects1= [];
gdjs.Scene_321Code.GDStopButtonObjects2= [];
gdjs.Scene_321Code.GDStopButtonObjects3= [];
gdjs.Scene_321Code.GDBlackObjects1= [];
gdjs.Scene_321Code.GDBlackObjects2= [];
gdjs.Scene_321Code.GDBlackObjects3= [];

gdjs.Scene_321Code.conditionTrue_0 = {val:false};
gdjs.Scene_321Code.condition0IsTrue_0 = {val:false};
gdjs.Scene_321Code.condition1IsTrue_0 = {val:false};
gdjs.Scene_321Code.condition2IsTrue_0 = {val:false};
gdjs.Scene_321Code.condition3IsTrue_0 = {val:false};
gdjs.Scene_321Code.condition4IsTrue_0 = {val:false};
gdjs.Scene_321Code.conditionTrue_1 = {val:false};
gdjs.Scene_321Code.condition0IsTrue_1 = {val:false};
gdjs.Scene_321Code.condition1IsTrue_1 = {val:false};
gdjs.Scene_321Code.condition2IsTrue_1 = {val:false};
gdjs.Scene_321Code.condition3IsTrue_1 = {val:false};
gdjs.Scene_321Code.condition4IsTrue_1 = {val:false};
gdjs.Scene_321Code.conditionTrue_2 = {val:false};
gdjs.Scene_321Code.condition0IsTrue_2 = {val:false};
gdjs.Scene_321Code.condition1IsTrue_2 = {val:false};
gdjs.Scene_321Code.condition2IsTrue_2 = {val:false};
gdjs.Scene_321Code.condition3IsTrue_2 = {val:false};
gdjs.Scene_321Code.condition4IsTrue_2 = {val:false};
gdjs.Scene_321Code.conditionTrue_3 = {val:false};
gdjs.Scene_321Code.condition0IsTrue_3 = {val:false};
gdjs.Scene_321Code.condition1IsTrue_3 = {val:false};
gdjs.Scene_321Code.condition2IsTrue_3 = {val:false};
gdjs.Scene_321Code.condition3IsTrue_3 = {val:false};
gdjs.Scene_321Code.condition4IsTrue_3 = {val:false};


gdjs.Scene_321Code.eventsList0 = function(runtimeScene) {

};gdjs.Scene_321Code.eventsList1 = function(runtimeScene) {

};gdjs.Scene_321Code.mapOfGDgdjs_46Scene_95321Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Scene_321Code.GDCharacterObjects1});
gdjs.Scene_321Code.mapOfGDgdjs_46Scene_95321Code_46GDBoundariesObjects1Objects = Hashtable.newFrom({"Boundaries": gdjs.Scene_321Code.GDBoundariesObjects1});
gdjs.Scene_321Code.mapOfGDgdjs_46Scene_95321Code_46GDBoundariesObjects1Objects = Hashtable.newFrom({"Boundaries": gdjs.Scene_321Code.GDBoundariesObjects1});
gdjs.Scene_321Code.eventsList2 = function(runtimeScene) {

};gdjs.Scene_321Code.asyncCallback10444308 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("PlayButton"), gdjs.Scene_321Code.GDPlayButtonObjects3);

{for(var i = 0, len = gdjs.Scene_321Code.GDPlayButtonObjects3.length ;i < len;++i) {
    gdjs.Scene_321Code.GDPlayButtonObjects3[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Scene_321Code.GDPlayButtonObjects3.length ;i < len;++i) {
    gdjs.Scene_321Code.GDPlayButtonObjects3[i].getBehavior("Tween").addObjectScaleTween("PlayButtonScale", 1.5, 1.5, "bounce", 2000, false, false);
}
}}
gdjs.Scene_321Code.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save PlayButton as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Scene_321Code.asyncCallback10444308(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scene_321Code.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{

{ //Subevents
gdjs.Scene_321Code.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.Scene_321Code.asyncCallback10479772 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.Scene_321Code.GDBlackObjects2);
{for(var i = 0, len = gdjs.Scene_321Code.GDBlackObjects2.length ;i < len;++i) {
    gdjs.Scene_321Code.GDBlackObjects2[i].getBehavior("Tween").addObjectOpacityTween("SceneBeginning", 0, "linear", 1000, false);
}
}
{ //Subevents
gdjs.Scene_321Code.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Scene_321Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Scene_321Code.GDPlayButtonObjects1) asyncObjectsList.addObject("PlayButton", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Scene_321Code.asyncCallback10479772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scene_321Code.eventsList6 = function(runtimeScene) {

{


{

{ //Subevents
gdjs.Scene_321Code.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Scene_321Code.mapOfGDgdjs_46Scene_95321Code_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.Scene_321Code.GDPlayButtonObjects1});
gdjs.Scene_321Code.mapOfGDgdjs_46Scene_95321Code_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.Scene_321Code.GDPlayButtonObjects1});
gdjs.Scene_321Code.mapOfGDgdjs_46Scene_95321Code_46GDStopButtonObjects1Objects = Hashtable.newFrom({"StopButton": gdjs.Scene_321Code.GDStopButtonObjects1});
gdjs.Scene_321Code.mapOfGDgdjs_46Scene_95321Code_46GDStopButtonObjects1Objects = Hashtable.newFrom({"StopButton": gdjs.Scene_321Code.GDStopButtonObjects1});
gdjs.Scene_321Code.asyncCallback15043180 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.Scene_321Code.GDBlackObjects2);
{for(var i = 0, len = gdjs.Scene_321Code.GDBlackObjects2.length ;i < len;++i) {
    gdjs.Scene_321Code.GDBlackObjects2[i].getBehavior("Tween").addObjectOpacityTween("EndScene", 255, "linear", 1000, false);
}
}}
gdjs.Scene_321Code.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Scene_321Code.asyncCallback15043180(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scene_321Code.eventsList8 = function(runtimeScene) {

{


{

{ //Subevents
gdjs.Scene_321Code.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.Scene_321Code.eventsList9 = function(runtimeScene) {

{


gdjs.Scene_321Code.eventsList0(runtimeScene);
}


{


gdjs.Scene_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene_321Code.conditionTrue_1 = gdjs.Scene_321Code.condition0IsTrue_0;
gdjs.Scene_321Code.condition0IsTrue_1.val = false;
gdjs.Scene_321Code.condition1IsTrue_1.val = false;
gdjs.Scene_321Code.condition2IsTrue_1.val = false;
gdjs.Scene_321Code.condition3IsTrue_1.val = false;
{
gdjs.Scene_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.Scene_321Code.condition0IsTrue_1.val ) {
{
gdjs.Scene_321Code.condition1IsTrue_1.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up"));
}if ( gdjs.Scene_321Code.condition1IsTrue_1.val ) {
{
gdjs.Scene_321Code.condition2IsTrue_1.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}if ( gdjs.Scene_321Code.condition2IsTrue_1.val ) {
{
gdjs.Scene_321Code.condition3IsTrue_1.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left"));
}}
}
}
gdjs.Scene_321Code.conditionTrue_1.val = true && gdjs.Scene_321Code.condition0IsTrue_1.val && gdjs.Scene_321Code.condition1IsTrue_1.val && gdjs.Scene_321Code.condition2IsTrue_1.val && gdjs.Scene_321Code.condition3IsTrue_1.val;
}
}if (gdjs.Scene_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Scene_321Code.GDCharacterObjects1);
{for(var i = 0, len = gdjs.Scene_321Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDCharacterObjects1[i].setAnimationName("WalkRight");
}
}}

}


{


gdjs.Scene_321Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
}if (gdjs.Scene_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Scene_321Code.GDCharacterObjects1);
{for(var i = 0, len = gdjs.Scene_321Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDCharacterObjects1[i].setAnimationName("IdleRight");
}
}}

}


{


gdjs.Scene_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene_321Code.conditionTrue_1 = gdjs.Scene_321Code.condition0IsTrue_0;
gdjs.Scene_321Code.condition0IsTrue_1.val = false;
gdjs.Scene_321Code.condition1IsTrue_1.val = false;
gdjs.Scene_321Code.condition2IsTrue_1.val = false;
gdjs.Scene_321Code.condition3IsTrue_1.val = false;
{
gdjs.Scene_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.Scene_321Code.condition0IsTrue_1.val ) {
{
gdjs.Scene_321Code.condition1IsTrue_1.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up"));
}if ( gdjs.Scene_321Code.condition1IsTrue_1.val ) {
{
gdjs.Scene_321Code.condition2IsTrue_1.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}if ( gdjs.Scene_321Code.condition2IsTrue_1.val ) {
{
gdjs.Scene_321Code.condition3IsTrue_1.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right"));
}}
}
}
gdjs.Scene_321Code.conditionTrue_1.val = true && gdjs.Scene_321Code.condition0IsTrue_1.val && gdjs.Scene_321Code.condition1IsTrue_1.val && gdjs.Scene_321Code.condition2IsTrue_1.val && gdjs.Scene_321Code.condition3IsTrue_1.val;
}
}if (gdjs.Scene_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Scene_321Code.GDCharacterObjects1);
{for(var i = 0, len = gdjs.Scene_321Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDCharacterObjects1[i].setAnimationName("WalkLeft");
}
}}

}


{


gdjs.Scene_321Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
}if (gdjs.Scene_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Scene_321Code.GDCharacterObjects1);
{for(var i = 0, len = gdjs.Scene_321Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDCharacterObjects1[i].setAnimationName("IdleLeft");
}
}}

}


{


gdjs.Scene_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene_321Code.conditionTrue_1 = gdjs.Scene_321Code.condition0IsTrue_0;
gdjs.Scene_321Code.condition0IsTrue_1.val = false;
gdjs.Scene_321Code.condition1IsTrue_1.val = false;
{
gdjs.Scene_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Scene_321Code.condition0IsTrue_1.val ) {
    gdjs.Scene_321Code.conditionTrue_1.val = true;
}
}
{
{gdjs.Scene_321Code.conditionTrue_2 = gdjs.Scene_321Code.condition1IsTrue_1;
gdjs.Scene_321Code.condition0IsTrue_2.val = false;
gdjs.Scene_321Code.condition1IsTrue_2.val = false;
gdjs.Scene_321Code.condition2IsTrue_2.val = false;
{
gdjs.Scene_321Code.condition0IsTrue_2.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.Scene_321Code.condition0IsTrue_2.val ) {
{
gdjs.Scene_321Code.condition1IsTrue_2.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.Scene_321Code.condition1IsTrue_2.val ) {
{
{gdjs.Scene_321Code.conditionTrue_3 = gdjs.Scene_321Code.condition2IsTrue_2;
gdjs.Scene_321Code.condition0IsTrue_3.val = false;
gdjs.Scene_321Code.condition1IsTrue_3.val = false;
{
gdjs.Scene_321Code.condition0IsTrue_3.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.Scene_321Code.condition0IsTrue_3.val ) {
{
gdjs.Scene_321Code.condition1IsTrue_3.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}}
gdjs.Scene_321Code.conditionTrue_3.val = true && gdjs.Scene_321Code.condition0IsTrue_3.val && gdjs.Scene_321Code.condition1IsTrue_3.val;
}
}}
}
gdjs.Scene_321Code.conditionTrue_2.val = true && gdjs.Scene_321Code.condition0IsTrue_2.val && gdjs.Scene_321Code.condition1IsTrue_2.val && gdjs.Scene_321Code.condition2IsTrue_2.val;
}
if( gdjs.Scene_321Code.condition1IsTrue_1.val ) {
    gdjs.Scene_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Scene_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Scene_321Code.GDCharacterObjects1);
{for(var i = 0, len = gdjs.Scene_321Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDCharacterObjects1[i].setAnimationName("WalkUp");
}
}}

}


{


gdjs.Scene_321Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
}if (gdjs.Scene_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Scene_321Code.GDCharacterObjects1);
{for(var i = 0, len = gdjs.Scene_321Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDCharacterObjects1[i].setAnimationName("IdleUp");
}
}}

}


{


gdjs.Scene_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene_321Code.conditionTrue_1 = gdjs.Scene_321Code.condition0IsTrue_0;
gdjs.Scene_321Code.condition0IsTrue_1.val = false;
gdjs.Scene_321Code.condition1IsTrue_1.val = false;
{
gdjs.Scene_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if( gdjs.Scene_321Code.condition0IsTrue_1.val ) {
    gdjs.Scene_321Code.conditionTrue_1.val = true;
}
}
{
{gdjs.Scene_321Code.conditionTrue_2 = gdjs.Scene_321Code.condition1IsTrue_1;
gdjs.Scene_321Code.condition0IsTrue_2.val = false;
gdjs.Scene_321Code.condition1IsTrue_2.val = false;
gdjs.Scene_321Code.condition2IsTrue_2.val = false;
{
gdjs.Scene_321Code.condition0IsTrue_2.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.Scene_321Code.condition0IsTrue_2.val ) {
{
gdjs.Scene_321Code.condition1IsTrue_2.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.Scene_321Code.condition1IsTrue_2.val ) {
{
{gdjs.Scene_321Code.conditionTrue_3 = gdjs.Scene_321Code.condition2IsTrue_2;
gdjs.Scene_321Code.condition0IsTrue_3.val = false;
gdjs.Scene_321Code.condition1IsTrue_3.val = false;
{
gdjs.Scene_321Code.condition0IsTrue_3.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.Scene_321Code.condition0IsTrue_3.val ) {
{
gdjs.Scene_321Code.condition1IsTrue_3.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}}
gdjs.Scene_321Code.conditionTrue_3.val = true && gdjs.Scene_321Code.condition0IsTrue_3.val && gdjs.Scene_321Code.condition1IsTrue_3.val;
}
}}
}
gdjs.Scene_321Code.conditionTrue_2.val = true && gdjs.Scene_321Code.condition0IsTrue_2.val && gdjs.Scene_321Code.condition1IsTrue_2.val && gdjs.Scene_321Code.condition2IsTrue_2.val;
}
if( gdjs.Scene_321Code.condition1IsTrue_1.val ) {
    gdjs.Scene_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Scene_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Scene_321Code.GDCharacterObjects1);
{for(var i = 0, len = gdjs.Scene_321Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDCharacterObjects1[i].setAnimationName("WalkDown");
}
}}

}


{


gdjs.Scene_321Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
}if (gdjs.Scene_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Scene_321Code.GDCharacterObjects1);
{for(var i = 0, len = gdjs.Scene_321Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDCharacterObjects1[i].setAnimationName("IdleDown");
}
}}

}


{


gdjs.Scene_321Code.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Boundaries"), gdjs.Scene_321Code.GDBoundariesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Scene_321Code.GDCharacterObjects1);

gdjs.Scene_321Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene_321Code.mapOfGDgdjs_46Scene_95321Code_46GDCharacterObjects1Objects, gdjs.Scene_321Code.mapOfGDgdjs_46Scene_95321Code_46GDBoundariesObjects1Objects, false, runtimeScene, false);
}if (gdjs.Scene_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_321Code.GDBoundariesObjects1 */
/* Reuse gdjs.Scene_321Code.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.Scene_321Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDCharacterObjects1[i].separateFromObjectsList(gdjs.Scene_321Code.mapOfGDgdjs_46Scene_95321Code_46GDBoundariesObjects1Objects, false);
}
}}

}


{


gdjs.Scene_321Code.eventsList2(runtimeScene);
}


{


gdjs.Scene_321Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scene_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Scene_321Code.GDCharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Scene_321Code.GDPlayButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("StopButton"), gdjs.Scene_321Code.GDStopButtonObjects1);
{for(var i = 0, len = gdjs.Scene_321Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDCharacterObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Scene_321Code.GDStopButtonObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDStopButtonObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Scene_321Code.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDPlayButtonObjects1[i].setShadow("0;0;0", 10, 10, 90);
}
}{for(var i = 0, len = gdjs.Scene_321Code.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDPlayButtonObjects1[i].setOpacity(0);
}
}
{ //Subevents
gdjs.Scene_321Code.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Scene_321Code.GDPlayButtonObjects1);

gdjs.Scene_321Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene_321Code.mapOfGDgdjs_46Scene_95321Code_46GDPlayButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Scene_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_321Code.GDPlayButtonObjects1 */
{for(var i = 0, len = gdjs.Scene_321Code.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDPlayButtonObjects1[i].setItalic(true);
}
}{for(var i = 0, len = gdjs.Scene_321Code.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDPlayButtonObjects1[i].setShadow("0;0;0", 10, 10, 30);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Scene_321Code.GDPlayButtonObjects1);

gdjs.Scene_321Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene_321Code.mapOfGDgdjs_46Scene_95321Code_46GDPlayButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Scene_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_321Code.GDPlayButtonObjects1 */
{for(var i = 0, len = gdjs.Scene_321Code.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDPlayButtonObjects1[i].setItalic(false);
}
}{for(var i = 0, len = gdjs.Scene_321Code.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDPlayButtonObjects1[i].setShadow("0;0;0", 10, 10, 90);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Scene_321Code.GDPlayButtonObjects1);

gdjs.Scene_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene_321Code.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.Scene_321Code.GDPlayButtonObjects1[i].getBehavior("button").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Scene_321Code.condition0IsTrue_0.val = true;
        gdjs.Scene_321Code.GDPlayButtonObjects1[k] = gdjs.Scene_321Code.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.Scene_321Code.GDPlayButtonObjects1.length = k;}if (gdjs.Scene_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Scene_321Code.GDCharacterObjects1);
/* Reuse gdjs.Scene_321Code.GDPlayButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("StopButton"), gdjs.Scene_321Code.GDStopButtonObjects1);
{for(var i = 0, len = gdjs.Scene_321Code.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDPlayButtonObjects1[i].setItalic(true);
}
}{for(var i = 0, len = gdjs.Scene_321Code.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDPlayButtonObjects1[i].setBold(true);
}
}{for(var i = 0, len = gdjs.Scene_321Code.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDPlayButtonObjects1[i].getBehavior("Tween").addObjectOpacityTween("PlayButtonClicked", 0, "linear", 400, true);
}
}{for(var i = 0, len = gdjs.Scene_321Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDCharacterObjects1[i].getBehavior("Tween").addObjectOpacityTween("PlayerOpacity", 255, "linear", 400, false);
}
}{for(var i = 0, len = gdjs.Scene_321Code.GDStopButtonObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDStopButtonObjects1[i].getBehavior("Tween").addObjectOpacityTween("StopButtonFadeIn", 255, "linear", 400, false);
}
}{gdjs.evtsExt__CameraShake__CameraShake.func(runtimeScene, 5, 5, "", 0, 0.5, 2, 3, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.Scene_321Code.GDStopButtonObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDStopButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("StopButtonScale", 1.5, 1.5, "bounce", 2000, false, false);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "ClickedButton.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StopButton"), gdjs.Scene_321Code.GDStopButtonObjects1);

gdjs.Scene_321Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene_321Code.mapOfGDgdjs_46Scene_95321Code_46GDStopButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Scene_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Scene_321Code.GDPlayButtonObjects1);
/* Reuse gdjs.Scene_321Code.GDStopButtonObjects1 */
{for(var i = 0, len = gdjs.Scene_321Code.GDStopButtonObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDStopButtonObjects1[i].setItalic(true);
}
}{for(var i = 0, len = gdjs.Scene_321Code.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDPlayButtonObjects1[i].setShadow("0;0;0", 10, 10, 30);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StopButton"), gdjs.Scene_321Code.GDStopButtonObjects1);

gdjs.Scene_321Code.condition0IsTrue_0.val = false;
{
gdjs.Scene_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene_321Code.mapOfGDgdjs_46Scene_95321Code_46GDStopButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Scene_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene_321Code.GDStopButtonObjects1 */
{for(var i = 0, len = gdjs.Scene_321Code.GDStopButtonObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDStopButtonObjects1[i].setItalic(false);
}
}{for(var i = 0, len = gdjs.Scene_321Code.GDStopButtonObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDStopButtonObjects1[i].setShadow("0;0;0", 10, 10, 90);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StopButton"), gdjs.Scene_321Code.GDStopButtonObjects1);

gdjs.Scene_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene_321Code.GDStopButtonObjects1.length;i<l;++i) {
    if ( gdjs.Scene_321Code.GDStopButtonObjects1[i].getBehavior("button").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Scene_321Code.condition0IsTrue_0.val = true;
        gdjs.Scene_321Code.GDStopButtonObjects1[k] = gdjs.Scene_321Code.GDStopButtonObjects1[i];
        ++k;
    }
}
gdjs.Scene_321Code.GDStopButtonObjects1.length = k;}if (gdjs.Scene_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Scene_321Code.GDCharacterObjects1);
/* Reuse gdjs.Scene_321Code.GDStopButtonObjects1 */
{gdjs.evtsExt__CameraShake__CameraShake.func(runtimeScene, 5, 5, "", 0, 0.5, 2, 3, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.Scene_321Code.GDStopButtonObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDStopButtonObjects1[i].getBehavior("Tween").addObjectOpacityTween("StopButtonClicked", 0, "linear", 600, true);
}
}{for(var i = 0, len = gdjs.Scene_321Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDCharacterObjects1[i].getBehavior("Tween").addObjectOpacityTween("PlayerFadeOut", 0, "linear", 600, true);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "ClickedButton.wav", false, 100, 1);
}
{ //Subevents
gdjs.Scene_321Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.Scene_321Code.GDBlackObjects1);

gdjs.Scene_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene_321Code.GDBlackObjects1.length;i<l;++i) {
    if ( gdjs.Scene_321Code.GDBlackObjects1[i].getBehavior("Tween").hasFinished("EndScene") ) {
        gdjs.Scene_321Code.condition0IsTrue_0.val = true;
        gdjs.Scene_321Code.GDBlackObjects1[k] = gdjs.Scene_321Code.GDBlackObjects1[i];
        ++k;
    }
}
gdjs.Scene_321Code.GDBlackObjects1.length = k;}if (gdjs.Scene_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Enter", true);
}}

}


};

gdjs.Scene_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene_321Code.GDCharacterObjects1.length = 0;
gdjs.Scene_321Code.GDCharacterObjects2.length = 0;
gdjs.Scene_321Code.GDCharacterObjects3.length = 0;
gdjs.Scene_321Code.GDBoundariesObjects1.length = 0;
gdjs.Scene_321Code.GDBoundariesObjects2.length = 0;
gdjs.Scene_321Code.GDBoundariesObjects3.length = 0;
gdjs.Scene_321Code.GDPlayButtonObjects1.length = 0;
gdjs.Scene_321Code.GDPlayButtonObjects2.length = 0;
gdjs.Scene_321Code.GDPlayButtonObjects3.length = 0;
gdjs.Scene_321Code.GDStopButtonObjects1.length = 0;
gdjs.Scene_321Code.GDStopButtonObjects2.length = 0;
gdjs.Scene_321Code.GDStopButtonObjects3.length = 0;
gdjs.Scene_321Code.GDBlackObjects1.length = 0;
gdjs.Scene_321Code.GDBlackObjects2.length = 0;
gdjs.Scene_321Code.GDBlackObjects3.length = 0;

gdjs.Scene_321Code.eventsList9(runtimeScene);
return;

}

gdjs['Scene_321Code'] = gdjs.Scene_321Code;
