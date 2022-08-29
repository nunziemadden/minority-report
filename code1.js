gdjs.EnterCode = {};
gdjs.EnterCode.GDBlackObjects1= [];
gdjs.EnterCode.GDBlackObjects2= [];
gdjs.EnterCode.GDBlackObjects3= [];
gdjs.EnterCode.GDBackButtonObjects1= [];
gdjs.EnterCode.GDBackButtonObjects2= [];
gdjs.EnterCode.GDBackButtonObjects3= [];

gdjs.EnterCode.conditionTrue_0 = {val:false};
gdjs.EnterCode.condition0IsTrue_0 = {val:false};
gdjs.EnterCode.condition1IsTrue_0 = {val:false};


gdjs.EnterCode.asyncCallback14936460 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("BackButton"), gdjs.EnterCode.GDBackButtonObjects2);

{for(var i = 0, len = gdjs.EnterCode.GDBackButtonObjects2.length ;i < len;++i) {
    gdjs.EnterCode.GDBackButtonObjects2[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.EnterCode.GDBackButtonObjects2.length ;i < len;++i) {
    gdjs.EnterCode.GDBackButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("BackButtonScale", 1.5, 1.5, "bounce", 2000, false, false);
}
}}
gdjs.EnterCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.EnterCode.GDBackButtonObjects1) asyncObjectsList.addObject("BackButton", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.EnterCode.asyncCallback14936460(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EnterCode.eventsList1 = function(runtimeScene) {

{


{

{ //Subevents
gdjs.EnterCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.EnterCode.mapOfGDgdjs_46EnterCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.EnterCode.GDBackButtonObjects1});
gdjs.EnterCode.mapOfGDgdjs_46EnterCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.EnterCode.GDBackButtonObjects1});
gdjs.EnterCode.asyncCallback14938092 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("BackButton"), gdjs.EnterCode.GDBackButtonObjects3);

gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.EnterCode.GDBlackObjects3);
{for(var i = 0, len = gdjs.EnterCode.GDBackButtonObjects3.length ;i < len;++i) {
    gdjs.EnterCode.GDBackButtonObjects3[i].getBehavior("Tween").addObjectOpacityTween("BackButtonClicked", 0, "linear", 600, true);
}
}{for(var i = 0, len = gdjs.EnterCode.GDBlackObjects3.length ;i < len;++i) {
    gdjs.EnterCode.GDBlackObjects3[i].getBehavior("Tween").addObjectOpacityTween("EndScene", 255, "linear", 800, true);
}
}}
gdjs.EnterCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.EnterCode.GDBackButtonObjects1) asyncObjectsList.addObject("BackButton", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.EnterCode.asyncCallback14938092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EnterCode.asyncCallback15007812 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene 1", true);
}}
gdjs.EnterCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.EnterCode.asyncCallback15007812(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EnterCode.eventsList4 = function(runtimeScene) {

{


{

{ //Subevents
gdjs.EnterCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


{

{ //Subevents
gdjs.EnterCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.EnterCode.eventsList5 = function(runtimeScene) {

{


gdjs.EnterCode.condition0IsTrue_0.val = false;
{
gdjs.EnterCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EnterCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.EnterCode.GDBackButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.EnterCode.GDBlackObjects1);
{for(var i = 0, len = gdjs.EnterCode.GDBlackObjects1.length ;i < len;++i) {
    gdjs.EnterCode.GDBlackObjects1[i].getBehavior("Tween").addObjectOpacityTween("SceneBeginning", 0, "linear", 1000, false);
}
}{for(var i = 0, len = gdjs.EnterCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.EnterCode.GDBackButtonObjects1[i].setOpacity(0);
}
}
{ //Subevents
gdjs.EnterCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.EnterCode.GDBackButtonObjects1);

gdjs.EnterCode.condition0IsTrue_0.val = false;
{
gdjs.EnterCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.EnterCode.mapOfGDgdjs_46EnterCode_46GDBackButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.EnterCode.condition0IsTrue_0.val) {
/* Reuse gdjs.EnterCode.GDBackButtonObjects1 */
{for(var i = 0, len = gdjs.EnterCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.EnterCode.GDBackButtonObjects1[i].setItalic(true);
}
}{for(var i = 0, len = gdjs.EnterCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.EnterCode.GDBackButtonObjects1[i].setShadow("0;0;0", 10, 10, 30);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.EnterCode.GDBackButtonObjects1);

gdjs.EnterCode.condition0IsTrue_0.val = false;
{
gdjs.EnterCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.EnterCode.mapOfGDgdjs_46EnterCode_46GDBackButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.EnterCode.condition0IsTrue_0.val) {
/* Reuse gdjs.EnterCode.GDBackButtonObjects1 */
{for(var i = 0, len = gdjs.EnterCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.EnterCode.GDBackButtonObjects1[i].setItalic(false);
}
}{for(var i = 0, len = gdjs.EnterCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.EnterCode.GDBackButtonObjects1[i].setShadow("0;0;0", 10, 10, 90);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.EnterCode.GDBackButtonObjects1);

gdjs.EnterCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EnterCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.EnterCode.GDBackButtonObjects1[i].getBehavior("button").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.EnterCode.condition0IsTrue_0.val = true;
        gdjs.EnterCode.GDBackButtonObjects1[k] = gdjs.EnterCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.EnterCode.GDBackButtonObjects1.length = k;}if (gdjs.EnterCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__CameraShake__CameraShake.func(runtimeScene, 5, 5, "", 0, 0.5, 2, 3, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.sound.playSound(runtimeScene, "ClickedButton.wav", false, 100, 1);
}
{ //Subevents
gdjs.EnterCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.EnterCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EnterCode.GDBlackObjects1.length = 0;
gdjs.EnterCode.GDBlackObjects2.length = 0;
gdjs.EnterCode.GDBlackObjects3.length = 0;
gdjs.EnterCode.GDBackButtonObjects1.length = 0;
gdjs.EnterCode.GDBackButtonObjects2.length = 0;
gdjs.EnterCode.GDBackButtonObjects3.length = 0;

gdjs.EnterCode.eventsList5(runtimeScene);
return;

}

gdjs['EnterCode'] = gdjs.EnterCode;
