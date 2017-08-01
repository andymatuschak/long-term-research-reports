import { StyleSheet, css } from "aphrodite";
import React from "react";
import Slider from "react-slick";
import VisibilitySensor from "react-visibility-sensor";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import angleBracketLeftIcon from "webapp/shared-styles-package/icon.angleBracketLeft.js";
import globalStyles from "webapp/shared-styles-package/global-styles";
import mediaQueries from "webapp/shared-styles-package/media-queries";

import Forest from "./forest";

const Icon = props => {
  const { color, pathClassName, className } = props;
  let { icon, size } = props;
  let units = "";

  // If the raw path was passed in, wrap it in the format that we expect.
  if (typeof icon === "string") {
    icon = {
      path: icon,
      width: 10,
      height: 10,
    };
  }

  // `size` defaults to 1em to mirror the behavior of Font Awesome.
  if (typeof size !== "number") {
    size = 1;
    units = "em";
  }

  const height = size;
  const width = height / icon.height * icon.width;

  // NOTE: We assume that the viewBox is cropped and aligned to (0, 0),
  //       but icons can be defined differently. At some point we might
  //       want to add these attributes to icon-paths.js, but for now
  //       this is a fairly safe assumption.
  const xMin = 0;
  const yMin = 0;

  return (
    <svg
      className={className}
      focusable={!!props.focusable}
      width={width + units}
      height={height + units}
      viewBox={`${xMin} ${yMin} ${icon.width} ${icon.height}`}
    >
      <path className={pathClassName} fill={color} d={icon.path} />
    </svg>
  );
};

const Authors = () =>
  <h2 className={css(styles.authors)}>
    <div className={css(styles.authorLine)}>
      Andy Matuschak, May-Li Khoe, Scott Farrar
    </div>
  </h2>;

