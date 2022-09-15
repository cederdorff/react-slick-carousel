import SimpleSlider from "./components/SimpleSlider";

function App() {
    return (
        <div className="App">
            <SimpleSlider
                options={{
                    className: "slider variable-width",
                    dots: true,
                    infinite: true,
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    adaptiveHeight: true
                }}
            />
        </div>
    );
}

export default App;
