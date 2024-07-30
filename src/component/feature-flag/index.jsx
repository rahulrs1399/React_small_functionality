import { useContext } from "react";
import Accordian from "../accordian";
import DarkLighMode from "../Dark-Light-mode";
import RandomColor from "../random-color";
import TicTactToe from "../tic-tact-toe";
import TreeView from "../tree-view";
import { FeatureFlagContex } from "./contex";

export default function FeatureFlag() {
  const { loading, enableFlag } = useContext(FeatureFlagContex);

  const componentToRender = [
    {
      key: "showLightAndDarkMode",
      component: <DarkLighMode />,
    },
    {
      key: "showTicTacToe",
      component: <TicTactToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView />,
    },
  ];

  function checkEnabledFlags(getCurrectKey) {
    return enableFlag[getCurrectKey];
  }

  if (loading) {
    return <h1>Data loading, Please wait...</h1>;
  }

  return (
    <div>
      <h1>Feature Flag</h1>
      {componentToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
