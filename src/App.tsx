import Header from "./components/Header/Header";
import DisplaySection from "./components/DisplaySection/DisplaySection";
import ImageSection from "./components/DisplaySection/ImageSection/ImageSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
		<Header />
		<DisplaySection>
			<ImageSection />
		</DisplaySection>
		<Footer />
	</>
  );
}

export default App;
