'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Mail, 
  MailOpen,
  Send,
  Archive,
  Trash2,
  Star,
  StarOff,
  Search,
  Filter,
  ChevronRight,
  Clock,
  Paperclip,
  ArrowLeft,
  Reply,
  MoreHorizontal,
  User,
  CheckCircle2,
  AlertCircle,
  FileText,
  Package
} from 'lucide-react';

// Type definitions
interface Message {
  id: number;
  from: string;
  fromRole: string;
  subject: string;
  preview: string;
  fullMessage: string;
  timestamp: string;
  date: string;
  read: boolean;
  starred: boolean;
  hasAttachment: boolean;
  category: 'order' | 'quote' | 'support' | 'general';
  orderId?: string;
}

// Mock messages data
const initialMessages: Message[] = [
  {
    id: 1,
    from: 'Dr. Sarah Chen',
    fromRole: 'Technical Support Scientist',
    subject: 'Re: Human IFN Alpha A Protocol Clarification',
    preview: 'Thank you for reaching out. For the reconstitution of Human IFN Alpha A (Cat #11100-1), we recommend using sterile PBS at a concentration of...',
    fullMessage: `Dear Researcher,

Thank you for reaching out regarding the reconstitution protocol for Human IFN Alpha A (Cat #11100-1).

For optimal results, we recommend:

1. Reconstitute in sterile PBS at a concentration of 0.1-1.0 mg/mL
2. Add 0.1% BSA as a carrier protein to prevent adsorption
3. Aliquot and store at -70°C to avoid repeated freeze-thaw cycles

The reconstituted protein is stable for up to 3 months at -70°C. Avoid storage at -20°C for extended periods.

Please don't hesitate to reach out if you have any additional questions.

Best regards,
Dr. Sarah Chen
Technical Support Scientist
PBL Assay Science`,
    timestamp: '2 hours ago',
    date: 'Jan 12, 2026',
    read: false,
    starred: true,
    hasAttachment: true,
    category: 'support'
  },
  {
    id: 2,
    from: 'PBL Orders',
    fromRole: 'Order Confirmation',
    subject: 'Order #PBL-2026-0412 Shipped - Tracking Available',
    preview: 'Your order has been shipped via cold chain logistics. Expected delivery: January 15, 2026. Track your shipment...',
    fullMessage: `Order Confirmation

Your order #PBL-2026-0412 has been shipped!

Order Details:
- Human IFN Alpha ELISA Kit (Cat #41100-1) × 2
- Anti-Human IFN Alpha Antibody (Cat #21100-2) × 1

Shipping Method: Cold Chain Express
Estimated Delivery: January 15, 2026

Your tracking number: 1Z999AA10123456784

The package contains temperature-sensitive materials and is being shipped on dry ice. Please ensure someone is available to receive the delivery and transfer contents to appropriate storage immediately.

Thank you for choosing PBL Assay Science.`,
    timestamp: 'Yesterday',
    date: 'Jan 11, 2026',
    read: false,
    starred: false,
    hasAttachment: false,
    category: 'order',
    orderId: 'PBL-2026-0412'
  },
  {
    id: 3,
    from: 'Michael Torres',
    fromRole: 'Account Manager',
    subject: 'Your Quote Request #Q-2026-0089 is Ready',
    preview: 'We\'ve prepared your custom quote for the bulk order of interferon proteins. The quote includes volume discounts and...',
    fullMessage: `Dear Valued Customer,

Your quote request #Q-2026-0089 has been processed and is ready for your review.

Quote Summary:
- Human IFN Alpha A (10 × 100µg) - $3,850.00
- Human IFN Beta (5 × 100µg) - $2,175.00
- Volume Discount (10%) - -$602.50

Total: $5,422.50

This quote is valid for 30 days. To proceed, simply reply to this message or click the link below to convert to an order.

Best regards,
Michael Torres
Account Manager
PBL Assay Science`,
    timestamp: '3 days ago',
    date: 'Jan 9, 2026',
    read: true,
    starred: true,
    hasAttachment: true,
    category: 'quote'
  },
  {
    id: 4,
    from: 'PBL Science Updates',
    fromRole: 'Newsletter',
    subject: 'New Product Alert: Enhanced Sensitivity ELISA Kits',
    preview: 'Introducing our next-generation ELISA kits with 3x improved sensitivity for low-abundance biomarker detection...',
    fullMessage: `Dear Researcher,

We're excited to announce the launch of our Enhanced Sensitivity ELISA Kit line!

Key Features:
- 3x improved sensitivity vs. standard kits
- Optimized for low-abundance biomarkers
- Same trusted protocol, better results

Available for:
- Human IFN Alpha
- Human IFN Beta  
- Human IFN Gamma
- IL-1β, IL-6, TNF-α

Use code ENHANCED20 for 20% off your first order.

Learn more at pblassayscience.com/enhanced-elisa

Best,
The PBL Science Team`,
    timestamp: '1 week ago',
    date: 'Jan 5, 2026',
    read: true,
    starred: false,
    hasAttachment: false,
    category: 'general'
  }
];

