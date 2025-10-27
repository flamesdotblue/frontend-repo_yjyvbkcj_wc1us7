import Header from "./components/Header";
import Steps from "./components/Steps";
import Notes from "./components/Notes";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <Steps />
      <Notes />
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-600">
          Built for clarity: outlines responsibilities for both the recruitment company and the client across UID issuance, login, and JD submission.
        </div>
      </footer>
    </div>
  );
}
