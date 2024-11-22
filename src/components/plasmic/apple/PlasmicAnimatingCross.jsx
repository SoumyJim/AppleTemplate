// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aKe88PuX3H94mH1Pri1oSB
// Component: oz2ZbRKMcJbo
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: aKe88PuX3H94mH1Pri1oSB/projectcss
import sty from "./PlasmicAnimatingCross.module.css"; // plasmic-import: oz2ZbRKMcJbo/css
import Icon11Icon from "./icons/PlasmicIcon__Icon11"; // plasmic-import: kgHmm0mAueyl/icon

createPlasmicElementProxy;

export const PlasmicAnimatingCross__VariantProps = new Array("add");

export const PlasmicAnimatingCross__ArgProps = new Array();

const $$ = {};

function PlasmicAnimatingCross__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "add",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.add
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <Icon11Icon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(projectcss.all, sty.svg, {
          [sty.svgadd]: hasVariant($state, "add", "add")
        })}
        role={"img"}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicAnimatingCross__ArgProps,
          internalVariantPropNames: PlasmicAnimatingCross__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAnimatingCross__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAnimatingCross";
  } else {
    func.displayName = `PlasmicAnimatingCross.${nodeName}`;
  }
  return func;
}

export const PlasmicAnimatingCross = Object.assign(
  // Top-level PlasmicAnimatingCross renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicAnimatingCross
    internalVariantProps: PlasmicAnimatingCross__VariantProps,
    internalArgProps: PlasmicAnimatingCross__ArgProps
  }
);

export default PlasmicAnimatingCross;
/* prettier-ignore-end */