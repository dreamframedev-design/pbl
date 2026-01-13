'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  User, 
  Settings, 
  Package, 
  CreditCard, 
  Bell, 
  FlaskConical, 
  LogOut,
  ChevronRight,
  ExternalLink,
  Shield,
  Mail,
  Phone,
  MapPin,
  Calendar,
  FileText,
  Download,
  Truck,
  CheckCircle2,
  Clock,
  Star
} from 'lucide-react';

// Type definitions
interface Order {
  id: string;
  date: string;
  status: 'delivered' | 'in-transit' | 'processing' | 'pending';
  total: number;
  itemCount: number;
}

// Mock orders data
const orders: Order[] = [
  { id: 'PBL-992831', date: 'Dec 12, 2025', status: 'in-transit', total: 1125.00, itemCount: 3 },
  { id: 'PBL-991247', date: 'Nov 28, 2025', status: 'delivered', total: 890.00, itemCount: 2 },
  { id: 'PBL-988562', date: 'Oct 15, 2025', status: 'delivered', total: 2340.00, itemCount: 5 },
];

// Saved products data
const savedProducts = [
  { id: 1, name: 'Human IFN Gamma ELISA Kit', catalogId: '41500-1', category: 'Assay Kits', price: 625.00 },
  { id: 2, name: 'Mouse IFN Alpha Protein', catalogId: '12100-1', category: 'Proteins', price: 395.00 },
  { id: 3, name: 'Anti-Human IFN Beta Antibody', catalogId: '21200-1', category: 'Antibodies', price: 455.00 },
];

