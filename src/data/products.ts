/**
 * Product data — swap these out for Shopify Storefront API calls
 * when integrating. Each product maps 1:1 to a Shopify Product node.
 *
 * Shopify Storefront API fields to replace:
 *   id         → product.id
 *   title      → product.title
 *   price      → product.priceRange.minVariantPrice.amount + currencyCode
 *   material   → product.metafield(namespace:"custom", key:"material")
 *   finish     → product.metafield(namespace:"custom", key:"finish")
 *   handle     → product.handle  (used for /products/:handle URLs)
 *   image      → product.featuredImage.url  (replaces the SVG placeholder)
 */

// ─── SVG shape types ────────────────────────────────────────────────────────

type SvgEllipse = {
  type: 'ellipse'
  cx: number
  cy: number
  rx: number
  ry: number
  fill: string
}

type SvgPath = {
  type: 'path'
  d: string
  fill: string
}

type SvgPathStroke = {
  type: 'path-stroke'
  d: string
  stroke: string
  strokeWidth: number
  fill: string
}

export type SvgShape = SvgEllipse | SvgPath | SvgPathStroke

// ─── Product type ────────────────────────────────────────────────────────────

export type Product = {
  id: string
  title: string
  /** Formatted price string — replace with Money scalar from Shopify */
  price: string
  material: string
  finish: string
  /** Shopify product handle — used to build /products/:handle URLs */
  handle: string
  svgViewBox: string
  svgPaths: SvgShape[]
}

// ─── Data ────────────────────────────────────────────────────────────────────

export const products: Product[] = [
  {
    id: 'wasabi-sabi',
    title: 'Wasabi Sabi',
    price: '1 SAR',
    material: 'Stoneware',
    finish: 'Ash Glaze',
    handle: 'wasabi-sabi',
    svgViewBox: '0 0 120 160',
    svgPaths: [
      { type: 'ellipse', cx: 60, cy: 148, rx: 38, ry: 8, fill: 'var(--accent)' },
      { type: 'path', d: 'M30 50 C30 30, 90 30, 90 50 L85 140 C85 148, 35 148, 35 140 Z', fill: 'var(--accent)' },
      { type: 'ellipse', cx: 60, cy: 50, rx: 30, ry: 10, fill: 'var(--text-secondary)' },
    ],
  },
  {
    id: 'bomboclat',
    title: 'Bomboclat',
    price: '1 SAR',
    material: 'Porcelain',
    finish: 'Celadon',
    handle: 'bomboclat',
    svgViewBox: '0 0 160 80',
    svgPaths: [
      { type: 'ellipse', cx: 80, cy: 68, rx: 60, ry: 8, fill: 'var(--accent)' },
      { type: 'path', d: 'M20 40 C20 20, 140 20, 140 40 L130 65 C130 72, 30 72, 30 65 Z', fill: 'var(--accent)' },
      { type: 'ellipse', cx: 80, cy: 40, rx: 60, ry: 14, fill: 'var(--text-secondary)' },
    ],
  },
  {
    id: 'tall-guy',
    title: 'Tall Guy',
    price: '1 SAR',
    material: 'Stoneware',
    finish: 'Iron Oxide',
    handle: 'tall-guy',
    svgViewBox: '0 0 100 180',
    svgPaths: [
      { type: 'ellipse', cx: 50, cy: 168, rx: 28, ry: 6, fill: 'var(--accent)' },
      { type: 'path', d: 'M25 40 C25 20, 75 20, 75 40 L72 160 C72 168, 28 168, 28 160 Z', fill: 'var(--accent)' },
      { type: 'ellipse', cx: 50, cy: 40, rx: 25, ry: 8, fill: 'var(--text-secondary)' },
    ],
  },
  {
    id: 'halal-gummy-bear',
    title: 'Halal Gummy Bear',
    price: '1 SAR',
    material: 'Porcelain',
    finish: 'Matte White',
    handle: 'halal-gummy-bear',
    svgViewBox: '0 0 140 100',
    svgPaths: [
      { type: 'ellipse', cx: 70, cy: 88, rx: 50, ry: 8, fill: 'var(--accent)' },
      { type: 'path', d: 'M25 55 C20 30, 120 30, 115 55 L110 82 C108 90, 32 90, 30 82 Z', fill: 'var(--accent)' },
      { type: 'ellipse', cx: 70, cy: 52, rx: 48, ry: 16, fill: 'var(--text-secondary)' },
    ],
  },
  {
    id: 'coke-zero',
    title: 'Coke Zero',
    price: '1 SAR',
    material: 'Stoneware',
    finish: 'Oatmeal',
    handle: 'coke-zero',
    svgViewBox: '0 0 120 140',
    svgPaths: [
      { type: 'ellipse', cx: 60, cy: 128, rx: 32, ry: 7, fill: 'var(--accent)' },
      { type: 'path', d: 'M32 60 C32 35, 88 35, 88 60 L84 122 C84 130, 36 130, 36 122 Z', fill: 'var(--accent)' },
      { type: 'ellipse', cx: 60, cy: 58, rx: 28, ry: 10, fill: 'var(--text-secondary)' },
      { type: 'path-stroke', d: 'M88 70 Q108 65, 105 80 Q102 95, 88 90', stroke: 'var(--accent)', strokeWidth: 4, fill: 'none' },
    ],
  },
  {
    id: 'flat-plate',
    title: 'Flat Plate',
    price: '1 SAR',
    material: 'Porcelain',
    finish: 'Raw Clay',
    handle: 'flat-plate',
    svgViewBox: '0 0 160 60',
    svgPaths: [
      { type: 'ellipse', cx: 80, cy: 50, rx: 65, ry: 7, fill: 'var(--accent)' },
      { type: 'path', d: 'M18 35 C18 25, 142 25, 142 35 L138 46 C136 52, 24 52, 22 46 Z', fill: 'var(--accent)' },
      { type: 'ellipse', cx: 80, cy: 34, rx: 62, ry: 10, fill: 'var(--text-secondary)' },
    ],
  },
]