type FilterType = 'all' | 'unread' | 'starred' | 'orders' | 'quotes';

export default function Messages() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  // Get filtered messages
  const filteredMessages = messages.filter(msg => {
    const matchesSearch = msg.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         msg.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         msg.preview.toLowerCase().includes(searchQuery.toLowerCase());
    
    switch (activeFilter) {
      case 'unread':
        return matchesSearch && !msg.read;
      case 'starred':
        return matchesSearch && msg.starred;
      case 'orders':
        return matchesSearch && msg.category === 'order';
      case 'quotes':
        return matchesSearch && msg.category === 'quote';
      default:
        return matchesSearch;
    }
  });

  // Toggle star
  const toggleStar = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setMessages(msgs => msgs.map(m => 
      m.id === id ? { ...m, starred: !m.starred } : m
    ));
    if (selectedMessage?.id === id) {
      setSelectedMessage(prev => prev ? { ...prev, starred: !prev.starred } : null);
    }
  };

  // Mark as read
  const markAsRead = (id: number) => {
    setMessages(msgs => msgs.map(m => 
      m.id === id ? { ...m, read: true } : m
    ));
  };

  // Open message
  const openMessage = (msg: Message) => {
    setSelectedMessage(msg);
    markAsRead(msg.id);
  };

  // Get category badge
  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'order':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-50 text-[9px] font-bold text-green-600 border border-green-100">
            <Package className="w-2.5 h-2.5" />
            ORDER
          </span>
        );
      case 'quote':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-50 text-[9px] font-bold text-purple-600 border border-purple-100">
            <FileText className="w-2.5 h-2.5" />
            QUOTE
          </span>
        );
      case 'support':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-50 text-[9px] font-bold text-cyan-600 border border-cyan-100">
            <AlertCircle className="w-2.5 h-2.5" />
            SUPPORT
          </span>
        );
      default:
        return null;
    }
  };

  // Unread count
  const unreadCount = messages.filter(m => !m.read).length;

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 mb-3">Communication Center</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-navy tracking-tight">Messages</h1>
              <p className="text-slate-500 mt-2">
                {unreadCount > 0 ? `${unreadCount} unread message${unreadCount > 1 ? 's' : ''}` : 'All caught up!'}
              </p>
            </div>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-primary-navy text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-[0.1em] hover:bg-secondary-teal transition-all shadow-lg shadow-blue-900/20 group"
            >
              <Send className="w-4 h-4" />
              New Message
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* LEFT SIDEBAR: Filters */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-32 space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                />
              </div>

              {/* Filter Buttons */}
              <div className="space-y-1">
                {[
                  { key: 'all', label: 'All Messages', icon: Mail, count: messages.length },
                  { key: 'unread', label: 'Unread', icon: MailOpen, count: unreadCount },
                  { key: 'starred', label: 'Starred', icon: Star, count: messages.filter(m => m.starred).length },
                  { key: 'orders', label: 'Order Updates', icon: Package, count: messages.filter(m => m.category === 'order').length },
                  { key: 'quotes', label: 'Quotes', icon: FileText, count: messages.filter(m => m.category === 'quote').length },
                ].map(filter => (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key as FilterType)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      activeFilter === filter.key
                        ? 'bg-primary-navy text-white shadow-lg shadow-blue-900/20'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <filter.icon className="w-4 h-4" />
                      {filter.label}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      activeFilter === filter.key
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      {filter.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-3 px-4">Quick Actions</p>
                <div className="space-y-1">
                  <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-slate-500 hover:bg-slate-50 transition-all">
                    <Archive className="w-4 h-4" />
                    Archive All Read
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-slate-500 hover:bg-slate-50 transition-all">
                    <CheckCircle2 className="w-4 h-4" />
                    Mark All as Read
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT: Message List or Detail */}
          <div className="lg:col-span-9">
            {selectedMessage ? (
              /* Message Detail View */
              <div className="rounded-3xl border border-slate-100 bg-white overflow-hidden">
                {/* Detail Header */}
                <div className="p-6 border-b border-slate-100">
                  <button
                    onClick={() => setSelectedMessage(null)}
                    className="flex items-center gap-2 text-sm text-slate-500 hover:text-primary-navy transition-colors mb-4 group"
                  >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Back to messages
                  </button>
                  
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        {getCategoryBadge(selectedMessage.category)}
                        <span className="text-[10px] text-slate-400 font-medium">{selectedMessage.date}</span>
                      </div>
                      <h2 className="text-xl lg:text-2xl font-bold text-primary-navy leading-tight mb-3">
                        {selectedMessage.subject}
                      </h2>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-navy to-secondary-teal flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-primary-navy">{selectedMessage.from}</p>
                          <p className="text-xs text-slate-500">{selectedMessage.fromRole}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => toggleStar(selectedMessage.id, e)}
                        className={`p-2 rounded-lg transition-all ${
                          selectedMessage.starred 
                            ? 'text-amber-500 bg-amber-50' 
                            : 'text-slate-300 hover:text-amber-500 hover:bg-amber-50'
                        }`}
                      >
                        <Star className="w-5 h-5" fill={selectedMessage.starred ? 'currentColor' : 'none'} />
                      </button>
                      <button className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-all">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Message Body */}
                <div className="p-6 lg:p-8">
                  <div className="prose prose-slate max-w-none">
                    <pre className="whitespace-pre-wrap font-sans text-sm text-slate-600 leading-relaxed bg-transparent p-0 m-0 overflow-visible">
                      {selectedMessage.fullMessage}
                    </pre>
                  </div>

                  {/* Attachments */}
                  {selectedMessage.hasAttachment && (
                    <div className="mt-8 pt-6 border-t border-slate-100">
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-3">Attachments</p>
                      <div className="flex flex-wrap gap-3">
                        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-cyan-200 hover:bg-cyan-50/30 transition-all cursor-pointer group">
                          <FileText className="w-5 h-5 text-slate-400 group-hover:text-cyan-600" />
                          <div>
                            <p className="text-xs font-bold text-slate-600">Protocol_IFN-Alpha.pdf</p>
                            <p className="text-[10px] text-slate-400">245 KB</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Footer */}
                <div className="p-6 border-t border-slate-100 bg-slate-50/50">
                  <div className="flex flex-wrap gap-3">
                    <button className="inline-flex items-center gap-2 bg-primary-navy text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-[0.1em] hover:bg-secondary-teal transition-all shadow-lg shadow-blue-900/20">
                      <Reply className="w-4 h-4" />
                      Reply
                    </button>
                    <button className="inline-flex items-center gap-2 bg-white text-slate-600 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-[0.1em] border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all">
                      <Archive className="w-4 h-4" />
                      Archive
                    </button>
                    <button className="inline-flex items-center gap-2 bg-white text-slate-400 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-[0.1em] border border-slate-200 hover:border-red-200 hover:text-red-500 hover:bg-red-50 transition-all">
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Message List View */
              <div className="rounded-3xl border border-slate-100 bg-white overflow-hidden">
                {filteredMessages.length === 0 ? (
                  <div className="p-12 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-slate-50 rounded-2xl flex items-center justify-center">
                      <Mail className="w-8 h-8 text-slate-300" />
                    </div>
                    <p className="text-slate-500 font-medium">No messages found</p>
                    <p className="text-sm text-slate-400 mt-1">Try adjusting your search or filter</p>
                  </div>
                ) : (
                  <div className="divide-y divide-slate-100">
                    {filteredMessages.map((message) => (
                      <div
                        key={message.id}
                        onClick={() => openMessage(message)}
                        className={`flex items-start gap-4 p-5 lg:p-6 cursor-pointer transition-all hover:bg-slate-50/80 group ${
                          !message.read ? 'bg-cyan-50/30' : ''
                        }`}
                      >
                        {/* Unread Indicator */}
                        <div className="flex-shrink-0 pt-1">
                          {!message.read ? (
                            <div className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                          ) : (
                            <div className="w-2.5 h-2.5 rounded-full bg-transparent" />
                          )}
                        </div>

                        {/* Avatar */}
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center group-hover:from-primary-navy group-hover:to-secondary-teal transition-all">
                            <User className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-sm ${!message.read ? 'font-bold text-primary-navy' : 'font-medium text-slate-700'}`}>
                              {message.from}
                            </span>
                            {getCategoryBadge(message.category)}
                            {message.hasAttachment && (
                              <Paperclip className="w-3 h-3 text-slate-400" />
                            )}
                          </div>
                          <p className={`text-sm mb-1 truncate ${!message.read ? 'font-semibold text-primary-navy' : 'text-slate-600'}`}>
                            {message.subject}
                          </p>
                          <p className="text-xs text-slate-400 line-clamp-1">
                            {message.preview}
                          </p>
                        </div>

                        {/* Right Side */}
                        <div className="flex-shrink-0 flex flex-col items-end gap-2">
                          <span className="text-[10px] font-medium text-slate-400 whitespace-nowrap">
                            {message.timestamp}
                          </span>
                          <button
                            onClick={(e) => toggleStar(message.id, e)}
                            className={`p-1 rounded transition-all ${
                              message.starred 
                                ? 'text-amber-500' 
                                : 'text-slate-200 hover:text-amber-500 opacity-0 group-hover:opacity-100'
                            }`}
                          >
                            <Star className="w-4 h-4" fill={message.starred ? 'currentColor' : 'none'} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
