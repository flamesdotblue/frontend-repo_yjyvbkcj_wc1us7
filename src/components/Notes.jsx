export default function Notes() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">
      <div className="rounded-2xl bg-gradient-to-br from-gray-50 to-white border p-6">
        <h4 className="text-base font-semibold text-gray-900">Deliverables per step</h4>
        <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm text-gray-700">
          <div className="rounded-xl border bg-white p-4">
            <p className="font-medium text-gray-900">Step 1 — UID issued</p>
            <ul className="mt-2 space-y-1">
              <li>UID stored in client record</li>
              <li>Permissions mapped</li>
              <li>Secure delivery confirmation</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white p-4">
            <p className="font-medium text-gray-900">Step 2 — Login complete</p>
            <ul className="mt-2 space-y-1">
              <li>Authenticated session</li>
              <li>MFA (if enabled)</li>
              <li>Audit log entry</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white p-4">
            <p className="font-medium text-gray-900">Step 3 — JD saved</p>
            <ul className="mt-2 space-y-1">
              <li>JD persisted under UID</li>
              <li>Dashboard visibility confirmed</li>
              <li>Notification sent</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
