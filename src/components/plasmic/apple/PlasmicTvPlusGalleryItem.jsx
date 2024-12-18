// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aKe88PuX3H94mH1Pri1oSB
// Component: thSOjRbvhGO1
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  renderPlasmicSlot
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Button from "../../Button"; // plasmic-import: AFYEhIL9o-Lr/component
import { useScreenVariants as useScreenVariantsic20Cuz9FHa } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: IC_20cuz9fHa/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: aKe88PuX3H94mH1Pri1oSB/projectcss
import sty from "./PlasmicTvPlusGalleryItem.module.css"; // plasmic-import: thSOjRbvhGO1/css
import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: CCAIDT9YMN1i/icon

createPlasmicElementProxy;

export const PlasmicTvPlusGalleryItem__VariantProps = new Array();

export const PlasmicTvPlusGalleryItem__ArgProps = new Array(
  "imageUrl",
  "genre",
  "description"
);

const $$ = {};

function PlasmicTvPlusGalleryItem__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          imageUrl:
            "https://is2-ssl.mzstatic.com/image/thumb/z9B-5Ow-sggMXLJGroT1Lg/689x387.jpg"
        },
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
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsic20Cuz9FHa()
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
      <PlasmicImg__
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
        displayHeight={"100%"}
        displayMaxHeight={"none"}
        displayMaxWidth={"100%"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"100%"}
        src={args.imageUrl}
      />

      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__lCmTx)}
      >
        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          bold={true}
          className={classNames("__wab_instance", sty.button)}
          iconLeft={
            <Icon10Icon
              data-plasmic-name={"icon"}
              data-plasmic-override={overrides.icon}
              className={classNames(projectcss.all, sty.icon)}
              role={"img"}
            />
          }
          rounded={true}
          size={"large"}
          text={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__bGwx1
              )}
            >
              {"Stream now"}
            </div>
          }
          type={"_default"}
          withIcons={["withSuffixIcon"]}
        />

        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__vcyEa)}
        >
          <h5
            className={classNames(projectcss.all, projectcss.h5, sty.h5__ap8Re)}
          >
            {renderPlasmicSlot({
              defaultContents: "Thriller",
              value: args.genre,
              className: classNames(sty.slotTargetGenre)
            })}
          </h5>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__voXkv
            )}
          >
            {"."}
          </div>
          <h5
            className={classNames(projectcss.all, projectcss.h5, sty.h5__mg2W3)}
          >
            {renderPlasmicSlot({
              defaultContents: "Let them think they're in control.",
              value: args.description,
              className: classNames(sty.slotTargetDescription)
            })}
          </h5>
        </Stack__>
      </Stack__>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "img", "button", "icon"],
  img: ["img"],
  button: ["button", "icon"],
  icon: ["icon"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicTvPlusGalleryItem__ArgProps,
          internalVariantPropNames: PlasmicTvPlusGalleryItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTvPlusGalleryItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTvPlusGalleryItem";
  } else {
    func.displayName = `PlasmicTvPlusGalleryItem.${nodeName}`;
  }
  return func;
}

export const PlasmicTvPlusGalleryItem = Object.assign(
  // Top-level PlasmicTvPlusGalleryItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    button: makeNodeComponent("button"),
    icon: makeNodeComponent("icon"),
    // Metadata about props expected for PlasmicTvPlusGalleryItem
    internalVariantProps: PlasmicTvPlusGalleryItem__VariantProps,
    internalArgProps: PlasmicTvPlusGalleryItem__ArgProps
  }
);

export default PlasmicTvPlusGalleryItem;
/* prettier-ignore-end */
