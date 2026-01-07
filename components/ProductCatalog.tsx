'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Download, Mail } from 'lucide-react';

export interface CatalogProduct {
  catalogNo: string;
  description: string;
  packSize: string;
  documents: Array<{
    label: string;
    url?: string;
  }>;
  price: string;
}

interface ProductCatalogProps {
  title?: string;
  products: CatalogProduct[];
}

export default function ProductCatalog({ title, products }: ProductCatalogProps) {
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const handleQuantityChange = (catalogNo: string, value: number) => {
    setQuantities((prev) => ({
      ...prev,
      [catalogNo]: Math.max(0, value),
    }));
  };

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="section-padding bg-gradient-to-br from-background-lavender/25 via-white to-background-periwinkle/25">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold gradient-headline-primary mb-8">
            {title}
          </h2>
        )}

        {/* Desktop Table */}
        <div className="hidden md:block">
          <div className="overflow-x-auto pb-6 pt-2 px-4 -mx-4">
            <div className="inline-block min-w-full align-middle">
              <div className="rounded-2xl border border-gray-200/60 bg-white shadow-[0_12px_21px_-8px_rgba(0,0,0,0.2)] backdrop-blur-sm">
                <div className="overflow-hidden rounded-2xl">
                  <table className="min-w-full border-collapse">
                {/* Header */}
                <thead>
                  <tr className="bg-gradient-to-r from-secondary-teal/14 via-secondary-teal/18 to-accent-cyan/16 border-b border-secondary-teal/30">
                    <th className="px-6 py-4 text-left text-[11px] font-bold text-primary-navy uppercase tracking-[0.08em] border-r border-gray-200/50 whitespace-nowrap">
                      Catalog No.
                    </th>
                    <th className="px-6 py-4 text-left text-[11px] font-bold text-primary-navy uppercase tracking-[0.08em] border-r border-gray-200/50 whitespace-nowrap">
                      Description
                    </th>
                    <th className="px-6 py-4 text-left text-[11px] font-bold text-primary-navy uppercase tracking-[0.08em] border-r border-gray-200/50 whitespace-nowrap">
                      Pack size
                    </th>
                    <th className="px-6 py-4 text-left text-[11px] font-bold text-primary-navy uppercase tracking-[0.08em] border-r border-gray-200/50 whitespace-nowrap">
                      Documents
                    </th>
                    <th className="px-6 py-4 text-right text-[11px] font-bold text-primary-navy uppercase tracking-[0.08em] border-r border-gray-200/50 whitespace-nowrap">
                      Price
                    </th>
                    <th className="px-6 py-4 text-center text-[11px] font-bold text-primary-navy uppercase tracking-[0.08em] w-28 whitespace-nowrap">
                      Quantity
                    </th>
                  </tr>
                </thead>

                {/* Body */}
                <tbody className="bg-white divide-y divide-gray-100/80">
                  {products.map((product, index) => (
                    <tr
                      key={product.catalogNo}
                      className="hover:bg-gradient-to-r hover:from-secondary-teal/4 hover:via-background-lavender/4 hover:to-accent-cyan/4 transition-all duration-200 group border-b border-gray-100/60"
                    >
                      {/* Catalog No. */}
                      <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200/40">
                        <span className="text-sm font-bold text-primary-navy font-mono tracking-wider bg-gradient-to-br from-primary-navy/8 to-secondary-teal/8 px-2.5 py-1 rounded-lg inline-block border border-primary-navy/10">
                          {product.catalogNo}
                        </span>
                      </td>

                      {/* Description */}
                      <td className="px-6 py-4 border-r border-gray-200/40">
                        <span className="text-sm text-gray-800 leading-relaxed font-medium">
                          {product.description}
                        </span>
                      </td>

                      {/* Pack size */}
                      <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200/40">
                        <span className="text-sm text-gray-700 font-semibold">
                          {product.packSize}
                        </span>
                      </td>

                      {/* Documents */}
                      <td className="px-6 py-4 border-r border-gray-200/40">
                        <div className="flex flex-col gap-1.5 max-w-xs">
                          {product.documents.map((doc, docIndex) => (
                            <a
                              key={docIndex}
                              href={doc.url || '#'}
                              target={doc.url ? '_blank' : undefined}
                              rel={doc.url ? 'noopener noreferrer' : undefined}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-semibold text-secondary-teal bg-gradient-to-r from-secondary-teal/8 to-accent-cyan/8 hover:from-secondary-teal/15 hover:to-accent-cyan/15 border border-secondary-teal/25 hover:border-secondary-teal/45 rounded-md transition-all duration-200 w-fit shadow-sm hover:shadow hover:-translate-y-0.5 hover:scale-[1.02] backdrop-blur-sm"
                            >
                              <Download className="h-3 w-3" />
                              {doc.label}
                            </a>
                          ))}
                        </div>
                      </td>

                      {/* Price */}
                      <td className="px-6 py-4 whitespace-nowrap text-right border-r border-gray-200/40">
                        <span className="text-base font-bold bg-gradient-to-r from-primary-navy via-primary-navy to-secondary-teal bg-clip-text text-transparent">
                          {product.price}
                        </span>
                      </td>

                      {/* Quantity */}
                      <td className="px-6 py-4">
                        <input
                          type="number"
                          min="0"
                          value={quantities[product.catalogNo] || 0}
                          onChange={(e) =>
                            handleQuantityChange(
                              product.catalogNo,
                              parseInt(e.target.value) || 0
                            )
                          }
                          className="w-full px-3 py-2 text-sm text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-teal/30 focus:border-secondary-teal transition-all bg-white hover:border-secondary-teal/40 shadow-sm hover:shadow focus:shadow-md"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {products.map((product) => (
            <div
              key={product.catalogNo}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-lg"
            >
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold text-secondary-teal mb-1 uppercase tracking-wider">
                    Catalog No.
                  </div>
                  <div className="text-base font-semibold text-primary-navy font-mono whitespace-nowrap">
                    {product.catalogNo}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-secondary-teal mb-1">
                    Description
                  </div>
                  <div className="text-sm text-gray-700 leading-relaxed">
                    {product.description}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-secondary-teal mb-1">
                      Pack size
                    </div>
                    <div className="text-sm text-gray-700">{product.packSize}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-semibold text-secondary-teal mb-1">
                      Price
                    </div>
                    <div className="text-base font-semibold text-primary-navy">
                      {product.price}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-secondary-teal mb-2">
                    Documents
                  </div>
                  <div className="flex flex-col gap-2">
                    {product.documents.map((doc, docIndex) => (
                      <a
                        key={docIndex}
                        href={doc.url || '#'}
                        target={doc.url ? '_blank' : undefined}
                        rel={doc.url ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-secondary-teal bg-gradient-to-r from-secondary-teal/5 to-accent-cyan/5 hover:from-secondary-teal/10 hover:to-accent-cyan/10 border border-secondary-teal/20 hover:border-secondary-teal/40 rounded-lg transition-all duration-200 w-fit shadow-sm hover:shadow-md"
                      >
                        <Download className="h-3 w-3" />
                        {doc.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-secondary-teal mb-2">
                    Quantity
                  </div>
                  <input
                    type="number"
                    min="0"
                    value={quantities[product.catalogNo] || 0}
                    onChange={(e) =>
                      handleQuantityChange(
                        product.catalogNo,
                        parseInt(e.target.value) || 0
                      )
                    }
                    className="w-full px-3 py-2 text-sm text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-teal/30 focus:border-secondary-teal transition-all bg-white hover:border-secondary-teal/40"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <div className="mt-8 flex justify-end">
          <Link
            href="/speak-to-a-scientist"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Mail className="h-4 w-4" />
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}

