import DrawnCard from '../../components/drawnCards/drawCard'
import Questions from '../../components/questions/questions'

const ReadingPage = ({
  spiritualData, 
  setSpiritualData, 
  handlePrompt, 
  prompt, 
  selected, 
  setSelected, 
  isFormComplete 
  }) => {
  return (
    <>
    <div className="reading-container">
      <h1>Tarot Reading</h1>
      {selected.length === 0 ? (
        <>
          <Questions setSpiritualData={setSpiritualData} spiritualData={spiritualData} />
          {isFormComplete ? (
            <button onClick={() => handlePrompt(prompt)}>Click to start</button>
          ) : (
            <p>Fill out the form please</p>
          )}
        </>
      ) : (
        <>
          <div className="card-display">
            {selected.map((c) => (
              <DrawnCard slug={c} key={c.name} />
            ))}
          </div>
          <p>AI reading goes here</p>
          <button onClick={() => setSelected([])}>Again?</button>
        </>
      )}
    </div>
    </>
  )
}

export default ReadingPage