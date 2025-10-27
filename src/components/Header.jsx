import { Building2, LayoutDashboard } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-white/15 backdrop-blur">
            <Building2 className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
              Recruitment Integration Workflow
            </h1>
            <p className="mt-3 text-white/90 max-w-3xl">
              A clear, step-by-step process for connecting a recruitment company with a client system — from issuing a unique identifier to posting job descriptions visible on the recruiter dashboard.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/90">
              <LayoutDashboard className="w-4 h-4" />
              <span>Designed for operational clarity and accountability</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