type TabId = 'profile' | 'orders' | 'lab' | 'billing' | 'notifications' | 'saved';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<TabId>('profile');

  const sidebarItems = [
    { id: 'profile' as TabId, name: 'Profile Details', icon: User },
    { id: 'orders' as TabId, name: 'Order History', icon: Package },
    { id: 'lab' as TabId, name: 'Lab Affiliation', icon: FlaskConical },
    { id: 'saved' as TabId, name: 'Saved Products', icon: Star },
    { id: 'billing' as TabId, name: 'Payment Methods', icon: CreditCard },
    { id: 'notifications' as TabId, name: 'Notifications', icon: Bell },
  ];

  // Get status badge
  const getStatusBadge = (status: Order['status']) => {
    switch (status) {
      case 'delivered':
        return (
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-green-50 text-[10px] font-black uppercase tracking-widest text-green-600">
            <CheckCircle2 className="w-3 h-3" />
            Delivered
          </span>
        );
      case 'in-transit':
        return (
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cyan-50 text-[10px] font-black uppercase tracking-widest text-cyan-600">
            <Truck className="w-3 h-3" />
            In Transit
          </span>
        );
      case 'processing':
        return (
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-50 text-[10px] font-black uppercase tracking-widest text-amber-600">
            <Clock className="w-3 h-3" />
            Processing
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <Clock className="w-3 h-3" />
            Pending
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* LEFT SIDEBAR: Navigation */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-32 space-y-2">
              <div className="mb-10 px-4">
                <h1 className="text-2xl font-bold text-primary-navy">Account</h1>
                <p className="text-xs text-slate-400 font-medium">Manage your research portal</p>
              </div>
              
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                    activeTab === item.id 
                    ? 'bg-slate-50 text-cyan-600 shadow-sm' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-primary-navy'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </button>
              ))}

              <div className="pt-8 mt-8 border-t border-slate-100">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-400 hover:bg-red-50 transition-all">
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN: Content Area */}
          <main className="flex-1 max-w-3xl">
            
            {/* Profile Section */}
            {activeTab === 'profile' && (
              <div className="space-y-12">
                <section>
                  <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 mb-8">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        defaultValue="Dr. Sarah Mitchell" 
                        className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm font-bold text-primary-navy focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        defaultValue="s.mitchell@stanford.edu" 
                        className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm font-bold text-primary-navy focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                      <input 
                        type="tel" 
                        defaultValue="+1 (650) 723-4000" 
                        className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm font-bold text-primary-navy focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Position / Title</label>
                      <input 
                        type="text" 
                        defaultValue="Principal Investigator" 
                        className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm font-bold text-primary-navy focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all" 
                      />
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 mb-8">Shipping Address</h2>
                  <div className="p-6 rounded-3xl border border-slate-100 bg-slate-50/50">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm">
                        <MapPin className="w-5 h-5 text-slate-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-primary-navy mb-1">Stanford University School of Medicine</p>
                        <p className="text-sm text-slate-500">291 Campus Drive, Room L235</p>
                        <p className="text-sm text-slate-500">Stanford, CA 94305</p>
                        <p className="text-sm text-slate-500">United States</p>
                      </div>
                      <button className="text-xs font-black uppercase tracking-widest text-cyan-600 hover:text-primary-navy transition-colors">
                        Edit
                      </button>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 mb-8">Security</h2>
                  <div className="space-y-4">
                    <button className="w-full flex items-center justify-between p-6 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-all group">
                      <div className="flex flex-col items-start">
                        <span className="text-sm font-bold text-primary-navy">Change Password</span>
                        <span className="text-xs text-slate-400">Last changed 4 months ago</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all" />
                    </button>
                    <button className="w-full flex items-center justify-between p-6 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-all group">
                      <div className="flex flex-col items-start">
                        <span className="text-sm font-bold text-primary-navy">Two-Factor Authentication</span>
                        <span className="text-xs text-green-600 font-bold uppercase tracking-tight">Enabled</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all" />
                    </button>
                    <button className="w-full flex items-center justify-between p-6 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-all group">
                      <div className="flex flex-col items-start">
                        <span className="text-sm font-bold text-primary-navy">Active Sessions</span>
                        <span className="text-xs text-slate-400">2 devices currently logged in</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all" />
                    </button>
                  </div>
                </section>

                {/* Save Button */}
                <div className="pt-6 border-t border-slate-100">
                  <button className="inline-flex items-center gap-3 bg-primary-navy text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-[0.15em] hover:bg-secondary-teal transition-all shadow-lg shadow-blue-900/20">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* Orders Section */}
            {activeTab === 'orders' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600">Order History</h2>
                  <button className="text-xs font-bold text-slate-500 hover:text-primary-navy transition-colors">
                    Download All Invoices
                  </button>
                </div>
                
                {orders.map((order) => (
                  <div 
                    key={order.id} 
                    className="p-6 rounded-3xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 group"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-primary-navy transition-colors">
                          <Package className="w-5 h-5 text-primary-navy group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-primary-navy">Order #{order.id}</p>
                          <p className="text-xs text-slate-400">Placed on {order.date}</p>
                        </div>
                      </div>
                      {getStatusBadge(order.status)}
                    </div>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                      <p className="text-xs font-bold text-slate-500">
                        {order.itemCount} Items • <span className="text-primary-navy">${order.total.toFixed(2)}</span>
                      </p>
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary-navy transition-colors">
                          <Download className="w-3 h-3" />
                          Invoice
                        </button>
                        <Link 
                          href={`/orders/${order.id}`} 
                          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-cyan-600 hover:text-primary-navy transition-colors"
                        >
                          View Details
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Pagination / Load More */}
                <div className="text-center pt-6">
                  <button className="text-xs font-bold text-slate-400 hover:text-primary-navy transition-colors">
                    Load more orders...
                  </button>
                </div>
              </div>
            )}

            {/* Lab Affiliation Section */}
            {activeTab === 'lab' && (
              <div className="space-y-12">
                <section>
                  <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 mb-8">Laboratory Affiliation</h2>
                  <div className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                          <FlaskConical className="w-8 h-8 text-cyan-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-primary-navy text-lg">Mitchell Immunology Lab</h3>
                          <p className="text-sm text-slate-500">Department of Molecular Biology</p>
                        </div>
                      </div>
                      <button className="text-xs font-black uppercase tracking-widest text-cyan-600 hover:text-primary-navy transition-colors">
                        Edit
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-slate-200/50">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Institution</p>
                        <p className="text-sm font-medium text-primary-navy">Stanford University</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Lab Website</p>
                        <a href="#" className="text-sm font-medium text-cyan-600 hover:text-primary-navy transition-colors">
                          mitchelllab.stanford.edu
                        </a>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Lab Size</p>
                        <p className="text-sm font-medium text-primary-navy">12 Members</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Research Focus</p>
                        <p className="text-sm font-medium text-primary-navy">Interferon Signaling</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 mb-8">Team Members</h2>
                  <p className="text-sm text-slate-500 mb-6">
                    Add team members to allow shared ordering and account management.
                  </p>
                  <div className="space-y-3">
                    {[
                      { name: 'Dr. James Liu', role: 'Postdoctoral Fellow', email: 'j.liu@stanford.edu' },
                      { name: 'Emily Rodriguez', role: 'Graduate Student', email: 'e.rodriguez@stanford.edu' },
                    ].map((member, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-all">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                            <User className="w-5 h-5 text-slate-500" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-primary-navy">{member.name}</p>
                            <p className="text-xs text-slate-400">{member.role} • {member.email}</p>
                          </div>
                        </div>
                        <button className="text-xs font-bold text-slate-400 hover:text-red-500 transition-colors">
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-cyan-600 hover:text-primary-navy transition-colors">
                    + Add Team Member
                  </button>
                </section>
              </div>
            )}

            {/* Saved Products Section */}
            {activeTab === 'saved' && (
              <div className="space-y-6">
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 mb-8">Saved Products</h2>
                
                {savedProducts.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-4 bg-slate-50 rounded-2xl flex items-center justify-center">
                      <Star className="w-8 h-8 text-slate-300" />
                    </div>
                    <p className="text-slate-500 font-medium">No saved products yet</p>
                    <p className="text-sm text-slate-400 mt-1">Products you save will appear here</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {savedProducts.map((product) => (
                      <div 
                        key={product.id} 
                        className="flex items-center gap-5 p-6 rounded-3xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 group"
                      >
                        <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-amber-50 transition-colors">
                          <Star className="w-6 h-6 text-slate-300 group-hover:text-amber-500 transition-colors" fill="currentColor" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1">
                            {product.category} <span className="text-cyan-600">• CAT #{product.catalogId}</span>
                          </p>
                          <p className="text-base font-bold text-primary-navy group-hover:text-secondary-teal transition-colors">
                            {product.name}
                          </p>
                        </div>
                        <p className="text-xl font-black text-primary-navy">${product.price.toFixed(2)}</p>
                        <div className="flex items-center gap-3">
                          <Link 
                            href="/cart"
                            className="inline-flex items-center gap-2 bg-primary-navy text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-secondary-teal transition-all"
                          >
                            Add to Cart
                          </Link>
                          <button className="p-2.5 rounded-xl text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all">
                            <Star className="w-4 h-4" fill="currentColor" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Billing Section */}
            {activeTab === 'billing' && (
              <div className="space-y-12">
                <section>
                  <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 mb-8">Payment Methods</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-6 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-all group">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                          <span className="text-white text-[10px] font-bold">VISA</span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-primary-navy">•••• •••• •••• 4242</p>
                          <p className="text-xs text-slate-400">Expires 08/2027</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-green-50 text-[10px] font-bold text-green-600 uppercase tracking-tight">Default</span>
                        <button className="text-xs font-bold text-slate-400 hover:text-primary-navy transition-colors">Edit</button>
                      </div>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 p-6 rounded-2xl border-2 border-dashed border-slate-200 text-slate-400 hover:border-cyan-500 hover:text-cyan-600 transition-all">
                      <CreditCard className="w-4 h-4" />
                      <span className="text-xs font-black uppercase tracking-widest">Add Payment Method</span>
                    </button>
                  </div>
                </section>

                <section>
                  <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 mb-8">Billing Address</h2>
                  <div className="p-6 rounded-3xl border border-slate-100 bg-slate-50/50">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-bold text-primary-navy mb-1">Stanford University</p>
                        <p className="text-sm text-slate-500">Accounts Payable</p>
                        <p className="text-sm text-slate-500">450 Serra Mall</p>
                        <p className="text-sm text-slate-500">Stanford, CA 94305</p>
                      </div>
                      <button className="text-xs font-black uppercase tracking-widest text-cyan-600 hover:text-primary-navy transition-colors">
                        Edit
                      </button>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 mb-8">Purchase Orders</h2>
                  <div className="p-6 rounded-3xl border border-slate-100 bg-slate-50/50">
                    <div className="flex items-center gap-4 mb-4">
                      <FileText className="w-5 h-5 text-slate-400" />
                      <p className="text-sm font-bold text-primary-navy">PO-Based Purchasing Enabled</p>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Your institution is set up for purchase order billing. You can enter a PO number during checkout 
                      and we&apos;ll invoice your department directly.
                    </p>
                  </div>
                </section>
              </div>
            )}

            {/* Notifications Section */}
            {activeTab === 'notifications' && (
              <div className="space-y-12">
                <section>
                  <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 mb-8">Email Preferences</h2>
                  <div className="space-y-4">
                    {[
                      { title: 'Order Updates', description: 'Shipping confirmations and delivery notifications', enabled: true },
                      { title: 'Product Announcements', description: 'New products, updated formulations, and discontinued items', enabled: true },
                      { title: 'Research Publications', description: 'Papers and studies featuring PBL reagents', enabled: false },
                      { title: 'Promotional Offers', description: 'Special discounts and promotional pricing', enabled: false },
                      { title: 'Technical Bulletins', description: 'Protocol updates and application notes', enabled: true },
                    ].map((pref, idx) => (
                      <div key={idx} className="flex items-center justify-between p-5 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-all">
                        <div>
                          <p className="text-sm font-bold text-primary-navy">{pref.title}</p>
                          <p className="text-xs text-slate-400">{pref.description}</p>
                        </div>
                        <button 
                          className={`relative w-12 h-7 rounded-full transition-all ${
                            pref.enabled ? 'bg-cyan-500' : 'bg-slate-200'
                          }`}
                        >
                          <span 
                            className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm transition-all ${
                              pref.enabled ? 'left-6' : 'left-1'
                            }`} 
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 mb-8">Communication Frequency</h2>
                  <div className="p-6 rounded-3xl border border-slate-100">
                    <div className="space-y-3">
                      {['Immediate', 'Daily Digest', 'Weekly Summary'].map((freq, idx) => (
                        <label key={idx} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 cursor-pointer transition-all">
                          <input 
                            type="radio" 
                            name="frequency" 
                            defaultChecked={idx === 0}
                            className="w-4 h-4 text-cyan-600 focus:ring-cyan-500 border-slate-300"
                          />
                          <span className="text-sm font-medium text-primary-navy">{freq}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            )}

          </main>
        </div>
      </div>
    </div>
  );
}
