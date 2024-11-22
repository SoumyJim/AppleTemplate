// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aKe88PuX3H94mH1Pri1oSB
// Component: EX1oHvd8f4PW
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  renderPlasmicSlot,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Button from "../../Button"; // plasmic-import: AFYEhIL9o-Lr/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: aKe88PuX3H94mH1Pri1oSB/projectcss
import sty from "./PlasmicProductDisplay.module.css"; // plasmic-import: EX1oHvd8f4PW/css
import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: 3weH9P_Pyhmk/icon

createPlasmicElementProxy;

export const PlasmicProductDisplay__VariantProps = new Array(
  "dark",
  "reverse",
  "isMobileView"
);

export const PlasmicProductDisplay__ArgProps = new Array(
  "title",
  "description",
  "links",
  "imageSrc",
  "imageSmallSrc"
);

const $$ = {};

function PlasmicProductDisplay__RenderFunc(props) {
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
        path: "dark",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.dark
      },
      {
        path: "reverse",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.reverse
      },
      {
        path: "isMobileView",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isMobileView
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
    <section
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
        sty.root,
        {
          [sty.rootdark]: hasVariant($state, "dark", "dark"),
          [sty.rootisMobileView]: hasVariant(
            $state,
            "isMobileView",
            "isMobileView"
          ),
          [sty.rootreverse]: hasVariant($state, "reverse", "reverse")
        }
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__bk8Wr)}>
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__zi71G, {
            [sty.imgdark__zi71GSyRbu]: hasVariant($state, "dark", "dark"),
            [sty.imgisMobileView__zi71GrIb0J]: hasVariant(
              $state,
              "isMobileView",
              "isMobileView"
            )
          })}
          displayHeight={"100%"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"100%"}
          loading={"lazy"}
          src={args.imageSrc}
        />

        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__aqCRg, {
            [sty.imgisMobileView__aqCRgrIb0J]: hasVariant(
              $state,
              "isMobileView",
              "isMobileView"
            )
          })}
          displayHeight={"100%"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"100%"}
          loading={"lazy"}
          src={args.imageSmallSrc}
        />
      </div>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___8IUim, {
          [sty.freeBoxreverse___8IUimFrgQr]: hasVariant(
            $state,
            "reverse",
            "reverse"
          )
        })}
      >
        <h2
          data-plasmic-name={"h2"}
          data-plasmic-override={overrides.h2}
          className={classNames(projectcss.all, projectcss.h2, sty.h2, {
            [sty.h2dark]: hasVariant($state, "dark", "dark")
          })}
        >
          {renderPlasmicSlot({
            defaultContents: 'Macbook Air 15"',
            value: args.title,
            className: classNames(sty.slotTargetTitle, {
              [sty.slotTargetTitledark]: hasVariant($state, "dark", "dark")
            })
          })}
        </h2>
        <h3
          data-plasmic-name={"h3"}
          data-plasmic-override={overrides.h3}
          className={classNames(projectcss.all, projectcss.h3, sty.h3, {
            [sty.h3dark]: hasVariant($state, "dark", "dark")
          })}
        >
          {renderPlasmicSlot({
            defaultContents: "Impressively big. Impossibly thin.",
            value: args.description,
            className: classNames(sty.slotTargetDescription, {
              [sty.slotTargetDescriptiondark]: hasVariant(
                $state,
                "dark",
                "dark"
              )
            })
          })}
        </h3>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__hefb8, {
            [sty.freeBoxdark__hefb8SyRbu]: hasVariant($state, "dark", "dark")
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <Button
                  className={classNames("__wab_instance", sty.button__d8Phj)}
                  iconLeft={
                    <Icon6Icon
                      className={classNames(projectcss.all, sty.svg__bt2Yg)}
                      role={"img"}
                    />
                  }
                  size={"large"}
                  text={"Learn More"}
                  type={"link"}
                  withIcons={["withSuffixIcon"]}
                />

                <Button
                  className={classNames("__wab_instance", sty.button__q9NsC)}
                  iconLeft={
                    <Icon6Icon
                      className={classNames(projectcss.all, sty.svg__hBnw)}
                      role={"img"}
                    />
                  }
                  size={"large"}
                  text={"Buy"}
                  type={"link"}
                  withIcons={["withSuffixIcon"]}
                />
              </React.Fragment>
            ),

            value: args.links
          })}
        </Stack__>
      </Stack__>
    </section>
  );
}

const PlasmicDescendants = {
  root: ["root", "h2", "h3"],
  h2: ["h2"],
  h3: ["h3"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicProductDisplay__ArgProps,
          internalVariantPropNames: PlasmicProductDisplay__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProductDisplay__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductDisplay";
  } else {
    func.displayName = `PlasmicProductDisplay.${nodeName}`;
  }
  return func;
}

export const PlasmicProductDisplay = Object.assign(
  // Top-level PlasmicProductDisplay renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h2: makeNodeComponent("h2"),
    h3: makeNodeComponent("h3"),
    // Metadata about props expected for PlasmicProductDisplay
    internalVariantProps: PlasmicProductDisplay__VariantProps,
    internalArgProps: PlasmicProductDisplay__ArgProps
  }
);

export default PlasmicProductDisplay;
/* prettier-ignore-end */