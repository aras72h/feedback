import Header from './components/Header'

/* The main front-end app. Pass this file to index.html > ReactDOM.rendere() method */
function App() {
    return (
        // Wrap all of elements with one parent element like div
        // Use an empty fragment if you don't want a parent element
        <>
            <Header />
            <h1>hello, world</h1>
            {/* Use className instead of class attribute */}
            <p className="some-class-name">this is a react app</p>
            {/* Use htmlFor instead of for attribute */}
            <label htmlFor="some-id"></label>
        </>
    )
}

export default App