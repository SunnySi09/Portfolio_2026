"use client";

import React, { useState } from "react";

// Inline Sparkle Icon
function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0c.7 5.6 5.7 10.6 11.3 11.3v1.4C17.7 13.4 12.7 18.4 12 24c-.7-5.6-5.7-10.6-11.3-11.3v-1.4C6.3 10.6 11.3 5.6 12 0z" />
    </svg>
  );
}

// ----------------------------------------------------
// 1. SUPER ADMIN PREVIEW: ELOVA B2B ADMIN
// ----------------------------------------------------
export function ElovaAdminPreview() {
  const [diaDiscount, setDiaDiscount] = useState(15);
  const [metDiscount, setMetDiscount] = useState(10);
  const [estDiscount, setEstDiscount] = useState(5);
  const [labDiscount, setLabDiscount] = useState(20);
  const [selectedCatalog, setSelectedCatalog] = useState("Wholesale 2026");
  const [activeTab, setActiveTab] = useState("Product Selection");

  // Mock Products data
  const baseProducts = [
    {
      designNumber: "DSN-8802",
      skuNumber: "SKU-R109",
      collection: "Engagement",
      cost: 1200, // production cost
      components: {
        dia: { base: 1100, buy: 980 },
        met: { base: 700, buy: 630 },
        est: { base: 100, buy: 95 },
        lab: { base: 250, buy: 200 },
      },
      name: "Aurum Solitaire Ring",
      svg: (
        <svg viewBox="0 0 100 100" className="h-full w-full stroke-amber-500 fill-none" strokeWidth="2">
          <circle cx="50" cy="62" r="22" stroke="#d97706" strokeWidth="3" />
          <path d="M50 25 L58 35 L50 42 L42 35 Z" fill="#ffd700" stroke="#b45309" />
          <circle cx="50" cy="33" r="3" fill="#60a5fa" stroke="#3b82f6" />
          <line x1="42" y1="35" x2="58" y2="35" stroke="#b45309" />
        </svg>
      ),
    },
    {
      designNumber: "DSN-7410",
      skuNumber: "SKU-N452",
      collection: "Jewelry",
      cost: 950,
      components: {
        dia: { base: 900, buy: 800 },
        met: { base: 550, buy: 500 },
        est: { base: 80, buy: 75 },
        lab: { base: 200, buy: 160 },
      },
      name: "Dahlia Drop Pendant",
      svg: (
        <svg viewBox="0 0 100 100" className="h-full w-full stroke-amber-500 fill-none" strokeWidth="2">
          <path d="M50 20 C65 20, 65 40, 50 65 C35 40, 35 20, 50 20 Z" stroke="#d97706" strokeWidth="2.5" />
          <path d="M50 35 C55 35, 55 45, 50 55 C45 45, 45 35, 50 35 Z" fill="#ffd700" stroke="#b45309" />
          <circle cx="50" cy="45" r="4" fill="#a78bfa" stroke="#7c3aed" />
          <line x1="50" y1="10" x2="50" y2="20" stroke="#92400e" strokeWidth="3" />
        </svg>
      ),
    },
    {
      designNumber: "DSN-9118",
      skuNumber: "SKU-W503",
      collection: "Wedding",
      cost: 1600,
      components: {
        dia: { base: 1450, buy: 1300 },
        met: { base: 950, buy: 850 },
        est: { base: 180, buy: 170 },
        lab: { base: 400, buy: 320 },
      },
      name: "Eternity Band Duo",
      svg: (
        <svg viewBox="0 0 100 100" className="h-full w-full stroke-amber-500 fill-none" strokeWidth="2">
          <circle cx="42" cy="55" r="20" stroke="#d97706" strokeWidth="3" />
          <circle cx="58" cy="55" r="20" stroke="#b45309" strokeWidth="3" strokeDasharray="3 2" />
          <path d="M42 35 C45 32, 55 32, 58 35" stroke="#ffd700" strokeWidth="2" />
          <circle cx="50" cy="34" r="2.5" fill="#f43f5e" stroke="#e11d48" />
        </svg>
      ),
    },
  ];

  // Calculate live prices based on slider values
  const getCalculations = (product: typeof baseProducts[0]) => {
    const diaBuy = product.components.dia.buy * (1 - diaDiscount / 100);
    const metBuy = product.components.met.buy * (1 - metDiscount / 100);
    const estBuy = product.components.est.buy * (1 - estDiscount / 100);
    const labBuy = product.components.lab.buy * (1 - labDiscount / 100);

    const baseTotal =
      product.components.dia.base +
      product.components.met.base +
      product.components.est.base +
      product.components.lab.base;

    const buyTotal =
      product.components.dia.buy +
      product.components.met.buy +
      product.components.est.buy +
      product.components.lab.buy;

    const discountedTotal = diaBuy + metBuy + estBuy + labBuy;

    // Profit = DiscountedPrice (what we sell it to retailer for) - Production Cost
    const profit = discountedTotal - product.cost;
    // Percentage margin: (Profit / DiscountedTotal) * 100
    const profitMargin = (profit / discountedTotal) * 100;

    return {
      dia: { base: product.components.dia.base, buy: product.components.dia.buy, disc: diaBuy },
      met: { base: product.components.met.base, buy: product.components.met.buy, disc: metBuy },
      est: { base: product.components.est.base, buy: product.components.est.buy, disc: estBuy },
      lab: { base: product.components.lab.base, buy: product.components.lab.buy, disc: labBuy },
      total: { base: baseTotal, buy: buyTotal, disc: discountedTotal },
      profit,
      margin: profitMargin,
    };
  };

  const sidebarItems = [
    { label: "Product Selection", group: "Catalog" },
    { label: "Browse Collections", note: "(Engagement, Wedding, Jewelry)", group: "Catalog" },
    { label: "My Products", note: "(SKU & Title Update)", group: "Inventory" },
    { label: "Collections", group: "Inventory" },
    { label: "Ready To Ship Products", group: "Inventory" },
    { label: "Featured Collections", group: "Promotions" },
    { label: "Pricing Config.", group: "Pricing" },
    { label: "Order Desk", note: "(All Orders)", group: "Orders" },
    { label: "Customers Data", group: "Customers" },
  ];

  return (
    <div className="w-full overflow-hidden rounded-xl border border-hairline bg-white shadow-float">
      {/* Top Banner (Branding) */}
      <div className="flex h-16 items-center justify-between border-b border-hairline bg-gradient-to-r from-[#1e3f20] to-[#122b14] px-6 text-white">
        <div className="flex items-center gap-3">
          <span className="font-serif text-2xl font-bold tracking-[0.25em] text-[#d4af37]">ELOVA</span>
          <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/70">
            B2B Partner Portal
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#fcfaf2]/80">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Live Catalog Desk</span>
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className="flex flex-col md:flex-row h-[780px] bg-[#fdfcf7]">
        {/* Left Navigation Sidebar */}
        <aside className="w-full md:w-64 border-r border-[#ebe5d3] bg-[#f9f7ef] p-4 flex flex-col justify-between shrink-0">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-[#8b7a5f] mb-3 px-2">
              NAVIGATION
            </span>
            <div className="space-y-1">
              {sidebarItems.map((item) => {
                const isActive = activeTab === item.label;
                return (
                  <button
                    key={item.label}
                    onClick={() => setActiveTab(item.label)}
                    className={`w-full flex flex-col items-start px-3 py-2 text-left rounded-md transition-colors text-xs ${
                      isActive
                        ? "bg-[#1e3f20] text-white font-medium shadow-sm"
                        : "text-[#4a4235] hover:bg-[#f2efe4]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.note && (
                      <span className={`text-[9px] ${isActive ? "text-white/60" : "text-muted"}`}>
                        {item.note}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 border-t border-[#ebe5d3] pt-4">
            <div className="rounded-lg bg-white/70 border border-[#ebe5d3] p-3 text-[11px] text-[#4a4235]">
              <span className="font-semibold text-[#1e3f20]">Pricing Config Modifiers</span>
              <p className="mt-1 text-muted-soft">Adjust the sliders to adjust B2B buying price components.</p>
            </div>
          </div>
        </aside>

        {/* Right Content Panel */}
        <main className="flex-1 flex flex-col overflow-y-auto">
          {/* Top Filters Panel */}
          <div className="border-b border-[#ebe5d3] bg-white p-5">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-5 items-end">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#6a6a6a] mb-1.5">
                  Categories
                </label>
                <select className="w-full rounded border border-[#dddddd] bg-[#fdfcf7] px-2.5 py-1.5 text-xs text-[#222222] focus:border-[#1e3f20] focus:ring-0">
                  <option>All Jewelry</option>
                  <option>Rings</option>
                  <option>Pendants</option>
                  <option>Bands</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#6a6a6a] mb-1.5">
                  Select Catalogue
                </label>
                <select
                  value={selectedCatalog}
                  onChange={(e) => setSelectedCatalog(e.target.value)}
                  className="w-full rounded border border-[#dddddd] bg-[#fdfcf7] px-2.5 py-1.5 text-xs text-[#222222]"
                >
                  <option>Wholesale 2026</option>
                  <option>Staging Catalog</option>
                  <option>Custom VIP Rates</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#6a6a6a] mb-1.5">
                  SKU / Design no.
                </label>
                <input
                  type="text"
                  placeholder="e.g. DSN-9118"
                  className="w-full rounded border border-[#dddddd] bg-[#fdfcf7] px-2.5 py-1.5 text-xs text-[#222222]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#6a6a6a] mb-1.5">
                  Select Coupon
                </label>
                <select className="w-full rounded border border-[#dddddd] bg-[#fdfcf7] px-2.5 py-1.5 text-xs text-[#222222]">
                  <option>No Coupon</option>
                  <option>SEASONAL_10</option>
                  <option>VOLUME_15</option>
                </select>
              </div>

              <div className="col-span-2 lg:col-span-1">
                <button className="w-full h-8 flex items-center justify-center rounded bg-[#1e3f20] text-xs font-semibold text-white hover:bg-[#122b14]">
                  Reset Filters
                </button>
              </div>
            </div>

            {/* Inline Component Adjustment Sliders */}
            <div className="mt-5 border-t border-[#ebe5d3] pt-4">
              <span className="block text-xs font-bold uppercase tracking-wider text-[#8b7a5f] mb-3">
                Live Wholesale Pricing Adjustments
              </span>
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                <div className="bg-[#fcfaf2] border border-[#ebe5d3] rounded-lg p-2">
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="font-semibold text-[#4a4235]">Dia. Discount %</span>
                    <span className="text-[#1e3f20] font-bold">{diaDiscount}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="40"
                    value={diaDiscount}
                    onChange={(e) => setDiaDiscount(Number(e.target.value))}
                    className="w-full accent-[#1e3f20] h-1 bg-[#ebe5d3] rounded-lg cursor-pointer"
                  />
                </div>

                <div className="bg-[#fcfaf2] border border-[#ebe5d3] rounded-lg p-2">
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="font-semibold text-[#4a4235]">Met. Discount %</span>
                    <span className="text-[#1e3f20] font-bold">{metDiscount}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="30"
                    value={metDiscount}
                    onChange={(e) => setMetDiscount(Number(e.target.value))}
                    className="w-full accent-[#1e3f20] h-1 bg-[#ebe5d3] rounded-lg cursor-pointer"
                  />
                </div>

                <div className="bg-[#fcfaf2] border border-[#ebe5d3] rounded-lg p-2">
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="font-semibold text-[#4a4235]">Est. Discount %</span>
                    <span className="text-[#1e3f20] font-bold">{estDiscount}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={estDiscount}
                    onChange={(e) => setEstDiscount(Number(e.target.value))}
                    className="w-full accent-[#1e3f20] h-1 bg-[#ebe5d3] rounded-lg cursor-pointer"
                  />
                </div>

                <div className="bg-[#fcfaf2] border border-[#ebe5d3] rounded-lg p-2">
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="font-semibold text-[#4a4235]">Lab. Discount %</span>
                    <span className="text-[#1e3f20] font-bold">{labDiscount}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={labDiscount}
                    onChange={(e) => setLabDiscount(Number(e.target.value))}
                    className="w-full accent-[#1e3f20] h-1 bg-[#ebe5d3] rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card Pricing Layout: 3-column Grid */}
          <div className="p-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#8b7a5f] mb-4">
              Catalog Items — Active Pricing Mockup ({selectedCatalog})
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {baseProducts.map((product) => {
                const calcs = getCalculations(product);
                return (
                  <div
                    key={product.designNumber}
                    className="flex flex-col rounded-lg border border-[#ebe5d3] bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Top Row: Checkbox, Design & SKU */}
                    <div className="flex items-start justify-between border-b border-[#ebe5d3] pb-3">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="h-3.5 w-3.5 rounded border-[#dddddd] text-[#1e3f20] focus:ring-0"
                        />
                        <div>
                          <span className="block text-[11px] font-bold text-[#1e3f20]">
                            {product.designNumber}
                          </span>
                          <span className="block text-[9px] text-[#8b7a5f] font-mono leading-none">
                            {product.skuNumber}
                          </span>
                        </div>
                      </div>
                      <span className="inline-flex rounded-full bg-[#fdfcf7] px-2 py-0.5 text-[9px] font-semibold text-[#8b7a5f] border border-[#ebe5d3]">
                        {product.collection}
                      </span>
                    </div>

                    {/* SVG Thumbnail */}
                    <div className="my-3 flex h-36 w-full items-center justify-center rounded bg-gradient-to-b from-[#fdfcf7] to-white border border-hairline-soft">
                      {product.svg}
                    </div>

                    {/* Product Name */}
                    <h4 className="text-xs font-bold text-[#4a4235] mb-2">{product.name}</h4>

                    {/* Detailed Components Table */}
                    <div className="flex-1 text-[10px]">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-[#f2efe4] text-[#8b7a5f] font-semibold">
                            <th className="py-1">Component</th>
                            <th className="py-1 text-right">Base</th>
                            <th className="py-1 text-right">Buying</th>
                            <th className="py-1 text-right text-[#1e3f20]">Disc.</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#fdfcf7]">
                          <tr>
                            <td className="py-1 font-medium text-body">Dia.</td>
                            <td className="py-1 text-right text-muted-soft">${calcs.dia.base}</td>
                            <td className="py-1 text-right text-muted-soft">${calcs.dia.buy}</td>
                            <td className="py-1 text-right text-[#1e3f20] font-medium">
                              ${calcs.dia.disc.toFixed(0)}
                            </td>
                          </tr>
                          <tr>
                            <td className="py-1 font-medium text-body">Met.</td>
                            <td className="py-1 text-right text-muted-soft">${calcs.met.base}</td>
                            <td className="py-1 text-right text-muted-soft">${calcs.met.buy}</td>
                            <td className="py-1 text-right text-[#1e3f20] font-medium">
                              ${calcs.met.disc.toFixed(0)}
                            </td>
                          </tr>
                          <tr>
                            <td className="py-1 font-medium text-body">Est.</td>
                            <td className="py-1 text-right text-muted-soft">${calcs.est.base}</td>
                            <td className="py-1 text-right text-muted-soft">${calcs.est.buy}</td>
                            <td className="py-1 text-right text-[#1e3f20] font-medium">
                              ${calcs.est.disc.toFixed(0)}
                            </td>
                          </tr>
                          <tr>
                            <td className="py-1 font-medium text-body">Lab.</td>
                            <td className="py-1 text-right text-muted-soft">${calcs.lab.base}</td>
                            <td className="py-1 text-right text-muted-soft">${calcs.lab.buy}</td>
                            <td className="py-1 text-right text-[#1e3f20] font-medium">
                              ${calcs.lab.disc.toFixed(0)}
                            </td>
                          </tr>
                          <tr className="border-t border-[#ebe5d3] font-bold text-ink">
                            <td className="py-1.5 text-xs">Total</td>
                            <td className="py-1.5 text-right text-xs">${calcs.total.base}</td>
                            <td className="py-1.5 text-right text-xs">${calcs.total.buy}</td>
                            <td className="py-1.5 text-right text-xs text-[#1e3f20]">
                              ${calcs.total.disc.toFixed(0)}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Final Summary Row: Total Profit and Percentage Indicators */}
                    <div className="mt-3 border-t border-[#ebe5d3] pt-3 flex items-center justify-between">
                      <div>
                        <span className="block text-[9px] font-semibold text-[#8b7a5f] uppercase tracking-wider">
                          Total Profit
                        </span>
                        <span className="text-sm font-extrabold text-[#1e3f20]">
                          ${calcs.profit.toFixed(0)}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="block text-[9px] text-muted uppercase">Margin %</span>
                        <span
                          className={`inline-flex items-center text-xs font-bold ${
                            calcs.margin > 30 ? "text-emerald-600" : "text-amber-600"
                          }`}
                        >
                          {calcs.margin > 30 ? "▲" : "▼"} {calcs.margin.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// 2. STORE ADMIN DASHBOARD PREVIEW
// ----------------------------------------------------
export function StoreAdminPreview() {
  const [permissions, setPermissions] = useState({
    analytics: true,
    inventory: true,
    pricing: false,
    cms: false,
    billing: false,
  });
  const [saved, setSaved] = useState(false);

  const togglePerm = (key: keyof typeof permissions) => {
    setPermissions((prev) => ({ ...prev, [key]: !prev[key] }));
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="w-full rounded-xl border border-hairline bg-white shadow-float overflow-hidden">
      <div className="flex h-12 items-center justify-between border-b border-hairline bg-ink px-4 text-white">
        <span className="text-xs font-bold tracking-wider">STORE ADMIN PANEL</span>
        <span className="text-[10px] text-muted-soft">v1.2.4 · Connected</span>
      </div>

      <div className="flex h-[360px] bg-soft">
        <aside className="w-40 border-r border-hairline bg-white p-3 flex flex-col justify-between">
          <div className="space-y-1">
            <span className="block text-[8px] font-bold text-muted uppercase tracking-wider mb-2">
              MANAGEMENT
            </span>
            <div className="h-6 rounded bg-soft text-[10px] px-2 flex items-center font-semibold text-ink">
              Dashboard
            </div>
            <div className="h-6 rounded hover:bg-soft/50 text-[10px] px-2 flex items-center text-muted">
              Inventory
            </div>
            <div className="h-6 rounded bg-rausch/10 text-[10px] px-2 flex items-center font-bold text-rausch">
              RBAC Roles
            </div>
            <div className="h-6 rounded hover:bg-soft/50 text-[10px] px-2 flex items-center text-muted">
              Billing
            </div>
          </div>
          <div className="text-[9px] text-muted border-t border-hairline pt-2">
            Store #883-JK
          </div>
        </aside>

        <main className="flex-1 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-extrabold text-ink uppercase tracking-wider">
                  Role: Store Manager
                </h4>
                <p className="text-[10px] text-muted">Configure fine-grained permissions for local staff</p>
              </div>
              {saved && (
                <span className="rounded bg-emerald-100 border border-emerald-300 px-2 py-0.5 text-[9px] font-bold text-emerald-800 animate-pulse">
                  ✓ Config Saved
                </span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between rounded border border-hairline bg-white p-2 text-[11px]">
                <div>
                  <span className="font-semibold text-ink block">Access Analytics Dashboard</span>
                  <span className="text-[9px] text-muted leading-none">View sales records and daily revenue reports.</span>
                </div>
                <button
                  onClick={() => togglePerm("analytics")}
                  className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    permissions.analytics ? "bg-rausch" : "bg-muted-soft"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      permissions.analytics ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between rounded border border-hairline bg-white p-2 text-[11px]">
                <div>
                  <span className="font-semibold text-ink block">Update Store Inventory</span>
                  <span className="text-[9px] text-muted leading-none">Create, modify or archive product listings.</span>
                </div>
                <button
                  onClick={() => togglePerm("inventory")}
                  className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    permissions.inventory ? "bg-rausch" : "bg-muted-soft"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      permissions.inventory ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between rounded border border-hairline bg-white p-2 text-[11px]">
                <div>
                  <span className="font-semibold text-ink block">Modify Price Markups</span>
                  <span className="text-[9px] text-muted leading-none">Edit discount and wholesale margin configurations.</span>
                </div>
                <button
                  onClick={() => togglePerm("pricing")}
                  className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    permissions.pricing ? "bg-rausch" : "bg-muted-soft"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      permissions.pricing ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={handleSave}
            className="w-full py-2 bg-ink text-white rounded text-[11px] font-semibold hover:bg-[#333333] transition-colors"
          >
            Save Permissions Config
          </button>
        </main>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// 3. TATVA KRTI: SHOPIFY STOREFRONT
// ----------------------------------------------------
export function TatvaKrtiPreview() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="w-full rounded-xl border border-hairline bg-white shadow-float overflow-hidden">
      {/* Mini Store Header */}
      <div className="flex h-12 items-center justify-between border-b border-hairline bg-white px-5">
        <span className="font-display font-bold text-sm text-[#4a2e2b] tracking-wider">TATVA KRTI</span>
        <div className="flex items-center gap-4 text-xs font-semibold text-[#4a2e2b]/80">
          <span>Shop</span>
          <span>Story</span>
          <button className="relative flex items-center">
            <span>Cart</span>
            <span className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-rausch text-[9px] font-bold text-white leading-none">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-[#faf8f4] py-3 text-center border-b border-[#ebebeb]">
        <span className="inline-block rounded-full bg-emerald-100 border border-emerald-200 px-2 py-0.5 text-[9px] font-bold text-emerald-800">
          ★ Live conversion boost +7%
        </span>
        <h4 className="mt-1 font-display text-xs font-extrabold text-ink">Modern Minimalist Artisanal Living</h4>
      </div>

      {/* Small Catalog Grid */}
      <div className="p-4 bg-[#fdfcfb]">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded border border-hairline bg-white p-2 flex flex-col justify-between">
            <div className="aspect-square w-full rounded bg-[#f4eff0] flex items-center justify-center">
              {/* Vase SVG */}
              <svg viewBox="0 0 100 100" className="h-10 w-10 fill-red-800">
                <path d="M50 20 C60 20, 65 30, 65 60 C65 80, 35 80, 35 60 C35 30, 40 20, 50 20 Z" fill="#b45309" />
                <path d="M42 20 L58 20 L55 24 L45 24 Z" fill="#78350f" />
              </svg>
            </div>
            <div className="mt-2 text-[10px]">
              <span className="font-semibold text-ink block truncate">Terracotta Vase</span>
              <span className="text-[#8c5240] font-bold">$45</span>
            </div>
            <button
              onClick={() => setCartCount((c) => c + 1)}
              className="mt-2 w-full py-1 border border-ink rounded-[3px] text-[8px] font-semibold text-ink hover:bg-ink hover:text-white transition-colors"
            >
              Add to Cart
            </button>
          </div>

          <div className="rounded border border-hairline bg-white p-2 flex flex-col justify-between">
            <div className="aspect-square w-full rounded bg-[#efefef] flex items-center justify-center">
              {/* Bowl SVG */}
              <svg viewBox="0 0 100 100" className="h-10 w-10">
                <path d="M20 40 C20 70, 80 70, 80 40 Z" fill="#7c2d12" />
                <line x1="20" y1="40" x2="80" y2="40" stroke="#f97316" strokeWidth="2" />
              </svg>
            </div>
            <div className="mt-2 text-[10px]">
              <span className="font-semibold text-ink block truncate">Teak Wood Bowl</span>
              <span className="text-[#8c5240] font-bold">$32</span>
            </div>
            <button
              onClick={() => setCartCount((c) => c + 1)}
              className="mt-2 w-full py-1 border border-ink rounded-[3px] text-[8px] font-semibold text-ink hover:bg-ink hover:text-white transition-colors"
            >
              Add to Cart
            </button>
          </div>

          <div className="rounded border border-hairline bg-white p-2 flex flex-col justify-between">
            <div className="aspect-square w-full rounded bg-[#e8eae6] flex items-center justify-center">
              {/* Cushion SVG */}
              <svg viewBox="0 0 100 100" className="h-10 w-10">
                <rect x="25" y="25" width="50" height="50" rx="6" fill="#a1a1aa" stroke="#52525b" strokeWidth="2" />
                <line x1="25" y1="25" x2="75" y2="75" stroke="#71717a" strokeWidth="1" />
              </svg>
            </div>
            <div className="mt-2 text-[10px]">
              <span className="font-semibold text-ink block truncate">Linen Cushion Cover</span>
              <span className="text-[#8c5240] font-bold">$25</span>
            </div>
            <button
              onClick={() => setCartCount((c) => c + 1)}
              className="mt-2 w-full py-1 border border-ink rounded-[3px] text-[8px] font-semibold text-ink hover:bg-ink hover:text-white transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// 4. INDUSTRIAL WEBSITES PREVIEW
// ----------------------------------------------------
export function IndustrialWebsitesPreview() {
  const [activeRow, setActiveRow] = useState<number | null>(0);
  const [rfqOpen, setRfqOpen] = useState(false);
  const [rfqSubmitted, setRfqSubmitted] = useState(false);

  const specs = [
    { part: "JK-901 Flange", material: "Stainless Steel 316", od: "140mm", thickness: "18mm" },
    { part: "JK-902 Flange", material: "Carbon Steel A105", od: "155mm", thickness: "20mm" },
    { part: "MPI-505 Flange", material: "Duplex Alloy 2205", od: "180mm", thickness: "22mm" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRfqSubmitted(true);
    setTimeout(() => {
      setRfqOpen(false);
      setRfqSubmitted(false);
    }, 2500);
  };

  return (
    <div className="w-full rounded-xl border border-hairline bg-white shadow-float overflow-hidden relative">
      <div className="flex h-12 items-center justify-between border-b border-hairline bg-slate-900 px-4 text-white">
        <span className="text-xs font-bold tracking-widest font-mono">MPI INDUSTRIAL CATALOG</span>
        <button
          onClick={() => setRfqOpen(true)}
          className="rounded bg-amber-500 hover:bg-amber-600 px-3 py-1 text-[10px] font-bold text-slate-950 uppercase transition-colors"
        >
          Request B2B Quote
        </button>
      </div>

      <div className="p-4 bg-slate-50 flex flex-col md:flex-row gap-4 h-[340px]">
        {/* Technical Blueprint SVG */}
        <div className="w-full md:w-1/3 rounded border border-slate-200 bg-slate-100 flex flex-col items-center justify-center p-2">
          <span className="text-[8px] font-bold font-mono text-slate-500 uppercase mb-2">
            CAD Schematic: Flange Spec
          </span>
          <svg viewBox="0 0 100 100" className="h-32 w-32 stroke-sky-600 fill-none" strokeWidth="1.5">
            <circle cx="50" cy="50" r="35" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="28" />
            <circle cx="50" cy="50" r="14" />
            {/* Bolt holes */}
            <circle cx="50" cy="22" r="3" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
            <circle cx="50" cy="78" r="3" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
            <circle cx="22" cy="50" r="3" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
            <circle cx="78" cy="50" r="3" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
            {/* Dimension Lines */}
            <line x1="50" y1="5" x2="50" y2="95" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="5 5" />
            <line x1="5" y1="50" x2="95" y2="50" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="5 5" />
          </svg>
        </div>

        {/* Detailed Specs Table */}
        <div className="flex-1 overflow-x-auto text-[10px]">
          <span className="block text-[8px] font-bold text-slate-500 uppercase tracking-wider mb-2">
            Specification Grid (Click to focus)
          </span>
          <table className="w-full text-left border-collapse bg-white rounded shadow-sm overflow-hidden">
            <thead>
              <tr className="bg-slate-800 text-white font-semibold">
                <th className="p-2">Part No.</th>
                <th className="p-2">Material</th>
                <th className="p-2">Outer Dia.</th>
                <th className="p-2">Thickness</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((item, idx) => {
                const isActive = activeRow === idx;
                return (
                  <tr
                    key={item.part}
                    onClick={() => setActiveRow(idx)}
                    className={`border-b border-slate-100 cursor-pointer transition-colors ${
                      isActive ? "bg-sky-50 font-bold" : "hover:bg-slate-50 text-slate-600"
                    }`}
                  >
                    <td className="p-2">{item.part}</td>
                    <td className="p-2">{item.material}</td>
                    <td className="p-2">{item.od}</td>
                    <td className="p-2">{item.thickness}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p className="mt-3 text-[9px] text-slate-500 leading-normal">
            * Selected row details will be pre-filled automatically when requesting custom wholesale quote.
          </p>
        </div>
      </div>

      {/* RFQ modal overlay */}
      {rfqOpen && (
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-4 w-80 shadow-lift border border-slate-200 text-xs">
            {rfqSubmitted ? (
              <div className="flex flex-col items-center justify-center py-6 text-center">
                <span className="text-3xl">✓</span>
                <span className="font-bold text-slate-900 mt-2">Quote Request Sent!</span>
                <p className="text-[10px] text-slate-500 mt-1">Our sales engineering team will respond within 4 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
                  <span className="font-bold text-slate-900 uppercase">REQUEST B2B QUOTE</span>
                  <button type="button" onClick={() => setRfqOpen(false)} className="text-slate-400 hover:text-slate-600">
                    ✕
                  </button>
                </div>

                <div className="space-y-2">
                  <div>
                    <label className="block text-[9px] font-bold text-slate-500 uppercase">Part Selected</label>
                    <input
                      type="text"
                      disabled
                      value={activeRow !== null ? specs[activeRow].part : "None"}
                      className="w-full rounded border border-slate-200 bg-slate-50 px-2 py-1 text-slate-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] font-bold text-slate-500 uppercase">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="buyer@engineeringfirm.com"
                      className="w-full rounded border border-slate-200 px-2 py-1 text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] font-bold text-slate-500 uppercase">Volume Needed (pcs)</label>
                    <input type="number" required placeholder="500" className="w-full rounded border border-slate-200 px-2 py-1 text-slate-800" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold uppercase rounded text-[10px]"
                >
                  Submit Quote Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Map slug to the correct mockup preview component
export function CaseStudyPreview({ slug }: { slug: string }) {
  switch (slug) {
    case "super-admin":
      return <ElovaAdminPreview />;
    case "store-admin-dashboard":
      return <StoreAdminPreview />;
    case "tatva-krti":
      return <TatvaKrtiPreview />;
    case "industrial-websites":
      return <IndustrialWebsitesPreview />;
    default:
      return null;
  }
}