const HeroHeader = () =>
  <div>
    <div className={css(styles.heroContainer)}>
      <div className={css(styles.forestFlatBackground)} />
      <div className={css(styles.heroGradient)} />
      <div
        style={{
          position: "relative",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <h1 className={css(styles.title)}>Cantor (title TBD)</h1>
        <div className={css(styles.hideOnMobile)}>
          <Authors />
        </div>
      </div>
    </div>
    <div className={css(styles.hideUnlessMobile)}>
      <Authors />
    </div>
  </div>;

const Hairline = () => <div className={css(styles.hairline)} />;

const Body = ({ children, noBottomMargin, noTopMargin, wide }) =>
  <p
    className={css(
      styles.body,
      noBottomMargin ? styles.noBottomMargin : undefined,
      noTopMargin ? styles.noTopMargin : undefined,
      wide ? styles.wideParagraph : undefined,
    )}
  >
    {children}
  </p>;

const Heading = ({ children }) =>
  <h2 className={css(styles.heading)}>
    {children}
  </h2>;

const Subheading = ({
  children,
  noTopMargin,
  hideOnMobile,
  hideUnlessMobile,
}) =>
  <h3
    className={css(
      styles.subheading,
      noTopMargin ? styles.noTopMargin : undefined,
      hideOnMobile ? styles.hideOnMobile : undefined,
      hideUnlessMobile ? styles.hideUnlessMobile : undefined,
    )}
  >
    {children}
  </h3>;

const BodyAndSidebar = ({ children }) =>
  <div className={css(styles.bodyAndSidebar)}>
    <div className={css(styles.leftColumn)}>
      {children}
    </div>
  </div>;

const SidebarItem = ({ children, top }) =>
  <div className={css(styles.sidebarItem)} style={{ top }}>
    {children}
  </div>;

class AudibleVideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      muted: true,
      isVisible: false,
    };
  }

  onToggleAudio = () => {
    this.setState({ muted: !this.state.muted });
  };

  onVisibilityChange = isVisible => {
    if (isVisible !== this.state.isVisible) {
      this.setState({ isVisible });
      if (isVisible) {
        this.videoRef.play();
      } else {
        this.videoRef.pause();
      }
    }
  };

  render = () =>
    <VisibilitySensor partialVisibility onChange={this.onVisibilityChange}>
      <div style={{ position: "relative" }}>
        <video
          ref={videoRef => (this.videoRef = videoRef)}
          src="/images/long-term-research/early-math/2-early-sketch/sing-through-touch.mp4"
          muted={this.state.muted}
          loop
          playsInline
          preload
          style={{ width: "100%" }}
        />
        <button
          style={{
            width: 44,
            height: 44,
            position: "absolute",
            borderRadius: 22,
            bottom: 20,
            left: 15,
            border: "2px solid white",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            paddingTop: 5,
          }}
          onClick={this.onToggleAudio}
        >
          {this.state.muted
            ? <svg width="28px" height="22px" viewBox="0 0 28 22" version="1.1">
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g id="noun_1122767_cc" fill-rule="nonzero" fill="#ffffff">
                    <g id="Group">
                      <path
                        d="M20.5541401,6.2307159 C20.177854,5.89512914 19.5820676,5.92563703 19.2371387,6.32223956 C18.8922097,6.6883342 18.9235669,7.26798405 19.3312102,7.60357081 C20.4914258,8.57982319 21.1499265,10.0136939 21.1499265,11.5085803 C21.1499265,13.0034668 20.4914258,14.4068296 19.3312102,15.4135899 C18.9549241,15.7491766 18.8922097,16.3288265 19.2371387,16.6949211 C19.4252817,16.9084763 19.6761391,17 19.9269966,17 C20.1464968,17 20.3659971,16.9389842 20.5541401,16.7559369 C22.0906418,15.4135899 23,13.491593 23,11.5085803 C23,9.52556769 22.121999,7.54255504 20.5541401,6.2307159 Z"
                        id="Shape"
                      />
                      <path
                        d="M24.584997,3.24436072 C24.202006,2.89352665 23.5956037,2.92542066 23.2445286,3.30814874 C22.8934535,3.69087681 22.9253694,4.29686294 23.3083604,4.64769701 C25.0956517,6.27429135 26.116961,8.60255384 26.116961,10.9946043 C26.116961,13.3866548 25.0956517,15.7149173 23.3083604,17.3415117 C22.9253694,17.6923457 22.8934535,18.2983319 23.2445286,18.6810599 C23.4360241,18.872424 23.6913514,19 23.9466787,19 C24.1700901,19 24.4254175,18.904318 24.584997,18.7448479 C26.7552793,16.7674195 28,13.9288529 28,10.9946043 C28,8.06035572 26.7552793,5.22178913 24.584997,3.24436072 Z"
                        id="Shape"
                      />
                      <path
                        d="M17.2194884,0.211012433 C16.7006337,-0.0703374778 16.0844939,-0.0703374778 15.5980676,0.211012433 L6.55053984,5.33783304 L2.5942732,5.33783304 C1.16742294,5.33783304 2.99760217e-15,6.46323268 2.99760217e-15,7.83872114 L2.99760217e-15,14.1847247 C2.99760217e-15,15.5602131 1.16742294,16.6856128 2.5942732,16.6856128 L6.55053984,16.6856128 L15.5656392,21.7811723 C15.8250665,21.9374778 16.1169223,22 16.3763496,22 C16.6682053,22 16.9276327,21.9374778 17.18706,21.7811723 C17.7059146,21.4998224 17.9977704,20.9683837 17.9977704,20.4369449 L17.9977704,1.55523979 C18.0301988,0.992539964 17.7059146,0.492362345 17.2194884,0.211012433 Z M2,14.308642 L2,7.65843621 C2,7.2962963 2.3,7 2.66666667,7 L6,7 L6,15 L2.66666667,15 C2.3,14.9670782 2,14.7037037 2,14.308642 Z M16,20 L8,15.254833 L8,6.74516696 L16,2 L16,20 Z"
                        id="Shape"
                      />
                      <path
                        d="M9.10779907,9.43138986 C9.26057148,9.7867712 9.59667076,10 9.93277005,10 C10.0855425,10 10.2077604,9.96446187 10.3605328,9.8933856 L13.5076443,8.0098645 C13.9659615,7.72555943 14.1187339,7.08587302 13.9048525,6.58833914 C13.6604167,6.05526713 13.110436,5.84203833 12.6826733,6.1263434 L9.5355618,8.0098645 C9.04669011,8.29416957 8.86336323,8.93385598 9.10779907,9.43138986 Z"
                        id="Shape"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            : <svg width="28px" height="23px" viewBox="0 0 23 23" version="1.1">
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="noun_1122767_cc"
                    transform="translate(-2.150000, -27.100000)"
                    fill-rule="nonzero"
                    fill="#ffffff"
                  >
                    <g id="Group" transform="translate(0.000000, 27.000000)">
                      <path
                        d="M2.25402504,17 L2.83363148,17 C3.38103757,17 3.79964222,16.5874942 3.79964222,16.0480635 C3.79964222,15.5086328 3.38103757,15.0961269 2.83363148,15.0961269 L2.25402504,15.0961269 C2.0608229,15.0961269 1.93202147,14.9692021 1.93202147,14.7788147 L1.93202147,7.6075595 C1.93202147,7.41717219 2.0608229,7.29024732 2.25402504,7.29024732 L5.7960644,7.29024732 L5.7960644,11.7008866 C5.7960644,12.2403173 6.21466905,12.6528231 6.76207513,12.6528231 C7.30948122,12.6528231 7.72808587,12.2403173 7.72808587,11.7008866 L7.72808587,6.94120392 L16.0679785,2.1180588 L16.0679785,2.68922072 C16.0679785,3.22865142 16.4865832,3.64115726 17.0339893,3.64115726 C17.5813953,3.64115726 18,3.22865142 18,2.68922072 L18,1.57862809 C18,1.00746617 17.6779964,0.468035464 17.1949911,0.214185721 C16.6797853,-0.0713952403 16.0679785,-0.0713952403 15.5849732,0.214185721 L6.56887299,5.44983668 L2.25402504,5.44983668 C0.998211091,5.44983668 6.66133815e-16,6.43350443 6.66133815e-16,7.67102193 L6.66133815e-16,14.810546 C6.66133815e-16,15.984601 1.03041145,17 2.25402504,17 Z"
                        id="Shape"
                      />
                      <path
                        d="M17.0225156,11 C16.4686078,11 16.0450313,11.4148936 16.0450313,11.9574468 L16.0450313,20.8617021 L9.39813757,17.7021277 C8.90939539,17.4787234 8.32290477,17.6702128 8.09482508,18.1489362 C7.8667454,18.6276596 8.06224227,19.2021277 8.55098445,19.4255319 L15.6214547,22.8085106 C15.8495344,22.9361702 16.1101969,23 16.3708594,23 C16.6641047,23 16.95735,22.9361702 17.2180125,22.7765957 C17.7067547,22.4893617 18,21.9787234 18,21.4042553 L18,11.9574468 C18,11.4468085 17.5764234,11 17.0225156,11 Z"
                        id="Shape"
                      />
                      <path
                        d="M22.7629323,1.31136406 C22.4225689,0.92464247 21.8346686,0.89241567 21.4633632,1.24691046 L0.298951955,21.3242064 C-0.0723535046,21.6787012 -0.103295626,22.2910104 0.237067712,22.677732 C0.422720442,22.8710928 0.670257416,23 0.917794389,23 C1.13438924,23 1.35098409,22.9033196 1.53663682,22.7421856 L22.701048,2.66488963 C23.0723535,2.31039484 23.1032956,1.69808565 22.7629323,1.31136406 Z"
                        id="Shape"
                      />
                    </g>
                  </g>
                </g>
              </svg>}
        </button>
      </div>
    </VisibilitySensor>;
}

