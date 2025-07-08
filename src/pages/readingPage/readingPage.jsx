import DrawnCard from '../../components/drawnCards/drawCard'
import Questions from '../../components/questions/questions'
import './readingPage.css'

const ReadingPage = ({
  spiritualData, 
  setSpiritualData, 
  handlePrompt, 
  prompt, 
  selected, 
  setSelected, 
  isFormComplete,
  setResponse,
  response
  }) => {

  const resetReading = () => {
    setResponse("")
    setSelected([])
  }
  
  console.log("response", response)
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
          {response?  
            <>
            <div className='reading-text'>
              <p className='response'>{response}</p>
            </div>
            <button onClick={() => resetReading()}>Again?</button></>
          :
            <img src="/theDrawEdit.png" alt="The Draw" className="loading" />
          }
        </>
      )}
    </div>
    </>
  )
}

export default ReadingPage

