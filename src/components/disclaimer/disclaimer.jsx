
import "./disclaimer.css"

function DisclaimerModal({ onAccept }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Disclaimer</h2>
        <p>
          This tarot reading app is intended for entertainment, reflection, and personal insight purposes only. The information provided through tarot card readings should not be considered medical, legal, financial, or professional advice.
        </p>
        <p>
          This app uses artificial intelligence powered by <strong>OpenAI</strong> to generate interpretations and messages. These are created automatically and are not written or reviewed by a human.
        </p>
        <p>
          By using this app, you agree that you are solely responsible for how you interpret and act on any reading. The creators of this app are <strong>not liable</strong> for any decisions, outcomes, or emotional responses resulting from use.
        </p>
        <p>
          If you're facing serious emotional, medical, or legal concerns, please consult a qualified professional.
        </p>
        <button onClick={onAccept}>I Understand</button>
      </div>
    </div>
  )
}
export default DisclaimerModal
