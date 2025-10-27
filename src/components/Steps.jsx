import StepCard from "./StepCard";

export default function Steps() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid gap-8">
        <StepCard
          number={1}
          title="Recruiter issues a Unique Identifier (UID) after onboarding"
          description="Once the client completes onboarding, the recruitment company generates and shares a permanent UID that links all subsequent activity to the client."
          accent="indigo"
          recruiterActions={[
            "Verify client onboarding details and compliance status.",
            "Generate a cryptographically safe UID (e.g., UUIDv4) and store it in the client record.",
            "Assign access roles, permissions, and data visibility scoped to the UID.",
            "Deliver the UID and login instructions to the client through a secure channel.",
          ]}
          clientActions={[
            "Confirm receipt of UID and validate it against your records.",
            "Share the UID with your internal stakeholders who will interact with the system.",
            "Request clarification if role permissions or data access need adjustment.",
          ]}
        />

        <StepCard
          number={2}
          title="Client logs into the system"
          description="The client accesses the portal using their credentials. The system associates the session with the client UID to control access and audit activity."
          accent="violet"
          recruiterActions={[
            "Provide SSO or password-based login, MFA options, and session timeouts.",
            "Ensure the client UID is enforced across API calls and dashboard widgets.",
            "Monitor authentication logs and set up alerts for suspicious activity.",
          ]}
          clientActions={[
            "Use provided credentials to sign in; complete MFA if enabled.",
            "Verify your company name/UID is displayed correctly in the header or profile.",
            "Update profile and team members as needed within your permission scope.",
          ]}
        />

        <StepCard
          number={3}
          title="Client uploads job description (JD), saves, and ensures dashboard visibility"
          description="Clients create or upload JDs with role details. On save, the posting is validated and becomes visible on the recruitment company dashboard in real time."
          accent="fuchsia"
          recruiterActions={[
            "Define required JD fields: title, location, employment type, skills, compensation range, and hiring timeline.",
            "Support attachments and rich text; validate file size and type.",
            "On save, write the JD to the database under the client's UID and update the recruiter dashboard queue.",
            "Confirm visibility with status labels (Draft, In Review, Open) and notify the assigned recruiter.",
          ]}
          clientActions={[
            "Log in and open the 'Create Job' workflow.",
            "Enter role details and attach the JD file (PDF/DOCX/TXT).",
            "Click Save to persist the JD. Confirm that the job appears in your list with the correct status.",
            "Optionally submit for review to notify the recruiter team instantly.",
          ]}
        />
      </div>

      <div className="mt-10 rounded-2xl border bg-white p-6">
        <h4 className="text-base font-semibold text-gray-900">Operational safeguards and best practices</h4>
        <ul className="mt-3 grid md:grid-cols-2 gap-3 text-sm text-gray-700">
          <li className="flex gap-2"><span className="mt-2 block h-1.5 w-1.5 rounded-full bg-indigo-500" /> Data privacy: restrict JD visibility to authorized recruiter roles mapped to the client UID.</li>
          <li className="flex gap-2"><span className="mt-2 block h-1.5 w-1.5 rounded-full bg-indigo-500" /> Validation: enforce required fields and server-side checks before persisting JDs.</li>
          <li className="flex gap-2"><span className="mt-2 block h-1.5 w-1.5 rounded-full bg-indigo-500" /> Observability: maintain audit trails for UID issuance, login events, JD creation, and status changes.</li>
          <li className="flex gap-2"><span className="mt-2 block h-1.5 w-1.5 rounded-full bg-indigo-500" /> Notifications: send email or in-app alerts to confirm visibility on the recruiter dashboard post-save.</li>
        </ul>
      </div>
    </section>
  );
}