const PrototypeExample = ({ heading, children }) =>
  <div className={css(styles.prototypeExample)}>
    <Subheading noTopMargin hideUnlessMobile>
      {heading}
    </Subheading>
    <div className={css(styles.leftColumn)}>
      <Subheading noTopMargin hideOnMobile>
        {heading}
      </Subheading>
      {children}
    </div>
    <div className={css(styles.prototypeVideo)}>
      <AudibleVideoPlayer />
    </div>
  </div>;

const StoryboardElement = ({ storyboardElementNumber, children }) =>
  <div className={css(styles.storyboardElement)}>
    <div className={css(styles.storyboardFigure)}>
      <div
        className={css(styles.placeholder)}
        style={{ height: 450, width: "100%" }}
      />
    </div>
    <div className={css(styles.storyboardBody)}>
      <span className={css(styles.storyboardElementNumber)}>
        {storyboardElementNumber}.
      </span>
      {children}
    </div>
  </div>;

const Principle = ({ children }) =>
  <span className={css(styles.principleTitle)}>
    {children}
  </span>;

const FurtherReadingItem = ({ children }) =>
  <li className={css(styles.furtherReadingItem, styles.wideParagraph)}>
    {children}
  </li>;

const CarouselArrow = ({ className, style, onClick, isNext }) =>
  <div
    className={css(styles.carouselArrow)}
    style={{
      transform: `translate(0, -50%)${isNext ? " scaleX(-1)" : ""}`,
      right: isNext ? 10 : undefined,
      left: isNext ? undefined : 10,
    }}
    onClick={onClick}
  >
    <Icon icon={angleBracketLeftIcon} size={20} color="#fff" />
  </div>;

const CarouselNextArrow = props => <CarouselArrow {...props} isNext />;

const CarouselPrevArrow = props => <CarouselArrow {...props} />;

const FPO = () =>
  <p
    style={{
      position: "absolute",
      color: "magenta",
      paddingLeft: 24,
      fontSize: 24,
    }}
  >
    FPO
  </p>;

export default class Report extends React.Component {
  componentDidMount = () => {
    // Aphrodite interferes with the initial sizing of our carousel. This is a hack to work around that.
    setTimeout(() => this.slider.innerSlider.onWindowResized(), 0);
  };

