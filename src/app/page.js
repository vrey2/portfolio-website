import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <body className="max-h-screen bg-teal-50">
      <Header/>
      <div className="flex justify-center items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20">
        <h1>Hello World</h1>
      </div>
      <Footer/>
    </body>
    
  );
}
