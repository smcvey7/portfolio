import React from "react";

function Maintenance({ message }) {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 p-8 text-center">
        <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
          <span className="text-2xl">🚧</span>
        </div>
        <h1 className="text-2xl font-semibold text-slate-900">Site Under Maintenance</h1>
        <p className="mt-2 text-slate-600">{message}</p>
      </div>
    </div>
  );
}

export default Maintenance;