  render = () =>
    <div className={css(styles.outerClip)}>
      <div className={css(styles.container)}>
        <HeroHeader />
        <p className={css(styles.lede)}>
          Quick: is 29 prime? Our number system makes some properties of numbers
          easy to see and others much harder. We designed new interactive
          representations that make invisible number properties more visible.
        </p>
        <Hairline />
        <Heading>Looking at numbers in many ways</Heading>
        <BodyAndSidebar>
          <Body>
            We might learn to add numbers using a particular algorithm, but
            there are lots of ways to think about how a pair of numbers fit
            together.
          </Body>
        </BodyAndSidebar>
        <BodyAndSidebar>
          <Body>
            For instance: what goes through your head when you try to add 37 and
            15? If you ask a classroom, you’ll hear a huge variety of answers
            drawing on different sets of mathematical ideas.
          </Body>
          <SidebarItem top={3}>
            <p className={css(styles.sidebarBody, styles.noBottomMargin)}>
              Asking this kind of question in a classroom is itself a popular
              pedagogical strategy, called “number talks.” See{" "}
              <a href="https://www.youcubed.org/from-stanford-onlines-how-to-learn-math-for-teachers-and-parents-number-talks/">
                this quick example
              </a>{" "}
              from Jo Boaler or read more{" "}
              <a href="https://www.amazon.com/dp/1935099655/ref=cm_sw_r_cp_api_HUSqzb408FZ89">
                in this book
              </a>{" "}
              by Sherry Parrish.
            </p>
          </SidebarItem>
        </BodyAndSidebar>
        <FPO />
        <img
          src="/images/long-term-research/cantor/37-and-15.png"
          style={{ width: "100%", margin: "24px 0" }}
        />
        <BodyAndSidebar>
          <Body>
            We build our fluency with numbers incrementally from many angles,
            filling in a dense network of mathematical properties. We might
            think of “seven” in terms of three away from ten… or as being two
            more than five… or as being almost double four. When viewed across
            numbers, these relationships can become first-class ideas of their
            own which apply to any number, like “distance to the nearest ten.”
          </Body>
        </BodyAndSidebar>
        <FPO />
        <img
          src="/images/long-term-research/cantor/number-relationships.jpg"
          style={{ width: "100%", marginBottom: 18 }}
        />
        <BodyAndSidebar>
          <Body>
            Different representations of numbers emphasize or obscure different
            number meanings. For example, the base-ten representation of 12
            makes a “10 + 2” decomposition natural. But the arrangement of
            twelve quarters depicted here makes us think of “12 = 3 x 4”.
          </Body>
          <SidebarItem top={0}>
            <div
              className={css(styles.placeholder)}
              style={{ width: "100%", height: 120 }}
            >
              photo of three groups of four quarters here
            </div>
          </SidebarItem>
        </BodyAndSidebar>
        <BodyAndSidebar>
          <Body>
            With improved representations, certain thoughts become easier to
            think. By improving our representations, we can make powerful ideas
            more broadly accessible—or even accessible at all! Before the
            Mesopotamian base-60 number system circa 3400 BC, humans represented
            numbers using tallies or tokens. Imagine trying to think about the
            number 1,776 if you only had tick marks!
          </Body>
          <SidebarItem top={0}>
            <img
              src="/images/long-term-research/cantor/tick-marks.png"
              style={{ width: "100%" }}
            />
          </SidebarItem>
          <Body>
            So: what new kinds of representations might make math even easier to
            think? Seymour Papert, a pioneering voice in education technology,
            paints the tantalizing possibilities:
          </Body>
        </BodyAndSidebar>
        <Body wide noTopMargin>
          “While it’s true that most people in math class don’t learn much math,
          most kids in French class don’t learn much French. But, we don’t say
          that they are not “French-ly minded.” We don’t say that they don’t
          have a head for French because we know that if they grew-up in France,
          they would learn French perfectly well. And I think that my image of
          learning mathematics is that if we all learned mathematics in
          “Mathland,” we would all learn mathematics perfectly well.”
        </Body>
        <BodyAndSidebar>
          <Body>
            Students have long used physical manipulatives like the blocks
            depicted here as alternative representations for numbers. These can
            be powerful—particularly because they take advantage of our
            body-awareness—but physical objects are limited by
            often-inconvenient laws of physics.
          </Body>
          <SidebarItem top={0}>
            <FPO />
            <img
              src="/images/long-term-research/cantor/physical-blocks.jpg"
              style={{ width: "100%" }}
            />
            <p className={css(styles.figureCaption)}>
              Try representing 1,684! Try showing 36 in base 7! Try checking if
              75 is odd! Try…
            </p>
          </SidebarItem>
          <Body>
            <a href="http://klr.tumblr.com/post/153279790133/whats-so-great-about-the-digital-medium-again">
              The dynamic medium makes new representations possible
            </a>{" "}
            through morphing, distorting, multiplying, linking, communicating,
            abstracting, and so on. New forms can render ordinarily-invisible
            relationships more visible.{" "}
            <a href="https://www.google.com/url?q=https://ka-hivemind.herokuapp.com/entry/KhkXuvBHnvEuHNomH&sa=D&ust=1497651659174000&usg=AFQjCNGot9ex_BKS1ii4Kd92V0T0MZrg_Q">
              Physical manipulatives are highly dependent on instructors’
              guidance
            </a>, but digital manipulatives can more easily encode elements of
            that guidance in their interactions via constraints and dynamism.
          </Body>
        </BodyAndSidebar>
        <Heading>Revealing hidden properties of numbers</Heading>
        <Body wide>
          To explore the possibilities in this space, we built “Cantor,” a
          digital representation of quantity with some unusual interactions. Our
          aim was to make ordinarily-subtle properties of numbers more visceral—<a href="http://worrydream.com/MediaForThinkingTheUnthinkable/">
            to make certain thoughts more thinkable
          </a>.
        </Body>
        <Body wide>
          Examples loop below. Feel free to interrupt any of them: you can
          manipulate the objects yourself!
        </Body>
        <div
          className={css(styles.placeholder)}
          style={{ height: 300, marginBottom: 24 }}
        >
          [Full-width embedded Cantor: 37 and 15 on the canvas. 15 is reflowed
          to 3 + 10 + 2, then is moved up to “fit inside” 37]
          <br />This “reflow” interaction emphasizes the <em>negative space</em>{" "}
          in base ten numbers (“number partners”): 37 is “3 away” from 40.
        </div>
        <div
          className={css(styles.placeholder)}
          style={{ height: 300, marginBottom: 24 }}
        >
          [Full-width embedded Cantor: 10, 11, 12, 13 on the canvas. Each is
          resized to 2 wide]<br />
          This “resize” interaction makes modular arithmetic and divisibility
          immediately apparent. Even-ness and odd-ness emerge from casual play
          as a clear pattern.
        </div>
        <div
          className={css(styles.placeholder)}
          style={{ height: 300, marginBottom: 24 }}
        >
          [Full-width embedded Cantor: 12 and 13 on the canvas. Each is slowly
          resized down to 2 and back to 10]<br />
          Note how 12 forms lots of rectangles as it’s resized. 13 doesn’t form
          any. With this interaction, primality becomes visceral.
        </div>
        <Body wide>
          In each case, the student directly manipulates the number—they’re not
          fiddling with some dissociated text field somewhere. The interactions
          are deeply entangled with the mathematical operation at hand: for
          instance, changing a number block’s width to some value is the same as
          changing the number’s base to that value.
        </Body>
        <Body wide>
          These are just three examples. We can invent more interactions like
          the ones we’ve shown here—and alternative dynamic representations of
          quantities—to build bridges to many other attributes of numbers. When
          we implement these manipulatives, they tend to surprise us with
          unanticipated possibilities: we stumbled on some of the interactions
          we’ve shown by accident through play!
        </Body>
        <Heading>One interactive representation, many contexts</Heading>
        <BodyAndSidebar>
          <Body>
            Physical base-ten blocks can be used in lots of contexts. That’s
            true of media in general: paper and pencil are valuable in a
            classroom, in a conversation, in an art studio, and all kinds of
            other places. When it comes to digital learning tools, though,
            they’re often designed to work in just one narrow context.
          </Body>
        </BodyAndSidebar>
        <BodyAndSidebar>
          <Body>
            For instance, this wonderful interactive representation from{" "}
            <a href="https://teacher.desmos.com/carnival">
              Desmos’s Function Carnival
            </a>{" "}
            was designed for students to use in a classroom conversation. But
            it’s not really designed to exist outside the classroom: a student
            can’t bend it to some other problem they’re considering on their own
            later.
          </Body>
          <SidebarItem top={0}>
            <img
              src="/images/long-term-research/cantor/function-carnival.gif"
              style={{ width: "100%" }}
            />
          </SidebarItem>
          <Body>
            By contrast, consider the graphing calculator (Desmos also makes one
            of those). It’s highly empowering because it can be used in so many
            contexts, from homework assignments to visual doodles to
            self-directed exploration. The graphing calculator{" "}
            <a href="http://klr.tumblr.com/post/148335923163/tools-for-thinking-more-scaffold-less-crutch">
              complements—instead of combatting
            </a>—media like paper and pencil, multiplying its possibilities. Its
            versatility gives students control, allowing them to find (or
            invent) individually meaningful uses for the tool.
          </Body>
          <Body noBottomMargin>
            We pushed hard for versatility as we explored and invented in this
            space. You’ve already seen in this article how Cantor might be used
            in an online textbook; now let’s look at some other ideas.
          </Body>
        </BodyAndSidebar>
        <Subheading>
          Conversations using Cantor at the speed of speech
        </Subheading>
        <BodyAndSidebar>
          <Body noBottomMargin>
            As we tried using Cantor in a variety of situations, we realized
            that in any context involving communication, great interactive tools
            become much more powerful when they can be used at the speed of
            speech. With tools this fluid, we can enhance natural dialogue
            through novel representations without awkward pauses. Congruently,
            high-speed interactions amplify learners’ solo explorations,
            enhancing natural thought without awkward pauses.
          </Body>
          <SidebarItem top={0}>
            <div className={css(styles.placeholder)} style={{ height: 200 }}>
              {" "}looping animation of two people in conversation drawing and
              resizing 12 and 13, noticing factors.<br />
              <br />Speaker icon floats on canvas. When you click it, you hear
              the conversation, narrating the actions on the canvas at the speed
              of speech. Maybe there’s a Facebook-video-style subtitle track?
            </div>
          </SidebarItem>
        </BodyAndSidebar>
        <Subheading>
          Recording and replaying spoke explanations within Cantor
        </Subheading>
        <BodyAndSidebar>
          <Body noBottomMargin>
            The dialogue example above demonstrates a recording of a
            conversation using Cantor. We realized: what if this interaction
            were built into the medium? A student might submit an answer to a
            homework problem or ask a peer for asynchronous help by recording
            themselves speaking aloud while manipulating these dynamic
            representations.
          </Body>
          <SidebarItem top={0}>
            <div className={css(styles.placeholder)} style={{ height: 200 }}>
              little Cantor canvas with a number block and a record and play
              button, inviting the reader to record their own little snippet
            </div>
          </SidebarItem>
        </BodyAndSidebar>
        <Subheading>
          Interrupting, answering, and elaborating others' recordings
        </Subheading>
        <BodyAndSidebar>
          <Body noBottomMargin>
            If we add recordings as a first-class element of Cantor’s canvas, we
            don’t have to play them back like a non-interactive video: they can
            be integrated into the interactive canvas. A teacher’s recorded
            prompts and block manipulations could inhabit the same space as
            student interactions. Then we could string together a sequence—or
            even a dynamic tree—of teacher–student interactions, with each
            recorded prompt reacting to a student’s actions and offering further
            provocation.
          </Body>
          <SidebarItem top={0}>
            <div className={css(styles.placeholder)} style={{ height: 200 }}>
              Cantor canvas with a waiting play button. Click it, and a
              recording creates a “12” block and resizes it to 6, noting aloud
              that it makes a rectangle. It asks (subtitled): “how many
              rectangles can you make out of 12?”
            </div>
          </SidebarItem>
        </BodyAndSidebar>
        <Subheading>
          Connecting many number representations on the same canvas
        </Subheading>
        <BodyAndSidebar>
          <Body noBottomMargin>
            This versatile canvas doesn’t have to be limited to the number block
            representation we’ve shown. We imagine a future version of this
            canvas that can support all kinds of dynamic representations:
            physics simulations, geometric drawings, videos, drawings, and so
            on. If we allow these representations to connect to each other,
            students can create and discover ideas we didn’t anticipate.
          </Body>
          <SidebarItem top={0}>
            <FPO />
            <img
              src="/images/long-term-research/cantor/linked-representations.png"
              style={{ width: "100%" }}
            />
          </SidebarItem>
        </BodyAndSidebar>
        <Heading>Further possibilities</Heading>
        <BodyAndSidebar>
          <Body>
            We generated many more ideas throughout our process, at various
            stages of fidelity. There’s so much more to explore in this space!
          </Body>
        </BodyAndSidebar>
        <Slider
          ref={slider => (this.slider = slider)}
          dots
          infinite
          slidesToShow={1}
          centerMode
          centerPadding="223px"
          dots={false}
          nextArrow={<CarouselNextArrow />}
          prevArrow={<CarouselPrevArrow />}
          responsive={[
            {
              breakpoint: 1200,
              settings: {
                centerPadding: "188px",
              },
            },
            {
              breakpoint: 1024,
              settings: {
                centerPadding: "176px",
              },
            },
            {
              breakpoint: 768,
              settings: {
                centerMode: false,
                autoplay: true,
                autoplaySpeed: 5000,
              },
            },
          ]}
        >
          {[
            "We’ve sketched ideas for exploring fractions, negative numbers, and algebraic expressions with related digital manipulatives.",
            "We first investigated digital number manipulatives in the context of an early numeracy environment. In that system, these number blocks could be used to modify the child’s world.",
            "Unlike physical blocks, digital number blocks could represent arbitrarily high place values by continuously zooming out, or by representing higher place values by higher-dimensional rotations.",
          ].map(text =>
            <div
              style={{
                padding: "0 15px",
              }}
            >
              <div
                className={css(styles.placeholder)}
                style={{
                  width: "100%",
                  height: 517,
                  marginBottom: 8,
                }}
              />
              <Body>
                {text}
              </Body>
            </div>,
          )}
        </Slider>
        <BodyAndSidebar>
          <Body>
            We’ve shown how through this medium, one can literally see—and
            possibly hear!—a student’s manipulations and thoughts as they work.
            A digital curriculum built around this kinds of open-ended student
            work would emphasize student thought over a final answer. This can
            give teachers greater insight into a student’s understanding and
            allow students to explore others’ strategies for tackling a given
            problem.
          </Body>
          <Body>We haven’t yet found “Mathland,” but we believe that dynamic representations like these help point the way—not just in math, but across all domains of thought.</Body>
          <SidebarItem top={0}>
            <p className={css(styles.sidebarBody)}>
              <a href="http://www.nctm.org/">
                The National Council of Teachers of Mathematics
              </a>{" "}
              lists “elicit and use evidence of student thinking” as one of{" "}
              <a href="http://www.nctm.org/uploadedFiles/Standards_and_Positions/PtAExecutiveSummary.pdf">
                its core mathematical teaching practices.
              </a>
            </p>
          </SidebarItem>
        </BodyAndSidebar>

