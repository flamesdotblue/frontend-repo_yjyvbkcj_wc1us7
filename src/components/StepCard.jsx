import { CheckCircle, FileText, Key, LayoutDashboard, LogIn, Upload } from "lucide-react";

export default function StepCard({ number, title, description, recruiterActions = [], clientActions = [], accent = "indigo" }) {
  const accentClasses = {
    indigo: "from-indigo-50 to-white border-indigo-200",
    violet: "from-violet-50 to-white border-violet-200",
    fuchsia: "from-fuchsia-50 to-white border-fuchsia-200",
  };

  return (
    <div className={`relative rounded-2xl border bg-gradient-to-b ${accentClasses[accent]} p-6 shadow-sm`}>      
      <div className="absolute -top-4 left-6">
        <div className="px-3 py-1 rounded-full bg-black/80 text-white text-sm font-medium">Step {number}</div>
      </div>

      <div className="flex items-start gap-4">
        <div className="mt-1 text-indigo-600">
          {number === 1 && <Key className="w-6 h-6" />}
          {number === 2 && <LogIn className="w-6 h-6" />}
          {number === 3 && <Upload className="w-6 h-6" />}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-gray-600">{description}</p>

          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-white p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                <CheckCircle className="w-4 h-4 text-emerald-600" /> Recruiter responsibilities
              </div>
              <ul className="mt-2 space-y-2 text-sm text-gray-700">
                {recruiterActions.map((a, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                <CheckCircle className="w-4 h-4 text-blue-600" /> Client responsibilities
              </div>
              <ul className="mt-2 space-y-2 text-sm text-gray-700">
                {clientActions.map((a, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {number === 3 && (
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray-600">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1">
                <FileText className="w-3.5 h-3.5" /> Accepted: PDF, DOCX, TXT
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1">
                <LayoutDashboard className="w-3.5 h-3.5" /> Visible on recruiter dashboard after save
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
