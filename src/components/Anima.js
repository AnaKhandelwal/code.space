import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import React from "react";
import styles from "./Landing.module.css";
const Anim = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
    return (
      <div>
      <ScrollContainer>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <span className={styles.title}>FEATURES</span>
        </Animator>
      </ScrollPage>

      <ScrollPage>
        <Animator animation={FadeUp}>
          <div className={styles.contentBox}>
            <img src="PP1.png" alt="Showcase" className={styles.showcaseImage} />
            <div className={styles.divider}></div>
            <div className={styles.textContent}>
              <p>Share your ideas and discoveries with the world.</p>
            </div>
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage>
        <Animator animation={FadeUp}>
          <div className={styles.contentBox2}>
            <div className={styles.textContent2}>
              <p>Get to know the trending topics around the world.</p>
            </div>
            <div className={styles.divider2}></div>
            <img src="PP2.png" alt="Showcase" className={styles.showcaseImage2} />
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage>
        <Animator animation={FadeUp}>
          <div className={styles.contentBox3}>
            <img src="PP3.png" alt="Showcase" className={styles.showcaseImage3} />
            <div className={styles.divider3}></div>
            <div className={styles.textContent3}>
              <p>Pro version to ease the process of learning.</p>
            </div>
          </div>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  </div>
    );
  };
  
  export default Anim;