        <Heading>Acknowledgements</Heading>
        <Body wide>
TODO
        </Body>

        <Heading>Further reading</Heading>
        <Body wide>
TODO        </Body>
        <ul className={css(styles.furtherReadingList)}>
          <FurtherReadingItem>
            Papert, Seymour. 1980. <em>Mindstorms</em>. Harvester Press.
          </FurtherReadingItem>
        </ul>
      </div>
    </div>;
}

const styles = StyleSheet.create({
  outerClip: { position: "relative", overflow: "hidden" },
  container: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 96,

    [mediaQueries.smOrSmaller]: {
      marginLeft: 16,
      marginRight: 16,
    },
    [mediaQueries.mdOrLarger]: {
      width: 728,
    },
    [mediaQueries.lgOrLarger]: {
      width: 984,
    },
    [mediaQueries.xlOrLarger]: {
      width: 1166,
    },
    marginBottom: 128,
  },

  lede: {
    fontSize: 20,
    lineHeight: 1.5,
    margin: "40px auto",
    display: "block",

    [mediaQueries.smOrSmaller]: {
      marginTop: 20,
    },
    [mediaQueries.mdOrLarger]: {
      width: 512,
    },
    [mediaQueries.lgOrLarger]: {
      width: 722,
    },
  },

  heading: {
    marginTop: 39,
    marginBottom: 26,
    color: globalStyles.colors.gray17,
    ...globalStyles.typography.conceptHeadingDesktop,
    [mediaQueries.smOrSmaller]: {
      ...globalStyles.typography.conceptHeadingMobile,
    },
  },

  subheading: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 1.5,
    marginTop: 47,
  },

  figureCaption: {
    color: globalStyles.colors.gray41,
    ...globalStyles.typography.bodyXsmall,
    fontStyle: "normal",
    marginTop: 8,
    marginBottom: 38,
  },

  noTopMargin: {
    marginTop: 0,
  },

  noBottomMargin: {
    marginBottom: 0,
  },

  body: {
    ...globalStyles.typography.bodyLarge,
    [":first-of-type"]: {
      marginTop: 0,
    },
  },

  wideParagraph: {
    [mediaQueries.lgOrLarger]: {
      width: 781,
    },
    [mediaQueries.xlOrLarger]: {
      width: 945,
    },
  },

  prototypeExample: {
    marginTop: 32,
    [":first-of-type"]: {
      marginTop: 50,
    },
    display: "flex",
    [mediaQueries.smOrSmaller]: {
      flexDirection: "column",
    },
  },

  leftColumn: {
    [mediaQueries.smOrSmaller]: {
      order: 1,
    },
    [mediaQueries.mdOrLarger]: {
      width: 352,
    },
    [mediaQueries.lgOrLarger]: {
      width: 478,
    },
    [mediaQueries.xlOrLarger]: {
      width: 568,
    },
  },

  prototypeVideo: {
    [mediaQueries.smOrSmaller]: {
      order: 0,
      width: "100%",
      marginBottom: 22,
    },
    [mediaQueries.mdOrLarger]: {
      marginLeft: "auto",
      width: 352,
    },
    [mediaQueries.lgOrLarger]: {
      width: 478,
    },
    [mediaQueries.xlOrLarger]: {
      width: 568,
    },
  },

  bodyAndSidebar: {
    display: "flex",
    position: "relative",
  },

  sidebarItem: {
    [mediaQueries.mdOrLarger]: {
      position: "absolute",
      left: 375,
      width: 352,
    },
    [mediaQueries.lgOrLarger]: {
      left: 608,
      width: 376,
    },
    [mediaQueries.xlOrLarger]: {
      left: 721,
      width: 446,
    },
  },

  sidebarBody: {
    ...globalStyles.typography.bodyXsmall,
    [":first-of-type"]: {
      marginTop: 0,
    },
    fontStyle: "normal",
    color: globalStyles.colors.gray41,
    [mediaQueries.smOrSmaller]: {
      marginLeft: 128,
    },
  },

  principleTitle: {
    fontWeight: "bold",
  },

  placeholder: {
    backgroundColor: "#D8D8D8",
    color: "magenta",
    padding: 10,
  },

  storyboardElement: {
    marginTop: 32,
    display: "flex",
    [mediaQueries.smOrSmaller]: {
      flexDirection: "column",
    },
  },

  storyboardFigure: {
    [mediaQueries.smOrSmaller]: {
      marginBottom: 24,
    },
    [mediaQueries.mdOrLarger]: {
      width: 352,
      marginRight: 46,
    },
    [mediaQueries.lgOrLarger]: {
      width: 505,
      marginRight: 64,
    },
    [mediaQueries.xlOrLarger]: {
      width: 600,
      marginRight: 78,
    },
    flex: "none",
  },

  storyboardBody: {
    flex: "1 1",
    position: "relative",
  },

  storyboardElementNumber: {
    [mediaQueries.smOrSmaller]: {
      display: "none",
    },
    ...globalStyles.typography.bodyLarge,
    // TODO: fix on mobile
    position: "absolute",
    width: 100,
    textAlign: "right",
    marginRight: 10,
    right: "100%",
  },

  hairline: {
    marginTop: 40,
    marginBottom: 37,
    backgroundColor: globalStyles.colors.gray41, // TODO: Maybe we want a lighter color here for non-retina users?
    width: "100%",
    height: 1,

    "@media (-webkit-min-device-pixel-ratio: 2.0)": {
      // Unfortunately, only Safari respects fractional border
      // widths. Chrome is still working on it.
      // https://bugs.chromium.org/p/chromium/issues/detail?id=623495
      height: 0.5,
    },
  },

  furtherReadingList: {
    listStyle: "disc outside",
    [mediaQueries.mdOrSmaller]: {
      listStyle: "disc inside",
    },
  },

  furtherReadingItem: {
    ...globalStyles.typography.bodyLarge,
  },

  hideOnMobile: {
    [mediaQueries.smOrSmaller]: {
      display: "none",
    },
  },

  hideUnlessMobile: {
    [mediaQueries.mdOrLarger]: {
      display: "none",
    },
  },

  heroContainer: {
    height: 615,
    [mediaQueries.smOrSmaller]: {
      height: 322,
      marginBottom: 8,
      maxHeight: "100vh",
    },
  },

  forestFlatBackground: {
    backgroundColor: "#c7e9f1",
    position: "absolute",
    left: 0,
    height: 615,
    [mediaQueries.smOrSmaller]: {
      height: 322,
      maxHeight: "100vh",
    },
    width: "100%",
  },

  forestContainer: {
    transform: "scale(0.8)",
    transformOrigin: "0 0",
    marginLeft: -24,
    userSelect: "none",
    [mediaQueries.smOrSmaller]: {
      transform: "scale(0.42)",
    },
  },

  heroGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: 615,
    [mediaQueries.smOrSmaller]: {
      height: 322,
      maxHeight: "100vh",
    },
    background:
      "linear-gradient(-179deg, rgba(21,89,104,0.27) 41%, rgba(21,89,104,0.00) 76%)",
    pointerEvents: "none",
    userSelect: "none",
  },

  title: {
    color: "white",
    marginBottom: 20,
    ...globalStyles.typography.subjectHeadingDesktop,
    lineHeight: "50px",
    paddingTop: 108,
    [mediaQueries.smOrSmaller]: {
      paddingTop: 82,
      ...globalStyles.typography.subjectHeadingMobile,
    },
    maxWidth: 700,
  },

  authors: {
    ...globalStyles.typography.smallHeading,
    fontWeight: "normal",
    color: "white",
    [mediaQueries.smOrSmaller]: {
      color: globalStyles.colors.gray41,
      ...globalStyles.typography.caption,
      fontWeight: "normal",
    },
    maxWidth: 600,
  },

  authorLine: {
    [mediaQueries.smOrSmaller]: {
      display: "inline",
    },
    [mediaQueries.mdOrLarger]: {
      display: "block",
    },
  },

  carouselArrow: {
    position: "absolute",
    cursor: "pointer",
    outline: "none",
    zIndex: 10,
    opacity: 0.7,
    transition: `opacity ${globalStyles.standardTransition}`,
    ":hover": {
      opacity: 1,
      textDecoration: "none",
    },
    ":focus": {
      opacity: 1,
    },
    height: 20,
    [mediaQueries.smOrSmaller]: {
      top: "calc(100vw * 3 / 4 / 2)",
    },
    [mediaQueries.mdOrLarger]: {
      top: 131,
    },
    [mediaQueries.lgOrLarger]: {
      top: 216,
    },
    [mediaQueries.xlOrLarger]: {
      top: 258,
    },
  },
});
``;