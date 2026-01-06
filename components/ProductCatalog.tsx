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
    <section className="section-padding bg-background-offwhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8">
            {title}
          </h2>
        )}

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
              <table className="min-w-full border-collapse">
                {/* Header */}
                <thead>
                  <tr className="bg-secondary-teal/10 border-b border-secondary-teal/20">
                    <th className="px-4 py-4 text-left text-sm font-semibold text-primary-navy border-r border-gray-200/60">
                      Catalog No.
                    </th>
                    <th className="px-4 py-4 text-left text-sm font-semibold text-primary-navy border-r border-gray-200/60">
                      Description
                    </th>
                    <th className="px-4 py-4 text-left text-sm font-semibold text-primary-navy border-r border-gray-200/60">
                      Pack size
                    </th>
                    <th className="px-4 py-4 text-left text-sm font-semibold text-primary-navy border-r border-gray-200/60">
                      Documents
                    </th>
                    <th className="px-4 py-4 text-right text-sm font-semibold text-primary-navy border-r border-gray-200/60">
                      Price
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-primary-navy w-24">
                      Quantity
                    </th>
                  </tr>
                </thead>

                {/* Body */}
                <tbody className="bg-white divide-y divide-gray-200/60">
                  {products.map((product, index) => (
                    <tr
                      key={product.catalogNo}
                      className="hover:bg-background-offwhite/50 transition-colors"
                    >
                      {/* Catalog No. */}
                      <td className="px-4 py-4 whitespace-nowrap border-r border-gray-200/60">
                        <span className="text-sm font-medium text-primary-navy">
                          {product.catalogNo}
                        </span>
                      </td>

                      {/* Description */}
                      <td className="px-4 py-4 border-r border-gray-200/60">
                        <span className="text-sm text-gray-700 leading-relaxed">
                          {product.description}
                        </span>
                      </td>

                      {/* Pack size */}
                      <td className="px-4 py-4 whitespace-nowrap border-r border-gray-200/60">
                        <span className="text-sm text-gray-700">
                          {product.packSize}
                        </span>
                      </td>

                      {/* Documents */}
                      <td className="px-4 py-4 border-r border-gray-200/60">
                        <div className="flex flex-col gap-2 max-w-xs">
                          {product.documents.map((doc, docIndex) => (
                            <a
                              key={docIndex}
                              href={doc.url || '#'}
                              target={doc.url ? '_blank' : undefined}
                              rel={doc.url ? 'noopener noreferrer' : undefined}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-secondary-teal bg-secondary-teal/5 hover:bg-secondary-teal/10 border border-secondary-teal/20 hover:border-secondary-teal/40 rounded-md transition-all duration-200 w-fit"
                            >
                              <Download className="h-3 w-3" />
                              {doc.label}
                            </a>
                          ))}
                        </div>
                      </td>

                      {/* Price */}
                      <td className="px-4 py-4 whitespace-nowrap text-right border-r border-gray-200/60">
                        <span className="text-sm font-semibold text-primary-navy">
                          {product.price}
                        </span>
                      </td>

                      {/* Quantity */}
                      <td className="px-4 py-4">
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
                          className="w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-teal/20 focus:border-secondary-teal transition-all"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {products.map((product) => (
            <div
              key={product.catalogNo}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
            >
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold text-secondary-teal mb-1">
                    Catalog No.
                  </div>
                  <div className="text-base font-medium text-primary-navy">
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
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-secondary-teal bg-secondary-teal/5 hover:bg-secondary-teal/10 border border-secondary-teal/20 hover:border-secondary-teal/40 rounded-md transition-all duration-200 w-fit"
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
                    className="w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-teal/20 focus:border-secondary-teal transition-all"
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary-teal hover:bg-secondary-teal/90 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Mail className="h-4 w-4" />
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}

