import {
  Bell,
  Search,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  Clock,
  Menu,
} from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex">
      
      {/* Mobile Sidebar Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static z-50 top-0 left-0 h-full w-64 bg-white/90 backdrop-blur border-r px-6 py-8 flex flex-col transform transition-transform
        ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <h1 className="text-2xl font-bold text-blue-600 mb-10">
          VendorFlow
        </h1>

        <nav className="space-y-5 text-sm">
          {[
            "Dashboard",
            "Projects",
            "Documents",
            "Templates",
            "Inbox",
            "Deadlines",
            "Vendor Profile",
          ].map((item, i) => (
            <div
              key={item}
              className={`px-3 py-2 rounded-lg cursor-pointer transition ${
                i === 0
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Area */}
      <main className="flex-1 flex flex-col lg:ml-0">
        
        {/* Top Bar */}
        <header className="h-16 bg-white/70 backdrop-blur border-b flex items-center justify-between px-4 sm:px-6">
          
          {/* Mobile Menu */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-gray-600"
          >
            <Menu />
          </button>

          {/* Search */}
          <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-2 w-full sm:w-[320px] ml-4 lg:ml-0">
            <Search size={18} className="text-gray-500" />
            <input
              placeholder="Search projects, documents..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          {/* Profile */}
          <div className="hidden sm:flex items-center gap-4">
            <Bell className="text-gray-600" />
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500" />
          </div>
        </header>

        {/* Content */}
        <section className="p-4 sm:p-6 lg:p-8 space-y-8">
          
          {/* Heading */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Dashboard Overview
            </h2>
            <p className="text-sm text-gray-500">
              Track registrations, documents and approvals
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            <StatCard title="Active Projects" value="08" icon={<Clock />} accent="from-yellow-400 to-orange-400" />
            <StatCard title="Approved" value="21" icon={<CheckCircle2 />} accent="from-green-400 to-emerald-500" />
            <StatCard title="Rejected" value="04" icon={<XCircle />} accent="from-red-400 to-rose-500" />
            <StatCard title="Upcoming Deadlines" value="05" icon={<Clock />} accent="from-blue-400 to-indigo-500" />
          </div>

          {/* Progress + Activity */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 bg-white rounded-3xl p-6 shadow-sm overflow-x-auto">
              <h3 className="font-semibold text-gray-800 mb-6">
                Live Registration Progress
              </h3>
              <ModernProgress />
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-6">
                Recent Activity
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">
                    Company profile submitted
                  </span>
                  <ArrowUpRight size={14} />
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">
                    Certification under review
                  </span>
                  <ArrowUpRight size={14} />
                </li>
                <li className="text-red-500">
                  GST document rejected
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function StatCard({ title, value, icon, accent }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-3xl font-bold text-gray-800">{value}</p>
      </div>
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${accent}`}
      >
        {icon}
      </div>
    </div>
  );
}

function ModernProgress() {
  const steps = [
    { label: "Registration", status: "done" },
    { label: "Documents", status: "done" },
    { label: "Review", status: "progress" },
    { label: "Award", status: "pending" },
  ];

  return (
    <div className="flex items-center justify-between min-w-[600px]">
      {steps.map((step, i) => (
        <div key={step.label} className="flex-1 flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-white ${
              step.status === "done"
                ? "bg-green-500"
                : step.status === "progress"
                ? "bg-yellow-400"
                : "bg-gray-300"
            }`}
          >
            {i + 1}
          </div>
          <span className="ml-3 text-sm text-gray-600">
            {step.label}
          </span>
          {i !== steps.length - 1 && (
            <div className="flex-1 h-1 bg-gray-200 mx-4 rounded">
              <div
                className={`h-1 rounded ${
                  step.status === "done"
                    ? "bg-green-500 w-full"
                    : "bg-yellow-400 w-1/2"
                }`}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
