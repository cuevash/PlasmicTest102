// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wx6aoo7FZEXNn8vLYsSQDm
// Component: Z489008dJg24V
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import IconLink from "../../IconLink"; // plasmic-import: 3eeqB2Cq19Rpg/component
import TextInput from "../../TextInput"; // plasmic-import: fgkVFy0wrVWvCO/component
import Button from "../../Button"; // plasmic-import: jqiB88P53Q6rHE/component

import { useScreenVariants as useScreenVariantskqRUdDzzQOAa } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: KqR-UdDzz-qOAa/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: wx6aoo7FZEXNn8vLYsSQDm/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: Z489008dJg24V/css

import LogoIcon from "./icons/PlasmicIcon__Logo"; // plasmic-import: oGIIgq6g44-n8X/icon
import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: Xl1C6XWRgUq2yk/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 7o1gsdODbHHZlc/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: JawdjrG6paZs8c/icon
import TwitterIconIcon from "./icons/PlasmicIcon__TwitterIcon"; // plasmic-import: uB14dyueeEsLUX/icon
import GithubIconIcon from "./icons/PlasmicIcon__GithubIcon"; // plasmic-import: sPyPRBDgv9DY0L/icon
import FacebookIconIcon from "./icons/PlasmicIcon__FacebookIcon"; // plasmic-import: 4jhqMNEEmsNCSy/icon

export type PlasmicFooter__VariantMembers = {};

export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: p.Flex<"div">;
  textInput?: p.Flex<typeof TextInput>;
  button?: p.Flex<typeof Button>;
  textbox?: p.Flex<typeof TextInput>;
};

export interface DefaultFooterProps {
  className?: string;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantskqRUdDzzQOAa()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox___1YaFh)} />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__pnYfl)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__zNpL1)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink__g3N7V)}
            icon={
              <LogoIcon
                className={classNames(projectcss.all, sty.svg__a16Wj)}
                role={"img"}
              />
            }
          />

          <div className={classNames(projectcss.all, sty.freeBox__w6WQi)}>
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__mSsPq
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Terms"}
            </p.PlasmicLink>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__tqoWg
              )}
            >
              {" · "}
            </div>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__pOmZ
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Privacy"}
            </p.PlasmicLink>
          </div>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__mIdDt)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__uwhaJ)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__c3KT7
              )}
            >
              {"Products"}
            </div>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__wjN9M
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Web Studio"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__ohGab
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"DynamicBox Flex"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___0TiF
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Programming Forms"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__piSo
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Integrations"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__lHalh
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Command-line"}
            </p.PlasmicLink>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__rgOeZ)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ikEiu
              )}
            >
              {"Resources"}
            </div>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__evAeS
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Documentation"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__yQaek
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Tutorials & Guides"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__zX8Nt
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Blog"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__iysS
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Support Center"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__csUOb
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Partners"}
            </p.PlasmicLink>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__hZnA2)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__x3479
              )}
            >
              {"Company"}
            </div>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__bo1Zc
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Home"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__x4Ox6
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"About us"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__uPxrV
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Company values"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__vBr8
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Pricing"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__s1NkA
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Privacy policy"}
            </p.PlasmicLink>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___6JzI)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__dLGX
              )}
            >
              {"Subscribe"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__psjk6
              )}
            >
              {"Get the latest news and articles to your inbox every month."}
            </div>

            <TextInput
              data-plasmic-name={"textInput"}
              data-plasmic-override={overrides.textInput}
              className={classNames("__wab_instance", sty.textInput)}
              endIcon={
                <Button
                  data-plasmic-name={"button"}
                  data-plasmic-override={overrides.button}
                  className={classNames("__wab_instance", sty.button)}
                  color={"clear" as const}
                  size={"compact" as const}
                  startIcon={
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__x5Ocx)}
                      role={"img"}
                    />
                  }
                >
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__bWuPy)}
                    role={"img"}
                  />
                </Button>
              }
              fontSize={"small" as const}
              placeholder={"Your email" as const}
              showEndIcon={true}
            />
          </p.Stack>
        </p.Stack>
      </p.Stack>

      <div className={classNames(projectcss.all, sty.freeBox__lcmHk)} />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__j3HNg)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__fBiEc)}>
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link___62ZpH
            )}
            component={Link}
            href={"https://cruip.com/" as const}
            platform={"nextjs"}
          >
            {"Designed by Cruip. "}
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__nFseK
            )}
            component={Link}
            href={"https://www.plasmic.app/" as const}
            platform={"nextjs"}
          >
            {"Built in Plasmic. "}
          </p.PlasmicLink>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__pcHkJ
            )}
          >
            {"All rights reserved."}
          </div>
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__hV6DS)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink__xFbk)}
            icon={
              <TwitterIconIcon
                className={classNames(projectcss.all, sty.svg__vkt89)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__gCmp)}
            icon={
              <GithubIconIcon
                className={classNames(projectcss.all, sty.svg__crHV)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__cUgd)}
            icon={
              <FacebookIconIcon
                className={classNames(projectcss.all, sty.svg__x3EV)}
                role={"img"}
              />
            }
          />
        </p.Stack>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textInput", "textbox", "button"],
  textInput: ["textInput", "textbox", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  textInput: typeof TextInput;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFooter__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
