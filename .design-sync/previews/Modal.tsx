import { Modal } from "@stepwords/design-system";

// The modal is a full-screen overlay in the app; give the preview a positioned
// frame so the dimmed backdrop has a box to fill.
const Frame = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      position: "relative",
      width: 380,
      height: 420,
      background: "var(--bg)",
      borderRadius: 16,
      overflow: "hidden",
    }}
  >
    {children}
  </div>
);

// The prototype's demo staircase illustration (EAT → RATE, R = the new letter).
const DemoStair = () => (
  <div className="demo-stair">
    <div className="ds-row">
      <div className="ds-cell">E</div>
      <div className="ds-cell">A</div>
      <div className="ds-cell">T</div>
    </div>
    <div className="ds-row">
      <div className="ds-cell add">R</div>
      <div className="ds-cell">A</div>
      <div className="ds-cell">T</div>
      <div className="ds-cell">E</div>
    </div>
  </div>
);

// The how-to-play modal — panel 1 of the 3-panel carousel, with the dots and
// Skip / Next navigation, exactly as in the prototype.
export const HowToPlay = () => (
  <Frame>
    <Modal>
      <div className="panel active">
        <div className="illo">
          <DemoStair />
        </div>
        <h3>Climb the ladder</h3>
        <p>
          Each row is one letter longer. Rearrange the letters above and add one
          new letter to make the next word.
        </p>
      </div>
      <div className="modal-dots">
        <div className="dot on" />
        <div className="dot" />
        <div className="dot" />
      </div>
      <div className="modal-nav">
        <button type="button" className="skip">
          Skip
        </button>
        <button type="button" className="next">
          Next
        </button>
      </div>
    </Modal>
  </Frame>
);

// The info / credits modal — wordmark, date, byline, rule, credits, Done.
export const Info = () => (
  <Frame>
    <Modal info title="Stepwords">
      <span className="info-meta">Sunday, June 22, 2026</span>
      <span className="info-meta">
        By <strong>Ben Reich</strong>
      </span>
      <div className="info-rule" />
      <p className="info-credits">
        Today's puzzle was created and submitted by Ben Reich. Anyone can submit
        a Stepwords puzzle at stepwords.xyz.
      </p>
      <button type="button" className="play-btn info-done">
        Done
      </button>
    </Modal>
  </Frame>
);
